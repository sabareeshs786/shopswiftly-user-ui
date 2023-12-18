import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios, { all } from 'axios';
import Slider from "@mui/material/Slider";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../../css/item-display.css';
import { toCapitalize } from '../../utils/UtilFunctions';

function ItemDisplay() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const [brand, setBrand] = useState(queryParams.get('brand')?.split(','));
    const [allBrands, setAllBrands] = useState([]);
    const [brandOrder, setBrandOrder] = useState([]);
    const [sort, setSort] = useState(queryParams.get('sort'));
    const [data, setData] = useState(null);
    const [range, setRange] = useState([5, 30]);
    const [minMaxValues, setMinMaxValues] = useState({ min: 0, max: 100 });
    const formatValueLabel = (value) => `₹${value}`;
    const getAriaValueText = (value) => `₹${value}`;

    const handleChanges = async (event, newValue) => {
        setRange(newValue);
    }

    const handleCheckboxChange = (event, brandName) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setBrand((prevBrands) => [...prevBrands, brandName]);
            // setBrandOrder((prevOrder) => prevOrder.filter((item) => brand.includes(item)).concat(allBrands.filter((item) => !brand.includes(item))));
        } else {
            setBrand((prevBrands) => prevBrands.filter((item) => item !== brandName));
            // setBrandOrder((prevOrder) => prevOrder.filter((item) => brand.includes(item)).concat(allBrands.filter((item) => !brand.includes(item))));
        }
    };

    useEffect(() => {
        const getAndSetMinMax = async () => {
            try {
                const response = await axios.get("http://localhost:3501/items/minmax/mobiles?brand=oppo");
                const { minValue, maxValue } = (await response).data;
                setMinMaxValues({ min: minValue, max: maxValue });
                setRange([minValue, maxValue]);
            } catch (error) {
                console.log(error)
            }
        };
        getAndSetMinMax();
    }, []);

    useEffect(() => {
        const getAllBrands = async () => {
            try {
                const response = await axios.get("http://localhost:3501/items/all-brands/mobiles");
                setAllBrands((response.data));
                setBrandOrder(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllBrands();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const queryParam = { preview: false, brand: queryParams.get('brand') };
            const response = await axios.get('http://localhost:3501/items/mobiles', { params: queryParams });

        }

        fetchData();
    }, [brand, sort]);

    return (
        <div className="main-container-item">
            <div className='cust-filter float-left'>
                <div className='cust-filter-header'>
                    <div className='cust-filter-text'>Filters</div>
                    <Link to="#">Clear all</Link>
                </div>
                <div className='cust-filter-content'>
                    <div>
                        <label>Categories</label>
                    </div>
                    <div className='categories'>
                        Mobiles
                    </div>
                </div>
                <div className='price-filter'>
                    <div>
                        <label>Price</label>
                    </div>
                    <div>
                        <Slider
                            value={range}
                            onChange={handleChanges}
                            valueLabelDisplay="auto"
                            min={minMaxValues.min}
                            max={minMaxValues.max}
                            valueLabelFormat={formatValueLabel}
                            getAriaValueText={getAriaValueText}
                        />
                    </div>
                    <center>₹{range[0]} to ₹{range[1]}</center>
                </div>
                <div className='brand-filter' >
                    <Accordion defaultExpanded={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Brands</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            </Typography>
                            <div class="search-container">
                                <input class="search-input" type="text" placeholder="Search" />
                            </div>
                            <FormGroup>
                                {brandOrder && brandOrder.length > 0 &&
                                    brandOrder.map((e, i) =>
                                        <FormControlLabel
                                            key={i}
                                            control={<Checkbox
                                                defaultChecked={brand.includes(e)}
                                                onChange={
                                                    (event) => handleCheckboxChange(event, e)
                                                } />}
                                            label={toCapitalize(e)}
                                        />)
                                }
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className='mobile-list float-left'>
                {
                    brandOrder
                }
                <br />
                {
                    brand
                }
            </div>
        </div>
    )
}

export default ItemDisplay;
