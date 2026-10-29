import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://smile-care-silk.vercel.app"),
  title: "Smile Care Dental Clinic | Sitamarhi",
  description: "Sitamarhi mein painless root canal, braces, aligners aur kids dentistry. Online appointment lein.",
  openGraph: {
    title: "Smile Care Dental Clinic | Sitamarhi",
    description: "Painless dental care, online booking. Sitamarhi.",
    url: "https://smile-care-silk.vercel.app",
    siteName: "Smile Care Dental Clinic",
    locale: "hi_IN",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Smile Care Dental Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Care Dental Clinic | Sitamarhi",
    images: ["/og.jpg"],
  },
  verification: {
    google: "a_zXs7zkgWWo5HDNeCbNXyRH1lxgn00JHu2ued0n1ZU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
        <body>{children}</body>
    </html>
  );
}