export default function Hability() {
    return(
        <div className="bg-gray-400 p-5 w-full mb-5 rounded-xl m-auto">
            <h4 className="text-center">Habilidades</h4>
            <hr />
            <div className="grid gap-1 grid-cols-2 grid-rows-1">
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
                </ul>
            </div>
            <button className="w-full mt-2 mb-2 text-center text-blue-800 font-bold">Mais detalhes</button>
        </div>
    )
}