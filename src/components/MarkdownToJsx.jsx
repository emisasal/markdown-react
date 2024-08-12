import Markdown from "markdown-to-jsx"

import {
  HighlighterBlockquote,
  HighlighterEm,
  HighlighterH3,
  HighlighterP,
} from "./HighlighterComponent"
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
            forceBlock: true,
            overrides: {
              h3: {
                component: HighlighterH3,
              },
              p: {
                component: HighlighterP,
              },
              blockquote: {
                component: HighlighterBlockquote,
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
