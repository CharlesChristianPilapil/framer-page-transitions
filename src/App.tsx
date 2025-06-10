import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './Components/Pages/Home';
import AboutPage from './Components/Pages/About';
import ServicesPage from './Components/Pages/Services';
import Navbar from './Components/Navbar';
import { AnimatePresence } from 'framer-motion';
import ErrorPage from './Components/Pages/ErrorPage';

function App() {

    const location = useLocation();

    return (
        <>
            <Navbar />
            <main className='px-5'>
                <div className='container mx-auto min-h-[calc(100vh-80px)] py-20 flex items-center justify-center'>
                    <AnimatePresence mode='wait'>
                        <Routes location={location} key={location.pathname}>
                            <Route index element={<HomePage />} />
                            <Route path='/about/' element={<AboutPage />} />
                            <Route path='/services/' element={<ServicesPage />} />
                            <Route path='*' element={<ErrorPage />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </main>
        </>
    )
}

export default App
