import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sameet Ikram — Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer with 2.5+ years of experience building scalable backend systems, real-time applications, and AI-powered products.",
  openGraph: {
    title: "Sameet Ikram — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer with 2.5+ years of experience building scalable backend systems, real-time applications, and AI-powered products.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          {children}
          <Toaster
            theme="light"
            toastOptions={{
              style: {
                background: "#FDFBF7",
                border: "1px solid rgba(201,168,76,0.2)",
                color: "#1A1814",
                backdropFilter: "blur(20px)",
                fontFamily: "var(--font-poppins)",
              },
            }}
          />
        </TooltipProvider>
      </body>
    </html>
  );
}
