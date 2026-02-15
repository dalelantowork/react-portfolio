import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Navbar from './Navbar/Navbar';
import BeeAnimation from './Effects/BeeAnimation';

const Layout: React.FC = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-lg-5 col-xl-4 col-xxl-3 fixed-sidebar-container">
                    <Sidebar />
                </div>
                <div className="col-lg-7 col-xl-8 col-xxl-9 main-content-scroll position-relative">
                    <BeeAnimation />
                    <Navbar />
                    <MainContent />
                </div>


            </div>
        </div>
    );
};

export default Layout;


