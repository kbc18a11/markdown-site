import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const DisplayMarkdown = () => {
  const urlParams = useParams<{ id: string }>();

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
      {urlParams}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};
