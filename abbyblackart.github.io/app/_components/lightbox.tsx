"use client";
import Image from "next/image";
import { createContext, useContext, useState, ReactNode, ReactElement, cloneElement } from "react";

interface LightboxContextProps {
    openIndex: number | null;
    setOpenIndex: (idx: number | null) => void;
    galleryLength?: number;
}

const LightboxContext = createContext<LightboxContextProps | undefined>(undefined);

export function LightboxGallery({ children }: { children: ReactElement | ReactElement[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const items = Array.isArray(children) ? children : [children];
    const childrenWithProps = items.map((child, idx) =>
        cloneElement(child as ReactElement, {
            index: idx,
            galleryLength: items.length, // Pass galleryLength to every item
            setOpenIndex,
            openIndex,
        })
    );
    return (
        <LightboxContext.Provider value={{ openIndex, setOpenIndex }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full justify-items-center">{childrenWithProps}</div>
        </LightboxContext.Provider>
    );
}

interface LightboxItemProps {
    image: string;
    caption: ReactNode;
    children: ReactNode;
    index?: number;
    galleryLength?: number;
    setOpenIndex?: (idx: number | null) => void;
    openIndex?: number | null;
}

export function LightboxItem({ image, caption, children, index, galleryLength, setOpenIndex, openIndex }: LightboxItemProps) {
    const ctx = useContext(LightboxContext);
    // Use context if not passed as props (for gallery rendering)
    const _setOpenIndex = setOpenIndex || ctx?.setOpenIndex;
    const _openIndex = typeof openIndex === "number" ? openIndex : ctx?.openIndex;
    if (!ctx || typeof index !== "number") return null;
    const isOpen = _openIndex === index;
    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (_setOpenIndex && typeof galleryLength === "number") {
            _setOpenIndex((_openIndex! - 1 + galleryLength) % galleryLength);
        }
    };
    console.log("galleryLength", galleryLength);
    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (_setOpenIndex && typeof galleryLength === "number") {
            _setOpenIndex((_openIndex! + 1) % galleryLength);
        }
    };
    return (
        <>
            <div
                onClick={() => _setOpenIndex && _setOpenIndex(index)}
                className="cursor-pointer max-w-full flex flex-col items-center justify-center"
            >
                {children}
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-80 animate-in fade-in"
                    onClick={() => _setOpenIndex && _setOpenIndex(null)}
                >
                    <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 text-white text-3xl font-bold rounded-full px-3 py-1 hover:bg-opacity-75 transition"
                            onClick={() => _setOpenIndex && _setOpenIndex(null)}
                            aria-label="Close lightbox"
                        >
                            &times;
                        </button>
                        {typeof galleryLength === "number" && galleryLength > 1 && (
                            <>
                                <button
                                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl font-boldrounded-full px-3 py-1 hover:bg-opacity-80 transition"
                                    onClick={handlePrev}
                                    aria-label="Previous image"
                                >
                                    &#8592;
                                </button>
                                <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl font-boldrounded-full px-3 py-1 hover:bg-opacity-80 transition"
                                    onClick={handleNext}
                                    aria-label="Next image"
                                >
                                    &#8594;
                                </button>
                            </>
                        )}
                        <Image
                            src={image}
                            alt={typeof caption === "string" ? caption : ""}
                            className="w-auto h-auto max-h-[80vh] max-w-full rounded shadow-lg"
                            width={800}
                            height={600}
                        />
                        <div className="mt-4 text-white text-center p-4 rounded">{caption}</div>
                    </div>
                </div>
            )}
        </>
    );
}
