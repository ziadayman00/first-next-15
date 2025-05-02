import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
  return (
    <div className="py-6 flex justify-between items-center">
      <div>
        <h1 className="text-5xl font-bold">First Next</h1>
      </div>
      <div className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">dashboard</Link>
      </div>
      {user ? (
        <div className="flex items-center gap-4">
        <p>{user.given_name}</p>
        {user.picture && <img src={user.picture} alt="avatar" className="w-8 h-8 rounded-full" />}
        <LogoutLink className={buttonVariants({ variant: "secondary" })}>Logout</LogoutLink>
      </div>
      ):(
        <div className="text-black space-x-3">

        <LoginLink className={buttonVariants()}>Login</LoginLink>
        <RegisterLink className={buttonVariants({variant: "secondary"})}>sign up</RegisterLink>
        </div>
  
      )
      }
    </div>
  );
};

export default Navbar;
