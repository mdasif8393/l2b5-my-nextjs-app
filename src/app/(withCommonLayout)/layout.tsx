/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CommonLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-dvh">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
