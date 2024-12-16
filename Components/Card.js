import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

const Card = (props) => {
  return (
    <>
      <motion.div drag dragConstraints={props.reference} dragElastic={0.2} whileDrag={{ scale: 1.2 }} className=" relative flex-shrink-0 overflow-hidden w-40 h-52 bg-zinc-900/50 rounded-[30px] text-white text-clip px-5 py-6 ">
        <FaRegFileAlt />
        <p className='text-xs mt-5 font-semibold leading-tight'>{props.data.desc}</p>
        <div className="footer absolute bottom-0 left-0 w-full ">
          <div className="flex items-center justify-between py-2 px-6 mb-2">
            <h5>{props.data.fileSize}</h5>
            <span className="w-5 h-5 text-black bg-sky-600 rounded-full flex items-center justify-center">
              {props.data.close ? <IoClose size=".7em" /> : <LuDownload size=".7em" />}
            </span>
          </div>
          {
            props.data.tag.isOpen && (
              <div className={`tag w-full py-3 ${props.data.tag.tagColor} flex justify-center items-center`}>
                <h3 className="text-xs">{props.data.tag.tagTitle}</h3>
              </div>
            )}
        </div>
      </motion.div>
    </>
  )
}

export default Card
