import Highlighter from "react-highlight-words"

const palabrasAResaltar = ["el", "la", "las", "los", "un", "una"]

const HighlighterComponent = () => {
  return (
    <Highlighter
    //   className={classes.resaltado__wrapper}
      highlightTag={"span"}
    //   highlightClassName={classes.resaltado}
    //   searchWords={removeSeparators(palabrasBusqueda).concat(palabrasAResaltar)}
    //   autoEscape={true}
    //   textToHighlight={textoAMostrar()}
    //   findChunks={findChunksSoloPalabra}
    />
  )
}

export default HighlighterComponent
