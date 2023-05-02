import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { BiMailSend } from "react-icons/bi";
import Link from "next/link"
import axios from "axios"
import React, { useState } from "react"

interface Data{
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [data, setData] = useState<Data>({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setData(oldData => ({...oldData, [name]: value}))
    }

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        axios.post('./api/contactMessage', data)
        .then(() => {
            setData({
                name: '',
                email: '',
                message: ''
            })
            alert("Obrigado, irei responder assim que puder 😁")
        })
        .catch(e => console.log('Erro ao enviar', e.message))
    }

    return (
        <>
            <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2"> Contato </h1>
            <div className="flex flex-wrap p-8 bg-gray-300">
                <div className="bg-gray-400 p-5 rounded-md mb-8 mx-auto">
                    <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2 rounded-t-md"> Enviar Mensagem </h1>
                    <form method="post" className="bg-gray-300 p-5 rounded-b-md" onSubmit={submitForm}>
                        <div className="p-2 flex justify-between">
                            <input type="text" name="name" value={data.name} placeholder="Nome*:" className="p-3 rounded-md" size={18} required onChange={handleChange}/>
                            <input type="email" name="email" placeholder="Email:" value={data.email} className="p-3 mr-0 rounded-md" size={18} onChange={handleChange}/>
                        </div>
                        <div className="p-2">
                            <textarea name="message" cols={50} rows={11} placeholder="Digitar mensagem*:" value={data.message} className="p-3 rounded-md" style={{resize:'none'}} required onChange={handleChange}></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="px-5 py-2 bg-blue-400 rounded-md hover:bg-blue-500"> Enviar </button>
                        </div>
                    </form>
                </div>
                <div className="bg-gray-300 p-1 rounded-md mb-8 max-w-3xl mx-auto">
                    <h1 className="text-4xl mb-8"> Redes Sociais </h1>
                    <div className="flex flex-wrap mt-1">
                        <Link href="https://github.com/Joao-Bonifacio" target="blank">
                            <abbr title="GitHub"><FaGithub className="mr-3 text-8xl text-gray-700" /></abbr>
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