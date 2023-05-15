import Image from "next/image"
import Link from "next/link"
import projects from "@data/projects.json"

export default function Projects(){
    return (
        <>
            {alert("Você pode clicar nos projetos para exibir mais detalhes")}
            <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2"> Projetos </h1>
            <div className="p-8 flex flex-wrap justify-center bg-gray-400">
                {projects.map(e => (
                    <Link href={"/projetos/"+e.id} className="flex flex-wrap mx-5 bg-gray-300 hover:bg-gray-400 rounded-md mb-8" key={e.id}>
                    <Image src={e.image} width="160" height="110" alt="..." className="rounded-l-md mx-auto p-2"/>
                        <div className="max-w-md p-4">
                            <h4 className="font-bold">{e.title}</h4>
                            <p>{e.short_desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}