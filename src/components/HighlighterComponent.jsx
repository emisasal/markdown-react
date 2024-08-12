import Highlighter from "react-highlight-words"

const palabrasBusqueda = "montoya AND santarelli AND diaz"

const palabrasAResaltar = [
  "rugby",
  "partido",
  "jugadores",
  "puntos",
  "juego",
  "urba",
  "campo",
  "resultados",
  "pelota",
  "tiempo",
  "tiempos",
  "intencion",
]

export function findChunksSoloPalabra({ searchWords, textToHighlight }) {
  let formatTextToHighlight = textToHighlight
  if (typeof textToHighlight === "object") {
    formatTextToHighlight = textToHighlight.props.children[0]
  }

  const chunks = []
  const textToHighlightNormalized = formatTextToHighlight
    ? formatTextToHighlight.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    : ""
  const textToHighlightLowerCase = textToHighlightNormalized.toLowerCase()
  const searchWordsNormalized = searchWords.map((word) =>
    word
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
  )
  searchWordsNormalized.forEach((searchTerm) => {
    const regExp = new RegExp(`\\b${searchTerm}\\b`, "giu") // 'u' flag for Unicode property escapes
    let match
    while ((match = regExp.exec(textToHighlightLowerCase)) !== null) {
      const start = match.index
      const end = start + searchTerm.length
      chunks.push({
        start,
        end,
      })
    }
  })
  return chunks
}

// Crea array de palabras o frases y quita los separadores AND y OR
export const removeSeparators = (palabrasBusqueda) => {
  if (palabrasBusqueda?.search("AND") || palabrasBusqueda?.search("OR")) {
    const sinSeparadoresArray = palabrasBusqueda?.split(/\s+AND\s+|\s+OR\s+/g)
    const palabrasArray = sinSeparadoresArray.map((frase) => frase.trim())
    return palabrasArray
  }
  return palabrasBusqueda
}

// H3
export const HighlighterH3 = ({ children }) => {
  const childrenToString = children[0] || ""
  return (
    <Highlighter
      className="resaltadoContainerH3"
      highlightClassName="resaltado"
      searchWords={removeSeparators(palabrasBusqueda).concat(palabrasAResaltar)}
      autoEscape={true}
      textToHighlight={childrenToString}
      findChunks={findChunksSoloPalabra}
    />
  )
}

// Parrafo
export const HighlighterP = ({ children }) => {
  // Italic
  if (typeof children[0] === "object" && children[0].type === "em") {
    const childrenItalicToString = children[0].props.children[0] || ""
    return (
      <Highlighter
        className="resaltadoContainerEm"
        highlightClassName="resaltado"
        searchWords={removeSeparators(palabrasBusqueda).concat(
          palabrasAResaltar
        )}
        autoEscape={true}
        textToHighlight={childrenItalicToString}
        findChunks={findChunksSoloPalabra}
      />
    )
  }

  const childrenToString = children[0] || ""
  return (
    <Highlighter
      className="resaltadoContainerP"
      highlightClassName="resaltado"
      searchWords={removeSeparators(palabrasBusqueda).concat(palabrasAResaltar)}
      autoEscape={true}
      textToHighlight={childrenToString}
      findChunks={findChunksSoloPalabra}
    />
  )
}

// Resaltado
export const HighlighterBlockquote = ({ children }) => {
  const childrenToString = children[0].props.children[0] || ""
  return (
    <Highlighter
      className="resaltadoContainerBQ"
      highlightClassName="resaltado"
      searchWords={removeSeparators(palabrasBusqueda).concat(palabrasAResaltar)}
      autoEscape={true}
      textToHighlight={childrenToString}
      findChunks={findChunksSoloPalabra}
    />
  )
}
