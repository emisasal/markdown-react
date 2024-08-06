import Markdown from "markdown-to-jsx"

import mockNoticiaInterna from "../mockNoticiaInterna.json"

const MarkdownToJsx = () => {
  return (
    <>
      <hr />
      <h2>-- Markdown-to-JSX --</h2>
      <div className="markdownToJsx">
        <Markdown options={{ wrapper: "article" }}>
          {mockNoticiaInterna.Content.Text}
        </Markdown>
      </div>
    </>
  )
}

export default MarkdownToJsx
