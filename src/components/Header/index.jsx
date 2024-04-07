import React from "react";
import { Text, Heading } from "./..";
export default function Header({ ...props }) {
  const headings = [
    {
      id: 0,
      name: "Home",
      href: "#",
    },
    {
      id: 1,
      name: "About",
      href: "#",
    },
    {
      id: 2,
      name: "Contact",
      href: "#",
    },
  ];

  return (
    <React.Fragment>
      <header {...props}>
        <div className="h-[96px] w-full relative">
          <div className="bg-blue_gray-900 justify-center h-[96px] left-0 bottom-0 right-0 top-0 m-auto absolute" />
          <div className="flex flex-row justify-center w-[90%] bottom-[30%] right-0 left-0 m-auto absolute">
            <div className="flex flex-row justify-between items-center w-full md:gap-10">
              <div>
                <Text className="text-[30px] font-bold">Newz</Text>
              </div>
              <div className="sm:hidden flex flex-row justify-center w-full gap-6 sm:gap-5">
                {headings.map((heading) => {
                  return (
                    <Heading
                      key={heading.id}
                      as="h6"
                      className="!text-white-A700"
                    >
                      {heading.name}
                    </Heading>
                  );
                })}
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start gap-5">
                  <Text size="md" as="p">
                    Login
                  </Text>
                  <Text size="md" as="p">
                    Register
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
