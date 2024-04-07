import { useState, useEffect } from "react";
import axios from "axios";
import { formatNewsApiDate } from "utils/formatDate";

const useNewsData = (category, searchTerm, source, fromDate, toDate) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);
        setError(null);

        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const apiUrl = `https://newsapi.org/v2/everything?`;
        const searchParam = category
          ? `q=${category}`
          : searchTerm
          ? `q=${searchTerm}`
          : "";
        const sourceParam = source ? `&sources=${source}` : "";
        const dateParam =
          fromDate && toDate
            ? `&from=${formatNewsApiDate(fromDate)}&to=${formatNewsApiDate(
                toDate
              )}`
            : "";
        const token = apiKey && `&apiKey=${apiKey}`;

        const url = apiUrl + searchParam + sourceParam + dateParam + token;

        const response = await axios.get(url);

        setNewsData(response.data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [category, searchTerm, source, fromDate, toDate]);

  return {
    newsData,
    loading,
    error,
  };
};

export default useNewsData;
