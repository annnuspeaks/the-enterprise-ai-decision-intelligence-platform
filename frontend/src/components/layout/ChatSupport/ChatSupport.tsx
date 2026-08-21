import { useEffect } from "react";

declare global {
  interface Window {
    _ls?: ((...args: unknown[]) => void) & {
      q?: unknown[][];
    };
    _lsAlias?: Window["_ls"];
  }
}

const ChatSupport = () => {
  useEffect(() => {
    if (window._ls && document.getElementById("nexora-chat-support-script")) {
      return;
    }

    window._ls =
      window._ls ||
      ((...args: unknown[]) => {
        (window._ls!.q = window._ls!.q || []).push(args);
      });

    window._lsAlias = window._ls;

    const script = document.createElement("script");

    script.id = "nexora-chat-support-script";
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://app.chatsupport.co/api/client/get/script/LS-8309f62e";

    document.head.appendChild(script);

    window._ls("init", {
      projectId: "LS-8309f62e",
    });

    return () => {
      // Keep the ChatSupport instance alive globally.
      // Do not remove the script during route changes.
    };
  }, []);

  return null;
};

export default ChatSupport;
