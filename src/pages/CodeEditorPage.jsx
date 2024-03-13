import React, { useState } from "react";
import EditCode from "../components/codeEditor/EditCode";
import { Box } from "@chakra-ui/react";

const CodeEditorPage = () => {
  const [isTheme, setIsTheme] = useState(false);

  const updateThemeState = () => {
    setIsTheme(document.body.classList.contains("dark-theme"));
  };

  return (
    <Box minH="95vh" px={6} py={8}>
      <EditCode isTheme={isTheme} />
    </Box>
  );
};

export default CodeEditorPage;
