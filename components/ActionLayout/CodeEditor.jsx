"use client";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <div className={`flex flex-col h-full `}>
      <div className="relative flex-grow">
        <Editor
          height="100%"
          language="javascript"
          theme="vs-dark"
          value=""
          options={{
            fontSize: 12,
            minimap: { enabled: true },
            wordWrap: "on",
            wrappingIndent: "same",
          }}
        />
      </div>
    </div>
  );
};
export default CodeEditor;