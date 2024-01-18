import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./Sorting";
import  Provider from "./redux/provider"
import { ToastContainer } from "react-toastify";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hassouna Shop",
  description: "Technology web app store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Provider>
        <body className={inter.className}>
          <Header />
          {children}
        <ToastContainer/>
          <Footer />
        </body>
        </Provider>
        
      </html>
    </ClerkProvider>
  );
}
