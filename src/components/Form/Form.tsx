import InputType from "../InputType/InputType";
import bookIcon from "./../../assets/images/book-icon.png";
import { Link } from "react-router-dom";

interface IFormType {
  formType: string;
  submitBtn: string;
  formTitle: string;
}

const Form = ({ formType, submitBtn, formTitle }: IFormType) => {
  return (
    <div className="w-[380px] mx-auto bg-gray-100 p-10 rounded-lg">
      <div>
        <div className="flex justify-center">
          <img className="w-[100px] h-[100px]" src={bookIcon} alt="bookIcon" />
        </div>
        <h2 className="text-2xl font-bold text-center my-5">{formTitle}</h2>
        <form className="flex flex-col gap-3">
          {/* Switch statement */}
          {(() => {
            switch (true) {
              case formType === "register": {
                return (
                  <>
                    <div className="flex flex-col">
                      <InputType
                        id="name"
                        label="Name"
                        labelClassName="text-lg font-semibold"
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                        className="outline-none border rounded-lg px-2 py-1"
                      />
                    </div>
                  </>
                );
              }
            }
          })()}
          <div className="flex flex-col">
            <InputType
              id="email"
              label="Email"
              labelClassName="text-lg font-semibold"
              name="email"
              placeholder="Email address"
              type="email"
              className="outline-none border rounded-lg px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <InputType
              id="password"
              label="Password"
              labelClassName="text-lg font-semibold"
              name="password"
              placeholder="Password"
              type="password"
              className="outline-none border rounded-lg px-2 py-1"
            />
          </div>
          <div>
            {formType === "login" ? (
              <p>
                Not registered yet? Register{" "}
                <Link
                  to="/auth/register"
                  className="link text-blue-700 font-bold"
                >
                  Here !
                </Link>
              </p>
            ) : (
              <p>
                Already user? Please{" "}
                <Link to="/auth/login" className="link text-blue-700 font-bold">
                  Login !
                </Link>
              </p>
            )}
          </div>

          <button className="btn btn-error mt-5">{submitBtn}</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
