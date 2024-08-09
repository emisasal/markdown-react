import Markdown from "markdown-to-jsx"

import { HighlighterH3, HighlighterP } from "./HighlighterComponent"
import mockNoticiaInterna from "../mockNoticiaInterna.json"

const MarkdownToJsx = () => {
  return (
    <>
      <hr />
      <br />
      <h2>--- Markdown-to-JSX ---</h2>
      <br />
      <div className="markdownToJsx">
        <Markdown
          options={{
            wrapper: "article",
            overrides: {
              h3: {
                component: HighlighterH3,
              },
              p: {
                component: HighlighterP,
              },
            },
          }}
        >
          {mockNoticiaInterna.Content.Text}
        </Markdown>
      </div>
    </>
  )
}

export default MarkdownToJsx
