import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SoundProvider } from "@/components/ui/sound-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b111f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SoundProvider>
            {/* Canvas Background - Rendered by page.tsx */}
            <div className="relative z-10">
              {children}
            </div>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
