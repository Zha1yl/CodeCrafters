// import React, { useRef, useEffect, useState } from "react";
// import "../components/lessons/lesson.css";
// import { useNavigate } from "react-router-dom";
// import { useLesson } from "../context/LessonContextProvider";

// const AccordVideoLess = ({ slug, project, onClick, isOpen }) => {
//   const { getOneProject, oneProject } = useLesson();
//   const itemRef = useRef(null);
//   const [itemHeight, setItemHeight] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (slug) {
//       getOneProject(slug);
//     }
//   }, [slug]); // Вызываем функцию getOneProject только при изменении slug

//   useEffect(() => {
//     setItemHeight(isOpen ? itemRef.current.scrollHeight : 0);
//   }, [isOpen]); // Обновляем высоту элемента при изменении isOpen

//   return (
//     <li className="accardionles-item">
//       <button className="accardionles-header" onClick={onClick}>
//         {project.title}
//       </button>
//       <div
//         className="accardionles-colop"
//         style={{
//           height: `${itemHeight}px`,
//         }}
//       >
//         <div className="accardionles-body" ref={itemRef}>
//           <p className="accardionles__text">{project.description}</p>
//           {oneProject && (
//             <iframe
//               id="fancybox-frame"
//               allowFullScreen
//               webkitAllowFullScreen
//               mozAllowFullScreen
//               name="fancybox-frame1710248550560"
//               frameBorder="0"
//               hspace="0"
//               scrolling="auto"
//               src={oneProject.video}
//             ></iframe>
//           )}
//         </div>
//       </div>
//     </li>
//   );
// };

// export default AccordVideoLess;
