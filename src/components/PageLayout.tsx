import type { PropsWithChildren } from "react";
import { Heading } from "./Heading";

interface Props extends PropsWithChildren {
  id: string;
}

export const PageLayout = ({ id, children }: Props) => (
  <div id={id} className="w-[100dvw] container py-8">
    <div className="flex gap-4 items-center justify-center">
      <Heading variant="amalfi" className="capitalize">
        {id}
      </Heading>
      <div className="rounded-lg px-3 h-8 bg-gradient-to-r from-yellow-500 to-pink-500 flex items-center justify-center">
        <Heading className="pt-[2px] text-white">
          UNDER CONSTRUCTION
        </Heading>
      </div>
    </div>
    {children}
  </div>
);