import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
  variable: "--font-jetbrainsMono" });

export const metadata = {
  title: "Play Runner",
  description: "Generates Playwright automations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}