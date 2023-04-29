import Image from "next/image"

export default function Projects(){
    return (
        <>
            <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2"> Projetos </h1>
            <div className="p-8 flex flex-wrap justify-center bg-gray-400">
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/upStep/upStep-cover.jpg" width="160" height="110" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <div className="max-w-md p-4">
                        <h4>upStep</h4>
                        <p>Aperfeiçoamento da produtividade, com gráficos interativos e editáveis, com áreas de conhecimento e projeções, controle de tempo e anotações.</p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/newsLetter/cover.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <div className="max-w-md p-4">
                        <h4>newsletter</h4>
                        <p>Site de notícias com integração com banco de dados mongoDB, busca de notícias e hank de mais visitadas.</p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/tradeBallance/cover.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <div className="max-w-md p-4">
                        <h4>trade ballance</h4>
                        <p>Gráfico interativo de variação de patrimonio, com valores editáveis, tais valores foram salvos no navegador do cliente.</p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/hangMan/cover.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <div className="max-w-md p-4">
                        <h4>jogo da forca</h4>
                        <p>Jogo da forca baseado em manipulação de strings com JavaScript. todas as partes do boneco foram construidas inteiramente com CSS.</p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/movieDB/cover.jpg" width="160" height="110" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <div className="max-w-md p-4">
                        <h4>movie hank</h4>
                        <p>Hank de filmes/series mais assistidas. Dados fornecidos pela API the movie db, com slide de fotos e os títulos contendo nomes e sinopses.</p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/jokenpo/cover.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <div className="max-w-md p-4">
                        <h4>jokenpo</h4>
                        <p>Jogo jokenpo, player vs máquina, com geração de jogada aleatória por parte da máquina do cliente.</p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/pokedex/secondary.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <div className="max-w-md p-4">
                        <h4>pokedex</h4>
                        <p>Geração de pokemons aleatórios de acordo com o número de pokemons passados como argumento na página.</p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/calcOB/cover.jpg.png" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <div className="max-w-md p-4">
                        <h4>calculadora OB</h4>
                        <p>Programa de linha de comando para projeções de resultados/rentabilidade em opções binárias de acordo com cada tipo de gerenciamento.</p>
                    </div>
                </div>
            </div>
        </>
    )
}