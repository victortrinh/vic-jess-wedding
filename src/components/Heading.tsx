import type { ReactNode } from "react";
import localFont from "next/font/local";
import classNames from "classnames";

const bacalisties = localFont({ weight: "400", src: "../font/bacalisties.ttf", display: "swap" });

const madam = localFont({
  weight: "400",
  src: "../font/madam-katrin.otf",
  display: "swap"
});

const amalfi = localFont({
  weight: "400",
  src: "../font/amalfi.ttf",
  display: "swap"
});

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "bacalisties" | "madam" | "amalfi";
}

export const H1 = ({ children, className, variant = "madam" }: Props) => (
  <h1 className={classNames("font-[400] tracking-[2.76px] leading-none", className, {
    [bacalisties.className]: variant === "bacalisties",
    [madam.className]: variant === "madam",
    "tracking-[12px]": variant === "madam",
    [amalfi.className]: variant === "amalfi"
  })}
  >
    {children}
  </h1>
);