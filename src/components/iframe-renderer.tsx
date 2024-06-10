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

      const titleElement = iframeDoc.getElementsByTagName("title")[0];
      if (titleElement && titleElement.textContent) {
        document.title = titleElement.textContent;
      }
    }
  }, [htmlString]);
  return (
    <iframe
      ref={iframeRef}
      className="w-full h-full border-none"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
      title="Rendered Iframe"
    />
  );
};
export default IframeRenderer;
