import { Sidebar } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="min-h-screen relative">
        <div className="fixed left-0 top-0 z-10 h-screen sm:w-[300px] overflow-y-scroll no-scrollbar">
          <Sidebar />
        </div>
        <div className="w-full min-h-screen text-slate-900 sm:pl-[300px]  bg-slate-100">
          {/* Notfound */}
            <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
              <h1 className="text-9xl font-extrabold text-white tracking-widest">
                404
              </h1>
              <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
              </div>
              <button className="mt-5">
                <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                  <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                    <Link href="/dashboard/main">Ir a dashboard</Link>
                  </span>
                </div>
              </button>
            </main>
        </div>
      </div>
    </div>
  );
}
