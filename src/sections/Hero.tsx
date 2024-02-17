import { H1 } from "@/components/Heading";
import { Text } from "@/components/Text";

export const Hero = () => (
  <div className="h-[100svh] w-[100vw] py-12 container m-auto flex flex-col justify-between">
    <Text>
      The wedding of
    </Text>
    <div>
      <H1>
        Victor
      </H1>
      <H1>
        & Jessica
      </H1>
    </div>
    <div>
      <Text>
        October 13,2024
      </Text>
      <Text>
        Montreal, Quebec
      </Text>
    </div>
  </div>
);