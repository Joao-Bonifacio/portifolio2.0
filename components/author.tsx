import Image from "next/image"
import Link from "next/link"

export default function Author(){
    return( 
        <main className="m-auto">
            <Image src="/images/foto.jpg" width="215" height="215" alt="..." className="mx-auto my-2" style={{borderRadius: '100%'}}/>
            <div className="w-full">
                <div className="p-5 bg-gray-800 rounded-md text-gray-300"> 
                    <h4>João Júnior</h4>
                    <p>Estudante de ciências da computação</p>
                    <p>Desenvolvedor Full-Stack</p>
                </div> 
                <p className="p-5"><span className="text-blue-600 font-bold">Descrição:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis, beatae quidem hic nihil ipsum exercitationem vero dolore voluptates, rem fugiat et sequi iure consectetur ratione, doloribus natus laudantium ut.</p>
            </div>
            <button className="w-full mt-2 mb-5 text-blue-800 font-bold underline hover:text-blue-950"><Link href="/sobre">Mais detalhes</Link></button>
        </main>
    )
}