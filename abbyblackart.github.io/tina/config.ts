import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: "artworks",
                label: "Artworks",
                path: "content/artworks",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "Description",
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "Image",
                        required: true,
                    },
                    {
                        type: "reference",
                        name: "artwork_type",
                        label: "Artwork Type",
                        collections: ["artwork_types"],
                        required: true,
                    },
                ],
            },
            {
                name: "artwork_types",
                label: "Artwork Types",
                path: "content/artwork_types",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "image",
                        name: "cover_image",
                        label: "Cover Image",
                        required: false,
                    },
                ],
            },
            // {
            //     name: "my_first_collection",
            //     label: "My first collection",
            //     path: "content/first",
            //     fields: [
            //         {
            //             type: "string",
            //             name: "title",
            //             label: "Title",
            //             isTitle: true,
            //             required: true,
            //         },
            //         {
            //             type: "rich-text",
            //             name: "body",
            //             label: "Body",
            //             isBody: true, // <--- New property!
            //             required: true,
            //         },
            //         {
            //             type: "image", // paints a thousand words
            //             name: "beautifulImage",
            //             label: "Beautiful Image",
            //             required: false,
            //         },
            //     ],
            //     // Comment this out for now. We will come back to this later!
            //     // ui: {
            //     //     router: ({ document }) => {
            //     //         if (document._sys.filename == "Hello-World") {
            //     //             return "/";
            //     //         }
            //     //     },
            //     // },
            // },
        ],
    },
});
