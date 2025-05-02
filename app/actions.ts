//server actions that is in the separate files we should put "use server" at the top of page
"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { prisma } from "./utils/db"
import { redirect } from "next/navigation";

export async function handleSubmission(formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect('/api/auth/register');
    }

    const title = formData.get('title') as string | null;
    const content = formData.get('content') as string | null;
    const url = formData.get('url') as string | null;

    if (!title || !content || !url) {
        throw new Error('All fields are required');
    }

    await prisma.blogPost.create({
        data: {
            title: title!,
            Content: content!,
            imageUrl: url!,
            authorId: user.id,
            authorImage: user.picture!,
            authorName: user.given_name!,
        }
    });
    redirect('/dashboard')
}