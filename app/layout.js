import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Background from "@/components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Islamul Hoque (Ishfak) | MERN Stack Developer",
  description: "Portfolio of Islamul Hoque (Ishfak), a passionate MERN Stack Developer building responsive and modern web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <Background />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}