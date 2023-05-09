import habilitys from "@data/habilitys.json"

export default function Habilitys(){
    return(
        <>
            <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2">Conhecimentos</h1>

            <div className="bg-gray-400 flex flex-wrap justify-start p-8 mb-5">
                {habilitys.map(e => (
                    <div className="max-w-md bg-gray-300 mx-auto mb-5 rounded-xl" key={e.title}>
                        <div className="bg-gray-800 p-2 text-gray-300 rounded-t-xl">{e.title}</div>
                        <div className="p-2">{e.desc}</div>
                    </div> 
                ))}
            </div>

            <h1 className="text-center text-xl text-gray-800">Expectativas para o futuro</h1>

            <div className="p-5 px-14 mb-14 max-w-7xl mx-auto">
                <div className="bg-gray-300 mx-auto rounded-xl">
                    <h4 className="bg-gray-800 p-2 text-gray-300 rounded-t-xl">Novos conhecimentos</h4>
                    <div className="p-5 indent-5">
                        <p>Pretendo aprimorar meus conhecimentos nas tecnologias que já utilizo para desenvolver softwares, e aprender mais sobre outras tecnologias que não utilizo tanto ou ainda não utilizei, como é o caso de métodos de autenticação, aprimoramento de segurança nos códigos criados e novos métodos de construção de APIs por exemplo.</p>
                        <p>Pretendo conhecer mais sobre assuntos relacionados a segurança da informação, com foco maior em segurança ofensiva (pentest e bug bounty), assim como aprimorar meus conhecimentos sobre economia e o mercado financeiro.</p>
                    </div>
                </div>
            </div>
        </>
    )
}