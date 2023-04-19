import Link from "next/link"

export default function Expert() {
    return(
        <div className="bg-gray-400 w-full mt-5 mb-5 rounded-xl m-auto">
            <h4 className="text-center p-1 bg-gray-800 rounded-t-xl text-gray-300">Experiências</h4>
            <hr /> 
            <div className="p-5">
                <p className="pt-3">Professor assistente de robótica: Ensino de robótica e programação para alunos do ensino fundamental utilizando kits de robótica da lego.</p>
                <p className="pt-3">ACS (IBGE): Fazer pesquisas da infraestrutura de locais urbanos e supervisionar Recenseadores, conferindo em campo amostras de dados coletados.</p>
                <Link href="https://www.linkedin.com/in/jo%C3%A3o-j%C3%BAnior-7499b6218/" target="blank">
                    <button className="w-full mt-2 text-center text-blue-800 font-bold">Linkeddin</button>
                </Link>
            </div>
        </div>
    )
}