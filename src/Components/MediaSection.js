import React, { useEffect } from "react";
import { Skeleton } from "antd";
import ListElement from "./listElement";
import CustomList from "./CustomList";
import { routeNames } from "../Constants/routes";
import { Link } from "react-router-dom";
import useGetMediaList from "../Hooks/useGetMediaList";

const MediaSection = ({ sectionId, sectionTitle }) => {
  const { fetchMediaList, mediaData, isLoading } = useGetMediaList();
  useEffect(() => {
    fetchMediaList(sectionId);
  }, []);

  const renderMediaItem = (item) => (
    <Link to={routeNames.buildPlayerRoute(item.Id)}>
      <ListElement obj={item} />
    </Link>
  );

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <CustomList
      title={sectionTitle}
      renderItem={renderMediaItem}
      data={mediaData?.Entities ?? []}
    />
  );
};

export default MediaSection;
