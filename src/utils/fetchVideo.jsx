import axios from "axios"
import { useState } from "react";
const API_KEY = "AIzaSyDMfCLDOeR4inLoBg3Qj5IweGuVRpAKvLs";


const useYouTubeVideo = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const extractVideoId = (url) => {
    let videoId = "";
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === "youtu.be") {
        videoId = urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes("youtube.com")) {
        videoId = urlObj.searchParams.get("v");
      }
    } catch (e) {
      setError("Invalid YouTube URL.");
      console.log(e);
    }
    return videoId;
  };

  const fetchVideoDetails = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${API_KEY}&part=snippet,contentDetails,statistics`
      );
      if (response.data.items.length > 0) {
        setData(response.data.items[0]);
        setError(null);
        return response.data.items[0]; // Return the fetched data
      } else {
        setError("No video found with the provided URL.");
      }
    } catch (error) {
      setError("Failed to fetch video details.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getVideoDetails = async (url) => {
    const videoId = extractVideoId(url);
    if (videoId) {
      return await fetchVideoDetails(videoId); // Return the fetched data
    } else {
      setError("Invalid YouTube URL.");
    }
  };

  return { data, error, loading, getVideoDetails };
};

export {useYouTubeVideo};