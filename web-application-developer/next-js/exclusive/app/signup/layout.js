import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900", "800", "600", "500", "300", "200", "100"],
});

export const metadata = {
  title: "Exclusive | Signup",
  description: "Exclusive is a online store that offers exclusive products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
