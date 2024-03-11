import React, { useEffect } from 'react'
import './css/Aws.css'
import Fade from 'react-reveal/Fade';
import {motion} from 'framer-motion'
function AWS() {
    useEffect(() => {
        document.title = "Cloud Services"
    }, [])

    return <>
        <motion.div className='container-fluid aws' initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth,transition:{duration:0.1}}}>
            <div className="row aws-row">
                <div className='col-md-12 text-white text-center p-4 '>
                    <Fade>
                        <div className='title display-5 p-3'>WELCOME TO OUR CLOUD SERVICES!</div>
                    </Fade>
                    <div className='aws-content'>
                        <Fade>
                            <p className='text-white'>We Pride Ourselves on Offering Innovative Solutions That Cater to The Diverse Needs of Our Clients.</p>
                        </Fade>
                    </div>
                </div>
                <div className='col-md-12'>
                    <Fade>
                        <div className='title display-6 p-3 text-white'>
                            Here's what makes us stand out
                        </div>
                    </Fade>
                </div>
            </div>
        </motion.div>
    </>
}

export default AWS