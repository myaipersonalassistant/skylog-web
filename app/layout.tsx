import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@fontsource-variable/manrope";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SkyLog — Book, manage and remember every journey",
  description:
    "Book flights, stays, car rentals and flight extras, manage every trip, and keep your travel story together with SkyLog.",
  openGraph: {
    title: "SkyLog — Your whole journey, one seamless story",
    description:
      "Book flights, stays and cars, add travel extras, and manage every journey in one place.",
    url: "https://myskylog.com",
    siteName: "SkyLog",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full font-sans">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
