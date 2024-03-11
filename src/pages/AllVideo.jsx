import React from "react";
import { useNavigate } from "react-router-dom";
import { useLesson } from "../context/LessonContextProvider";

const AllVideo = (props) => {
  const { elem } = props;
  const { deleteLesson } = useLesson();
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      Title: {elem.title}
      {elem.is_author ? (
        <>
          <button onClick={() => deleteLesson(elem.id)}>Delete</button>
          {/* <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button> */}
        </>
      ) : null}
    </div>
  );
};

export default AllVideo;
