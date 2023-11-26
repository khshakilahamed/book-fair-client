import "./Banner.css";
import rightBg from "./../../assets/images/banner-bg.png";
import { HiOutlineBookOpen } from "react-icons/hi";
import { SiTheconversation } from "react-icons/si";
import { SlReload } from "react-icons/sl";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner ">
      <div className="banner-main md:h-[70vh] md:relative">
        <div className="flex flex-col-reverse md:flex-row w-full h-full max-w-[1280px]  px-4 py-10 mx-auto">
          <div className="banner-main-left md:w-[40%] flex justify-center items-center h-full py-10">
            <div className="flex flex-col text-center md:text-start gap-3">
              <h2 className="font-bold text-4xl md:text-5xl">
                Read <span className="text-error">PDF Books</span> Online
              </h2>
              <p className="text-xl md:text-2xl text-gray-600">
                Let customers read books online without leaving website
              </p>
              <div>
                <Link to="/books">
                  <button className="btn btn-error text-white">Explore</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="banner-main-right md:w-[60%] flex justify-center items-center">
            <img className="w-1/2 md:w-auto md:h-full" src={rightBg} alt="" />
          </div>
        </div>

        <div className="max-w-[1280px] bg-white mx-auto flex flex-wrap justify-between px-10 rounded shadow md:absolute left-0 right-0 bottom-[-70px]">
          <div className="flex items-center gap-3 my-5">
            <div className="bg-black p-2 rounded">
              <HiOutlineBookOpen className="text-4xl text-white" />
            </div>
            <div>
              <p className="font-bold">READ BOOKS ONLINE</p>
              <p className="text-sm text-gray-500">OVER MILLIONS OF BOOKS</p>
            </div>
          </div>
          <div className="flex items-center gap-3 my-10">
            <div className="bg-black p-2 rounded">
              <SiTheconversation className="text-4xl text-white" />
            </div>
            <div>
              <p className="font-bold">FREE SHIPPING</p>
              <p className="text-sm text-gray-500">ALL ACROSS THE WORLD</p>
            </div>
          </div>
          <div className="flex items-center gap-3 my-5">
            <div className="bg-black p-2 rounded">
              <SlReload className="text-4xl text-white" />
            </div>
            <div>
              <p className="font-bold">30 DAYS RETURN</p>
              <p className="text-sm text-gray-500">SIMPLE RETURN POLICY</p>
            </div>
          </div>
          <div className="flex items-center gap-3 my-5">
            <div className="bg-black p-2 rounded">
              <RiSecurePaymentLine className="text-4xl text-white" />
            </div>
            <div>
              <p className="font-bold">SECURED PAYMENT</p>
              <p className="text-sm text-gray-500">SECURED TRANSACTION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
