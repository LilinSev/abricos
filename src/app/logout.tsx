'use client';

import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <a className="btn" onClick={() => {
            signOut();
        }}>
        Logout
        </a>
    );
}