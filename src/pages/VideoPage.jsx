import React, { useEffect } from "react";
import "../components/lessons/lesson.css";
import { useParams } from "react-router-dom";
import VideoAccord from "../videos/VideoAccord";
import { useLesson } from "../context/LessonContextProvider";

const VideoPage = () => {
  const { slug } = useParams();
  const { oneProject, getOneProject } = useLesson();

  useEffect(() => {
    // Вызываем функцию getOneProject при загрузке компонента с правильным slug
    getOneProject(slug);
  }, [slug]); // Зависимость добавлена, чтобы вызывать useEffect при изменении slug

  // Проверяем, что oneProject загружен и не undefined, перед отображением компонента
  if (!oneProject) {
    return <div>Loading...</div>;
  }

  // Используем данные из oneProject в компоненте
  return (
    <div className="container_lesson">
      <div className="algoritm"></div>
      <h1 className="h1__lesson">Видео</h1>
      <VideoAccord videos={oneProject.video} />
    </div>
  );
};

export default VideoPage;
