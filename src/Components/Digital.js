import React, { useContext } from 'react'
import './css/Digital.css'
import { Link } from 'react-router-dom'
import DigitalCard from './Cards/DigitalCard'
import { DigitalData } from '../Context/DigitalServiceData'
import Zoom from 'react-reveal/Zoom';
import {motion} from 'framer-motion'

function Digital() {
    let CardData = useContext(DigitalData)

    return <>
        <motion.div className='container-fluid' initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth,transition:{duration:0.1}}}>
            <div className='row '>
                <Zoom>
                    <div className='col-md-12 text-center digital-col'>
                        <div className='display-1 p-5'>DIGITAL SERVICES</div>
                    </div>
                </Zoom>
            </div>
            <div className='row'>
                <Zoom><div className='col-md-12 text-center'>
                    <p className='digital-para'>Things are growing digitally quickly in the twenty-first century. Businesses are utilizing digital marketing to grow to new heights as traditional marketing is dying. A team of marketing experts at HeyRam Infrastructure, a perfect Tech startup agency in Chennai, India, analyzes your company, competitors, target market, products, and digital items to provide accurate analytics. Services offered include SEO, GOOGLE ADS (SEM), SOCIAL MEDIA MARKETING (SMM), and WEB DESIGN AND SOFTWARE DEVELOPMENT COMPANY. <br /><br />
                        One of the best Tech startup firms in Chennai, India, HEY RAM INFRASTRUCTURE, assists you in reaching your target audience at the appropriate moment. Our mission is to create digital solutions for small and medium-sized businesses (SME) in industries such as real estate, apparel, healthcare, education, food, beauty, gardening, and logistics.IT and Ecommerce services in Digital World. <br /><br /><br />
                        We help you transform your customer experiences and deliver them at a radically lower cost.</p>
                    <Link to='/enquiry-card'>
                        <button type="button" className='btn btn-light'>MAKE AN ENQUIRY</button>
                    </Link>
                </div>
                </Zoom>
            </div>
            <div className='row'>
                {
                    CardData.data.map((e, i) => {
                        return <div className='col-md-4'>
                            <DigitalCard input={e} key={i} />
                        </div>
                    })
                }
            </div>
        </motion.div>
    </>
}

export default Digital