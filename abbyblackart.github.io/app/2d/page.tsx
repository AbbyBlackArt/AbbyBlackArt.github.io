import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-wrap justify-center gap-4 min-h- align-items-center">
            <div className="flex justify-center flex-row lg:flex-2/5">
                <Link href="2d/drawing-painting">
                    <figure>
                        <Image
                            loading="lazy"
                            src="/Thursday,February2nd,2023.321pm.jpg"
                            alt="Thursday, February 2nd, 2023 - 3:21 pm"
                            width={1000}
                            height={793}
                            className="max-w-xl w-full h-auto aspect-[4/3] object-cover"
                        />
                        <figcaption className="text-center">Drawing/Painting</figcaption>
                    </figure>
                </Link>
            </div>
            <div className="flex justify-center flex-row lg:flex-2/5">
                <Link href="2d/printmaking">
                    <figure>
                        <Image
                            loading="lazy"
                            src="/ForWhatIsAnEndButTheStartOfANewBeginning.jpg"
                            alt="For What Is An End But The Start Of A New Beginning"
                            width={1000}
                            height={793}
                            className="max-w-xl w-full h-auto aspect-[4/3] object-cover"
                        />
                        <figcaption className="text-center">Printmaking</figcaption>
                    </figure>
                </Link>
            </div>
        </div>
    );
}
