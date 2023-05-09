import Link from "next/link"

export default function Projects(){
    return(
        <div className="bg-gray-300 w-full mb-5 rounded-xl m-auto shadow-gray-800 shadow-md">
            <h4 className="text-center p-1 bg-gray-800 rounded-t-xl text-gray-300">Projetos</h4>
            <hr />
            <ul className="p-5">
                <li><span className="text-blue-800">NewsLetter:</span> Site de noticias com MongoDB.</li>
                <li><span className="text-blue-800">PokeApi:</span> Lista de pokemons.</li>
                <li><span className="text-blue-800">upStep:</span> Site de planejamento e desenvolvimento pessoal.</li>
                <li><span className="text-blue-800">Trade Ballance:</span> Gráfico de  variação patrimonial.</li>
                <li><span className="text-blue-800">Forca:</span> Jogo da forca (boneco feito 100% com css).</li>
                <li><span className="text-blue-800">Movie hank:</span> Hanking de filmes/series mais assistidos.</li>
            </ul>
            <button className="w-full mt-6 mb-5 text-blue-800 font-bold underline hover:text-blue-950">
                <Link href="/projetos">Mais detalhes</Link>
            </button>
        </div>
    )
}