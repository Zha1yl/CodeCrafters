import React, { useEffect, useState } from "react";
import { useLesson } from "../context/LessonContextProvider";
import { useSearchParams } from "react-router-dom";
import AllVideo from "./AllVideo";

const VideoPage = () => {
  const { lessons, getLessons, pages } = useLesson();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);
  // const getPagesCount = () => {
  //   const pageCountArr = [];
  //   for (let i = 1; i <= pages; i++) {
  //     pageCountArr.push(i);
  //   }
  //   return pageCountArr;
  // };
  // console.log(getPagesCount());
  useEffect(() => {
    getLessons();
  }, []);
  // useEffect(() => {
  //   setSearchParams({ page: currentPage });
  // }, [currentPage]);

  // if (currentPage < 1) setCurrentPage(1);
  // if (currentPage > pages) setCurrentPage(pages);
  return (
    <div style={{ paddingTop: "200px", color: "black" }}>
      <h1>LESSON LIST</h1>
      {lessons.map((elem) => (
        <AllVideo elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default VideoPage;
