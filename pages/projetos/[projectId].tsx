import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import projects from "@data/projects.json"

export default function Projects(){
    const router = useRouter()
    const projectId = router.query.projectId
    const project = projects.find(projects => projects.id.toString() == projectId)

    if (project) {
        return(
            <>
                <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2"> {project?.title} </h1>
                <div className="bg-gray-400 p-8 mb-8">
                    <div className="mx-auto max-w-2xl bg-gray-300 rounded-md p-3">
                        <Image src={project.image} width="400" height="350" alt={project.title} className="mx-auto py-3"/>
                        <div className="p-5">
                            <h4 className="text-center font-bold text-xl">Descrição</h4>
                            <p className="indent-5 pb-3">{project.short_desc}</p>
                            {project.long_desc.map(e => (
                                <p key={e.slice(1)[0]} className="indent-5 pb-3">{e}</p>
                            ))}

                            <h4 className="text-center font-bold text-xl">Tecnologias utilizadas</h4>
                            <ul className="flex flex-wrap">
                                {project.techs.map(e => (
                                    <li key={e} className="p-3">{e}</li>
                                ))}
                            </ul>
    
                            <h4 className="font-bold text-xl">Links</h4>
                            {project.links.map(e => (
                                <p key={e.slice(9)[0]} className="text-blue-800"><Link href={e} target="blank">{ e.includes("github") ? "Portifólio": "Site" }</Link></p>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }else{
        return(
            <>
                <h1>Projeto não encontrado</h1>
                <Link href="/projetos">Voltar</Link>
            </>
        )
    }
}