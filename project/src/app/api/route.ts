import {type NextRequest} from "next/server";
import {headers} from "next/headers"

export async function GET(request:NextRequest){
    const requestHeaders=new Headers(request.headers)
    const headerList =headers()

    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"))
    

    // return new Response("profile api data");}
    //above one returns a simple text in browser but below gives styling
    //in inspect network we see styling details

    return new Response("<h1>profile api data</h1>",{
        headers:{
            "Content-Type":"text/html",
        },});
    }

    
