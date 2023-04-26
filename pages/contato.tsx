import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { BiMailSend } from "react-icons/bi";
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
                            <abbr title="GitHub"><FaGithub className="mr-3 text-8xl text-gray-800" /></abbr>
                        </Link>
                        <Link href="https://www.linkedin.com/in/jo%C3%A3o-j%C3%BAnior-7499b6218/" target="blank">
                            <abbr title="Linkedin">
                                <FaLinkedin className="mr-3 text-8xl text-blue-700" />
                            </abbr>
                        </Link>
                        <Link href="https://www.instagram.com/jao_jj_/" target="blank">
                            <abbr title="Instagram">
                                <FaInstagram className="text-8xl text-purple-700" />
                            </abbr>
                        </Link>
                        <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNtdgsgqDrdgKfFqsHFTGjMszMfGhGWSMlDfZxRcZMQTpbjJznJPfmXZLrSknvGmHVMztL" target="blank">
                            <abbr title="Enviar e-mail"><BiMailSend className="text-8xl text-red-700"/></abbr>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )

}