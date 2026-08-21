import {
  ShieldCheck,
  BarChart3,
  History,
} from "lucide-react";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#0B1730]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1730]">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                VIVEK
              </h1>
              <p className="text-xs text-slate-500">
                Think before you trust.
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-[#0B1730] px-4 py-2 text-sm font-medium text-white">
              <BarChart3 className="h-4 w-4" />
              Analyze
            </button>

            <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
              <History className="h-4 w-4" />
              Reports
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {children}
      </main>
    </div>
  );
}