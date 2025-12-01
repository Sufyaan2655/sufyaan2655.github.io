import { ReactNode } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import SmoothScroll from "@/components/smooth-scroll";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      <main className="py-16">
        <SmoothScroll>{children}</SmoothScroll>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
