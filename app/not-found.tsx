"use client";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-9xl text-center font-bold font-mono opacity-40">
          404
        </h1>
        <p className=" mt-10 font-semibold text-4xl">Page Not Found</p>
        <p className="mt-4 text-neutral-500">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <button
        onClick={() => window.history.back()}
        className="w-30 h-10 rounded-md mt-4 text-sm text-neutral-400 hover:bg-neutral-800 duration-300 hover:text-white items-center border border-neutral-800 justify-center flex gap-1"
      >
        <ArrowLeft size={15} />
        <div>Go Back</div>
      </button>
    </div>
  );
}
