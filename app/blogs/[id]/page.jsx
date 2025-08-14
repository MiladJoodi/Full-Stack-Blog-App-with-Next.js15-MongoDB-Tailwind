"use client"

import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = ({ params }) => {

    const [data, setData] = useState(null);


    const fetchBlogData = async () => {
        const response = await axios.get("/api/blog", {
            params: {
                id: params.id
            }
        });
        setData(response.data);

    }

    useEffect(() => {
        fetchBlogData()
    }, [])




    return (data ? <>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image src={assets.logo} width={180} alt="" className="w-[130px] sm:w-auto" />
                </Link>
                <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
                    Get started
                    <Image src={assets.arrow} alt="" />
                </button>
            </div>

            <div className="text-center my-24">
                <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
                <Image className="mx-auto mt-6 border border-white rounded-full" src={data.authorImg} width={60} height={60} alt="" />
                <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
  <a
    href="https://www.linkedin.com/in/joodi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-inherit no-underline hover:no-underline"
  >
    {data.author}
  </a>
</p>

            </div>
        </div>

        <div className="max-w-[800px] md:mx-auto mt-[-100px] mb-10">
            <Image className="border-4 border-white" src={data.image} width={1280} height={720} alt="" />
            <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
            <p>{data.description}</p>
            <h3 className="my-5 text-[18px] font-semibold">Step1: Self-Reflection</h3>
            <p className="my-3">Before making any major decisions, take some time to look inward and understand your true motivations and desires.</p>
            <p className="my-3">Think about your past experiences and what they taught you about yourself.</p>
            <p className="my-3">Identify patterns in your behavior that either help or hinder your growth.</p>
            <p className="my-3">Ask yourself what truly matters to you in the long run.</p>
            <p className="my-3">Write down your thoughts to make them more concrete and actionable.</p>
            <h3 className="my-5 text-[18px] font-semibold">Step2: Setting Goals</h3>
            <p className="my-3">Once you understand yourself better, define specific and measurable goals you want to achieve.</p>
            <p className="my-3">Break these goals into smaller milestones to track progress easily.</p>
            <p className="my-3">Stay flexible and be ready to adjust your goals as circumstances change.</p>

            <div className="my-24">
                <p className="text-black font-semibold my-4">Share this article on social media</p>
                <div className="flex">
                    <Image src={assets.facebook_icon} width={50} alt="" />
                    <Image src={assets.twitter_icon} width={50} alt="" />
                    <Image src={assets.googleplus_icon} width={50} alt="" />
                </div>
            </div>

        </div>

        <Footer />

    </> : <></>

    );
}

export default page;