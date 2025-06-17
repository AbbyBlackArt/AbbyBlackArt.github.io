import ArtworkCard from "@/app/_components/artwork-card";
import { LightboxGallery, LightboxItem } from "@/app/_components/lightbox";
import client from "@/tina/__generated__/client";
import Image from "next/image";

export async function getStaticPaths() {
    const types = await client.queries.artwork_typesConnection();
    const paths =
        types.data?.artwork_typesConnection?.edges?.map((edge) => ({
            params: { id: edge?.node?._sys.filename },
        })) ?? [];
    return { paths, fallback: false };
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    // Fetch the artwork type by filename
    const artworkTypeRes = await client.queries.artwork_types({
        relativePath: `${id}.md`,
    });
    const artworkType = artworkTypeRes.data?.artwork_types;

    // Fetch all artworks and filter by artwork_type reference
    const artworksRes = await client.queries.artworksConnection();
    const artworks = artworksRes.data?.artworksConnection?.edges
        ?.map((edge) => edge?.node)
        ?.filter((artwork): artwork is NonNullable<typeof artwork> => !!artwork && artwork.artwork_type?._sys.filename === id);

    if (!artworkType) {
        return <div>Artwork type not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-3xl w-full text-center font-bold mb-4">{artworkType.title}</h1>
            {artworks && artworks.length > 0 ? (
                <LightboxGallery>
                    {artworks.map((artwork) => (
                        <LightboxItem
                            key={artwork._sys.filename}
                            image={artwork.image}
                            caption={
                                <>
                                    <h2 className="text-2xl font-bold mb-2">{artwork.title}</h2>
                                    <p>{artwork.description}</p>
                                </>
                            }
                        >
                            <ArtworkCard artwork={artwork} />
                        </LightboxItem>
                    ))}
                </LightboxGallery>
            ) : (
                <p>No artworks found for this type.</p>
            )}
        </div>
    );
}
