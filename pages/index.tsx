import Author from "@components/author"
import Expert from "@components/experiences"
import Galery from "@components/galery"
import Hability from "@components/hability"
import Projects from "@components/projects"

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 p-10 mb-5">
        <div className="bg-gray-300 flex flex-wrap m-auto justify-center items-start w-full">
          
          <div className="p-5 rounded-xl bg-gray-400 max-w-sm min-w-sm flex flex-wrap mb-5 mx-auto mm:w-1/2 ll:w-1/2 xl:w-1/3">
            <Author></Author>
          </div>

          <div></div>
          
          <div className="mx-auto ll:w-1/2 xl:w-1/3 mm:w-1/2">
            <Hability></Hability>
            <Expert></Expert>
          </div>

          <div></div>
          
          <div className="mx-auto ll:w-1/2 xl:w-1/3 mm:w-1/2">
            <Projects></Projects>
            <Galery></Galery>
          </div>

        </div>
      </div>
    </>
  )
}
