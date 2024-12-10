'use client';

import React from 'react'
import { usePathname } from 'next/navigation'


const ProductList = () => {
  const pathname = usePathname(); // Full URL path (e.g., /products/users/abcde)
  const username = pathname?pathname.split('/').pop():'loading'; // Extract username from the path

  return (
    <>
      <h1>Hello dynamic routing {username}</h1>
    </>
  )
}

export default ProductList;




// import React from 'react'

// const productList = ({Params}) => {
//   return (
//     <>
//     {/* <h1 >product list</h1>
//     <h2>product 1</h2>
//     <h2>product 2</h2>
//     <h2>product 3</h2> */}
//     <h1>hello dynamic routing {Params.username[2]}</h1>
//     </>
//   )
// }

// export default productList