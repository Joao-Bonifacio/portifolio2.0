import Link from "next/link"

export default function Header() {
    return (
        <>
            <header>
                <span>
                    <h1>🔵</h1>
                    <nav>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/sobre">Sobre</Link></li>
                            <li><Link href="/contato">Contato</Link></li>
                        </ul>
                    </nav>
                </span>
            </header>
            <hr />
        </>
    )
}