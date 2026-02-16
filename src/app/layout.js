import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-4 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
