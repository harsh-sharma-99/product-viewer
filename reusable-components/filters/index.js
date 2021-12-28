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
    const [selectedStateFlag, setSelectedStateFlag] = useState();
    //value of selected product
    const [selProductVal, setSelProductVal] = useState('');
    const [selStateVal, setSelStateVal] = useState('');

    useEffect(() => {
        data && _onSelectedProducts();
        data && _onSelectedState();
        data && _onSelectedCity();
    }, [data]);

    useEffect(() => {
        _onSelectedState();
    }, [selProductVal])

    useEffect(() => {
        _onSelectedCity();
    }, [selProductVal, selStateVal])


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
    const _onSelectedState = (e) => {
        if (!selectedProductFlag) {
            const uniqueStates = [...new Set(data.map(item => item.address.state))];
            setStateDropdown(uniqueStates);
        } else {
            const filteredData = data.filter(prod => prod.product_name === selProductVal);
            const uniqueStates = [... new Set(filteredData.map(item => item.address.state))];
            setStateDropdown(uniqueStates);
        }
        typeof e === 'undefined' ? setSelectedStateFlag(false) : setSelectedStateFlag(true);
        if (e) {
            setSelStateVal(e.value);
        }
    }

    //City dropdown onchange function
    const _onSelectedCity = () => {
        if (!selectedProductFlag && !selectedStateFlag) {
            const uniqueCities = [... new Set(data.map(item => item.address.city))];
            setCityDropdown(uniqueCities);
        }
        if (selectedProductFlag && !selectedStateFlag) {
            const filteredData = data.filter(prod => prod.product_name === selProductVal);
            const uniqueCities = [... new Set(filteredData.map(item => item.address.city))];
            setCityDropdown(uniqueCities);
        }
        if (!selectedProductFlag && selectedStateFlag) {
            const filteredData = data.filter(prod => prod.address.state === selStateVal);
            const uniqueCities = [... new Set(filteredData.map(item => item.address.city))];
            setCityDropdown(uniqueCities);
        }
        if (selectedProductFlag && selectedStateFlag) {
            const filteredData = data.filter(prod => prod.address.state === selStateVal && prod.product_name === selProductVal);
            const uniqueCities = [... new Set(filteredData.map(item => item.address.city))];
            setCityDropdown(uniqueCities);
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Filters</div>
            <div className={styles.lineBreak}></div>
            <div className={styles.input_products}>
                <Dropdown options={productsDropdown} onChange={_onSelectedProducts} placeholder="Products" />;
            </div>
            <div className={styles.input_state}>
                <Dropdown options={stateDropdown} onChange={_onSelectedState} placeholder="State" />;
            </div>
            <div className={styles.input_city}>
                <Dropdown options={cityDropdown} onChange={_onSelectedCity} placeholder="City" />;
            </div>
        </div>
    )
}

export default Filters
