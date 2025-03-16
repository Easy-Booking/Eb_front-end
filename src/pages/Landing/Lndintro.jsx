import React from 'react'


function Lndintro(){
    return(
     <div className="h-screen w-screen bg-teal-500 flex flex-col justify-between">
    
        <div className="flex justify-end items-center p-6">
          <h3 className="text-lg hover:text-white cursor-pointer mr-8">
            <u>Sign in</u>
          </h3>
          <h3 className="text-lg hover:text-white cursor-pointer mr-8">
            <u>Learn More</u>
          </h3>
          <button className="text-lg bg-black text-white rounded-md py-2 px-4 hover:bg-teal-900">
            Create Profile
          </button>

          
        </div>
      
        <div className="">
          <img
            className= " absolute ml-[180px] top-[5px]  sm:w-[100px] md:w-[200px] lg:w-[400px] h-auto"
            src="/assets/images/download.png"
            alt="Download"
          />
        </div>

        <div className="flex flex-row md:flex-col items-start md:items-center justify-center gap-4 md:gap-12 p-6 mr-[620px] mb-[260px]">
            <h3 className="text-2xl md:text-4xl font-thin font-serif">
               Earn an Average of <br /> 5% Cashback
            </h3>

             <h3 className="text-2xl md:text-4xl font-thin font-serif">
                First 3 months qualifying the promo
              </h3>
              
        </div>

        

       

     </div>
      


    )

}
export default Lndintro