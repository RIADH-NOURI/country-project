import { Geist, Geist_Mono } from "next/font/google";
import { ChangeModeProvider } from "@/contexts/changeModeContext";
import Header from "@/components/organisms/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
        < link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <ChangeModeProvider>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}     >
          <Header />
        {children}
      </body>
      </ChangeModeProvider>
    </html>
  );
}
