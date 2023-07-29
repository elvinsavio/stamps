import { ReactNode } from "react";
import { AboutUsConfig } from "../appConfig/aboutUs";
import Button from "../components/ui/buttons";
import { Input, TextArea } from "../components/ui/input";

export default function About() {
  return (
    <div className="flex flex-col justify-around min-h-screen">
      <Container>
        <Left heading="About Us" content={AboutUsConfig.aboutUsText} />
        <div className="flex items-center justify-center w-full sm:w-1/2">
          <img src={AboutUsConfig.aboutUsImage} className="min-h-[300px]" />
        </div>
      </Container>
      <Container>
        <Left heading="Contact us" content={AboutUsConfig.contactUsText} />
        <div className="flex flex-col items-center justify-center w-full gap-2 sm:w-1/2 ">
          <Input className="w-[90%]" placeholder="Name" />
          <Input className="w-[90%]" placeholder="Email" />
          <TextArea className="w-[90%]" placeholder="Questions" />
          <Button className="w-[90%]">Send us a message!</Button>
        </div>
      </Container>
    </div>
  );
}

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-5 flex-1 flex sm:flex-row flex-col gap-5 h-screen min-h-[300px] sm:items-center items-start sm:justify-center justify-around font-mark bg-pale p-2">
      {children}
    </div>
  );
};

const Left = ({ heading, content }: { heading: string; content: string }) => {
  return (
    <div className="flex flex-col w-full sm:w-1/2 ">
      <h1 className="text-3xl">{heading}</h1>
      <span className="w-full text-sm font-anvir">{content}</span>
    </div>
  );
};
