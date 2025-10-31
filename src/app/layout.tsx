import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import companyData from "@/data/company.json";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ozonovidahuaraz.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "OZONO VIDA HUARAZ - Clínica de Ozonoterapia y Medicina Regenerativa",
    template: "%s | OZONO VIDA HUARAZ",
  },
  description: "Clínica especializada en ozonoterapia, plasma rico en plaquetas (PRP), medicina regenerativa y cóctel de vida en Huaraz, Perú. Tratamientos efectivos para dolor, artritis, hernias discales y más. Centro Médico Stella Maris.",
  keywords: [
    "ozonoterapia",
    "plasma rico en plaquetas",
    "PRP",
    "medicina regenerativa",
    "cóctel de vida",
    "Huaraz",
    "clínica",
    "tratamientos médicos",
    "dolor crónico",
    "artritis",
    "hernia discal",
    "medicina alternativa",
    "Centro Médico Stella Maris",
    "ozonoterapia Huaraz",
    "tratamiento del dolor"
  ],
  authors: [{ name: "OZONO VIDA HUARAZ" }],
  creator: "OZONO VIDA HUARAZ",
  publisher: "OZONO VIDA HUARAZ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: baseUrl,
    siteName: "OZONO VIDA HUARAZ",
    title: "OZONO VIDA HUARAZ - Clínica de Ozonoterapia y Medicina Regenerativa",
    description: "Clínica especializada en ozonoterapia, plasma rico en plaquetas y medicina regenerativa en Huaraz. Tratamientos para dolor, artritis, hernias discales y más.",
    images: [
      {
        url: `${baseUrl}/images/general/local_ozonovida.png`,
        width: 1200,
        height: 630,
        alt: "OZONO VIDA HUARAZ - Clínica de Ozonoterapia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OZONO VIDA HUARAZ - Clínica de Ozonoterapia",
    description: "Clínica especializada en ozonoterapia y medicina regenerativa en Huaraz",
    images: [`${baseUrl}/images/general/local_ozonovida.png`],
    creator: "@ozono.vida.huaraz",
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Aquí puedes agregar códigos de verificación cuando los tengas
    // google: 'tu-codigo-google',
    // yandex: 'tu-codigo-yandex',
  },
  category: "Medicina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data para LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": companyData.name,
    "image": `${baseUrl}/images/icons/Logotipo_ozonoVida.png`,
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": companyData.phone,
    "email": companyData.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyData.address,
      "addressLocality": "Huaraz",
      "addressRegion": "Áncash",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -9.535410468850385,
      "longitude": -77.52902803669991
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "priceRange": "$$",
    "medicalSpecialty": [
      "Ozonoterapia",
      "Medicina Regenerativa",
      "Plasma Rico en Plaquetas",
      "Tratamiento del Dolor"
    ],
    "sameAs": [
      companyData.tiktok.url
    ]
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.tiktok.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.tiktok.com" />
      </head>
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
            <FloatingButtons />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}