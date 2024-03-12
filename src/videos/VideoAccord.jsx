import React, { useState } from "react";
import AccordVideoLess from "./AccordVideoLess";

const VideoAccord = ({ videos }) => {
  const [openId, setOpenId] = useState(null);
  console.log(videos);
  return (
    <ul className="accardionles" style={{ marginLeft: "50px" }}>
      <video controls src={videos} width="100%"></video>
    </ul>
  );
};

export default VideoAccord;
