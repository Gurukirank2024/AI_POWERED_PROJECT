import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { neobrutalism } from "@clerk/ui/themes";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "AI-Powered Recipe Platform For Developers",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ theme: neobrutalism }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer className="py-8 px-4 border-t">
            <div className="max-w-6xl mx-auto flex justify-center items-center">
              <p className="text-stone-500 text-sm">
                Made with 💗 by Gurukiran K
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
