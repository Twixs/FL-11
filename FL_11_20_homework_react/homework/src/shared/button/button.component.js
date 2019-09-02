import React from 'react';
import styles from './button.module.scss';

function Button(props){
    const {price} = props;
    return <button className={styles.getButton}>Get ({price}$)</button>
}

export default Button;