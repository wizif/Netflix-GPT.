import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import MainContainer from "./Maincontainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer/>
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;