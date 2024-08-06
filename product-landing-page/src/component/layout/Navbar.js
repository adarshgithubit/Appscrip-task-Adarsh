import React from 'react'
import Image from "next/image";
import icon from "../../../public/navicon.png"
import lefticon from "../../../public/nav-lefticon.png"
import searchicon from "../../../public/nav-search-icons.png"

const Navbar = () => {
  return (
    <>
  <div className='nav-container'>
      <div className='nav-black-label center'>
        <div className='nav-black-label-inner-element'>
            <div className='inner-element'>
                <Image src={icon} height={16} width={16} alt='nav-label-icon'/>
              <span>Lorem Ipsum</span>
            </div>
            <div className='inner-element'>
                <Image src={icon} height={16} width={16} alt='nav-label-icon'/>
              <span>Lorem Ipsum</span>
            </div>
            <div className='inner-element'>
                <Image src={icon} height={16} width={16} alt='nav-label-icon'/>
              <span>Lorem Ipsum</span>
            </div>
        </div>
      </div>
   
   <div className='center'>
    <div className='nav-icon-container'>
    <Image src={lefticon} width={30} height={30}/>
 <h2>LOGO</h2>
  <Image src={searchicon}  width={200} height={20}/>

    </div>
 
   </div>


<div className='center pMt'>
    <div className='list-Topgraphy'>
    <p>SHOP</p>
    <p>SKILLS</p>
    <p>STORIES</p>
    <p>ABOUT US</p>
    <p>CONTACT US</p>
    </div>
   
</div>
    </div>
    
    </>
  )
}

export default Navbar