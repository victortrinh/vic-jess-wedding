import { ReactNode } from "react";
import { Merriweather } from "next/font/google";
import localFont from "next/font/local";
import classNames from "classnames";

const merriWeather = Merriweather({ weight: ["300", "400", "700", "900"], subsets: ["latin"] });

const madam = localFont({
  weight: "400",
  src: "../font/madam-katrin.otf",
  display: "swap"
});

interface Props {
  children: ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: Props) => (
  <h1 className={classNames("text-[92px] font-[400] tracking-[2.76px] uppercase leading-none", madam.className, className)}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: Props) => (
  <h2 className={classNames("text-[32px] leading-[42px] font-light tracking-[-0.96px]", merriWeather.className, className)}>
    {children}
  </h2>
);