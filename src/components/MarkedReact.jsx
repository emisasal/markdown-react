import Markdown from "marked-react"

import mockNoticiaInterna from "../mockNoticiaInterna.json"

const MarkedReact = () => {
  return (
    <>
      <hr />
      <br />
      <h2>--- Marked-React ---</h2>
      <br />
      <div className="markedReact">
        <Markdown>{mockNoticiaInterna.Content.Text}</Markdown>
      </div>
    </>
  )
}

export default MarkedReact
