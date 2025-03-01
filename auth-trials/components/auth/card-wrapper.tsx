"use client";
import {Card ,CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from "@/components/ui/card"
import { Header } from "@/components/auth/header"
import { Social } from "@/components/auth/social"
import { BackButton } from "./back-button";
// import {Card} from "../ui/card" same other way of importing.
interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel:string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?:boolean;
}

export const CardWrapper=({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}:CardWrapperProps)=>{
    return(
       <Card className="w-[400px] shadow-md">
        <CardHeader>
        <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
        {children}
        </CardContent>
        {showSocial &&( <CardFooter><Social/></CardFooter>)}
        <CardFooter>
            <BackButton 
            label={backButtonLabel} 
            href={backButtonHref}/>
        </CardFooter>       
        </Card>
    )
}