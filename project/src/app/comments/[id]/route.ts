import { type NextRequest } from "next/server";
import {comments} from "../data"
import { redirect } from "next/navigation";

// export async function GET(){
//     return Response.json(comments);
// }

//implementing url query parameters to get required search only



export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    const searchParams=request.nextUrl.searchParams;
    
    const query=searchParams.get("query")
    if (parseInt(params.id)>comments.length){
        redirect("/comments");
    }
    const filteredcomments=query?comments.filter(comment=>comment.text.includes(query)):comments;
    return Response.json(filteredcomments);
}



export async function POST(request:Request){
    const comment =await request.json();
    const newcomment={
        id: comments.length+1,
        text:comment.text
    }
    comments.push(newcomment);
    return new Response(JSON.stringify(newcomment),{
        headers:{
            "Content-Type":"application/json",
        },
        status:201,
    });
}



export async function PATCH(
    request: Request,
    {params}:{params:{id:string}}
){
    const body=await request.json();
    const {text}=body;
    const index=comments.findIndex(
        (comment)=>comment.id ===parseInt(params.id)
    );
    comments[index].text=text;
    return Response.json(comments[index]);
}
  


export async function DELETE( request: Request,
    {params}:{params:{id:string}}){
        
        const index=comments.findIndex(
            (comment)=>comment.id ===parseInt(params.id)
        );
        const deletedComment=comments[index];
        comments.splice(index,1);
        return Response.json(deletedComment);
    
}