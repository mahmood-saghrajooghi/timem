import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkReact from "remark-react";
import RemarkCode from "./remarkCode";
import { defaultSchema } from "hast-util-sanitize";
import "github-markdown-css/github-markdown.css";
import { css } from "@emotion/react";

interface Props {
  doc: string;
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), "className"],
  },
};

const previewMarkdownBodyStyles = css`
  flex: 0 0 50%;
  padding: 12px;
  box-sizing: border-box;
  overflow: auto;
  color: #abb2bf;

  & pre {
    background-color: rgba(27, 31, 35, 0.45);
  }
`;

const Preview: React.FC<Props> = (props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, {
      createElement: React.createElement,
      sanitize: schema,
      remarkReactComponents: {
        code: RemarkCode,
      },
    })
    .processSync(props.doc).result;
  return <div css={previewMarkdownBodyStyles} className="preview markdown-body">{md}</div>;
};

export default Preview;
