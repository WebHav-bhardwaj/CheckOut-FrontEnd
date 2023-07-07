import React from 'react'

export default function MainHeading(props) {
  return (
    <div className={` ${props.className} w-full text-3xl pt-14 pb-14 lg:text-5xl text-center lg:pt-20 lg:pb-20`}>
      {props.children}
    </div>
  )
}
