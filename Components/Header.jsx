import { assets } from "@/Assets/assets";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";

const Header = () => {

    const [email, setEmail] = useState("")

    const onSubmitHander = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error("Email cannot be empty");
            return;
        }

        const formData = new FormData();
        formData.append("email", email);
        const response = await axios.post('/api/email', formData);

        if (response.data.success) {
            toast.success(response.data.msg);
            setEmail("");
        } else {
            toast.error("Error");
        }
    }


    return (
        <div className="py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Image src={assets.logo} width={180} alt="" className="w-[130px] sm:w-auto" />


                <Link href="/admin">
                    <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid  border-black shadow-[-7px_7px_0px_#000000] cursor-pointer">
                        Dashboard
                        <Image src={assets.arrow} alt="" />
                    </button>
                </Link>
            </div>
            <div className="text-center my-8">
                <h1 className="text-3xl sm:text-5xl font-semibold">Latest Blogs</h1>
                <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam illum dolor a excepturi perspiciatis nulla maxime sequi ullam maiores quasi. Excepturi deserunt neque provident voluptatibus nulla incidunt adipisci sed dicta.</p>

                <form
                    onSubmit={onSubmitHander}
                    className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
                >
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter your email"
                        className="pl-4 outline-none"
                    />
                    <button
                        type="submit"
                        className="border border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white cursor-pointer"
                    >
                        Subscribe
                    </button>
                </form>


            </div>
        </div>
    );
}

export default Header;