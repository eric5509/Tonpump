import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Topnav from "@/components/Layout/Topnav";
import AppProvider from "@/redux/provider/AppProvider";
import LeftSidebar from "@/components/Layout/LeftSidebar";
import { TonProvider } from "@/tonprovider/TonProvider";

const font = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title:
    "TONPUMP - Leading Provider of Smart Contract Solutions for Businesses",
  description:
    "Unlock the power of secure and automated transactions with our cutting-edge smart contract solutions. Learn how we streamline business operations using blockchain technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} `}>
        <AppProvider>
          <TonProvider>
            <div className="h-screen w-full">
              <div className="h-[70px] xl:h-20">
                <Topnav />
              </div>
              <div className="h-[calc(100vh-70px)] w-full grid lg:grid-cols-[auto_1fr] gap-2.5 bg-[] overflow-y-auto over xl:h-[calc(100vh-80px)] p-2.5">
                <LeftSidebar />
                <div className="h-full w-full overflow-y-auto">
                  {children}
                </div>
              </div>
            </div>
          </TonProvider>
        </AppProvider>
      </body>
    </html>
  );
}
