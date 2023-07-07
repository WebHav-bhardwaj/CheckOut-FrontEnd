import React from 'react'

import Card from '../../shared/components/UIElements/Card'

export default function ProductItems(props) {
  return (
    <li>
        <Card className='w-full h-full shadow-lg focus:shadow-xl hover:shadow-xl items-center'>
          <img className='h-44 block ml-auto mr-auto lg:h-72' src={props.image} alt="" />
          <h2 className='pl-2 pr-2 flex justify-center'>{props.title}</h2>
          <h2 className='pl-2 pr-2 flex justify-center'>Price: {props.price} $</h2>
        </Card>
    </li>
  )
}
