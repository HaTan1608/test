import FooterIntro from "./FooterIntro"
import FooterLinks from "./FooterLinks"

const Footer = () =>{
    
    return(
        <footer className="footer" >
            <div className="footer__container">
                <div className="container">
                    <div className="footer__container__block">
                        <div className="row ml-minus-15 mr-minus-15">
                            <div className="col-6 m-4 s-12 p-15">
                                <FooterIntro/>
                            </div>
                            <div className="col-6 m-8 s-12 p-15">
                                <FooterLinks/>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="footer__bottom">
                                <p>&copy; Copy right what happened {new Date().getFullYear()}</p>
                            </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;