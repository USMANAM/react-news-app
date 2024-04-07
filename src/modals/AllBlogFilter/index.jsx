import React, { useState } from "react";
import { Button, Heading, Img, Input } from "../../components";
import AllBlogCardnews from "../../components/AllBlogCardnews";
import { default as ModalProvider } from "react-modal";

export default function AllBlogFilter({
  isOpen,
  setIsOpen,
  setFilterData,
  filterData,
  ...props
}) {
  const categories = [
    {
      id: 0,
      name: "Sport",
      value: "sports",
    },
    {
      id: 1,
      name: "Health",
      value: "health",
    },
    {
      id: 2,
      name: "Political",
      value: "political",
    },
    {
      id: 3,
      name: "Business",
      value: "business",
    },
    {
      id: 4,
      name: "Life",
      value: "life",
    },
    {
      id: 5,
      name: "Finance",
      value: "finance",
    },
    {
      id: 6,
      name: "Entertainment",
      value: "entertainment",
    },
  ];

  const Sources = [
    {
      id: 0,
      name: "ABC News",
      value: "abc-news",
    },
    {
      id: 1,
      name: "BBC News",
      value: "bbc-news",
    },
    {
      id: 2,
      name: "Al Jazeera English",
      value: "al-jazeera-english",
    },
    {
      id: 3,
      name: "Ary News",
      value: "ary-news",
    },
  ];

  const handleResetFilter = () => {
    setFilterData((prevState) => ({
      ...prevState,
      category: "",
      source: "",
      searchTerm: "news",
      fromDate: "",
      toDate: "",
    }));
  };

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.75)] z-50"
      className="max-w-5xl mx-8"
    >
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full p-[37px] sm:p-5 bg-white-A700 rounded-[30px]">
          <div className="flex flex-col items-start justify-start w-[96%] mb-[7px] gap-14 mx-7 sm:mx-5">
            <div className="flex flex-row justify-between items-start w-full">
              <Heading size="2xl" as="h1" className="mb-px">
                Filter News
              </Heading>
              <div className="flex flex-row gap-4">
                <Button
                  onClick={() => handleResetFilter()}
                  className="rounded-lg"
                >
                  Reset Filter
                </Button>
                <Img
                  onClick={() => setIsOpen(!isOpen)}
                  src="images/img_bx_x_1_1.svg"
                  alt="bxx1one_one"
                  className="h-[24px] w-[24px] mt-[7px] cursor-pointer"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-col items-start justify-start md:w-full gap-6">
              <Heading size="2xl" as="h2">
                Category
              </Heading>
              <div className="flex flex-row flex-wrap justify-start w-full gap-5">
                {categories.map((category) => {
                  return (
                    <Button
                      key={category.id}
                      color={
                        filterData.category === category.value
                          ? "blue_gray_900"
                          : "gray_50"
                      }
                      size="xl"
                      shape="round"
                      className="tracking-[-0.50px] min-w-[86px] !rounded-[10px]"
                      onClick={() =>
                        setFilterData((prevState) => ({
                          ...prevState,
                          category: category.value,
                        }))
                      }
                    >
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Sources */}
            <div className="flex flex-col items-start justify-start md:w-full gap-6">
              <div className="flex flex-row justify-start w-[27%] md:w-full">
                <div className="flex flex-row justify-start w-full">
                  <Heading size="2xl" as="h3" className="tracking-[-0.50px]">
                    Source
                  </Heading>
                </div>
              </div>
              <div className="w-full flex flex-row flex-wrap justify-start gap-5">
                {Sources.map((source) => {
                  return (
                    <Button
                      key={source.id}
                      color={
                        filterData.source === source.value
                          ? "blue_gray_900"
                          : "gray_50"
                      }
                      size="xl"
                      shape="round"
                      className="tracking-[-0.50px] !rounded-[10px]"
                      onClick={() =>
                        setFilterData((prevState) => ({
                          ...prevState,
                          source: source.value,
                        }))
                      }
                    >
                      {source.name}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Sources */}
            <div className="flex flex-col items-start justify-start w-full gap-6">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start w-full">
                  <Heading size="2xl" as="h3">
                    Select Date
                  </Heading>
                </div>
              </div>
              <div className="w-full flex flex-row flex-wrap justify-start gap-5">
                <Input
                  label="From Date"
                  value={filterData.fromDate}
                  type="date"
                  color="gray_50"
                  size="md"
                  className="gap-[11px] font-semibold rounded-[15px] cursor-pointer"
                  onChange={(e) =>
                    setFilterData((prevState) => ({
                      ...prevState,
                      fromDate: e,
                    }))
                  }
                />
                <Input
                  label="To Date"
                  value={filterData.toDate}
                  type="date"
                  color="gray_50"
                  size="md"
                  className="gap-[11px] font-semibold rounded-[15px] cursor-pointer"
                  onChange={(e) =>
                    setFilterData((prevState) => ({
                      ...prevState,
                      toDate: e,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
