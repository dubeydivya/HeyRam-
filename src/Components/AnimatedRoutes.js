import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Homepage from './Homepage'
import Genz from './Genz'
import AWS from './AWS'
import Crypto from './Crypto'
import Digital from './Digital'
import Agriculture from './Agriculture'
import ContactCard from './ContactCard'
import ServiceContext from '../Context/ServiceContext'
import DigitalServiceData from '../Context/DigitalServiceData'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()

    return <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/home" element={<ServiceContext>
                    <Homepage />
                </ServiceContext>} />
                <Route path="/genz" element={<Genz />} />
                <Route path="/cloud-services" element={<AWS />} />
                <Route path='/digital-service' element={
                    <DigitalServiceData>
                        <Digital />
                    </DigitalServiceData>
                } />
                {/* <Route path='/nav' element={<NavBar />} /> */}
                <Route path='/crypto-mining' element={<Crypto />} />
                <Route path='/enquiry-card' element={<ContactCard />} />
                <Route path='/agriculture' element={<Agriculture />} />
                <Route path='*' element={<Navigate to='/home' />} />
            </Routes>
        </AnimatePresence>
    </>
}

export default AnimatedRoutes