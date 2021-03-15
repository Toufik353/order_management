import classes from './ExecNav.module.css';
import React from 'react'

function ExecNav(props) {
    const { showOrders, setShowOrders, showCreateOrder, setShowCreateOrder } = props;
    return (
        <div className={classes.ExecNav}>
            <button className={showOrders === true ? classes.BackColor : classes.withoutcolor} onClick={() => { return (setShowOrders(!showOrders), setShowCreateOrder(false)) }}>View Orders</button>
            <button className={showCreateOrder === true ? classes.BackColor : classes.withoutcolor} onClick={() => { return (setShowCreateOrder(!showCreateOrder), setShowOrders(false)) }}>Create Orders</button>
        </div>
    )
}

export default ExecNav;
