import "./globals.css";

export const metadata = {
  title: "Smile Care Dental Clinic | Sitamarhi",
  description: "Sitamarhi mein premium dental care. Online appointment lein.",
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