import React from "react";
import { Img, Button } from "components";

const CustomPagination = (props) => {
  const { currentPage, totalPages, onPageChange } = props;

  const MAX_VISIBLE_PAGES = 4;

  const handlePageClick = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return; // Prevent going out of bounds
    onPageChange(pageNumber);
  };

  const renderPageItems = () => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);
    } else if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
    }

    const pages = [];
    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <Button
          key={page}
          color={page === currentPage ? "blue_gray_900" : "gray_100"}
          size="md"
          className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[5px]"
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Button>
      );
    }

    if (startPage > 1) {
      pages.unshift(
        <span key="prev-dots" className="flex items-center justify-center">
          ...
        </span>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <span key="next-dots" className="flex items-center justify-center">
          ...
        </span>
      );
    }

    return pages;
  };

  return (
    <div className="flex flex-row w-full pb-[3px] gap-2.5 items-center justify-center">
      <div>
        <Img
          src="images/img_arrow_left.svg"
          alt="arrowleft_one"
          className="h-[15px] w-[15px] mr-2 cursor-pointer"
          onClick={() => handlePageClick(currentPage - 1)}
        />
      </div>
      <div className="flex flex-row gap-2.5 sm:hidden">{renderPageItems()}</div>
      <div>
        <Img
          src="images/img_akar_icons_chevron_left.svg"
          alt="akaricons_one"
          className="h-[15px] w-[15px] ml-2 cursor-pointer"
          onClick={() => handlePageClick(currentPage + 1)}
        />
      </div>
    </div>
  );
};

export { CustomPagination };
