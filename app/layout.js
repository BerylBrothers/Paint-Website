import { JetBrains_Mono } from "next/font/google";
import { Outfit} from "next/font/google";
import "./globals.css";
import Header from "../components/Header"
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";
import Footer from "../components/Footer"
import Script from "next/script";

export const metadata = {
  title: 'Beryl Brothers',
  description: 'Web Design Agency.',
};

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400",
    "500", "600", "700", "800",],
    variable:'--font-jetbrainsMono'
});


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-outfit',
});




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<Script src={"https://www.googletagmanager.com/gtag/js?id=G-HRWFBHTNMP"}></Script>
<Script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HRWFBHTNMP');`}
</Script>
      </head>
      <body
        className={`${outfit.variable}`}>
         <Header />
         {/* <StairTransition /> */}
         {children}
         {/* <PageTransition>
        
         </PageTransition> */}
        <Footer />
      </body>
    </html>
  );
}