import { ChevronLeft, ChevronRight } from "lucide-react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { EditorWithPreview } from "./editor-with-preview";
import { Button } from "./ui/button";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";

type LabProps = {
  markdown: string;
  onNext: () => void;
  onPrev: () => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
};

export const Lab: React.FC<LabProps> = ({ markdown, onPrev, onNext, nextDisabled, prevDisabled }) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-screen w-screen">
      <ResizablePanel className="h-screen flex flex-col" defaultSize={1 / 3}>
        <Markdown
          className="flex-grow w-full overflow-scroll pb-32 prose prose-code:before:content-[''] prose-p:before:content-[''] prose-code:after:content-[''] prose-p:after:content-[''] prose-code:font-mono prose-code:bg-gray-100 prose-code:rounded prose-code:p-1 prose-code:text-sm prose-blockquote:font-normal  prose-pre:bg-gray-100 pt-4 px-8 prose-blockquote:not-italic"
          rehypePlugins={[rehypeHighlight, remarkGfm, rehypeRaw]}
        >
          {markdown}
        </Markdown>

        <span className="p-4 border-t border-gray-200 flex gap-2 items-center">
          HTML Tutorial
          <div className="flex-grow"></div>
          <Button onClick={onPrev} disabled={prevDisabled} size="icon">
            <ChevronLeft></ChevronLeft>
          </Button>
          <Button onClick={onNext} disabled={nextDisabled} size="icon">
            <ChevronRight />
          </Button>
        </span>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={2 / 3}>
        <EditorWithPreview></EditorWithPreview>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
