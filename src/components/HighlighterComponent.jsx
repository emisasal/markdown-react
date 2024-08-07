import Highlighter from "react-highlight-words"

const palabrasBusqueda = []

const palabrasAResaltar = ["a", "de", "del", "el", "la", "las", "los", "un", "una"]

export function findChunksSoloPalabra({ searchWords, textToHighlight }) {
  const chunks = []
  const textToHighlightNormalized = textToHighlight
    ? textToHighlight.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
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

const HighlighterComponent = ({ children }) => {
  console.log("CH", children)
  return (
    <Highlighter
      // className="resaltado__wrapper"
      // highlightTag={"span"}
      // highlightClassName="resaltado"
      // searchWords={removeSeparators(palabrasBusqueda).concat(palabrasAResaltar)}
      searchWords={palabrasAResaltar}
      autoEscape={true}
      textToHighlight={children[0] || ""}
      // findChunks={findChunksSoloPalabra}
    />
  )}

export default HighlighterComponent
