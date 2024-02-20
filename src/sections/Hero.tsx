"use client";

import { H1 } from "@/components/Heading";
import classNames from "classnames";
import Image from "next/image";
import { type PropsWithChildren, useEffect } from "react";

export const Hero = () => {
  const textClasses = "text-white text-[40px] md:text-[60px] lg:text-[110px]";

  useEffect(() => {
    import("add-to-calendar-button");
  }, []);

  return (
    <div className="h-full w-full relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-auto grid items-center justify-center z-20">
        <div className="grid gap-10 text-center py-12 container">
          <SmallText>
            SAVE THE DATE
          </SmallText>

          <div className="flex flex-col items-center justify-center">
            <H1 className={`${textClasses} tracking-[6px]`}>
              Victor Trinh
            </H1>
            <H1 className={`${textClasses} mt-[-12px] lg:mt-[-32px]`} variant="bacalisties">
              and
            </H1>
            <H1 className={`${textClasses} mt-[-2px] lg:mt-[-10px] tracking-[6px]`}>
              Jessica Li
            </H1>
          </div>

          <SmallText>
            October 13, 2024
          </SmallText>

          <div className="flex items-center justify-center">
            <add-to-calendar-button
              name="Victor and Jessica's Love Story"
              description="Follow along as we Victor and Jessica embark on our journey to our happily ever after. Share special moments together with family and friends as we celebrate our union."
              options="'Apple', 'Google', 'iCal', 'Microsoft365', 'MicrosoftTeams', 'Outlook.com'"
              location="111 Newman Blvd, Lasalle, Quebec H8R 3E6"
              startDate="2024-10-13"
              timeZone="America/Toronto"
              organizer="Victor and Jessica|victor.jessica.2024@outlook.com"
              buttonStyle="3d"
              listStyle="dropup-static"
              hideBackground
              hideCheckmark
              size="4"
            />
          </div>

          <H1 variant="amalfi" className="text-white text-[14px] md:text-[28px] lg:text-[24px] mt-4 tracking-[-0.24px]">
            formal invitation to follow
          </H1>
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      <Image
        src="/hero.jpg"
        fill
        alt="Jess and Victor engagement"
        style={{
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
    </div>
  );
};

interface Props extends PropsWithChildren {
  className?: string;
}

const SmallText = ({ children, className }: Props) => (
  <p className={classNames("uppercase text-white text-[16px] lg:text-[20px] tracking-[8px] lg:tracking-[10px]", className)}>
    {children}
  </p>
);