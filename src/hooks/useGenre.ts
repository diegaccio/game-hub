import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
  const { data } = useGenres();

  return data.results.find((genre) => genre.id === genreId);
};

export default useGenre;
