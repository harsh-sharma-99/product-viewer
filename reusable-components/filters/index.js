import styles from './styles.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState, useEffect } from 'react';

const Filters = ({ data }) => {
    //dropdown values
    const [productsDropdown, setProductsDropdown] = useState([]);
    const [stateDropdown, setStateDropdown] = useState([]);
    const [cityDropdown, setCityDropdown] = useState([]);
    //flag for selected product status
    const [selectedProductFlag, setSelectedProductFlag] = useState();
    //value of selected product
    const [selProductVal, setSelProductVal] = useState('');

    useEffect(() => {
        data && _onSelectedProducts();
        data && _onSelectedState();
        data && _onSelectedCity();
    }, [data]);

    useEffect(() => {
        _onSelectedState();
    }, [selProductVal])

    // Products dropdown onchange funtion
    const _onSelectedProducts = (e) => {

        const uniqueProducts = [...new Set(data.map(item => item.product_name))];
        uniqueProducts && setProductsDropdown(uniqueProducts);
        typeof e === 'undefined' ? setSelectedProductFlag(false) : setSelectedProductFlag(true);
        if (e) {
            setSelProductVal(e.value);
        }
    }

    //State dropdown onchange function
    const _onSelectedState = () => {
        if (!selectedProductFlag) {
            const uniqueStates = [...new Set(data.map(item => item.address.state))];
            setStateDropdown(uniqueStates);
        } else {
            const filteredData = data.filter(prod => prod.product_name === selProductVal);
            const uniqueStates = [... new Set(filteredData.map(item => item.address.state))];
            setStateDropdown(uniqueStates);
        }
    }

    //City dropdown onchange function
    const _onSelectedCity = () => {
    }

    console.log(data);
    return (
        <div className={styles.container}>
            <div className={styles.heading}>Filters</div>
            <div className={styles.lineBreak}></div>
            <Dropdown className={styles.input_products} options={productsDropdown} onChange={_onSelectedProducts} placeholder="Products" />;
            <Dropdown className={styles.input_state} options={stateDropdown} onChange={_onSelectedState} placeholder="State" />;
            <Dropdown className={styles.input_city} options={cityDropdown} onChange={_onSelectedCity} placeholder="City" />;
        </div>
    )
}

export default Filters
