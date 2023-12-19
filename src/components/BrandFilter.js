import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemContext from '../context/ItemContextProvider';
import { toCapitalize } from '../utils/UtilFunctions';
import axios from 'axios';

function BrandFilter() {
    const { brandOrder, brand, handleCheckboxChange } = useContext(ItemContext);
    const { setAllBrands, setBrandOrder } = useContext(ItemContext);

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

    return (
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
                                        }
                                        size='small'
                                    />}
                                    label={toCapitalize(e)}
                                />)
                        }
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default BrandFilter