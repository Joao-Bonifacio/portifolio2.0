import Image from "next/image"
import Link from "next/link"

export default function Author(){
    return( 
        <main className="p-5 text-center bg-white">
            <div>
                <Image src="" width="150" height="150" alt="..." />
            </div>
            <div>
                <h4>João Júnior</h4>
                <p>Estudante de ciências da computação</p>
                <p>Desenvolvedor Full-Stack</p>
                <p>descrição breve</p>
            </div>
            <button><Link href="/sobre">Mais a respeito</Link></button>

            <hr />
        </main>
    )
}