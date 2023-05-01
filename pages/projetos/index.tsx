import Image from "next/image"
import projects from "@data/projects.json"

export default function Projects(){
    return (
        <>
            <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2"> Projetos </h1>
            <div className="p-8 flex flex-wrap justify-center bg-gray-400">
                {projects.map(e => (
                    <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8" key={e.id}>
                    <Image src={e.image} width="160" height="110" alt="..." className="justify-center mr-2 rounded-l-md"/>
                        <div className="max-w-md p-4">
                            <h4 className="font-bold">{e.title}</h4>
                            <p>{e.short_desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}