import Authors from "../../components/Authors/Authors";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Exclusive from "../../components/Exclusive/Exclusive";
import NewBooks from "../../components/NewBooks/NewBooks";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner />
      <Exclusive />
      <NewBooks />
      <Categories />
      <Authors />
      <Subscribe />
    </div>
  );
};

export default Home;
