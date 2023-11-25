export const getBaseURL = (): string => {
  //   return import.meta.env.VITE_APP_LOCAL_URL as string;
  return import.meta.env.VITE_APP_SERVER_URL as string;
};
