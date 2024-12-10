'use client';

import { useRouter } from 'next/navigation';

const Page:React.FC = () => {

  const router = useRouter();

  return (
    <div className="bg-lime-500 h-80 p-20 ">
      <h1>Welcome to Dashboard</h1>
      <button onClick = {()=>router.back()}>Go Back</button>
    </div>
  )
}

export default Page