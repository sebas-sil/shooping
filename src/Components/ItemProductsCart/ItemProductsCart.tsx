import React from 'react'
import { Button, Image, List, Popup } from 'semantic-ui-react'
import Product from '../../Pages/Home/Products'
import ButtonRemoveItem from '../ButtonRemove/ButtonRemoveItem'

const ItemProductCart : React.FC <{
    product: Product
    removeItem:(id:String)=>void
}> =({product, removeItem}) =>{
    return(
        <List.Item>
            <List.Content floated='right'>
            <Popup
            hideOnScroll
            position='left center'
            on='click'
            content={<ButtonRemoveItem onRemove={() => removeItem(product.id)} />}
            trigger={<Button icon="trash" color="red" />}
            />
            </List.Content>
            <Image size='medium' src={product.ImgUrl}/>
            <List.Content>{product.title}</List.Content>
           
        </List.Item>
    )
}
export default ItemProductCart