//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
//import genres from "../data/genres";
import ApiClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
//fetch data form the server
//const useGenres = () => useData<Genre>("/genres")

//static data included in the project
//const useGenres = () => ({data: genres, isLoading: false, error: null});

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres, //this mast be a DataResponse <Genre> object
  });

export default useGenres;
