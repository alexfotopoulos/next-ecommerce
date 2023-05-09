import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./NavDrawer.module.scss";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/CartSlice';

export default function NavDrawer() {
    //state for showing/hiding navDrawer
    const [open, setOpen] = React.useState(false);
    //state to collapse/expand nested list
    const [state, setState] = React.useState({
        left: false
    });

    //initialize dispatch
    const dispatch = useDispatch();

    //handler function to open cart modal
    const handleOpen = () => dispatch(cartActions.openModal())

    //handler function to toggle navDrawer
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        };
        setState({ ...state, [anchor]: open });
    };
    //handler function to toggle nested list
    const handleClick = () => {
        setOpen(open => !open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={styles.navDrawerHeading}>
                <MenuIcon className={styles.navDrawerButtonMenu} />
                <div className={styles.navDrawerTitle}>Menu</div>
            </div>
            <hr />
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
            >
                <ListItemButton>
                    <Link href="/collection">
                        <div  className={styles.NavDrawerListItem} onClick={toggleDrawer(anchor, false)}>Just Dropped</div>
                    </Link>
                </ListItemButton>
                <ListItemButton onClick={toggleDrawer(anchor, false)}>
                        <div  className={styles.NavDrawerListItem} onClick={handleOpen}>Shopping Cart</div>
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <div className={styles.NavDrawerListItem} >Customer Support</div>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Link href="#" onClick={toggleDrawer(anchor, false)}>
                                <div className={styles.NavDrawerListItem} >About Us</div>
                            </Link>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Link href="#" onClick={toggleDrawer(anchor, false)}>
                                <div className={styles.NavDrawerListItem} >Contact Us</div>
                            </Link>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Link href="#" onClick={toggleDrawer(anchor, false)}>
                                <div className={styles.NavDrawerListItem} >Track Order</div>
                            </Link>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Box>
    );

    return (
        <div className={styles.navDrawer}>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon className={styles.navDrawerButton} />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};