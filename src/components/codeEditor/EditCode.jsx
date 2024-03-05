import React, { useRef, useState } from "react";
import CodeLanguageSelector from "./CodeLanguageSelector";
import { CODE_SNIPPETS } from "../../helpers/const";
import OutputCode from "./OutputCode";
import { Editor } from "@monaco-editor/react";

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
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <CodeLanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
        <OutputCode editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default EditCode;
