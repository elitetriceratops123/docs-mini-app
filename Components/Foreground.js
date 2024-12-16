"use client"
import React, {useRef} from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null);

  let data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: "0.7mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-600"
      }
      
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: "0.9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "sky"
      }
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: "0.4mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColor: "bg-sky-600"
      }
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: "0.2mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green"
      }
    }
  ]
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-3 p-3 bg-sky-800/25">
        {data.map((o, i) => (
          <Card key={i} data={o} reference={ref} />
        ))}
      </div>
    </>
  )
}

export default Foreground
