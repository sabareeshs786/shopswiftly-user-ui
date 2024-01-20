import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemContext from '../context/ItemContextProvider';
import { toCapitalize } from '../utils/UtilFunctions';
import axios from 'axios';
import { styled } from '@mui/system';

function BrandFilter() {
    const MyAccordion = styled(Accordion)({
        border: 'none',
        boxShadow: 'none',
        borderBottom: '1px solid rgb(0, 0, 0, 0.2)',
        outline: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        margin: 0,
        padding: 0,
      });

    const MyAccordionSummary = styled(AccordionSummary)({
        paddingBlockStart: '0.5rem',
        paddingBlockEnd: 0,
        paddingInline: '0.4rem',
        textTransform: 'uppercase',
        margin: 0
    })

    const MyTypography = styled(Typography)({
        fontSize: "0.8rem",
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 500
    });

    const MyAccordionDetails = styled(AccordionDetails)({
        margin: 0,
        padding: 0,
        paddingInline: '0.4rem',
        borderRadius: 0,
    });

    const MyFormGroup = styled(FormGroup)({
        paddingInline: '0.1rem',
        border: 'none',
        borderRadius: 0,
    });

    const MyFormControlLabel = styled(FormControlLabel)({
        transform: 'scale(0.9)'
    });

    const MyCheckbox = styled(Checkbox)({
        fontSize: '0.8rem',
    })

    const { brandOrder, brand, handleCheckboxChange } = useContext(ItemContext);
    const { setAllBrands, setBrandOrder } = useContext(ItemContext);

    useEffect(() => {
        const getBrandsByCategory = async () => {
            try {
                const response = await axios.get("http://localhost:3501/products/all-brands/mobiles");
                setAllBrands((response.data));
                setBrandOrder(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getBrandsByCategory();
    }, []);

    return (
        <div className='brand-filter' >
            <MyAccordion defaultExpanded={true}>
                <MyAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <MyTypography>Brands</MyTypography>
                </MyAccordionSummary>
                <MyAccordionDetails>
                    <div class="search-container">
                        <input class="search-input" type="text" placeholder="Search" />
                    </div>
                    <MyFormGroup>
                        {brandOrder && brandOrder.length > 0 &&
                            brandOrder.map((e, i) =>
                                <MyFormControlLabel
                                    key={i}
                                    control={<MyCheckbox
                                        defaultChecked={brand?.includes(e)}
                                        onChange={
                                            (event) => handleCheckboxChange(event, e)
                                        }
                                        size='small'
                                    />}
                                    label={toCapitalize(e)}
                                />)
                        }
                    </MyFormGroup>
                </MyAccordionDetails>
            </MyAccordion>
        </div>
    )
}

export default BrandFilter