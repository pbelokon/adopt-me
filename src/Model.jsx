import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Model({ children }) {
  const elRef = useRef(null); // ref is a container that would always be the same
  // we don't use const because every time we use document.thomething it will still get
  // called but the disposed of and it is very slaw
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modelRoot = document.getElementById("modal");
    modelRoot.appendChild(elRef.current);

    return () => modelRoot.removeChild(elRef.current); // when component unmounts cleaning function
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
}
