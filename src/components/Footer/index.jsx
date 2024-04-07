import React from "react";
import { Img, Text, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full px-14 py-[60px] md:p-5 bg-black-900">
        <div className="flex flex-col items-center justify-center w-full mt-0.5 mx-3.5 max-w-[1290px]">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-col items-start justify-start w-[23%] md:w-full gap-[19px]">
              <div className="flex flex-row justify-start">
                <Heading size="2xl" as="h4" className="!text-white-A700 tracking-[-0.50px]">
                  Newz
                </Heading>
              </div>
              <Text size="md" as="p" className="tracking-[-0.50px] leading-[35px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit.
              </Text>
            </div>
            <div className="flex flex-row justify-between items-start w-[57%] md:w-full mt-[7px] md:mt-0">
              <div className="flex flex-col items-start justify-start w-[10%] gap-[23px]">
                <Heading size="md" as="p" className="!text-white-A700 tracking-[-0.50px]">
                  World
                </Heading>
                <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                  <Text as="p" className="tracking-[-0.50px]">
                    Politcts
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Health
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Business
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Tech
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Entertaiment
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[8%] gap-[23px]">
                <Heading size="md" as="p" className="!text-white-A700 tracking-[-0.50px]">
                  Tech
                </Heading>
                <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                  <Text as="p" className="tracking-[-0.50px]">
                    Siance
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Magazine
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Start up
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Crypto
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[5%] gap-6">
                <Heading size="md" as="p" className="!text-white-A700 tracking-[-0.50px]">
                  Life
                </Heading>
                <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                  <Text as="p" className="tracking-[-0.50px]">
                    Food
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Style
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Sport
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Movie
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Music
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[14%] gap-[23px]">
                <Heading size="md" as="p" className="!text-white-A700 tracking-[-0.50px]">
                  Other
                </Heading>
                <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                  <Text as="p" className="tracking-[-0.50px]">
                    About
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Contact us
                  </Text>
                  <Text as="p" className="tracking-[-0.50px]">
                    Terms & Conditions
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full mt-[52px] bg-white-A700" />
          <div className="flex flex-row justify-between items-center w-full mt-[29px]">
            <Text size="md" as="p" className="tracking-[-0.50px]">
              Copyright © All Rights Reserved
            </Text>
            <div className="flex flex-row justify-between w-auto gap-5">
              <Img src="images/img_frame.svg" alt="image" className="h-[24px] w-[24px]" />
              <Img src="images/img_frame_white_a700.svg" alt="image_one" className="h-[24px] w-[24px]" />
              <Img src="images/img_frame_white_a700_24x24.svg" alt="image_two" className="h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
