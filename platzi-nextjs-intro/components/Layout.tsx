import React from 'react';
import Navbar from "./Navbar";

const Layout: React.FC = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <footer className="container">Este es el footer</footer>
            <style jsx>
                {`
                  .container {
                    background-color: aquamarine;
                  }
                `}
            </style>
        </>
    );
};

export default Layout;