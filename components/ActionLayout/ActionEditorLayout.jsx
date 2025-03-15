"use client";
import Split from "react-split";
import ActionTable from "./ActionTable";
import CodeEditor from "./CodeEditor";

const ActionEditorLayout = () => {
   return (
      <div className="h-[calc(100vh-35vh)]">
         <Split
            className="flex h-[65vh] mt-4"
            sizes={[60, 40]}
            minSize={200}
            gutterSize={8}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="horizontal"
            cursor="col-resize"
         >
            {/* Left Pane (Table) */}
            <ActionTable />

            {/* Right Pane (Placeholder for Code Editor) */}
            <div className="bg-muted p-2 rounded">
               <CodeEditor />
            </div>
         </Split>
      </div>
   );
};

export default ActionEditorLayout;