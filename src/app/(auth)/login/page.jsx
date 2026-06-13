'use client';

import { Button, Input } from '@heroui/react';
import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

export default function Login() {
    const handleSubmit = async (e) => {
            e.preventDefault();
            // Handle registration logic here (e.g., call your API)
            const formData = new FormData(e.currentTarget);
            const loginData = Object.fromEntries(formData.entries());
            console.log(loginData)
    
            const { data, error } = await authClient.signIn.email({
            ...loginData,    
            callbackURL: "/" // A URL to redirect to after the user verifies their email (optional)
        });
        if (error) {   
                 console.error("Login error:", error);  
                 toast.error("Login failed. Please try again.");
                 return;
             }  
    
            //  router.push("/dashboard");
        }
  return (
    <div className="min-h-screen flex items-center justify-center bg-default-50 px-4">
      <div className="w-full max-w-sm">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.22em] uppercase text-default-400 mb-2">
            MediQueue
          </p>
          <h1 className="text-3xl font-light text-default-900 tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-default-400 mt-1">
            Continue your learning journey
          </p>
        </div>

        {/* Google sign-in */}
        <Button
          variant="bordered"
          className="w-full h-11 font-normal rounded-xl border-default-200 text-default-600 gap-3 mb-6"
        >
          <Image
            width={16}
            height={16}
            src="https://www.google.com/favicon.ico"
            className="w-4 h-4"
            alt="Google"
          />
          Continue with Google
        </Button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-default-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-default-50 px-3 text-[10px] tracking-widest uppercase text-default-300">
              or with email
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[10px] tracking-widest uppercase text-default-400">
              Email address
            </label>
            <Input
              id="email"
              required
              placeholder="you@example.com"
              type="email"
              name="email"
              startContent={<Mail className="w-4 h-4 text-default-300" strokeWidth={1.5} />}
              variant="underlined"
              className="text-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-[10px] tracking-widest uppercase text-default-400">
              Password
            </label>
            <Input
              id="password"
              required
              placeholder="••••••••"
              type="password"
              name="password"
              startContent={<Lock className="w-4 h-4 text-default-300" strokeWidth={1.5} />}
              variant="underlined"
              className="text-sm"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="#"
              className="text-xs text-default-400 hover:text-default-600 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-default-900 text-default-50 tracking-[0.15em] uppercase text-xs rounded-xl font-normal group mt-2"
          >
            Sign in
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-default-400 mt-8">
          New to MediQueue?{' '}
          <Link href="/register" className="text-default-700 font-medium hover:underline underline-offset-4">
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
}