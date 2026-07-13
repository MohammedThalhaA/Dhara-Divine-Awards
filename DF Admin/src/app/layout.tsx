import type { Metadata } from "next";
import "@/index.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Dhara Foundations | Divine Awards 2026 Admin Portal",
  description: "Centralized operational command and vetting dashboard for Dhara Divine Awards 2026 and trust portals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }} suppressHydrationWarning>
      <body className="bg-[#FDFBF8] dark:bg-[#121310] text-[#1B1C19] dark:text-[#E5E7EB] antialiased selection:bg-[#401C0C] selection:text-[#FFD27F]" suppressHydrationWarning>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
