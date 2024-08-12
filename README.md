# Markdown React

Proyecto para realizar pruebas con texto de noticia en formato markdown convertido a elementos html en React.

## Objetivos

Para determinar el método mas optimo de mostrar en el frontend el texto de las noticias en formato markdown se creó un proyecto de prueba utilizando varias dependencias.
El objetivo es evaluar las ventajas y desventajas de cada una para su posterior implementación.

Los objetivos de la investigación son:

- Comparar y determinar cual de las dependencias que permiten convertir un string con formato markdown es la mas apropiada para implementar en Sentinel.
- Realizar pruebas con un mock de noticia en formato .json simulando la respuesta del endpoint en el componente.
- Aplicar estilos en textos y tablas en base a los formatos markdown.
- Permitir que funcione en paralelo con el resaltado de palabras.

Para realizar las pruebas se utilizó una noticia en json reemplazando el campo “Text” por una noticia en formato markdown.

> Datos importantes:
>
> - Debido a que para almacenar la noticia en json el contenido debe ser un string, se reemplazaron los punto aparte por `\n`, y las separaciones de parrafo por `\n\n`. El string se rompe si se insertan saltos de linea comunes en markdown.
> - En la noticia de ejemplo original se utilizaron varias secciones resaltadas con separador para código (comillas invertidas).
>   Esto genera un problema al convertir los resaltados a componentes html, ya que se envuelven en elementos `pre` que preservan el formato de su contenido y evita que se realicen cambios de linea, agregando un scroll horizontal no deseado en la parte inferior rompiendo el formato del diseño frontend.
>   Se recomienda evitar el uso de comillas invertidas para resaltados, reemplazandolo por otro tipo de resalte (por ejemplo envolver en “\*” para palabras en itálica o blockquote “>” para resaltar parrafos o destacados).
> - Tampoco usar comillas invertidas en reemplazo de comillas simples o dobles comunes en los textos, ya que se tomará como bloque de codigo markdown.

La noticia de ejemplo original se encuentra en el archivo `test.md`.

La noticia modificada en el mock `/src/mockNoticiaInterna.json`.

## Dependencias

> Nota: Todas las dependencias probadas tienen protección para dangerouslySetInnerHTML al convertir y renderizar los componentes, ya que su uso representa una falla de seguridad importante desde el frontend.

### Markdown-to-JSX

https://www.npmjs.com/package/markdown-to-jsx

- Para usar la dependencia se envuelve el texto en un componente Markdown.
- Esto convierte las secciones del markdown a su equivalente en html. Por ejemplo un título con ### se convierte en un h3.
- Se pueden aplicar estilos a los elementos generados por la dependencia utilizando selectores anidados.
- Las tablas se respetan en la ubicación de los elementos, pero se muestran sin estilos. Se pueden estilizar por elementos anidados.

Ejemplo de implementación:

```
import Markdown from "markdown-to-jsx"
import mockNoticiaInterna from "../mockNoticiaInterna.json"

const MarkdownToJsx = () => {
 return (
     <div className="markdownToJsx">
       <Markdown options={{ wrapper: "article" }}>
         {mockNoticiaInterna.Content.Text}
       </Markdown>
     </div>
 )
}

export default MarkdownToJsx
```

La opción wrapper: “article” envuelve todos los elementos en un contenedor <article>, permitiendo agrupar y aplicar estilos. Se pueden declarar otros tags en reemplazo de article.
Si no se agrega esta opción se crea un <div> vacío dificultando la implementación grupal de estilos (ej: flex o grid).

### React-Markdown

https://www.npmjs.com/package/react-markdown

- Igual que en la dependencia anterior se envuelve el texto en un componente Markdown.
- Por default se adaptan los elementos mas comunes de markdown a html.
- Para mostrar elementos como tablas o caracteres especiales de markdown de puede extender las funcionalidades de la dependencia. En el caso de la tabla se utiliza remark-gfm. (https://www.npmjs.com/package/remark-gfm).
- Se pueden estilizar los elementos utilizando selectores anidados.

Ejemplo de implementación:

```
import Markdown from "react-markdown"
import gfm from "remark-gfm"
import mockNoticiaInterna from "../mockNoticiaInterna.json"

const ReactMarkdown = () => {
 return (
     <div className="reactMarkdown">
       <Markdown remarkPlugins={[gfm]}>
         {mockNoticiaInterna.Content.Text}
       </Markdown>
     </div>
 )
}

export default ReactMarkdown
```

### Marked-React

https://www.npmjs.com/package/marked-react

- Mismo sistema de tags Markdown para envolver el texto.
- Muestra los elementos markdown en html sin necesidad de configuraciones adicionales ni extensiones.
- Se pueden estilizar los elementos utilizando selectores anidados.

Ejemplo de implementación:

```
import Markdown from "marked-react"
import mockNoticiaInterna from "../mockNoticiaInterna.json"

const MarkedReact = () => {
 return (
     <div className="markedReact">
     <Markdown>{mockNoticiaInterna.Content.Text}</Markdown>
     </div>
 )
}

export default MarkedReact
```

### MDX

Se intentó utilizar MDX, pero su uso con aplicaciones create-react-app (como Sentinel) se encuentra deprecado.
La funcionalidad principal de esta dependencia es trabajar con un tipo de archivo hibrido entre markdown y html (.mdx en lugar de .md), aunque también permite convertir textos en markdown a elementos html.

## Resaltado de Palabras

La dependencia que se usa actualmente para resaltado de palabras en Sentinel es `react-highlight-words`.
Se replicó su uso para cada una de las dependencias intentando combinar la conversión de markdown con el resaltado de palabras.

#### Markdown-to-jsx:

- Se logró implementar resaltado de palabras con la misma logica actual de Sentinel (con ajustes minimos).

#### React-markdown:

- Se encontraron inconvenientes para aplicar el resaltado de palabras.

#### Marked-react:

- Se encontraron inconvenientes para aplicar el resaltado de palabras.

## Conclusión

Se recomienda utilizar la dependencia `markdown-to-jsx` que cumple con todos los requisitos, además de ser la mas actualizada y con mejor mantenimiento.
No necesita dependencias adicionales y es la mas amigable para aplicar los estilos de Sentinel.
