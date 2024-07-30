import { Poppins } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/UserContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900", "800", "600", "500", "300", "200", "100"],
});

export const metadata = {
  title: "Exclusive",
  description: "Exclusive is a online store that offers exclusive products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
