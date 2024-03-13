import React, { useRef } from 'react'


const AccordionItem = ({fagItem, onClick, isOpen}) => {
    const itemRef = useRef(null);
    return (
<li className="accardion-item" >
    <button className="accardion-header" onClick={() => onClick()}>{fagItem.q} </button>
    <div className='accardion-colop' style={isOpen ? {height: itemRef.current.scrollHeight} : {height: "0px"}}
    >
      <div className='accardion-body' ref={itemRef}>{fagItem.a}</div>
    </div>
</li>
)
}

export default AccordionItem
