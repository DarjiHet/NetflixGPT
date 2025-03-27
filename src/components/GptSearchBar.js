import React, { useRef } from 'react'
import lang from '../utils/langConst'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, OPENAI_KEY } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import { GoogleGenerativeAI } from "@google/generative-ai";


const GptSearchBar = () => {
    const genAI = new GoogleGenerativeAI(OPENAI_KEY); // Replace with your API key
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    // search movie in tmdb
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=true&language=en-US&page=1",
            API_OPTIONS
        );

        const json = await data.json()

        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        //make api call to gpt api and get movie results

        const gptQuery = "Act as a Movie Rcommendation system and suggest some movies for the query" + searchText.current.value + "only give me names of 5 movies, comma seperated like the example result given ahead. Examle Result: Gadar, Sholay, Don, Golmaal, Koi Mil gaya";
        let text = "";
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
            // const query = "Suggest 5 popular Indian retro movies, comma-separated.";
            const result = await model.generateContent(gptQuery);
            text = result.response.text();
            console.log(text);
        } catch (error) {
            
        }

        if(!text){
            // console.log("Error")
        }

        const gptMovies = text.split(",");

        // for each movie i will search TMDB API

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({movieNames: gptMovies, movieResult: tmdbResults}));
    };

    return (
        <div className="pt-[10%] flex justify-center">
            <form className=" w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type="text"
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[langKey].gptSerachPlaceholder}
                />
                <button className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                    onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar