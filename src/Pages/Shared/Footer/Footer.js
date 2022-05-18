import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="footer text-center">
            <p className="footer-text">&copy; {year}. To-TodoList. All rights reserved.</p>
        </footer>
    );
};

export default Footer;