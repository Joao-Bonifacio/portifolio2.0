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
                <div>
                    <Image src={project.image} width="300" height="250" alt={project.title}/>
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