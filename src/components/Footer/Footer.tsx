import {
  TbBrandFacebookFilled,
  TbBrandTwitterFilled,
  TbBrandDiscordFilled,
} from "react-icons/tb";
import { LuInstagram } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="max-w-[1280px] mx-auto py-16">
          <div className="grid grid-cols-4 gap-10">
            <div>
              <h1 className="text-white text-2xl font-bold">Publishers</h1>
              <ul className="text-gray-400 py-3">
                <li>Bestsellers</li>
                <li>Interviews</li>
                <li>Authors</li>
                <li>Help (FAQ)</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">Contact</h1>
              <p className="text-gray-400 py-3">
                Stay in touch with everything ChapterOne, follow us on social
                media and learn about new promotions.
              </p>
              <div className="flex gap-3 text-2xl text-gray-400">
                <TbBrandFacebookFilled />
                <TbBrandTwitterFilled />
                <LuInstagram />
                <TbBrandDiscordFilled />
              </div>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">News & Update</h1>
              <p className="text-gray-400 py-3">
                We’d love it if you subscribed to our newsletter! You’ll love it
                too.
              </p>
              <div className=" flex justify-between px-3 py-2 border border-gray-400 rounded">
                <input
                  className="bg-transparent outline-none text-white"
                  type="text"
                  placeholder="Email..."
                />
                <button className="text-2xl text-gray-400">
                  <BsFillSendFill />
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">News & Update</h1>
              <p className="text-gray-400 py-3">
                We’d love it if you subscribed to our newsletter! You’ll love it
                too.
              </p>
              <div className=" flex justify-between px-3 py-2 border border-gray-400 rounded">
                <input
                  className="bg-transparent outline-none text-white"
                  type="text"
                  placeholder="Email..."
                />
                <button className="text-2xl text-gray-400">
                  <BsFillSendFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="max-w-[1280px] mx-auto text-white text-center py-8 uppercase lett">
          &copy; {new Date().getFullYear()} BookFair. All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
