import React, { createContext, useContext, useState } from "react";
import { apiClient } from "../Services/apiClient";
import { setInstanceToken } from "../Services/apiClient";

export const medaiDefaultValue = {
  mediaData: {},
  getMediaList: () => {},
};

export const MediaContext = createContext(medaiDefaultValue);

export const MediaContextProvider = ({ children }) => {
  const [mediaData, setMediaData] = useState({});

  const getMediaList = async () => {
    const { data } = await apiClient().post("/Media/GetMediaList", {
      MediaListId: 2,
      IncludeCategories: false,
      IncludeImages: true,
      IncludeMedia: false,
      PageNumber: 0, //0
      PageSize: 15,
    });
    setMediaData(data);
  };

  return (
    <MediaContext.Provider value={{ getMediaList, mediaData }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMediaContext = () => {
  const context = useContext(MediaContext);
  return context;
};
