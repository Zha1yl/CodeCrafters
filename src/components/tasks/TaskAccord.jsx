import React, { useState } from "react";
import AccordTaskLess from "./AccordTaskLess";
import EditCode from "../codeEditor/EditCode";

const TaskAccord = ({ faglist }) => {
  const [openId, setOpenId] = useState(null);
  console.log(faglist);
  return (
    <ul className="accardionles">
      {faglist.results?.map((fagItem, id) => (
        <>
          <AccordTaskLess
            key={id}
            onClick={() => setOpenId((prevId) => (prevId === id ? null : id))}
            fagItem={fagItem}
            isOpen={id === openId}
          />
        </>
      ))}
    </ul>
  );
};

export default TaskAccord;
