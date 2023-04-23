import Link from "next/link";

export default function Hability() {
    return(
        <div className="bg-gray-300 w-full mb-5 rounded-xl m-auto">
            <h4 className="text-center p-1 bg-gray-800 rounded-t-xl text-gray-300">Conhecimentos</h4>
            <hr />
            <div className="grid gap-1 grid-cols-2 grid-rows-1 p-5">
                <ul className="grid">
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Node</li>
                    <li>React</li>
                    <li>Next</li>
                    <li>Express</li>
                    <li>Bootstrap</li>
                </ul>
                <ul>
                    <li>Inglês</li>
                    <li>Linux</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Docker</li>
                    <li>Cyber security</li>
                    <li>Desenho</li>
                </ul>
            </div>
            <Link href="/conhecimentos">
                <button className="w-full mb-4 text-center text-blue-800 font-bold underline hover:text-blue-950">Mais detalhes</button>
            </Link>
        </div>
    )
}