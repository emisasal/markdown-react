import "./App.css"
import Markdown from "markdown-to-jsx"

import mockNoticiaInterna from "./mockNoticiaInterna.json"

console.log("mockNoticiaInterna", mockNoticiaInterna.Content.Text)

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Pruebas con MarkDown</h1>
      </header>
      <main className="AppMain">
        <hr />
        <h2>- Markdown-to-JSX -</h2>

        <div className="markdownReact">
          <Markdown options={{ wrapper: "article" }}>
            {mockNoticiaInterna.Content.Text}
          </Markdown>
        </div>
        <hr />
      </main>
    </div>
  )
}

export default App
