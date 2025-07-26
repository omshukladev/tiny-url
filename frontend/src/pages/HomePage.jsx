import { useState } from "react";
import InputContainer from "../components/InputContainer";
import OutputContainer from "../components/OutputContainer";
import { axiosInstance } from "../lib/axios.js";
import { unwrapResponse } from "../lib/unwrapResponse.js";
import toast from "react-hot-toast";

const HomePage = () => {
  const [originalUrl, setOriginalUrl] = useState(""); //The URL entered by the user.
  const [shortUrl, setShortUrl] = useState(""); //The URL returned by the backend

  const handleShorten = async () => {
    if (!originalUrl) {
      return toast.error("Please enter a URL"); // if the url is not send by client error message from toast
    }
    try {
      const res = await axiosInstance.post("/api/short", { originalUrl }); //end request to post with req.body
      const data = unwrapResponse(res);
      setShortUrl(data.shortUrl); //saves the result -->https://render.com/abc123 its takes from backend
      toast.success("URL shortened!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to shorten URL");
    }
  };

  return (
    <div className='p-6 max-w-2xl mx-auto space-y-8'>
      <div className='text-center space-y-2'>
        <h1 className='text-4xl font-bold'>Shorten Your URL</h1>
        <p className='text-gray-500'>Paste a long URL and get a short one instantly!</p>
      </div>
      <InputContainer
        originalUrl={originalUrl}
        setOriginalUrl={setOriginalUrl}
        handleShorten={handleShorten}
      />
      <OutputContainer shortUrl={shortUrl} /> {/* calling backend shortUrl */}
    </div>
  );
};

export default HomePage;
