"use client";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <div className={`flex flex-col h-full `}>
      <div className="bg-miniNavBg flex items-center text-sm">
        <div className="bg-miniBoxBg text-miniBoxTx py-[1px] px-6">Main</div>
      </div>
      <div className="relative flex-grow">
        <Editor
          height="100%"
          language="javascript"
          theme="vs-dark"
          value=""
          options={{
            fontSize: 13,
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