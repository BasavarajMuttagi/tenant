import Header from "@/components/Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col overscroll-y-auto">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
