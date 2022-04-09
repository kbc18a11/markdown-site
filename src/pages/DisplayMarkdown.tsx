import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reducer, initialState } from 'stores/MarkdownTextListStore';

export const DisplayMarkdown = () => {
  const urlParams = useParams<{ id: string }>();

  const [markdownTextList] = useReducer(reducer, initialState);

  // 表示対象のMarkdown
  const markdownText = markdownTextList[Number(urlParams.id)];

  const [markdown] = useState(`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`);

  return (
    <div>
      {markdownText.name}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};
