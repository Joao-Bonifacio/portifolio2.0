import { useRouter } from "next/router"
import projects from "@data/projects.json"

export default function Projects(){
    const router = useRouter()
    const projectId = router.query.projectId
    const project = projects.find(projects => projects.id.toString() == projectId)

    return(
        <>
            <h1>oi</h1>
            <div></div>
        </>
    )
}