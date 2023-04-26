import { FaGithub, FaLinkedin, FaInstagram, FaUserAlt } from "react-icons/fa"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2"> Contato </h1>
            <div className="flex flex-wrap p-8 bg-gray-300">
                <div className="bg-gray-300 p-1 rounded-md mb-8 mx-auto">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOHOQiWq7CPTLkgi5eDfyGGI7IfA09KYrLeWzOxm5RadncKg/viewform?embedded=true" width="540" height="619">Carregando…</iframe>
                </div>
                <div className="bg-gray-300 p-1 rounded-md mb-8 max-w-3xl mx-auto">
                    <h1 className="text-4xl mb-8"> Redes Sociais </h1>
                    <div className="flex flex-wrap mt-1">
                        <Link href="https://github.com/Joao-Bonifacio" target="blank">
                            <FaGithub className="mr-3 text-8xl text-gray-800" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/jo%C3%A3o-j%C3%BAnior-7499b6218/" target="blank">
                            <FaLinkedin className="mr-3 text-8xl text-blue-700" />
                        </Link>
                        <Link href="https://www.instagram.com/jao_jj_/" target="blank">
                            <FaInstagram className="text-8xl text-purple-700" />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )

}