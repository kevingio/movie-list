import { useState, useEffect, useCallback } from "react";
import Swal from 'sweetalert2';

import axios from "./axios";

const useAxios = ({
  keyword = 'superman', searchType = 'keyword', page = 1
}) => { // default keyword because omdbapi cannot fetch all data
  // if search type is keyword, it means api will return array, else it will return object
  const [data, setData] = useState(searchType === 'keyword' ? [] : {});
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    const result = await axios.get(`/?apikey=${process.env.REACT_APP_API_KEY}`, {
      params: {
        ...(searchType === 'keyword' ? { s: keyword } : { i: keyword }),
        page
      }
    });
    const data = result.data;
    if (searchType === 'keyword') {
      let normalizedData = [];
      if (data.Search) {
        normalizedData = data.Search.map(item => ({
          id: item.imdbID,
          title: item.Title,
          year: item.Year,
          poster: item.Poster,
          type: item.Type,
        }));
      }
      setData(normalizedData);
    } else {
      if (data.Error) {
        Swal.fire({
          icon: 'error',
          title: 'Movie not found',
          text: 'Please select correct movie',
        }).then(() => {
          window.location.assign('/');
        });
      } else {
        setData(data);
      }
    }
    setLoading(false);
  }, [searchType, keyword, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // execute once only

  return { data, loading, refetch: fetchData };
};

export default useAxios;