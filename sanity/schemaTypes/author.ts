import { UserIcon } from "lucide-react";
import { defineType } from "sanity";

export const author = defineType({
    name: "author",
    title: "Author",
    type: "document",
    icon: UserIcon,
    fields: [
        {
            name: "id",
            title: "Id",
            type: "string",
            },
        {
        name: "name",
        title: "Name",
        type: "string",
        },
        {
            name: "usename",
            title: "Username",
            type: "string",
            },
            {
                name: "email",
                title: "Email",
                type: "string",
                },
        {
        name: "bio",
        title: "Bio",
        type: "text",
        },
        {
        name: "image",
        title: "Image",
        type: "url",
        },
    ],
    preview: {
        select: {
        title: "name",
        // media: "image",
        },
    },
});