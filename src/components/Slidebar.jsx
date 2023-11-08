import { useEffect, useState, useRef } from "react";
import MovieApi from "../Utils/MovieApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slidebar() {
  const [movieList, setMoviesList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    MovieApi.getTrendingVideos().then((resp) => {
      console.log(resp.data.results);
      setMoviesList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth-110;
    element.scrollIntoView({});
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth-110;
    element.scrollIntoView({});
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[45px] mx-8 absolute
        mt-[305px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block  text-white text-[45px] mx-8 absolute
        mt-[305px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 
    scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            key={index}
            alt={`Backdrop ${index}`}
            className="min-w-full md:h-[710px] object-cover object-top   mr-5  rounded-lg 
            hover:border-[3px] border-gray-300 transition-all duration-100 ease-in" 
          />
        ))}
      </div>
    </div>
  );
}

export default Slidebar;
