import React from 'react'


function Landingf(){
    return(
<div className='h-screen w-screen bg-teal-500'>
    <div>
        <h3 className='pt-6 ml-[1250px] hover:text-white cursor-pointer'><u>Skip To Home</u></h3>
    </div>
            <div>
                <p className='font-normal text-4xl tracking-tight text-white pt-[45px] mr-[750px]'>Find a best service with Easy Booking <br></br>
                Enjoy The Service Lifetime</p>
            </div>
            <div className=''>
               <div>
               <h4 className='absolute left-[210px] text-black pt-12 mr-[850px] text-3xl font-normal font-serif'>Easy Booking </h4>
               </div>

               <div>
               <button className='absolute top-[300px] right-[50px] bg-black text-white rounded-md py-2 px-4 hover:bg-teal-900'>Demo Video</button>
               <button className='absolute top-[300px] right-[200px] bg-white text-black rounded-md py-2 px-4 hover:bg-teal-900'>Get Premium</button>
               </div>

            </div>

            <div>
                 <img className="mt-[100px] ml-[140px] w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto" src="/assets/images/download.png" alt="Download" />
            </div>

            <div>
            <button className=' ml-[1075px] mt-[60px]  bg-black text-white rounded-md py-4 px-32 hover:bg-teal-900'>Continue</button>
            </div>
</div>

    )
}
export default Landingf