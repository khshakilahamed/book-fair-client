/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk } from "@reduxjs/toolkit";

interface ICredential {
  email: string;
  password: string;
}

interface LoginResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    user: {
      email: string;
      name: string;
    };
    accessToken: string;
  };
}

interface CurrentUserResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    user: {
      email: string;
      name: string;
    };
  };
}

export const userLogin = createAsyncThunk(
  "user/login",
  async (credentials: ICredential) => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const LoginResponse: LoginResponse = await res.json();

      const { user, accessToken } = LoginResponse.data;

      localStorage.setItem("token", accessToken);

      return { user, accessToken };
    } catch (error) {
      console.log(error);
    }
  }
);

const token = localStorage.getItem("token");

export const currentUser = createAsyncThunk("user/current-user", async () => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/auth/current-user", {
      method: "GET",
      headers: {
        authorization: token!,
      },
      //   credentials: "same-origin",
    });

    const responseData: CurrentUserResponse = await res.json();

    const { user } = responseData.data;

    return user;
  } catch (error) {
    console.log(error);
  }
});

export const userLogout = createAsyncThunk("user/logout", async () => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/auth/logout");

    const responseData: CurrentUserResponse = await res.json();

    localStorage.removeItem("token");

    const { user } = responseData.data;

    return user;
  } catch (error) {
    console.log(error);
  }
});
