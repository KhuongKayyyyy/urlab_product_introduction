import { auth,signIn,signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { loginWithGithub, logoutUser } from "../app/actions/auth_action";

const Navbar = async() => {
    const session = await auth();
    return (
        <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex items-center justify-between">
                    <Link href="/">
                        <Image 
                            src="/logo.jpg" 
                            alt="logo" 
                            width={80} 
                            height={50} 
                            style={{ borderRadius: "8px" }} 
                        /> 
                    </Link>
                    <div className="flex items-center gap-5">
                        {session && session?.user ? (
                            <>
                                <Link href='/startup/create'>
                                    <span>Create</span>
                                </Link>

                                <form action={ logoutUser}>
                                    <button type="submit">Logout</button>
                                </form>

                                <Link href={`/use r/${session.user.id}`}>
                                    <span>{session?.user.name}</span>
                                </Link>

                                
                            </>
                        ) : <form action= {
                            loginWithGithub
                        }>
                            <button type="submit">Login</button></form>}
                    </div>
            </nav>
        </div>
    );
};

export default Navbar;
