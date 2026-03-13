import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background-light font-display text-slate-900 transition-colors duration-500 ease-in-out dark:bg-background-dark dark:text-slate-100">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
