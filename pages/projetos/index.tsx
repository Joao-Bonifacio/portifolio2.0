import Image from "next/image"

export default function Projects(){
    return (
        <>
            <h1 className="text-center text-xl text-gray-300 bg-gray-600 p-2"> Projetos </h1>
            <div className="p-8 flex flex-wrap justify-center bg-gray-400">
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/upStep/upStep-cover.jpg" width="160" height="110" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <p className="max-w-md p-4">
                        .
                    </p>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/newsLetter/cover.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <p className="max-w-md p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nihil nisi nemo adipisci ipsam. Eaque iste asperiores repellat consequatur in nisi sunt, quae, ipsam doloribus ad nobis! Neque, adipisci! Cumque.</p>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/tradeBallance/cover.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <p className="max-w-md p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nihil nisi nemo adipisci ipsam. Eaque iste asperiores repellat consequatur in nisi sunt, quae, ipsam doloribus ad nobis! Neque, adipisci! Cumque.</p>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/hangMan/cover.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <p className="max-w-md p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nihil nisi nemo adipisci ipsam. Eaque iste asperiores repellat consequatur in nisi sunt, quae, ipsam doloribus ad nobis! Neque, adipisci! Cumque.</p>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/movieDB/cover.jpg" width="160" height="110" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <p className="max-w-md p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nihil nisi nemo adipisci ipsam. Eaque iste asperiores repellat consequatur in nisi sunt, quae, ipsam doloribus ad nobis! Neque, adipisci! Cumque.</p>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/jokenpo/cover.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <p className="max-w-md p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nihil nisi nemo adipisci ipsam. Eaque iste asperiores repellat consequatur in nisi sunt, quae, ipsam doloribus ad nobis! Neque, adipisci! Cumque.</p>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/pokedex/secondary.jpg" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <p className="max-w-md p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nihil nisi nemo adipisci ipsam. Eaque iste asperiores repellat consequatur in nisi sunt, quae, ipsam doloribus ad nobis! Neque, adipisci! Cumque.</p>
                </div>
                <div className="flex flex-wrap mx-5 bg-gray-300 rounded-md mb-8">
                <Image src="/images/calcOB/cover.jpg.png" width="160" height="100" alt="..." className="justify-center mr-2 rounded-l-md"/>
                    <p className="max-w-md p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nihil nisi nemo adipisci ipsam. Eaque iste asperiores repellat consequatur in nisi sunt, quae, ipsam doloribus ad nobis! Neque, adipisci! Cumque.</p>
                </div>
            </div>
        </>
    )
}