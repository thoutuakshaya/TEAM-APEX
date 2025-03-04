import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

 export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center">
    <h1 className= {cn("text-3xl  text-center font-semibold",
        font.className,)} >
       🔐Auth
    </h1>
    <p className="text-muted-foreground text-center text-sm">{label}</p>
    </div>
  );
};

// export default Header;