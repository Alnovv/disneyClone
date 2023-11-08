import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import axios from "axios";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMoviecard from "./HrMoviecard";

const movieUrl = "https://api.themoviedb.org/3/";
const api_key = "2780c3a3d29210f5c4d269f9dc70a490";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    const getMovieByGenreId = async () => {
      try {
        const response = await axios.get(
          `${movieUrl}discover/movie?api_key=${api_key}&with_genres=${genreId}`
        );
        setMovieList(response.data.results);
      } catch (error) {
        console.error("Error fetching movies by genre:", error);
      }
    };

    getMovieByGenreId();
  }, [genreId]);
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className='relative'>
    <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
    className={`text-[50px] text-white
      p-2 z-10 cursor-pointer 
       hidden md:block absolute
       ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>

<div ref={elementRef} className='flex overflow-x-auto gap-8
scrollbar-hide scroll-smooth pt-4 px-3 pb-4'>
   {movieList.map((item)=>(
      <>
     {index_%3==0?<HrMoviecard movie={item}/>:<MovieCard movie={item} />}
      </> 
   ))}
</div>
<IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
      className={`text-[50px] text-white hidden md:block
      p-2 cursor-pointer z-10 top-0
       absolute right-0 
       ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
</div>
  );
};

MovieList.propTypes = {
  genreId: PropTypes.number.isRequired,
  index_: PropTypes.number.isRequired,
};

export default MovieList;
