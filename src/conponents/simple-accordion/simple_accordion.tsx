import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MobileSidelink from '../sidebar/mobileSidelink';
import HomeIcon from '@mui/icons-material/Home';
import { BsLightningCharge } from 'react-icons/bs';
import { BsNewspaper } from 'react-icons/bs';
import { TbPresentationAnalytics } from 'react-icons/tb';

import { BiRocket } from 'react-icons/bi';
import { MdScreenShare } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { MdDataSaverOn } from 'react-icons/md';
import { BsDisplay } from 'react-icons/bs';
import { BsKeyboard } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';








interface AccordionProps {
    username: string
}
export default function Simple_accordion(props: AccordionProps) {
    const [isActive1, setIsActive1] = React.useState<boolean>(false);
    const [isActive2, setIsActive2] = React.useState<boolean>(false);
    const [isActive3, setIsActive3] = React.useState<boolean>(false);
    return (
        <div>
            <Accordion sx={{ backgroundColor: 'black' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ color: 'white', backgroundColor: isActive1 ? 'rgb(22, 24, 28)' : 'black' }}
                    onClick={() => setIsActive1(!isActive1)}
                >
                    <div>
                        Creator Studio
                    </div>
                </AccordionSummary>

                <AccordionDetails>

                    <div className='text-white'>
                        <div className={`flex py-0 font-bold cursor-pointer items-center`}>
                            <div className='flex items-center'>
                                <BsLightningCharge />
                            </div>
                            <Typography>
                                <div className='ml-3'>
                                    Moments
                                </div>
                            </Typography>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer items-center mt-3`}>
                            <BsNewspaper />

                            <div className='ml-3'>
                                Newsletter
                            </div>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer items-center mt-3`}>
                            <TbPresentationAnalytics />

                            <div className='ml-3'>
                                Analytics
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            {/* Professional Tools */}
            {/* Settings and Support */}
            <Accordion sx={{ backgroundColor: 'black' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ color: 'white', backgroundColor: isActive2 ? 'rgb(22, 24, 28)' : 'black' }}
                    onClick={() => setIsActive2(!isActive2)}
                >
                    <div>
                        Professional Tools
                    </div>
                </AccordionSummary>

                <AccordionDetails>

                    <div className='text-white'>
                        <div className={`flex py-0 font-bold cursor-pointer items-center`}>
                            <div className='flex items-center'>
                                <BiRocket />
                            </div>
                            <Typography>
                                <div className='ml-3'>
                                    Twitter for Professionals
                                </div>
                            </Typography>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer items-center mt-3`}>
                            <MdScreenShare />

                            <div className='ml-3'>
                                Twitter Ads
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: 'black' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ color: 'white', backgroundColor: isActive3 ? 'rgb(22, 24, 28)' : 'black' }}
                    onClick={() => setIsActive3(!isActive3)}
                >
                    <div>
                        Settings and Support
                    </div>
                </AccordionSummary>

                <AccordionDetails>

                    <div className='text-white'>
                        <div className={`flex py-0 font-bold cursor-pointer items-center`}>
                            <div className='flex items-center'>
                                <AiFillSetting />
                            </div>
                            <Typography>
                                <div className='ml-3'>
                                    Settings and Privacy
                                </div>
                            </Typography>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer items-center mt-3`}>
                            <BiHelpCircle />

                            <div className='ml-3'>
                                Help Center
                            </div>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer items-center mt-3`}>
                            <MdDataSaverOn />

                            <div className='ml-3'>
                                Data Saver
                            </div>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer items-center mt-3`}>
                            <BsDisplay />

                            <div className='ml-3'>
                                Display
                            </div>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer items-center mt-3`}>
                            <BsKeyboard />

                            <div className='ml-3'>
                                Keyboard Shortcuts
                            </div>
                        </div>
                        <div className={`flex py-0 font-bold cursor-pointer items-center mt-3`}>
                            <FiLogOut />

                            <div className='ml-3'>
                                Log out @ {props.username}
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
