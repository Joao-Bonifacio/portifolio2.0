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
                    <div className="bg-gray-800 p-2 text-gray-300 rounded-t-xl">Novas tecnologias</div>
                    <div className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti iste dolorum odio, quod voluptatem quisquam sunt ipsam nam debitis! Voluptate, error itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sed, labore alias repellendus rem sequi dolor optio assumenda nisi ratione, corrupti veritatis ut blanditiis. Ad quidem dolor ullam asperiores voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut eaque aperiam, quasi, nihil at excepturi, ullam odit voluptatum accusantium minus consequuntur itaque? Sapiente excepturi perspiciatis, quidem officia eaque repudiandae?</div>
                </div>
            </div>
        </>
    )
}