import React, { useRef, useState, useEffect } from "react";
import CodeLanguageSelector from "./CodeLanguageSelector";
import { CODE_SNIPPETS } from "../../helpers/const";
import OutputCode from "./OutputCode";
import { Editor } from "@monaco-editor/react";
import { Box, HStack, useToast } from "@chakra-ui/react";

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

  const [isTheme, setIsTheme] = useState(false);

  useEffect(() => {
    const updateThemeState = () => {
      setIsTheme(document.body.classList.contains("dark-theme"));
    };

    updateThemeState(); // Сразу обновляем тему

    const observer = new MutationObserver(updateThemeState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Box>
      <HStack spacing={4}>
        <Box width="50%">
          <CodeLanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            language={language}
            theme={isTheme ? "vs-dark" : "vs-light"}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            options={{
              suggest: {
                showWords: true,
                showVariables: true,
              },
            }}
          />
        </Box>
        <OutputCode
          editorRef={editorRef}
          language={language}
          isTheme={isTheme}
        />
      </HStack>
    </Box>
  );
};

export default EditCode;
