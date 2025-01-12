//import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
//fetch data form the server
//const useGenres = () => useData<Genre>("/genres")

//static data included in the project
const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;