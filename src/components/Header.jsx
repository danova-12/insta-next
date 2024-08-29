import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
  return (
   <div className='shadow-sm sticky top-0 z-30 border-b p-3 bg-white '>
     <div className='flex justify-between mx-auto items-center max-w-6xl '> 
        <Link href="/" className='hidden lg:inline-flex'>
          <Image 
          src={"/Instagram_logo_black.webp"}
          width={96}
          height={96}
          alt='instagram logo'
          />
        </Link>
        <Link href="/" className='lg:hidden '>
          <Image 
          src={"/800px-Instagram_logo_2016.webp"}
          width={46}
          height={46}
          alt='instagram logo'
          />
        </Link>
        <input type="text" placeholder='search'
        className="border border-gray-200 py-2 px-4 rounded 
        text-sm w-full max-w-[210px]" 
        
         />
          <button className='text-sm text-blue-500 font-semibold'>log in</button>
     </div>
   </div>
  )
}
