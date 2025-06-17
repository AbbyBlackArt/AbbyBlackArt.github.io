import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between pt-4">
            <Link href="/" title="home" className="align-center flex-row flex gap-4 items-center">
                <Image src="/AbbyBlackArtLogo.svg" width={45} height={45} className="logo" alt="Abby Black Art Logo" />
                <p className="text-4xl font-bold">Abby Black Art</p>
            </Link>
            <nav>
                <ul className="flex list-unstyled p-4 m-0 gap-4 font-bold text-3xl">
                    <li>
                        <Link href="2d">2D</Link>
                    </li>
                    <li>
                        <Link href="3d">3D</Link>
                    </li>
                    <li>
                        <Link href="about">About/CV</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
