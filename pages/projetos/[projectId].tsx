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
                <div className="bg-gray-400 p-8">
                    <div className="mx-auto max-w-2xl bg-gray-300 rounded-md p-3">
                        <Image src={project.image} width="400" height="350" alt={project.title} className="mx-auto py-3"/>
    
                        <h4 className="text-center font-bold text-xl">Descrição</h4>
    
                        paragrafos de descrição

                        <h4 className="text-center font-bold text-xl">Tecnologias utilizadas</h4>
    
                        lista de tecnologias

                        <h4 className="font-bold text-xl">Links</h4>

                        links do projeto
    
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