import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Arnav Abacus Academy | Best Abacus & Vedic Math Classes in Wakad, Pune",
  description: "Unlock your child's potential with Arnav Abacus Academy. Expert coaching in Abacus, Vedic Math, and School Math. Book a free demo today!",
  keywords: ["Abacus classes in Wakad", "Vedic Math Pune", "Math tuition Wakad", "Child development Pune", "Arnav Abacus Academy"],
  openGraph: {
    title: "Arnav Abacus Academy | Unlock Your Child's Genius",
    description: "Join the best Abacus and Vedic Math academy in Wakad, Pune. Boost concentration, speed, and confidence.",
    type: "website",
    locale: "en_IN",
    url: "https://arnavabacus.com", // Placeholder
    siteName: "Arnav Abacus Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Arnav Abacus Academy",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Wakad",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411057",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.5987", // Approx Wakad coordinates
                "longitude": "73.7658"
              },
              "url": "https://arnavabacus.com",
              "telephone": "+91-XXXXXXXXXX", // Placeholder
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* GTM Placeholder - To be replaced with actual ID */}
        {/* <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXX');`}
        </Script> */}

        {children}
      </body>
    </html>
  );
}
