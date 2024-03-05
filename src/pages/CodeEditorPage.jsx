import React from "react";
import EditCode from "../components/codeEditor/EditCode";
import { Box } from "@chakra-ui/react";

const CodeEditorPage = () => {
  return (
    <Box minH="100vh" px={6} py={8}>
      <EditCode />
    </Box>
  );
};

export default CodeEditorPage;
