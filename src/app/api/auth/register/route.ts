import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        const existUsername = await db.user.findUnique({
            where: {username: username}
        });
        if(existUsername) {
            return NextResponse.json({user: null}, {status: 409})
        }

        await db.user.create({
            data: {
                username,
                password
            }
        })
    } catch(e) {
        console.log({e})
    }

    return NextResponse.json({message: 'success'})
}