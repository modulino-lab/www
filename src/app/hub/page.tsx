"use client";

import {
  TypographyBlockquote,
  TypographyH1,
  TypographyLarge,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import ImageStack from "./components/image-stack";
import SpecTable from "./components/spec-table";
import { Lightbulb } from "lucide-react";
import Splash from "./components/splash";

export default function HubPage() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="flex justify-between mt-8 pr-15 pl-15">
          <TypographyH1>Hub</TypographyH1>
          <TypographyLarge className="text-right">
            Your new functions,
            <br />
            all in one place.
          </TypographyLarge>
        </div>
        <div className="relative w-full mt-8 overflow-hidden rounded-2xl">
          {/* TODO: change temp price  */}
          <Splash price={0} />
        </div>
        <TypographyMuted className="text-right">
          Photo by{" "}
          <a href="https://unsplash.com/@jainath?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jainath Ponnala
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/black-and-blue-usb-cable-9wWX_jwDHeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </TypographyMuted>
      </div>
      <div className="container mt-16">
        <div className="pr-5 pl-5">
          <TypographyH1>Maximize Your 3D Printing Experience.</TypographyH1>
        </div>
        <div className="mt-4">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>In one sentence:</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AlertDescription>
          </Alert>
          <TypographyP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget
            aliquam nisl nisl eget nisl. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget
            aliquam nisl nisl eget nisl. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget
            aliquam nisl nisl eget nisl. <br />
          </TypographyP>
        </div>
      </div>
      <div className="container mt-16">
        <div className="pr-5 pl-5">
          <TypographyH1>Built to match your needs.</TypographyH1>
          <TypographyBlockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypographyBlockquote>
        </div>
        <ImageStack />
      </div>
      <div className="container mt-16">
        <div className="pr-5 pl-5">
          <TypographyH1>Specifications</TypographyH1>
        </div>
        <SpecTable />
      </div>
      <div className="mb-16"></div>
    </div>
  );
}
