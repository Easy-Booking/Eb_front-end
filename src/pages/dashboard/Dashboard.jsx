//import React from 'react'
import {Settings,LayoutDashboard,FolderKanban,Bell,Megaphone,Gem,BarChart2,Users,Sliders,CreditCard,LogOut,CalendarCheck,Search,CircleUser,Mail,HandPlatter,MapPin, List, Calendar,ChevronsUpDown,HeartHandshake,ClipboardList} from "lucide-react";
import React, { useState } from 'react';
//import { Button } from 'react';
import { NavLink } from "react-router-dom";



function Dashboard() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="h-screen w-screen bg-teal-400">

      <div className="fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Easy Booking</h2>

      <ul className="space-y-4">
        
      <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              `flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
        <NavLink 
        to="/Settings" 
        className={({isActive})=> 
        `flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`
              }
          >   <Settings size={20} />
          <span>Settings</span> 
          </NavLink> 
        </li>

        <li>
        <NavLink 
        to="/Notification" 
        className={({isActive})=> 
        `flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`
              }
          > 
          <Bell size={20} />
          <span>Notifications</span>
          </NavLink>
        </li>

        <li>
          <NavLink 
          to="/Promotion"
          className={({isActive})=>
          `flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`}>
          <Megaphone size={20} />
          <span>Promotions</span>
          </NavLink>
        </li>

        <li>
          <NavLink 
          to="/Report"
          className={({isActive})=>
          `flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
                 isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`
              }>
          <BarChart2 size={20} />
          <span>Report and Analytics</span>
          </NavLink>
        </li>

        <li>
          <NavLink 
          to="/User & Management"
          className={({isActive})=>
          `flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
                 isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`
              }>
          <Users size={20} />
          <span>User Management</span>
          </NavLink>
        </li>

        <li>
          <NavLink 
          to="/Customization"
          className={({isActive})=>
          `flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
                 isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`
              }>
          <Sliders size={20} />
          <span>Customization</span>
          </NavLink>
        </li>

        <li>
          <NavLink 
          to="/Payment"
          className={({isActive})=>
          `flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
                 isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`
              }>
          <CreditCard size={20} />
          <span>Payment</span>
          </NavLink>
        </li>

        <li>
          <NavLink 
          to="/Login"
          className={({isActive})=>
          `flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
                 isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`
              }>
          <LogOut size={20}/>
          <span>Logout</span>
          </NavLink>
        </li>

      </ul>
    </div>
    <div>
    
     </div>
    <div className="flex-1 ml-64 p-6 pt-8">

        <div className="w-full flex justify-start pl-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-4 pr-4 py-2 w-full md:w-96 border rounded-md  focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Search 
              className="absolute right-4 top-2.5 text-gray-500"
              size={20}
            />
            
          </div>
          <CircleUser
          className="absolute right-8 mt-[2px] hover:text-white cursor-pointer"
          size={40}
          />

          <Mail
          className="absolute right-28 mt-[2px]  hover:text-white cursor-pointer"
          size={40} 
          />

          
          <HandPlatter
          className="absolute right-48 mt-[2px]  hover:text-white cursor-pointer"
          size={40}/> 
           
        </div>

    
    </div>
    <div>
    <div className="w-full bg-gray-900 text-white p-4">
      <ul className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-20 ml-[550px] ">
        <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
          <MapPin size={20} />
          <span>Location</span> <ChevronsUpDown size={20}/>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
          <List size={20} />
          <span>Service Categories</span> <ChevronsUpDown size={20}/>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
          <Calendar size={20} />
          <span>Date </span> <ChevronsUpDown size={20}/>
        </li>
      </ul>
    </div>
    </div>

    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 ml-[280px]">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ml-[255px]">
        
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <ClipboardList size={40} className="text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold">Total Bookings</h3>
          <p className="text-3xl font-bold text-gray-800">120</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <CalendarCheck size={40} className="text-green-600 mb-3" />
          <h3 className="text-lg font-semibold">Booking History</h3>
          <p className="text-3xl font-bold text-gray-800">85</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <Megaphone size={40} className="text-red-600 mb-3" />
          <h3 className="text-lg font-semibold">Upcoming Announcements</h3>
          <p className="text-lg text-gray-600">New features launching soon!</p>
        </div>

      </div>
    </div>

    <div className="p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ml-[255px]">
        
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <Gem size={40} className="text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold">Upcoming Promotion</h3>
          <p className="text-3xl font-bold text-gray-800 pt-[30px]"> 
            <NavLink to="/Promotion"> <button className="bg-black text-lg hover:bg-teal-900 text-white rounded-md py-3 px-4 "> Click to see your promotion</button> </NavLink> </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FolderKanban size={40} className="text-green-600 mb-3" />
          <h3 className="text-lg font-semibold">Manage Availability</h3>
          <p className="text-3xl font-bold text-gray-800 pt-[30px]"> <button className="bg-black hover:bg-teal-900 text-white text-lg py-2 px-6 rounded-md">Click to see </button> </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <Megaphone size={40} className="text-yellow-600 mb-3" />
          <h3 className="text-lg font-semibold"> Comments/Feedback </h3> 
          <p className="text-lg text-gray-600">We value your feedback! Let us know how we can improve.</p>
          <br></br>
          <button className="bg-black hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-md">
  Add your Feedback
</button>

        </div>

      </div>
    </div>
    
    

 </div>
    
  )
}

export default Dashboard