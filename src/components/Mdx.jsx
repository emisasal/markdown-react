import { MDXProvider } from "@mdx-js/react"
import mockNoticiaInterna from "../mockNoticiaInterna.json"

const Mdx = () => {
  return (
    <>
      <hr />
      <h2>-- Mdx-JS/React --</h2>
      <div className="mdxReact">
        <MDXProvider>{mockNoticiaInterna.Content.Text}</MDXProvider>
      </div>
    </>
  )
}

export default Mdx
