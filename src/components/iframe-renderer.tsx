import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
const IframeRenderer = ({ htmlString }: { htmlString: string }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (!iframeDoc) {
        toast.error("Sorry napsal jsem špatnej kód a nefungje to. Kdyby tě to zajímalo, tak chyba je v tom že z nějekého důvodu je iframeDoc null");
        return;
      }
      iframeDoc.open();
      iframeDoc.write(htmlString);
      iframeDoc.close();
    }
  }, [htmlString]);
  return <iframe ref={iframeRef} className="w-full h-full border-none" sandbox="allow-scripts allow-same-origin" title="Rendered Iframe" />;
};
export default IframeRenderer;
