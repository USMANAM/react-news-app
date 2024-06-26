import React, { useState } from "react";
import { Img, Heading, Button, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AllBlogFilter from "modals/AllBlogFilter";
import useNewsData from "hooks/useNewsData";
import NewsApi from "./Components/NewsApi";
import { SearchSVG } from "assets/images";

export default function AllBlogPage() {
  const [openModal, setOpenModal] = useState(false);
  const [newSearchVal, setNewSearchVal] = useState("news");
  const [filterData, setFilterData] = useState({
    category: "",
    source: "",
    searchTerm: newSearchVal,
    fromDate: "",
    toDate: "",
  });

  const { newsData, loading, error } = useNewsData(
    filterData.category,
    filterData.searchTerm,
    filterData.source,
    filterData.fromDate,
    filterData.toDate
  );

  const openFilterModal = () => {
    setOpenModal(true);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setFilterData((prevState) => ({
      ...prevState,
      searchTerm: newSearchVal,
    }));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex justify-center items-center w-full" />
        <div className="flex flex-row justify-center w-full mt-[50px] px-5 max-w-[1292px]">
          <div className="flex flex-col items-center justify-start w-full gap-[85px]">
            <Heading
              size="3xl"
              as="h1"
              className="sm:max-w-md md:max-w-lg text-center"
            >
              Read the latest news from around the world
            </Heading>
            <div className="flex flex-row w-full items-center justify-center">
              <form
                onSubmit={(e) => handleSubmitSearch(e)}
                action=""
                className="w-1/2"
              >
                <Input
                  type=""
                  color="gray_50"
                  size="md"
                  name="bxfilter"
                  placeholder="Search"
                  suffix={<SearchSVG onClick={(e) => handleSubmitSearch(e)} />}
                  onChange={(e) =>
                    setNewSearchVal(e)
                  }
                  className="gap-[11px] font-semibold rounded-[15px]"
                />
              </form>
              <Button
                onClick={() => openFilterModal()}
                className="rounded-lg"
                color="white_A700"
                leftIcon={
                  <Img
                    src="images/img_bxfilter.svg"
                    alt="bx:filter"
                    className="cursor-pointer mr-1"
                  />
                }
              >
                Filter
              </Button>
            </div>
            <NewsApi loading={loading} newsData={newsData} error={error} />
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[120px]" />
      </div>
      <AllBlogFilter
        isOpen={openModal}
        setIsOpen={setOpenModal}
        setFilterData={setFilterData}
        filterData={filterData}
      />
    </>
  );
}
