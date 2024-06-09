import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Editor, { useMonaco } from "@monaco-editor/react";
import { emmetHTML } from "emmet-monaco-es";
import { useEffect, useState } from "react";
import IframeRenderer from "./iframe-renderer";

type EditorWithPreviewProps = {
  defaultValue?: string;
};

export const EditorWithPreview = ({ defaultValue = "" }: EditorWithPreviewProps) => {
  const [html, setHTML] = useState("");
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      emmetHTML(monaco);
    }
  }, [monaco]);

  return (
    <ResizablePanelGroup direction="vertical" className="h-full w-full">
      <ResizablePanel>
        <div className="h-full">
          <Editor
            height="100vh"
            defaultLanguage="html"
            defaultValue={defaultValue}
            className="-ml-6"
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: 18,
            }}
            onChange={(value) => setHTML(value ?? "")}
          />
          ;
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <IframeRenderer htmlString={html}></IframeRenderer>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
