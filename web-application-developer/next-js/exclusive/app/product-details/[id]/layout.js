import { Poppins } from "next/font/google";
import "../../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900", "800", "600", "500", "300", "200", "100"],
});

export const metadata = {
  title: "Exclusive | Product Details",
  description: "Exclusive is a online store that offers exclusive products.",
};

export default function RootLayout({ children }) {
  return <div className={poppins.className}>{children}</div>;
}
