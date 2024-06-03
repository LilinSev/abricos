'use client';

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: false,
    });
    if(!response?.ok) {
      alert('Fields are bad')
    } else {
      router.refresh();
      router.push('/list');
      router.refresh();
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form form-login">
        <label className="title mb-8">Login</label>
        <label className="label" htmlFor="username">Username</label>
        <input className="input mb-6" name="username" type="text"/>
        <label className="label" htmlFor="password">Password</label>
        <input className="input mb-10" name="password" type="password"/>
        <button className="form-btn" type="submit">LogIn</button>
    </form>
  );
}