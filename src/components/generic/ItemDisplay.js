import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Slider from "@mui/material/Slider";
import axios from 'axios';
import '../../css/item-display.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



function ItemDisplay() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const [brand, setBrand] = useState(queryParams.get('brand')?.split(','));
    const [sort, setSort] = useState(queryParams.get('sort'));
    const [data, setData] = useState(null);
    const [range, setRange] = React.useState([5, 30]);
    const [minMaxValues, setMinMaxValues] = useState({ min: 0, max: 100 });
    const formatValueLabel = (value) => `₹${value}`;
    const getAriaValueText = (value) => `₹${value}`;

    const handleChanges = async (event, newValue) => {
        setRange(newValue);
    }

    useEffect(() => {
        const getAndSetMinMax = async () => {
            try {
                const response = axios.get("http://localhost:3501/items/minmax/mobiles?brand=oppo");
                const { minValue, maxValue } = (await response).data;
                console.log(minValue, maxValue);
                setMinMaxValues({ min: minValue, max: maxValue });
                setRange([minValue, maxValue]);

            } catch (error) {
                console.log()
            }
        }
        getAndSetMinMax();
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
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className='mobile-list float-left'>
                mobiles
            </div>
        </div>
    )
}

export default ItemDisplay;
