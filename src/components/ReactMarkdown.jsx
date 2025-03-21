import Markdown from "react-markdown"
import gfm from "remark-gfm"
import mockNoticiaInterna from "../mockNoticiaInterna.json"

const ReactMarkdown = () => {
  return (
    <>
      <hr />
      <br />
      <h2>--- React-Markdown ---</h2>
      <br />
      <div className="reactMarkdown">
        <Markdown remarkPlugins={[gfm]}>
          {mockNoticiaInterna.Content.Text}
        </Markdown>
      </div>
    </>
  )
}

export default ReactMarkdown
