import { Sidebar } from "@/components";
import { StoreProvider } from "@/store/StoreProvider";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="min-h-screen relative">
        <div className="fixed left-0 top-0 z-10 h-screen sm:w-[300px] overflow-y-scroll no-scrollbar">
          <Sidebar />
        </div>
        <div className="w-full min-h-screen text-slate-900 sm:pl-[300px]  bg-slate-100">
          <StoreProvider>
            {children}
          </StoreProvider>
        </div>
      </div>
    </div>
  );
}
