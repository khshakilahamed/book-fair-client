import author1 from "./../../assets/images/authors/author1.jpg";
import author2 from "./../../assets/images/authors/author2.jpg";
import author3 from "./../../assets/images/authors/author3.jpg";
import author4 from "./../../assets/images/authors/author4.jpg";
import Carousel from "react-multi-carousel";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const CustomerReviews = () => {
  const authorsDetails = [
    {
      id: 1,
      name: "Lucy",
      image: author1,
      lead: "Team Leader",
      description:
        "Lectus proin nibh nisl condimentum id. Integer vitae justo eget magna fermentum. Malesuada fames ac turpis egestas sed tempus urna.",
    },
    {
      id: 2,
      name: "Janet",
      image: author2,
      lead: "Lead Designer",
      description:
        "quisque id diam vel. Bring to the table win-win survival strategies to ensure proactive domination. Eu consequat ac felis donecet.",
    },
    {
      id: 3,
      name: "Ellie Thomson",
      image: author3,
      lead: "SEO Specialist",
      description:
        "Tempor id eu nisl nunc mi ipsum faucibus vitae. Vestibulum sed arcu non odio euismod lacinia. Sit amet consectetur adipiscing elit duis tristique.",
    },
    {
      id: 4,
      name: "Henry",
      image: author4,
      lead: "SEO Specialist",
      description:
        "Tempor id eu nisl nunc mi ipsum faucibus vitae. Vestibulum sed arcu non odio euismod lacinia. Sit amet consectetur adipiscing elit duis tristique.",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 2,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <div className="bg-black py-20">
      <div className="max-w-[1280px] mx-auto px-10 xl:px-0">
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full md:w-[40%]">
            <h2 className="text-white text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pb-10">
              What our <br /> customers says
            </h2>
            <p className="text-gray-100">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. Capitalize on low hanging
              fruit to identify a ballpark value added activity to beta test.
            </p>
          </div>
          <div className="w-full md:w-[60%]">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              // customLeftArrow={<CiCircleChevLeft className="text-white text-3xl" />}
              // customRightArrow={<CiCircleChevRight className="text-white text-3xl" />}
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
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
              {authorsDetails.map((review) => (
                <div
                  className="bg-gray-800 text-gray-300 rounded-lg mx-5"
                  key={review.id}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <div>
                        <img
                          className="w-[60px] rounded-full"
                          src={review.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{review.name}</h2>
                        <h4>{review.lead}</h4>
                      </div>
                    </div>
                    <hr className="my-5" />
                    <p className="text-justify">{review.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;

/* <div className="flex flex-col items-center gap-2">
          <span className="bg-white p-2 px-3 rounded uppercase font-bold">
            This Month's
          </span>
          <h2 className="font-bold text-4xl md:text-5xl">Featured Authors</h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center">
            Hand picked by our expert Editors
          </p>
        </div> */
