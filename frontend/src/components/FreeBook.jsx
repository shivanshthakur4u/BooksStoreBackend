import List from "../../public/List.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

function FreeBook() {
  const freeData = List.filter((data) => data.category === "Free");
  // console.log("books data:", freeData)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">
            New Free Books Available
          </h1>
          <p className="text-[#686D76]">
            We&apos;re excited to announce that new free books are being added
            to our collection every day! Don&apos;t miss out—be sure to check
            them out regularly and discover your next great read!.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {freeData?.map((item) => (
              <Card item={item} key={item?.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
