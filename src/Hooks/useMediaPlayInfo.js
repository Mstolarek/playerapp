import React, { useState } from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import { apiClient } from "../Services/apiClient";

const useMediaPlayInfo = () => {
  const [mediaInfo, setMediaInfo] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { user } = useAuthContext();

  const getMediaInfo = async (Id) => {
    setIsLoading(true);

    try {
      const { data } = await apiClient().post("/Media/GetMediaPlayInfo", {
        MediaId: parseInt(Id),
        StreamType: user.isAnonymous ? "TRIAL" : "MAIN",
      });
      setMediaInfo(data);
    } catch (e) {
      if ((Error.status = 403)) {
        setErrorMessage(
          "Unavailable Video, Consider Subscription for more content"
        );
      } else if (Error.status) {
        setErrorMessage("Unknown Error ocured , please go back");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { mediaInfo, isLoading, getMediaInfo, errorMessage };
};

export default useMediaPlayInfo;
