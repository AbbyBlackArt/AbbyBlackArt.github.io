"use client";
import type { Artworks } from "@/tina/__generated__/types";
import Image from "next/image";

export default function ArtworkCard({ artwork }: { artwork: Artworks }) {
    return (
        <div className="group relative">
            <Image src={artwork.image} alt={artwork.title} width={300} height={300} className="max-w-xs w-full h-auto mb-2 object-fit-contain" />
            <div className="absolute bottom-6 text-white bg-accent bg-opacity-75 w-full text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p>
                    <i>{artwork.title}</i>
                    <br />
                    {artwork.description}
                </p>
            </div>
        </div>
    );
}
