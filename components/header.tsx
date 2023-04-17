import Link from "next/link"

export default function Header() {
    return (
        <>
        <header className="bg-gray-800 py-4">
            <nav className="container mx-auto flex justify-between items-center px-6">
                <div>
                    <span className="text-gray-300">Portfolio</span>
                </div>
                <div>
                    <Link href="/" className="text-gray-300 hover:text-white mr-4">Home</Link>  
                    <Link href="/sobre" className="text-gray-300 hover:text-white mr-4">Sobre</Link>
                    <Link href="/contato" className="text-gray-300 hover:text-white">Contato</Link>
                </div>
            </nav>
        </header>
        </>
    )
}