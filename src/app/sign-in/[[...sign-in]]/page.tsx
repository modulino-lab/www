import { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in page.",
};

export default function Page() {
  return (
    <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 mt-auto"></div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px]">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
