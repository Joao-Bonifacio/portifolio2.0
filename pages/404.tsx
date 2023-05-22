import Link from "next/link";

export default function NotFound(){
    return(
        <div className="mx-auto my-auto p-5 text-center pt-[20%]">
            <h1 className="text-3xl"><span className="text-red-400">404</span> - Página não encontrada...</h1>
            <Link href='/' className="text-blue-500 hover:text-blue-700 text-xl">go back home</Link>
        </div>
    )
}