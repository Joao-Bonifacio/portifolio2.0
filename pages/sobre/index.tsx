import Image from "next/image"

export default function About(){
    return (
        <>
            <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2"> Sobre </h1>
            <div className="p-8 flex flex-wrap mx-auto justify-center bg-gray-300">
                <Image src="/images/foto.jpg" width="250" height="250" alt="autor" className="mx-6" style={{borderRadius: '100%'}}/>
                <p className="max-w-md p-5 mx-6 my-auto indent-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae, dolore eligendi dignissimos, quibusdam consectetur ipsam culpa praesentium officiis qui obcaecati hic veritatis, quaerat maxime. Doloremque, perspiciatis quos! Tempora, ratione.</p>
                <p className="max-w-md p-5 mx-6 my-auto indent-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam assumenda quis omnis incidunt in neque autem necessitatibus quibusdam, voluptatem eligendi consectetur libero. Nesciunt assumenda debitis tempora saepe minima dolores!</p>
            </div>
            <div className="p-10 mx-auto bg-gray-200">
                <p className="mb-3 px-8 text-justify indent-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laboriosam maxime illum fugiat iste doloribus minus, ipsum, possimus, numquam impedit aliquid repellat? Tempora, soluta impedit? Quae laudantium quas nam excepturi.</p>
                <p className="mb-3 px-8 text-justify indent-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ad magnam. Eius iure a laudantium officiis distinctio quos. Perferendis qui omnis quia, quidem aperiam ducimus iusto quod alias laborum ipsa!</p>
                <p className="mb-3 px-8 text-justify indent-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ea cum magni possimus tempore illo alias error. Nostrum similique voluptatibus in fugit harum nemo, nisi dolorem natus modi vel eius?</p>
            </div>
            <div className="p-6 bg-gray-200"></div>
        </>
    )
}