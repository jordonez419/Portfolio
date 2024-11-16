import { useEffect } from "react";

const useDrift = (driftId) => {
  useEffect(() => {
    const driftScript = document.createElement("script");
    driftScript.type = "text/javascript";
    driftScript.async = true;
    driftScript.src = `https://js.driftt.com/include/${
      Math.ceil(new Date() / 300000) * 300000
    }/${driftId}.js`;

    driftScript.onload = () => {
      window.drift.SNIPPET_VERSION = "0.3.1";
      window.drift.load(driftId);
    };

    document.head.appendChild(driftScript);

    return () => {
      if (driftScript) {
        document.head.removeChild(driftScript);
      }
    };
  }, [driftId]);
};



export default useDrift;
