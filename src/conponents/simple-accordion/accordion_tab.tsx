import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {BsLightningCharge} from 'react-icons/bs';
import {BsNewspaper} from 'react-icons/bs';
import {TbPresentationAnalytics} from 'react-icons/tb';
import React from 'react'

export const Accordion_tab: React.FC<{}> = () => {

    const [isActive, setIsActive] = React.useState<boolean>(false);
    return (
        <Accordion sx={{backgroundColor: 'black'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{color: 'white', backgroundColor: isActive ? 'rgb(22, 24, 28)': 'black'}}
                onClick={() => setIsActive(!isActive)}
                >
                    <div>
                        Creator Studio
                    </div> 
                </AccordionSummary>

                <AccordionDetails>
                    <div className='text-white'>
                        <div className={`flex py-0 font-bold cursor-pointer item-center`}>
                            <div className='flex items-center'>
                                <BsLightningCharge />
                            </div>
                            <div className='ml-3'>
                                Home
                            </div>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer item mt-3`}>
                            <BsNewspaper />
                            
                            <div className='ml-3'>
                                Home
                            </div>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer item mt-3`}>
                            <TbPresentationAnalytics />
                            
                            <div className='ml-3'>
                                Home
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

    )
}