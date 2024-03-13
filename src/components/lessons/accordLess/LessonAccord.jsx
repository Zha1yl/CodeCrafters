import React, { useState } from "react";
import AccordItemLess from "./AccordItemLess";

const LessonAccord = ({ projects }) => {
  const [openId, setOpenId] = useState(null);
  console.log(projects);
  return (
    <ul className="accardionles">
      {projects?.map((project, id) => (
        <>
          <AccordItemLess
            key={id}
            onClick={() => setOpenId((prevId) => (prevId === id ? null : id))}
            project={project}
            isOpen={id === openId}
          />
        </>
      ))}
    </ul>
  );
};

export default LessonAccord;
