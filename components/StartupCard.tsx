import { EyeIcon } from "lucide-react";
import {formatDate} from "../lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
const StartupCard = ({post} :{post: StartupTypeCard}) => {
    const {_createdAt, author :{_id: authorId,name}, views,title, category, _id,image,description} = post;
  return (
    <li className="startup-card group">
        <div className="flex-between">
            <p className = "startup_card_date">{formatDate(_createdAt)}</p>
            <div className="flex gap-1.5">
                <EyeIcon size={24} className ="text-primary" />
            <p className="startup_card_views">{views} views</p></div>
        </div>  

        <div className="flex-between mt-5 gap-5">
            <div className="flex-1 flex flex-col gap-3">
            <Link href={`/user/${authorId}`}>
                <p className="text-16-medium line-clamp-1">{name}</p>
            </Link>
            <Link href={`startup/${_id}`}>
                <h3 className="text-26-semibold line-clamp-2">{title}</h3>
            </Link>
            </div>
            <Link href={`/user/${authorId}`}>
            <Image
                src={"https://placehold.co/50"}
                alt="placeholder"
                width={48}
                height={48}
                className="rounded-full"
            />
            </Link>
        </div>

        <Link href={`startup/${_id}`}
        >
            <p className="text-16-medium line-clamp-3 mt-5">{description}</p>

            <img src={image} alt="startup" className="startup-card_img" />
        </Link>

        <div className ="flex-between gap-3 mt-5">
            <Link href ={`query=${category.toLowerCase()}`}>
            <p className = "text-16-medium">{category}</p> </Link>
            <Button className ="startup-card_btn" asChild>
            <Link href={`startup/${_id}`}
        >Details</Link>
            </Button>
        </div>
    </li>
  );
}

export default StartupCard;