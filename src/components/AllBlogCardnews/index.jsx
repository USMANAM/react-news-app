import React from "react";
import { Button, Img, Text, Heading, Input } from "./..";

export default function AllBlogCardnews({
  img,
  tagOne,
  sourceAndDate,
  title,
  description,
  buttonText,
  url,
  ...props
}) {

  const handleReadMore = () => {
    if(url){
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div
      {...props}
      className="h-[400px] flex flex-col items-start justify-start w-full pb-[23px] gap-4 sm:pb-5 border border-blue_gray-900 rounded-lg relative hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => handleReadMore()}
    >
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <div className="flex flex-row justify-start w-full">
          <div className="h-[181px] w-full sm:w-full relative">
            {!!img ? (
              <Img
                src={img}
                alt="img"
                className="justify-center h-[181px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
              />
            ) : null}
            <div className="flex flex-col items-start justify-center w-full h-full gap-[109px] left-0 bottom-0 right-0 top-0 p-[13px] m-auto bg-gradient absolute">
              {!!tagOne ? (
                <Input
                  shape="square"
                  name="tag_one"
                  placeholder="Entertaiment "
                  className="w-[36%] md:w-full md:h-auto mt-0.5 ml-[177px] md:ml-5 tracking-[-0.50px] font-bold"
                />
              ) : null}
              {!!sourceAndDate ? (
                <Heading
                  size="xs"
                  as="h1"
                  className="mb-1 !text-white-A700 tracking-[-0.50px]"
                >
                  {sourceAndDate}
                </Heading>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[13px] p-4">
          {!!title ? (
            <Heading
              size="md"
              as="h2"
              className="tracking-[-0.50px] !font-semibold"
            >
              {title && title.slice(0, 30) + "..."}
            </Heading>
          ) : null}
          {!!description ? (
            <Text
              size="xs"
              as="p"
              className="!text-black-900_87 opacity-0.5 leading-[25px]"
            >
              {description && description.slice(0, 120) + "..."}
            </Text>
          ) : null}
        </div>
        {!!buttonText ? (
          <div className="w-full flex items-center justify-center absolute bottom-3">
            <Button
            size="md"
            shape="round"
            rightIcon={
              <Img
                src="images/img_akariconsarrowupright.svg"
                alt="akar-icons:arrow-up-right"
              />
            }
            className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[138px] sm:min-w-[50%]"
            onClick={() => handleReadMore()}
          >
            {buttonText}
          </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
