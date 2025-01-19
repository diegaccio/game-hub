import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ms from "ms";
import ApiClient from "../services/api-client";
//import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

//static data
//const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms, //this mast be a DataResponse <Platform> object
  });

export default usePlatforms;
