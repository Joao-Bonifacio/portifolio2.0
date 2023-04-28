import Image from "next/image"
import moment from "moment"
import React, { useState, useEffect } from "react"

export function calcAge(dateBorn: string): number {
    const today = moment();
    const born = moment(dateBorn, 'YYYY-MM-DD')
    const years = today.diff(born, 'years')
    return years
}

export default function About(){
    const [age, setAge] = useState<number>(0)
    const dateBorn = '2001-05-02'
  
    useEffect(() => {
      const born = calcAge(dateBorn);
      setAge(born);
    }, []);
    
    return (
        <>
            <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2"> Sobre </h1>
            <div className="p-8 flex flex-wrap mx-auto justify-center bg-gray-300">
                <Image src="/images/foto.jpg" width="280" height="280" alt="autor" className="mx-6" style={{borderRadius: '100%'}}/>
                <div className="max-w-md p-5 mx-6 my-auto indent-5 bg-gray-200 rounded-md">
                    <p>
                        Tenho {age} anos, Estou cursando Ciências da Computação na Universidade Estácio no *4º semestre*.
                        Descobri ainda quando pequeno que eu tinha um fascínio em entender o funcionamento de sistemas e as interações de 
                        cada elemento para formar algo maior.
                    </p>
                    <br />
                    <p >
                        Há algum tempo, percebi o quanto &quot;o mundo da programação&quot; 
                        poderia dar liberdade de manipular os elementos para modificar ou criar algo totalmente novo.
                    </p>
                </div>
                <p className="max-w-md p-5 mx-6 my-auto indent-5 bg-gray-200 rounded-md">
                    Sou desenvolvedor <span className="text-blue-700">Full Stack</span>, desenvolvo software para web no lado cliente(front-end) e servidor(back-end), além de
                    desenvolver alguns softwares de linha de comando (CLI).
                    <br />
                    <span className="text-blue-700">Front-End:</span> React, Next, JavaScript, TypeScript, Bootstrap, Tailwind, html+css, etc...
                    <br />
                    <span className="text-blue-700">Back-End:</span> Express, JavaScript, Typescript, MongoDB, MySQL, etc...
                    <br />
                    <span className="text-blue-700">CLI:</span> Python e ShellScript.
                </p>
            </div>
            <div className="p-10 mx-auto bg-gray-200 mb-[-18px]">
                <p className="mb-3 px-8 text-justify indent-5">
                    Estou dedicando meu foco principal novamente para a área da programação, estava um tempo empenhado em me desenvolver na carreira de trader no mercado financeiro, então a programação sesse período, era mais uma &quot;side quest&quot;, agora que desenvolvi as skills necessárias, estou retornando para a área da tecnologia fazendo dela novamente minha &quot;main quest de estudo&quot;, trazendo a bagajem do mercado financeiro, seus termos técnicos e conhecimento sobre seu funcionamento, isso me facilita desenvolver softwares também para essa área específica.
                </p>
                <p className="px-8 text-justify indent-5">
                    Há alguns fatores e práticas que eu concidero ter facilitado bastante meu aprendizado em programação (além da prática), dentre elas, vale destacar:
                    <br />
                    Leitura das documentações (memorização); 
                    <br /> 
                    Leitura de livros e assistir vídeos sobre tecnologia em geral (neuro-plasticidade); 
                    <br />
                    Vídeo aulas com boa didática (descomplicar alguns assuntos); 
                    <br />
                    Análise de códigos fontes abertos (Boas práticas e padrões)...
                </p>
            </div>
            <div className="p-6 bg-gray-200"></div>
        </>
    )
}