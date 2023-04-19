export default function Hability() {
    return(
        <div className="bg-gray-500 p-5 w-full mb-5 rounded-xl m-auto">
            <h4 className="text-center">Habilidades</h4>
            <hr />
            <div className="grid gap-1 grid-cols-2 grid-rows-1">
                <ul className="grid">
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Next + React</li>
                    <li>Linux</li>
                    <li>Bootstrap</li>
                    <li>Inglês</li>
                </ul>
                <ul>
                <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Docker</li>
                    <li>Hacking ético</li>
                </ul>
            </div>
            <button className="w-full mt-2 mb-2 text-center">Mais detalhes</button>
        </div>
    )
}