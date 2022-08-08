import React from "react";
import Helmet from 'react-helmet'
import { Button, Divider, Header, Icon, Image, Label, Modal, Statistic } from 'semantic-ui-react';
import Product from "../../Pages/Home/Products";

interface ModalProps{
    onClose:Function
    onAdd: Function
    open: boolean
    product: Product
    isInTheCart: boolean
}
const ModalProduct : React.FC <ModalProps> =({onClose, onAdd, open, product, isInTheCart})=>{
 return (
    <Modal
    closeIcon
    closeOnDimmerClick={false}
    dimmer='blurring'
    open = {open}
    onClose={()=>onClose()}
    >
    <Modal.Header>Informações do produto</Modal.Header>
    <Modal.Content image>
    <Helmet>
        <title>{product.title}</title>
    </Helmet>
    {product.ImgUrl}
    <Statistic horizontal color='blue' size='tiny'>
        <Statistic.Label>Preço:</Statistic.Label>
        <Statistic.Value>
            {product.price.toLocaleString('pt-BR',
            {style:'currency',
             currency:'BRL'
            })}
        </Statistic.Value>
    </Statistic>
    </Modal.Content>

    <Modal.Actions>
        <Button onClick={()=>onClose()}>Voltar</Button>
        {product && (
            <Button onClick={()=> onAdd(product)}
            disabled={isInTheCart}
            color= {isInTheCart? 'grey':'blue'}>
                <Icon name='plus'/>
                {isInTheCart?' já está no carrinho': 'adicionar ao carrinho'}
                 <Icon name='cart'/>
            </Button>
        )}

    </Modal.Actions>
    </Modal>
 )   
}
export default ModalProduct