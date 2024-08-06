import React, { useState } from 'react'
import leftarrow from "../../../public/arrow-left.png"
import bottomarrow from "../../../public/down-arrow.png"
import Image from "next/image";
import Link from 'next/link';

const FilterBar = () => {

const [showDropdownBox, setShowDropDownBox] =useState(false)

    const showDropdown =()=>{
        console.log("clicked")
        setShowDropDownBox(!showDropdownBox)
    }


  return (
   <>
  <div className='filter-Box pMt'>
  <p>3425 items</p>

  <button >
    <Image
      src={leftarrow}
      width={16}
      height={16}
    />
   <span>SHOW FILTER</span></button>


   <div className='dropdownContainer'>
    <button onClick={showDropdown} >
   <span className='mr'>RECOMENDED</span>
   <Image src={bottomarrow}  width={10}
    height={10}/>
   </button>
   {showDropdownBox && (
        <div className="dropdown-menu">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
   </div>
 

  </div>
   
   </>
  )
}

export default FilterBar