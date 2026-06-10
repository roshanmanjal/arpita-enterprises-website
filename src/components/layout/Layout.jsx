import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "../ui/FloatingButtons";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

