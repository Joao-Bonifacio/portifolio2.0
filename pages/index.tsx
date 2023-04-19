import Author from "@components/author"
import Expert from "@components/experiences"
import Galery from "@components/galery"
import Hability from "@components/hability"
import Projects from "@components/projects"

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 flex flex-wrap p-10">
        <Author></Author>
        <Hability></Hability>
        <Expert></Expert>
        <Projects></Projects>
        <Galery></Galery>
      </div>
    </>
  )
}
