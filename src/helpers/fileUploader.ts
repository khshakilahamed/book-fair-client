/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const fileUploader = async (formData: FormData): Promise<string> => {
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dkpy2zq2x/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const fileUploadResponse = await res.json();

  return fileUploadResponse?.url;
};
