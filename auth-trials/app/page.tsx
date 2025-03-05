import {Button} from "@/components/ui/button"
import { Poppins } from "next/font/google";
import {cn} from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font=Poppins({  
  subsets: ['latin'],
  
  weight: ["600"]

})
export default function Home() {
    return(<>
      {/* //i have changed the variant to custom from outline to keep desired layout and added custom in button.tsx
      <Button size="lg" variant="custom">
        click me
      </Button> */}

      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
       from-sky-400 to-blue-800">
        <div className="space-y-5 text-center">
      <h1 className={cn(
        "text-6xl drop-shadow-md font-semibold  text-white",
        font.className
      )}>
        🔐AUTH
      </h1>
      <p className="text-white">a simple authentication service</p>
      </div>
      <div>
        <LoginButton >
      <Button variant="secondary" className="lg space-y-6 ">Sign in</Button>
      </LoginButton>
      </div>
      </main>
    </>
    )
}
