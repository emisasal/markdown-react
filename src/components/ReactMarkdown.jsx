import Markdown from "react-markdown"
import gfm from "remark-gfm"
import mockNoticiaInterna from "../mockNoticiaInterna.json"

const ReactMarkdown = () => {
  return (
    <>
      <hr />
      <h2>-- React-Markdown --</h2>
      <div className="reactMarkdown">
        <Markdown remarkPlugins={[gfm]}>
          {mockNoticiaInterna.Content.Text}
        </Markdown>
      </div>
    </>
  )
}

export default ReactMarkdown
