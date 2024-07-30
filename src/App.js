import React, { useState, useEffect } from 'react';
import {marked} from 'marked';
import './App.css';

const initialMarkdown = `# Heading 1
## Heading 2
[This is a link](https://www.freecodecamp.org)
\`inline code\`
\`\`\`
code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked.parse(markdown);
  }, [markdown]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Markdown Previewer</h1>
      <div className="row">
        <div className="col-md-6">
          <textarea
            id="editor"
            className="form-control"
            rows="20"
            value={markdown}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <div
            id="preview"
            className="border p-2"
            dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
