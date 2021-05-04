import React from 'react';

const Footer = () => {
    const footerStyles = {
        textAlign : 'center', 
        color : 'white', 
        background : '#343a40', 
        width : '100%',
        paddingTop : '1rem',
        paddingBottom : '.01rem'
    }
    return (
        <footer style={footerStyles}>
            <p>Copyright &copy; Technosoft 2021<br/>
            Designed by Technosoft with love.</p>
        </footer>
    )
}

export default Footer;