import MainLayout from "./Layouts/MainLayout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { currentUser } from "./routes/features/user/userActions";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(currentUser());
  }, [dispatch]);

  if (user.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
