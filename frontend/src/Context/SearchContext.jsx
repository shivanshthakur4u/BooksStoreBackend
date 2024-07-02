import { createContext, useEffect, useState } from "react";
import useDebounce from "../lib/useDebounce";
import axios from "axios";
import PropTypes from "prop-types";
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);
  const [booksData, setData] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/book?q=${debouncedValue}`
        );
        setData(response?.data?.books);
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();
  }, [debouncedValue]);
  return (
    <SearchContext.Provider value={{setSearch, booksData }}>
         {
            children
         }
    </SearchContext.Provider>
  )
};

SearchProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  