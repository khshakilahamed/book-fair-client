import author1 from "./../../assets/images/authors/author1.jpg";
import author2 from "./../../assets/images/authors/author2.jpg";
import author3 from "./../../assets/images/authors/author3.jpg";
import author4 from "./../../assets/images/authors/author4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

const Authors = () => {
  const authorsDetails = [
    {
      id: 1,
      name: "Lucy",
      image: author1,
      category: "Thriller Writer",
      description:
        "Ornare suspendisse sed nisi lacus sed viverra. Sed blandit libero volutpat sed. Auctor...",
    },
    {
      id: 2,
      name: "Janet",
      image: author2,
      category: "Financial Analyst",
      description:
        "Non quam lacus suspendisse faucibus interdum posuere. Adipiscing vitae proin sagittis nisl rhoncus...",
    },
    {
      id: 3,
      name: "Ellie Thomson",
      image: author3,
      category: "Romance Writer",
      description:
        "Interdum velit laoreet id donec ultrices tincidunt. Purus faucibus ornare suspendisse sed. Vitae...",
    },
    {
      id: 4,
      name: "Henry",
      image: author4,
      category: "Biography Writer",
      description:
        "Interdum velit laoreet id donec ultrices tincidunt. Purus faucibus ornare suspendisse sed. Vitae...",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1280, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 20,
    },
    smallMobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 10,
    },
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="flex flex-col items-center gap-2">
          <span className="bg-white p-2 px-3 rounded uppercase font-bold">
            This Month's
          </span>
          <h2 className="font-bold text-4xl md:text-5xl">Featured Authors</h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center">
            Hand picked by our expert Editors
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {authorsDetails.map((author) => (
              <div className="bg-white rounded-lg mx-5" key={author.id}>
                <div className="flex flex-col items-center justify-center p-6">
                  <img
                    className="w-[100px] rounded-full"
                    src={author.image}
                    alt=""
                  />
                  <h2 className="text-2xl font-bold py-2">{author.name}</h2>
                  <h4 className="font-semibold uppercase">{author.category}</h4>
                  <p className="text-center py-2">{author.description}</p>
                  <p className="flex items-center justify-center gap-2">
                    <FiFacebook className="cursor-pointer" />
                    <FiTwitter className="cursor-pointer" />
                    <FiInstagram className="cursor-pointer" />
                    <FiYoutube className="cursor-pointer" />
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Authors;
