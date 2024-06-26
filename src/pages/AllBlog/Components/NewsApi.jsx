import React, { useState } from "react";
import { formatArticleDate } from "utils/formatDate";
import { CustomPagination } from "components";
import AllBlogCardnews from "components/AllBlogCardnews";
import { Heading } from "components";

const NewsApi = ({ loading, newsData, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5">
        <div className="flex flex-col items-center justify-start w-full gap-[50px]">
          <div className="justify-center w-full gap-5 grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid">
            {loading
              ? [1, 2, 3, 4].map((val) => {
                  return (
                    <div
                      key={val}
                      className="h-[400px] w-[300px] animate-pulse bg-slate-300 rounded-lg"
                    />
                  );
                })
              : currentArticles?.map((article, index) => {
                  const date = formatArticleDate(article.publishedAt);
                  return (
                    <AllBlogCardnews
                      key={index}
                      img={article.urlToImage}
                      sourceAndDate={`${article.source.name}, ${date}`}
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      buttonText="Read More"
                      className=""
                    />
                  );
                })}
          </div>
          {error !== null && (
            <div className="w-full h-[400px] bg-[#F8F7FC] shadow-2xl flex text-3xl font-semibold items-center justify-center rounded-lg">
              {error}
            </div>
          )}
          {currentArticles?.length === 0 && !error && (
            <div className="w-full h-[400px] bg-[#F8F7FC] shadow-2xl flex text-3xl font-semibold items-center justify-center rounded-lg">
              No related data
            </div>
          )}
          {/* Custom Pagination */}
          {currentArticles?.length > 0 && (
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsApi;
