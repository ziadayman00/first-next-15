import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Link from "next/link";
import { prisma } from "../utils/db";
import BlogPostCard from "@/components/BlogPostCard";

async function getData(userId: string){
    const data = await prisma.blogPost.findMany({
        where: {
            authorId: userId
        },
        orderBy:{
            createdAt: "desc"
        },
    })
    return data;
}

export default async function DashboardRoute(){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    const data = await getData(user.id);

    return (
        <div className="flex flex-col justify-center pt-1.5">
            <div>hi <span className="font-bold text-center">{user?.given_name}</span> from dashboard</div>
            <div className="flex justify-between items-center my-2">
                <h1 className="text-3xl font-medium">Your Blog Articals</h1>
                <Link href="/dashboard/create" className={buttonVariants()}>Create Post</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item)=>(
                    <BlogPostCard data={item} key={item.id}/>
                ))}
            </div>
        </div>
    )

}