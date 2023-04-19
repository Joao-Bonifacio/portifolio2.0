import Author from "@components/author"
import Expert from "@components/experiences"
import Galery from "@components/galery"
import Hability from "@components/hability"
import Projects from "@components/projects"

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 p-10">
        <div className="bg-gray-300 flex flex-wrap">
          <div className="p-5 sm:w-1/2 lg:w-1/3 xl:w-1/3 rounded-xl bg-gray-500 max-w-sm flex flex-wrap m-auto">
            <Author></Author>
          </div>
          <div className="xl:w-1/3 sm:w-1/2 lg:w-1/3 m-auto">
            <Hability></Hability>
            <Expert></Expert>
          </div>
          <div className="xl:w-1/3 sm:w-1/2 lg:w-1/3 m-auto">
            <Projects></Projects>
            <Galery></Galery>
          </div>
        </div>
      </div>
    </>
  )
}
