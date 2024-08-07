import Markdown from "markdown-to-jsx"

import HighlighterComponent from "./HighlighterComponent"
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
            options: {
              overrides: {
                h3: {
                  component: HighlighterComponent,
                },
                p: {
                  component: HighlighterComponent,
                },
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
