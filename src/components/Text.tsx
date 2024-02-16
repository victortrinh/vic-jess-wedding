import classNames from "classnames";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Text = ({ children, className }: Props) => (
  <div className={classNames("uppercase text-[20px] leading-none font-[400] tracking-[2.6px]", className)}>
    {children}
  </div>
);