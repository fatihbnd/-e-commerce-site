import React from 'react'

const Menuİtems = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <img src={`/img/${icon}.png`} className="size-5"></img>
            <div className="text-sm py-1">{text}</div>
        </div>
        <img src="/img/arrow-right.png" className="size-5"></img>
    </div>
  )
}

export default Menuİtems