import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const location = useLocation();

  //   console.log(isLoading);

  if (isLoading) {
    return <Spinner />;
  }

  if (user?.email && !isLoading) {
    return children;
  }

  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
