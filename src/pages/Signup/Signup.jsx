import React from 'react'

function Signup() {
  return (
    <>
    
    <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
              <h2 className="hd-2 text-center text-3xl/9 font-bold tracking-tight text-gray-900 pt-8" >Register Your Account </h2>
        </div>
    
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
         <form action='#' method='POST' className='space-y-6'>
         <div>
            <div className="flex items-center justify-start">

              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 absolute -ml-[115px] pb-4">
                Name
              </label>

              </div>

              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder='Enter your name'
                  required
                  autoComplete="name"
                  className="absolute left-[400px] p-2 border w-64  block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 absolute -ml-[115px] pt-32">
                  Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Enter your password'
                  required
                  autoComplete="current-password"
                  className="absolute left-[400px] p-2 top-[213px] border block w-64 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
            <div className="flex items-center justify-start relative">

              <label htmlFor="e-mail" className="block text-sm/6 font-medium text-gray-900 absolute ml-[250px] pb-[110px]">
                E-mail
              </label>

              </div>

              <div className="mt-2 ">
                <input
                  id="-mail"
                  name="e-mail"
                  type="e-mail"
                  placeholder='Enter your e-mail'
                  required
                  autoComplete="e-mail"
                  className=" absolute left-[764px] top-[115px] p-2 border w-64  block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>

              <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 absolute ml-[250px] pt-[60px]">
                  Re-type Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Enter your password'
                  required
                  autoComplete="current-password"
                  className="absolute left-[764px] p-2 top-[211px] border block w-64 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="mt-[120px] ml-[-125px] flex items-center text-left text-sm/6 font-medium text-black-500">
              <input
                type="checkbox"
                 id="terms"
                className="mr-3" 
              />
              <label htmlFor="terms">
                 I agree to all Terms, Privacy Policy, and Fees
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="mt-[80px] flex w-full justify-center rounded-xl bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign Up
              </button>
              <p className='mt-[20px]'>Already have an account? <u> Login </u></p>
            </div>


            </div>
            </form>    


        </div>

    </div>

   </>
  )
}


export default Signup