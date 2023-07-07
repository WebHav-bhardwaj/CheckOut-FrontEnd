import React from 'react'

import Grid from '../../shared/components/UIElements/Grid'
import ProductItems from './ProductItems'

export default function ProductList(props) {
  return (
    <Grid className="ml-5 mr-5 grid grid-cols-2 gap-4 gap-y-20 lg:grid-cols-3 lg:gap-9 lg:ml-10 lg:mr-10">
      {props.items?.map(item => (
        <ProductItems
          key={item.id}
          id={item.id}
          image={item.images}
          category = {item.category}
          description = {item.description}
          price = {item.price}
          title = {item.title}
        />
      ))}
    </Grid>
  )
}
