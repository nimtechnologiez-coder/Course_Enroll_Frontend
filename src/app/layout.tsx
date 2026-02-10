import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nim Technologies | WhatsApp Automation System",
  description: "WhatsApp Lead Capture & Auto-Booking System for clinics, salons and local businesses. Automate enquiries and convert messages into appointments.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-white selection:bg-primary-green/30`}>
        {children}
      </body>
    </html>
  );
}
