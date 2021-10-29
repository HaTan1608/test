import { useState } from "react";
import ShowFooterLinks from "./ShowFooterLinks"

const FooterIntro =()=>{
    const [state] = useState({
        pages: [
            { id: 1, name: 'home', route: '/' },
            { id: 2, name: 'about', route: '/about' },
            { id: 3, name: 'contact', route: '/contact' },
        ],
        
    });
    const {pages} =state;
     return(
        <div className="footer__intro">
                <h3 className="footer__heading">What happened</h3>
                <ShowFooterLinks links={pages}/>
            </div>
    )   
}
export default FooterIntro