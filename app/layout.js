import "./globals.css";

export const metadata = {
  title: "Smile Care Dental Clinic | Sitamarhi",
  description: "Sitamarhi mein premium dental care. Online appointment lein.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}