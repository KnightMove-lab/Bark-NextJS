// app/layout.js
import "./globals.css";
import Script from "next/script";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";  // ✅ Import Header
import Footer from "./components/Footer";  // ✅ Import Footer

export const metadata = {
  title: "Bark-like UI",
  description: "A Bark-like landing page using Next.js & Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />   {/* ✅ Ensures header is present on all pages */}
        <main>{children}</main>  {/* ✅ Page content will be here */}
        <Footer />   {/* ✅ Ensures footer is present on all pages */}

        {/* Bootstrap JS for UI functionality */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
