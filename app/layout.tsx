import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GenerativeMountainScene } from "@/components/ui/mountain-scene";
import { CursorGlow } from "@/components/ui/cursor-glow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahir Dyan | Portfolio",
  description: "Computer Science & Engineering Student | Robotics & AI Enthusiast | Software Developer & Builder. Portfolio showcasing projects in machine learning, robotics, and full-stack development.",
  keywords: ["Mahir Dyan", "Portfolio", "Computer Science", "BRAC University", "Robotics", "AI", "Machine Learning", "Full Stack Developer"],
  authors: [{ name: "Mahir Dyan" }],
  openGraph: {
    title: "Mahir Dyan | Portfolio",
    description: "Computer Science & Engineering Student | Robotics & AI Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global 3D Mountain Background */}
          <div className="fixed inset-0 z-[-1] opacity-50 pointer-events-none">
            <GenerativeMountainScene />
          </div>

          {/* Cursor Glow Effect */}
          <CursorGlow />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
