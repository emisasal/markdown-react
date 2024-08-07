import "./App.css"
import MarkdownToJsx from "./components/MarkdownToJsx"
import MarkedReact from "./components/MarkedReact"
import ReactMarkdown from "./components/ReactMarkdown"
import mockNoticiaInterna from "./mockNoticiaInterna.json"

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Pruebas con MarkDown</h1>
      </header>
      <main className="AppMain">
        <hr />
        <h2>-- Sin procesar --</h2>
        <div>{mockNoticiaInterna.Content.Text}</div>

        <MarkdownToJsx />

        <ReactMarkdown />

        <MarkedReact />
      </main>
    </div>
  )
}

export default App
