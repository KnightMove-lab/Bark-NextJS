// app/layout.js
import "./globals.css";
import Script from "next/script";
import "bootstrap-icons/font/bootstrap-icons.css";


// Next.js 13 metadata
export const metadata = {
  title: "Bark-like UI",
  description: "A Bark-like landing page using Next.js & Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* If you need Bootstrap JS from CDN: */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
