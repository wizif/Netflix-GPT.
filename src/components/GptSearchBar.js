import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load your Gemini API key from environment
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); // or process.env...

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    console.log(query);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me names of 5 movies, comma separated like: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(gptQuery);
      const response = await result.response.text();

      console.log("Gemini Response:", response);

      const gptMovies = response.split(",").map((movie) => movie.trim());

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Gemini API error:", error);
      // TODO: Show user-friendly error
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
