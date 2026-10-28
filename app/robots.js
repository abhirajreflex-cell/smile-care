export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://smile-care-silk.vercel.app/sitemap.xml",
  };
}