"use client";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function AwesomeContent({ data }) {
    const pageData = useTina({
        data: data.data,
        query: data.query,
        variables: data.variables,
    });

    const amazingTitle = pageData.data.my_first_collection.title;
    const incredibleBody = pageData.data.my_first_collection.body;
    const beautifulImage = pageData.data.my_first_collection.beautifulImage;

    return (
        <>
            <h1>{amazingTitle}</h1>
            <img src={beautifulImage ? beautifulImage : null} />
            <TinaMarkdown content={incredibleBody} />{" "}
        </>
    );
}
