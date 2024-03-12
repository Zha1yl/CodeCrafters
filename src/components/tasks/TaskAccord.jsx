import React, { useState } from "react";
import AccordTaskLess from "./AccordTaskLess";

const TaskAccord = ({ tasks }) => {
  const [openId, setOpenId] = useState(null);
  console.log(tasks);
  return (
    <ul className="accardionles">
      {tasks.results?.map((task, id) => (
        <>
          <AccordTaskLess
            key={id}
            onClick={() => setOpenId((prevId) => (prevId === id ? null : id))}
            task={task}
            isOpen={id === openId}
          />
        </>
      ))}
    </ul>
  );
};

export default TaskAccord;
