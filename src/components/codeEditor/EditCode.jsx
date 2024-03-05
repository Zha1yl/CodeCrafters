import React, { useRef, useState } from "react";
import CodeLanguageSelector from "./CodeLanguageSelector";
import { CODE_SNIPPETS } from "../../helpers/const";
import OutputCode from "./OutputCode";
import { Editor } from "@monaco-editor/react";
import { Box, HStack } from "@chakra-ui/react";

const EditCode = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };
  return (
    <Box>
      <HStack spacing={4}>
        <Box width="50%">
          <CodeLanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <OutputCode editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default EditCode;
