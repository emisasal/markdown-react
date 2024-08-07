import Markdown from "marked-react"

import mockNoticiaInterna from "../mockNoticiaInterna.json"
import HighlighterComponent from "./HighlighterComponent"

const MarkedReact = () => {
  return (
    <>
      <hr />
      <br />
      <h2>--- Marked-React ---</h2>
      <br />
      <div className="markedReact">
        <Markdown renderer={HighlighterComponent}>
          {mockNoticiaInterna.Content.Text}
        </Markdown>
      </div>
    </>
  )
}

export default MarkedReact
