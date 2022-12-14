import React,{Fragment, useContext, useMemo, useState} from "react";
import {Link} from 'react-router-dom'
import CartContext from "../../Context/CardContext/CartContext";
import ButtonRemoveItem from "../ButtonRemove/ButtonRemoveItem";
import CartContextManager from "../../Context/CardContext/CardContextManager";
import { Button, Icon, Image, Label, List, Popup, Segment } from "semantic-ui-react";
import './styles.css'
import { FiShoppingCart,FiArrowRight, FiArrowLeft, FiChevronDown,FiChevronUp } from "react-icons/fi";
const PopoverCart: React.FC =() =>{
    const{ products, removeItem} = useContext<CartContextManager>(CartContext)
    const [isOpen, setIsOpen] = useState(false)
    const haveProducts = products.length>0
    const totalCartValue = haveProducts ? products
    .map(p=>p.price||0)
    .reduce((accumulator, currentValue)=>accumulator + currentValue):0

    const trigger = (
        <Button fluid color="orange" onClick={() => setIsOpen(!isOpen)} className='buttonpop'>
          {isOpen ? <FiChevronUp size={40}/> : <FiChevronDown size={40}/>} 
          <FiShoppingCart size={40}/>
          {haveProducts && (
            <Label circular color="green" size="tiny">
              {products.length}
            </Label>
          )}
        </Button>
      );
  
      const ListProducts = useMemo(() => {
        console.log('ENTROU NO MEMO');
    
        return products.map((product, index: number) => (
          <List.Item key={`${index}-PopoverCart-${product.id}`}>
              <Image size="tiny" src={product.imageUrl} />
            <List.Content floated="right">
              <Label>
                {product.price &&
                  product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
              </Label>
            </List.Content>
            <br />
            <List.Content floated="right">
              <Popup
                hideOnScroll
                position="left center"
                on="click"
                content={<ButtonRemoveItem onRemove={() => removeItem(product.id)} />}
                trigger={<Button icon="trash" color="red" size="mini" />}
              />
            </List.Content>
            <List.Content>
              <small>{product.title}</small>
            </List.Content>
          </List.Item>
        ));
      }, [products, removeItem]);
    
      return (
        <Popup basic style={{ width: '400px' }} wide trigger={trigger} on="click" open={isOpen} className='popups'>
          <Segment size="massive" color="orange" className="segments">
            <strong> Meu Carrinho</strong>
            <br />
            <p>
              <small>
                {haveProducts ? (
                  <Fragment>
                    {`Quantidade:  `}
                    <b>{products.length}</b>
                    <br />
                    {`Total:  `}
                    <b>
                      {totalCartValue.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </b>
                  </Fragment>
                ) : (
                  <Fragment>
                    est?? vazio ...
                    <Icon name="leaf" />
                    <Icon name="leaf" />
                    <Icon name="leaf" />
                  </Fragment>
                )}
              </small>
            </p>
          </Segment>
    
          <div className='PopoverContent'>
            <List ordered size="massive" divided verticalAlign="middle">
              {ListProducts}
            </List>
          </div>
          <Link to={haveProducts ? 'carrinho' : '/'}>
            <Button color="green" fluid animated className='btnProdutos'>
              <Button.Content visible>
                {haveProducts ? 'Finalizar Compra' : 'Ver Produtos'}
              </Button.Content>
              <Button.Content hidden>
                {haveProducts ? <FiArrowRight size={20}/> : <FiArrowLeft size={20}/>} 
                
              </Button.Content>
            </Button>
          </Link>
        </Popup>
      );
    };
    
    export default PopoverCart;