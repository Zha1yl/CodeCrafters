import React, { useEffect, useState } from "react";
import EditCode from "../components/codeEditor/EditCode";
import { Box } from "@chakra-ui/react";

const CodeEditorPage = () => {
  // ! функция которая меняет на темную тему
  const [isTheme, setIsTheme] = useState(false);
  const updateThemeState = () => {
    setIsTheme(document.body.classList.contains("dark-theme"));
  };
  useEffect(() => {
    updateThemeState();
    const observer = new MutationObserver(() => {
      updateThemeState();
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Box
      minH="95vh"
      // className={isTheme ? "output-lighttheme" : "output-darktheme"}
      px={6}
      py={8}
    >
      <EditCode />
    </Box>
  );
};

export default CodeEditorPage;
