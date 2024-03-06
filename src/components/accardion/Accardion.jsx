import React, { useState } from 'react'
import './accardion.css';
import AccordionItem from './AccordionItem';

const Accardion = ({faglist}) => {
  const [openId, setOpenId] = useState(null);

  return (
    <ul className="accardion">
        {faglist.map((fagItem, id) => {
            return (
              <AccordionItem onClick={() => id === openId ? setOpenId(null) : setOpenId(id)} fagItem={fagItem} isOpen={id === openId} key={id} />
            )
        })}
    </ul>
  )
}

export default Accardion
