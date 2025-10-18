import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "OZONO VIDA HUARAZ - Clínica de Ozonoterapia",
  description: "Clínica especializada en ozonoterapia, plasma rico en plaquetas, medicina regenerativa y cóctel de vida en Huaraz. Tratamientos efectivos para mejorar tu calidad de vida.",
  keywords: "ozonoterapia, plasma rico en plaquetas, medicina regenerativa, cóctel de vida, Huaraz, clínica, tratamientos médicos",
  authors: [ { name: "OZONO VIDA HUARAZ" } ],
  openGraph: {
    title: "OZONO VIDA HUARAZ - Clínica de Ozonoterapia",
    description: "Clínica especializada en ozonoterapia y medicina regenerativa en Huaraz",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen">
            <TopBar />
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}