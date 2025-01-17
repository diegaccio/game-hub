//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
//import genres from "../data/genres";
import apiClient from "../services/api-client";
import { DataResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
//fetch data form the server
//const useGenres = () => useData<Genre>("/genres")

//static data included in the project
//const useGenres = () => ({data: genres, isLoading: false, error: null});

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<DataResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres }, //this mast be a DataResponse <Genre> object
  });

export default useGenres;
