import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Exclusive from "../../components/Exclusive/Exclusive";
import NewBooks from "../../components/NewBooks/NewBooks";

const Home = () => {
  return (
    <div>
      <Banner />
      <Exclusive />
      <NewBooks />
      <Categories />
    </div>
  );
};

export default Home;
