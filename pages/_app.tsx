import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col bg-[bg-color] text-[white] ">
      <Navbar />
      <div className="mx-auto w-full max-w-[1600px] pt-[80px]">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
