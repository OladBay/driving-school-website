import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "DriveRight School of Motoring | Driving Lessons in [Town]",
  description:
    "Professional driving lessons in [Town]. High pass rates, flexible hours, fully qualified ADI instructor. Book your first lesson today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body
        className={`${jakarta.variable} font-sans bg-white text-gray-900 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
