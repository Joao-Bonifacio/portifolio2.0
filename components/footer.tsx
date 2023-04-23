import { FaGithub, FaLinkedin, FaInstagram, FaUserAlt } from "react-icons/fa"
import Link from "next/link"

export default function Footer(){
    return(
        <>
        <footer className="bg-gray-500 w-full fixed bottom-0 h-14 p-3 flex justify-between">
            <div className="mt-1">
                <FaUserAlt className="inline mr-2"/>
                João Júnior &copy; 2023
            </div>
            <div className="flex flex-wrap mt-2">
                <Link href="https://github.com/Joao-Bonifacio" target="blank"> 
                    <FaGithub className="mr-3 text-xl" /> 
                </Link>
                <Link href="https://www.linkedin.com/in/jo%C3%A3o-j%C3%BAnior-7499b6218/" target="blank">
                    <FaLinkedin className="mr-3 text-xl" />
                </Link>
                <Link href="https://www.instagram.com/jao_jj_/" target="blank">
                    <FaInstagram className="text-xl" />
                </Link>
            </div>
        </footer>
        </>
    )
}