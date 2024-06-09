import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { EditorWithPreview } from "./editor-with-preview";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";

type LabProps = {
  markdown: string;
};

export const Lab: React.FC<LabProps> = ({ markdown }) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-screen w-screen">
      <ResizablePanel>
        <Markdown className="h-screen w-full prose prose-md prose-code:text-base prose-pre:bg-gray-100 pt-4 px-8" rehypePlugins={[rehypeHighlight]}>
          {markdown}
        </Markdown>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <EditorWithPreview></EditorWithPreview>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
