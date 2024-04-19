import useGenres from "./useGenres";

const usePlatform = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((p) => p.id == id);
};

export default usePlatform;
