import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <section className='flex flex-col w-full'>
     <h1 className='text-3xl font-semibold text-center mt-5'>USA Converter</h1>

     <div className=' w-[90%]  justify-center mt-5 items-center border-1 h-auto rounded border-gray-300 mx-auto bg-[#ffffff] drop-shadow-lg h-auto border-1'>
     <div className='flex flex-col text-center'>
      <h2 className='text-2xl font-semibold py-5'>Latest Tools</h2>
      <p className='text-sm md:text-md'>Unlock the power of efficiency with our cutting-edge tools! Fast, reliable, and user-friendly—your go-to platform <br /> for productivity and innovation. Try now!</p>
      </div>
      <h2 className='text-3xl font-semibold text-center mt-8'>File Converter Tools</h2>

     <section className='flex flex-col'>
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
     <Link href='/dwf-to-pdf'>
    {/* 4st Tools */}
    <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
   <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
  <Image className='absolute py-5' src="/dwf.png" width={55} height={55} alt="heic to jpg converter" />
  </div>
  <h2 className='mt-4 text-xl font-semibold'>DWF to PDF</h2>
   </div>
   </Link>

   <Link href='/cr2-to-jpg'>
    {/* 5st Tools */}
    <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
   <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
  <Image className='absolute py-5' src="/cr2.png" width={55} height={55} alt="heic to jpg converter" />
  </div>
  <h2 className='mt-4 text-xl font-semibold'>Cr2 to JPG</h2>
   </div>
   </Link>
   

<Link href="/heic-to-jpg">
    {/* 1st Tools */}
      <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
      <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
     <Image className='absolute py-5' src="/heic.png" width={50} height={50} alt="heic to jpg converter" />
     </div>
     <h2 className='mt-4 text-xl font-semibold'>Heic to JPG</h2>
      </div>
      </Link>

      <Link href="/dwf-to-pdf">
        {/* 9st Tools */}
        <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
      <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
     <Image className='absolute py-5' src="/wav.png" width={55} height={55} alt="heic to jpg converter" />
     </div>
     <h2 className='mt-4 text-xl font-semibold'>DWF to PDF</h2>
      </div>
      </Link>

      <Link href="/dwg-to-pdf">
        {/* 11st Tools */}
        <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
       <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
      <Image className='absolute py-5' src="/pdf.png" width={55} height={55} alt="heic to jpg converter" />
      </div>
      <h2 className='mt-4 text-xl font-semibold'>DWG to PDF</h2>
       </div>
       </Link>

       <Link href="/epub-to-pdf">
        {/* 13st Tools */}
        <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
       <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
      <Image className='absolute py-5' src="/pdf.png" width={55} height={55} alt="heic to jpg converter" />
      </div>
      <h2 className='mt-4 text-xl font-semibold'>EPUB to PDF</h2>
       </div>
       </Link>
      

      <Link href="/gif-to-pdf">
       {/* 14st Tools */}
       <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
      <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
     <Image className='absolute py-5' src="/pdf.png" width={55} height={55} alt="heic to jpg converter" />
     </div>
     <h2 className='mt-4 text-xl font-semibold'>GIF to PDF</h2>
      </div>
      </Link>

      <Link href="/pdf-to-svg">
       {/* 15st Tools */}
       <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
      <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
     <Image className='absolute py-5' src="/pdf.png" width={55} height={55} alt="heic to jpg converter" />
     </div>
     <h2 className='mt-4 text-xl font-semibold'>PDF to SVG</h2>
      </div>
      </Link>

      <Link href="/png-to-pdf">
       {/* 16st Tools */}
       <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
      <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
     <Image className='absolute py-5' src="/pdf.png" width={55} height={55} alt="heic to jpg converter" />
     </div>
     <h2 className='mt-4 text-xl font-semibold'>PNG to PDF</h2>
      </div>
      </Link>
      </section>
      <h2 className='text-3xl font-semibold mt-8 text-center'>Other Tools</h2>
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      <Link href='/grams-to-pound'>
        {/* 2st Tools */}
        <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
        <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
       <Image className='absolute py-5' src="/grams.png" width={55} height={55} alt="heic to jpg converter" />
       </div>
       <h2 className='mt-4 text-xl font-semibold'>Grams to Pound</h2>
        </div>
        </Link>
        
        <Link href='/yard-to-meter'>
         {/* 3st Tools */}
         <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
        <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
       <Image className='absolute py-5' src="/yard.png" width={55} height={55} alt="heic to jpg converter" />
       </div>
       <h2 className='mt-4 text-xl font-semibold'>Yard to Meter</h2>
        </div>
        </Link>
        
      
        <Link href='/gram-to-mg'>
        {/* 6st Tools */}
        <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
        <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
       <Image className='absolute py-5' src="/mg.png" width={55} height={55} alt="heic to jpg converter" />
       </div>
       <h2 className='mt-4 text-xl font-semibold'>Gram to Mg</h2>
        </div>
        </Link>
  
        <Link href="/gram-to-ug">
         {/* 7st Tools */}
         <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
        <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
       <Image className='absolute py-5' src="/ug.png" width={55} height={55} alt="heic to jpg converter" />
       </div>
       <h2 className='mt-4 text-xl font-semibold'>Gram to Ug</h2>
        </div>
        </Link>
  
        <Link href="/indiatime-to-utc">
        {/* 8st Tools */}
        <div className='hover:scale-105 hover:transition-all p-10 flex flex-col justify-center items-center text-center cursor-pointer '>
        <div className="bg-white w-[90px] flex justify-center h-[90px] relative rounded-lg shadow-xl drop-shadow-xl border border-transparent hover:border-blue-600 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
       <Image className='absolute py-5' src="/hours.png" width={55} height={55} alt="heic to jpg converter" />
       </div>
       <h2 className='mt-4 text-xl font-semibold'>India Time to UTC</h2>
        </div>
        </Link>

        </section>
        </section>
     </div>
    </section>
  )
}

export default Main
