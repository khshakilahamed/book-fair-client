import biography from "./../../assets/images/categories/biography.jpg";
import cooking from "./../../assets/images/categories/cooking.jpg";
import soul from "./../../assets/images/categories/soul.jpg";
import music from "./../../assets/images/categories/music.webp";
import fantasy from "./../../assets/images/categories/fantasy.jpg";
import "./Categories.css";
import { HiOutlineMinus } from "react-icons/hi";

const Categories = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-10 xl:px-0 py-10">
      <div className="flex flex-col items-center gap-2">
        <span className="bg-gray-100 p-2 px-3 rounded uppercase font-bold">
          COLLECTIONS
        </span>
        <h2 className=" text-center font-bold text-4xl md:text-5xl">
          Browse Categories
        </h2>
        <p className="text-center text-gray-600 text-xl md:text-2xl">
          Reading books keeps you relax and helps reduce stress
        </p>
      </div>

      <div className="my-10 md:flex gap-5">
        <div className="md:w-1/2">
          <div className="w-full xs:grid grid-cols-2 gap-5">
            <div className="category-book-container">
              <img
                className="rounded-xl"
                src={biography}
                alt="biography book"
              />
              <div className="category-book-title rounded">
                <p className="uppercase font-bold">biography</p>
                <p className="uppercase flex items-center gap-1">
                  <HiOutlineMinus className="text-3xl font-thin" />
                  <span>browse books</span>
                </p>
              </div>
            </div>
            <div className="category-book-container pt-5 xs:pt-0">
              <img className="rounded-xl" src={cooking} alt="cooking book" />
              <div className="category-book-title rounded">
                <p className="uppercase font-bold">cooking</p>
                <p className="uppercase flex items-center gap-1">
                  <HiOutlineMinus className="text-3xl font-thin" />
                  <span>browse books</span>
                </p>
              </div>
            </div>
            <div className="category-book-container pt-5 xs:pt-0">
              <img className="rounded-xl" src={soul} alt="soul book" />
              <div className="category-book-title rounded">
                <p className="uppercase font-bold">encyclopedias</p>
                <p className="uppercase flex items-center gap-1">
                  <HiOutlineMinus className="text-3xl font-thin" />
                  <span>browse books</span>
                </p>
              </div>
            </div>
            <div className="category-book-container pt-5 xs:pt-0">
              <img className="rounded-xl" src={music} alt="music book" />
              <div className="category-book-title rounded">
                <p className="uppercase font-bold">Music</p>
                <p className="uppercase flex items-center gap-1">
                  <HiOutlineMinus className="text-3xl font-thin" />
                  <span>browse books</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 pt-5 md:pt-0 category-book-container">
          <img
            className="w-full rounded-xl"
            src={fantasy}
            alt="fantasy image"
          />
          <div className="category-book-title rounded">
            <p className="uppercase font-bold">Fantasy</p>
            <p className="uppercase flex items-center gap-1">
              <HiOutlineMinus className="text-3xl font-thin" />
              <span>browse books</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
