import { css } from "@emotion/react";
import React, { useCallback, useEffect } from "react";
import useCodeMirror from "./hooks/useCodemirror";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const wrapperStyles = css`
  background-color: #2c313a;
`

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    (state) => onChange(state.doc.toString()),
    [onChange]
  );
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView]);

  return <div className="h-full" css={wrapperStyles} ref={refContainer}></div>;
};

export default Editor;
