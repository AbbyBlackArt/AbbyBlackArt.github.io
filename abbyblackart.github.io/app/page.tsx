import Image from "next/image";

export const metadata = {
    title: "Abby Black Art",
    description: "A collection of art by Abby Black",
};

export default function Home() {
    return (
        <div className="flex flex-wrap justify-center">
            <figure>
                <Image
                    loading="lazy"
                    src="/Thursday,February2nd,2023.321pm.jpg"
                    alt="Thursday, February 2nd, 2023 - 3:21 pm"
                    width={1000}
                    height={793}
                    className="max-w-xl"
                />
                <figcaption>
                    <i>Thursday, February 2nd, 2023 - 3:21 pm</i>, Pen on Paper, 2023
                </figcaption>
            </figure>
        </div>
    );
}
