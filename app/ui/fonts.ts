import { Inter } from "next/font/google";
import { Lobster_Two } from "next/font/google";
import { Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const lobsterTwo = Lobster_Two({ subsets: ["latin"], weight: "400" });
