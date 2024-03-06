import React, { useState } from "react";
import AccordItemLess from "./AccordItemLess";

const LessonAccord = ({ faglist }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <ul className="accardionles">
      {faglist.map((fagItem, id) => (
        <>
          <AccordItemLess
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

export default LessonAccord;
