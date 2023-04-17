import Author from "@components/author"
import Expert from "@components/experiences"
import Galery from "@components/galery"
import Hability from "@components/hability"
import Projects from "@components/projects"

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 grid gap-1 grid-cols-3 grid-rows-2 p-5">
        <Author></Author>
        <Hability></Hability>
        <Expert></Expert>
        <Projects></Projects>
        <Galery></Galery>
      </div>
    </>
  )
}
