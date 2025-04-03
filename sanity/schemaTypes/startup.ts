
import { UserIcon } from "lucide-react";
import { defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            },
            {
                name: "slug",
                title: "Slug",
                type: "slug",
                options: {
                  source: 'title', // Correct way to reference the title field
                  maxLength: 200, // Optional: limits the slug length
                  slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-') // Replace spaces with dashes
                    .slice(0, 200) // Trim to max length
                }
              },              
    
        {
            name: "author",
            title: "Author",
            type: "reference",
            to:{type: "author"},
            },
            {
                name: "views",
                title: "Views",
                type: "number",
                },
        {
        name: "description",
        title: "Description",
        type: "text",
        },
        {
        name: "category",
        title: "Category",
        type: "string",
        validation: (Rule) => Rule.min(1).max(20).required().error("Please enter a category"),
        },
        {
            name: "image",
            title: "Image",
            type: "url",
            validation: (Rule) => Rule.required().error("Please enter a image"),
            },
            {
                name: "pitch",
                title: "Pitch",
                type: "markdown",
                },
    ],
});