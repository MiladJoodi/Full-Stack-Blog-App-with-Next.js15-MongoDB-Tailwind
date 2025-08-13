import { assets } from "@/Assets/assets";
import Image from "next/image";

const page = () => {
    return (
        <>
            <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
                <p className="text-xl">Upload thumbnail</p>
                
                <label htmlFor="image">
                    <Image className="mt-4" src={assets.upload_area} width={140} height={70} />
                </label>

                <input type="file" id="image" hidden required />

            </form>
        </>
    );
}

export default page;