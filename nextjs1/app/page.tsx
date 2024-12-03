//import Image from "next/image";
import Hello from '@/app/components/hello';
export default function Home() {
  console.log("what am i ?");
  return (
    <>
    <h1 className="text-5xl text-lime-300">welcome to next.js</h1>
    <Hello/>
    </>
  );
}
