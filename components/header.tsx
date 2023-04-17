import Link from "next/link"

export default function Header() {
    return (
        <>
        <header className="bg-gray-800 py-4">
            <nav className="container mx-auto flex justify-between items-center px-6">
                <div>
                    <span className="text-gray-300">Portifólio</span>
                </div>
                <div>
                    <a href="/" className="text-gray-300 hover:text-white mr-4">Home</a>  
                    <a href="/sobre" className="text-gray-300 hover:text-white mr-4">Sobre</a>
                    <a href="/contato" className="text-gray-300 hover:text-white">Contato</a>
                </div>
            </nav>
        </header>
        </>
    )
}