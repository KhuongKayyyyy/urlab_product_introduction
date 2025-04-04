import { z } from "zod";

export const formSchema = z.object({
  title: z.string()
    .min(3, { message: "Title must be at least 3 characters long." })
    .max(200, { message: "Title must be less than 200 characters." }),
  
  description: z.string()
    .min(20, { message: "Description must be at least 20 characters long." })
    .max(500, { message: "Description must be less than 500 characters." }),

  category: z.string()
    .min(3, { message: "Category must be at least 3 characters long." })
    .max(50, { message: "Category must be less than 50 characters." }),

  link: z.string().url({ message: "Link must be a valid URL." }),

  pitch: z.string()
    .min(20, { message: "Pitch must be at least 20 characters long." }),
});
