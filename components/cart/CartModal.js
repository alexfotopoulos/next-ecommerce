import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from "./CartModal.module.scss";
import { useSelector } from 'react-redux';
import CartItem from "./CartItem";
import CartBubble from './CartBubble';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CartModal() {
    //state to toggle modal open or closed
    const [open, setOpen] = React.useState(false);

    //functions to open/close modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //grab cart items from redux
    const cartItems = useSelector(state => state.cart.items);
    //grab subtotal from redux
    const subtotal = useSelector(state => state.cart.subtotal);
    //grab total items from redux
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    //define cart content based on if there are items in the cart
    let content;
    if (totalQuantity === 0) {
        content = (
            <div className={styles.CartHeading}>Your Cart is Empty</div>
        );
    } else {
        let products = [];
        for (let item of cartItems) {
            for (let qty in item.size){
                products.push(<CartItem key={Math.random()} quantity={item.size[qty].qty} size={qty} title={item.title} price={item.price}/>);
            };
        };
        content = (
            <div>
                <h3 className={styles.CartHeading}>Your Shopping Cart</h3>
                <div>
                    {products}
                </div>
                <div>
                    Subtotal: ${subtotal.toFixed(2)}
                </div>
            </div>
        );
    };

    return (
        <div>
            <Button onClick={handleOpen}>
                <ShoppingCartOutlinedIcon className={styles.cartIcon} />
                <CartBubble />
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    {content}
                </Box>
            </Modal>
        </div>
    );
};