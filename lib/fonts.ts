import { Inter, IBM_Plex_Mono } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});
