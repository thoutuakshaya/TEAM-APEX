"use client";
import {useRouter} from "next/navigation";

export default function PlaceOrder(){
    const router= useRouter();
    const handleClick=()  => {
        console.log('order placed');
        // router.back; // to go back
        // router.push("/"); // to go home page
        // router.replace("/");
        router.forward(); //to forward to next page
        
    };
    return(
        <>
        <h1>order placed</h1>
        <button onClick={handleClick}>click to place order</button></>
    )
}
