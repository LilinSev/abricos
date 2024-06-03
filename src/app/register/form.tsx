'use client';

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch('api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: formData.get('username'),
        password: formData.get('password'),
      }),
    });
    if(response.ok) {
        router.push('/list')
    } else {
        alert('User already Exist')
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form form-register">
        <label className="title mb-8">Register</label>
        <label className="label" htmlFor="username">Username</label>
        <input className="input mb-6" name="username" type="text"/>
        <label className="label" htmlFor="password">Password</label>
        <input className="input mb-10" name="password" type="password"/>
        <button className="form-btn" type="submit">Register</button>
    </form>
  );
}
