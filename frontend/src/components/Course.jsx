import { Link } from "react-router-dom";
import List from "../../public/List.json";
import Card from "./Card";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="pt-28 items-center justify-center text-center ">
          <h1 className="text-2xl  md:text-4xl">
            Fiction Books - <span className="text-pink-500">BooksAdda</span>
          </h1>
          <p className="mt-12 text-[#686D76]">
            Dive into the world of fiction with{" "}
            <span className="text-pink-500">BooksAdda&apos;s</span> curated
            selection of novels. Our collection spans from timeless classic
            literature to contemporary bestsellers, offering a diverse array of
            stories that captivate and inspire. Whether you seek the enchanting
            prose of classic authors or the gripping narratives of modern
            storytellers, we have something to satisfy your literary cravings.
            Explore our categories, uncover hidden gems, and embark on new
            adventures through the pages of our carefully chosen books. Find
            your next favorite book today at BooksAdda, where the world of
            fiction awaits you.
          </p>
         <Link to={"/"}>
         <button
            className="bg-pink-500 text-white px-4 py-2 rounded-md 
            border-2 border-pink-500
           hover:bg-white hover:text-pink-500 hover:border-2
            hover:border-pink-500 duration-300 transition-all mt-6"
          >
            Contact Us
          </button>
         </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {List.map((item) => (
            <Card item={item} key={item?.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
