import { ConnectDB } from "@/lib/config/db"
import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import BlogModel from "@/lib/models/Blog"

const LoadDB = async () => {
    await ConnectDB()
}

LoadDB();


// GET
export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get("id");
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }
    else{
        
    }



    const blogs = await BlogModel.find({})
    return NextResponse.json({blogs})
}

// POST
export async function POST(resuest) {

    const formData = await resuest.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`,
    }

    await BlogModel.create(blogData);

    console.log("Blog Saved")


    return NextResponse.json({ success: true, msg: "Blog Added" })
}