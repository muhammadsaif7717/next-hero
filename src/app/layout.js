import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Hero",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <NavBar></NavBar>

       <div className="min-h-screen p-4">
       {children}
       </div>
      <Footer></Footer>
      </body>
    </html>
  );
}