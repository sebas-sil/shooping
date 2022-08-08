import React, {useContext} from "react"
import { List } from "semantic-ui-react"
import CartContext from "../../Context/CardContext/CartContext"
import ItemProductsCart from '../ItemProductsCart/ItemProductsCart'

const ListProductsCart : React.FC =() =>{
    const {products, removeItem} = useContext(CartContext)
    return(
        <List size='massive' divided verticalAlign='middle'>
            {products.map((product, index : number)=>(
                <ItemProductsCart
                 key={`${index}-ListProductsCart-${product.id}`}
                 product={product}
                 removeItem={removeItem}
                />
            ))}
        </List>
    )
}
export default ListProductsCart