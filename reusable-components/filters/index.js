import styles from './styles.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState, useEffect } from 'react';

const Filters = ({ data }) => {
    const [productsDropdown, setProductsDropdown] = useState([]);

    const options = [
        'one', 'two', 'three'
    ];

    const _onSelect = (e) => {

    }

    useEffect(() => {
        _onSelectProducts();
    }, [])

    const _onSelectProducts = (e) => {
        let dropDown = [];
        const uniqueProducts = [...new Set(data.map(item => item.product_name))];
        setProductsDropdown(uniqueProducts);
    }
    console.log(data, "filters")
    return (
        <div className={styles.container}>
            <div className={styles.heading}>Filters</div>
            <div className={styles.lineBreak}></div>
            <Dropdown className={styles.input_products} options={productsDropdown} onChange={_onSelectProducts} value='' placeholder="Products" />;
            <Dropdown className={styles.input_state} options={options} onChange={_onSelect} value='' placeholder="State" />;
            <Dropdown className={styles.input_city} options={options} onChange={_onSelect} value='' placeholder="City" />;
        </div>
    )
}

export default Filters
