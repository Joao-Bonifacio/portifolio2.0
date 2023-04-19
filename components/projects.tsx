export default function Projects(){
    return(
        <div className="bg-gray-400 w-full mb-5 rounded-xl m-auto">
            <h4 className="text-center p-1 bg-gray-800 rounded-t-xl text-gray-300">Projetos</h4>
            <hr />
            <ul className="p-5">
                <li><span className="text-blue-800">NewsLetter:</span> Site de noticias com MongoDB.</li>
                <li><span className="text-blue-800">PokeApi:</span> Lista de pokemons.</li>
                <li><span className="text-blue-800">upStep:</span> Site de planejamento e desenvolvimento pessoal.</li>
                <li><span className="text-blue-800">Trade Ballance:</span> Gráfico de  variação patrimonial (dados armazenados no navegador).</li>
                <li><span className="text-blue-800">Forca:</span> Jogo da forca (boneco feito 100% com css).</li>
                <li><span className="text-blue-800">Movie hank:</span> Lista de filmes/series mais assistidos (consumo da API the moovie database)</li>
            </ul>
        </div>
    )
}