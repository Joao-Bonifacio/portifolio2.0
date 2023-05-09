import Image from "next/image"
import Link from "next/link"

export default function Author(){
    return( 
        <main className="m-auto shadow-gray-800 shadow-md rounded-md">
            <Image src="/images/foto.jpg" width="215" height="215" alt="autor" className="mx-auto my-2" style={{borderRadius: '100%'}}/>
            <div className="w-full">
                <div className="p-5 bg-gray-800 rounded-md text-gray-300"> 
                    <h4>João Júnior</h4>
                    <p>Cursando <span className="text-blue-400">Ciências da computação</span> e <span className="text-blue-400">Economia</span></p>
                    <p>Desenvolvedor Full-Stack</p>
                </div> 
                <p className="p-5 mt-[-6px]">
                    <br />
                    <span className="text-blue-700">Front-End:</span> React, Next, JavaScript, TypeScript, Bootstrap, Tailwind, html+css, etc...
                    <br />
                    <span className="text-blue-700">Back-End:</span> Express, JavaScript, Typescript, MongoDB, MySQL, etc...
                    <br />
                    <span className="text-blue-700">CLI:</span> Python e ShellScript.
                </p>
            </div>
            <button className="w-full mt-2 mb-5 text-blue-800 font-bold underline hover:text-blue-950"><Link href="/sobre">Mais detalhes</Link></button>
        </main>
    )
}