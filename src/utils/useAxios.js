import { useState, useEffect, useCallback } from "react";
import axios from "./axios";

const useAxios = (search = 's', page = 1) => { // default search because omdbapi cannot fetch all data
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    const result = await axios.get(`/?apikey=${process.env.REACT_APP_API_KEY}`, {
      params: {
        s: search,
        page
      }
    });
    const data = result.data;
    console.log('d', data)
    const normalizedData = data.Search.map(item => ({
      id: item.imdbID,
      title: item.Title,
      year: item.Year,
      poster: item.Poster,
    }));
    setMovies(normalizedData);
    setLoading(false);
  }, [page, search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // execute once only

  return { data: movies, loading, refetch: fetchData };
};

export default useAxios;