"use client";
import Image from 'next/image';
import logo from './logo.jpg'
import Input from '../components/input'
import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';

export default function Auth() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPasssword] = useState("");

    return (
        <div className="relative h-full w-full bg-[url('../public/home-background.png')]  bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                                id="username"
                                label="Username"
                                onChange={(e: any) => setUsername(e.target.value)}
                                value={username}
                            />
                            <Input
                                id="email"
                                label="Email"
                                type="email"
                                onChange={(e: any) => setEmail(e.target.value)}
                                value={email}
                            />
                            <Input
                                id="password"
                                label="Password"
                                type="password"
                                onChange={(e: any) => setPasssword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <button className="bg-red-500 text-white w-full py-2 rounded-md mt-10 hover:bg-red-700 transition">
                            Login
                        </button>
                        <p className="text-white mt-4">
                            Don't have an account?{" "}
                            <span className="text-red-500 cursor-pointer hover:underline">Sign up now</span>
                        </p>
                    </div>
                </div>

            </div>
        
        </div>
    );
    }
