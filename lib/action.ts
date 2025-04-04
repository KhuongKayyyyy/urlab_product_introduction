"use server";
import {auth} from "@/auth";
import slugify from "slugify";
import {parseServerActionReponse} from "@/lib/utils";
import {WriteClient} from "@/sanity/lib/write-client";
export const createPitch = async(state:any, form:FormData,pitch:string) => {
    const session = await auth();
    if(!session) {
        return parseServerActionReponse({status: "ERROR", error: "Unauthorized"});
    }

    const {title, description, category, link} = Object.fromEntries(
        Array.from(form).filter(([key]) => key !== "pitch"),
    );

    const slug = slugify(title as string, {lower: true, strict: true});

    try {
        const product = {
            title,
            views: 0,
            description,
            category,
            image: link,
            slug:{
                current: slug,
                _type: slug,
            },
            author :{
                _type : "reference",
                _ref : session?.id,
            },
            pitch,
        }

        const result = await WriteClient.create({_type: "startup", ...product});
        return parseServerActionReponse({
            ...result,
            status: "SUCCESS",
            message: "Product created successfully",
        })
    }catch (error) {
        console.log(error);
        return parseServerActionReponse({status: "ERROR", error: "Something went wrong"});
    }
}