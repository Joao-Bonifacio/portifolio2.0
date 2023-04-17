import Author from "@components/author"
import Expert from "@components/experiences"
import Galery from "@components/galery"
import Hability from "@components/hability"
import Projects from "@components/projects"

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <Author></Author>
      <Hability></Hability>
      <Expert></Expert>
      <Projects></Projects>
      <Galery></Galery>
    </>
  )
}
