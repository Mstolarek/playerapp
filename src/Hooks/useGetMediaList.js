import { useState } from "react";
import { apiClient } from "../Services/apiClient";

const useGetMediaList = () => {
  const [mediaData, setMediaData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchMediaList = async (mediaListId) => {
    setIsLoading(true);
    try {
      const { data } = await apiClient().post("/Media/GetMediaList", {
        MediaListId: mediaListId,
        IncludeCategories: false,
        IncludeImages: true,
        IncludeMedia: false,
        PageNumber: 1,
        PageSize: 15,
      });
      setMediaData(data);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, fetchMediaList, mediaData };
};

export default useGetMediaList;
