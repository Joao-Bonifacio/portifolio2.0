import Image from "next/image"
import Link from "next/link"

export default function Author(){
    return( 
        <main className="m-auto">
            <div className="w-full">
                <div className="m-auto text-center">
                    <Image src="" width="215" height="215" alt="..." />
                </div>
            </div>
            <div className="w-full">
                <h4>João Júnior</h4>
                <p>Estudante de ciências da computação</p>
                <p>Desenvolvedor Full-Stack</p>
                <br />
                <p>descrição breve: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis, beatae quidem hic nihil ipsum exercitationem vero dolore voluptates, rem fugiat et sequi iure consectetur ratione, doloribus natus laudantium ut.</p>
            </div>

            <button className="w-full mt-6 mb-5 text-blue-800 font-bold"><Link href="/sobre">Mais a respeito</Link></button>
        </main>
    )
}