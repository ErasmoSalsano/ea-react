import { Link } from "react-router-dom"
export function LowerFooter({props}){
    const svgStyle={
        pointerEvents:"none",
        display:"block",
        width:"100%",
        height:"100%",

    }
    const imgStyle={
        border:"none",
        height:57,
        width:191,
    }
    return(
        <section className="lowerFooter">
            <div className="lowerFooterContainer">
                <div className="eaLogo">
                <Link  to="https://www.ea.com/it-it" target="_self">
                    <img   src="/assets/images/footer/ea.png" width="64px" alt=""/>

                </Link>

                </div>
                <div className="lowerFooterBlock">
                    <div className="lowerFooterGroup1">
                        <div className="linksGroup1">
                            <Link className="lowerFooterLink" to="/it-it/games/library" title="Libreria dei giochi">Libreria dei giochi</Link>
                            <Link className="lowerFooterLink" to="/it-it/subscribe" title="Registrati">Registrati</Link>
                            <Link className="lowerFooterLink" to="/pages/Riscatta codice/redeem.html" title="Riscatta codice">Riscatta codice</Link>
                            <Link className="lowerFooterLink" to="https://www.origin.com/ita/it-it/store" title="Origin">Origin</Link>
                            <Link className="lowerFooterLink" to="/it-it/about" title="Informazioni">Informazioni</Link>
                            <Link className="lowerFooterLink" to="/it-it/able" title="Accessibilità">Accessibilità</Link>
                            <Link className="lowerFooterLink" to="https://help.ea.com/it" title="Aiuto">Aiuto</Link>

                        </div>
                        <div className="lowerFooterSelectors">
                            <div style={{position:"relative" }} id="dropup" class="dropup dropdown">
                                <button onClick="myFunction()" id="button1foot" className="dropbtn ">
                                    <div style={{pointerEvents:"none" }} className="button-title">
                                        Prezzi Regionali
                                    </div>
                                    <span  style={{pointerEvents:"none" }} className="dropup-value">Italia</span>
                                    <div  style={{pointerEvents:"none" }} className="button-icon">
                                        <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" style={svgStyle}><g><path d="M7.4,9.7l5.8-4.8c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4l-5.8,4.8 c-0.4,0.4-1,0.4-1.4,0l0,0C7,10.7,7,10.1,7.4,9.7z"></path><path d="M7.2,11.1L1.4,6.3C1,5.9,1,5.3,1.4,4.9l0,0c0.4-0.4,1-0.4,1.4,0l5.8,4.8c0.4,0.4,0.4,1,0,1.4 l0,0C8.3,11.5,7.6,11.5,7.2,11.1z"></path></g></svg>
                                    </div>
                                </button>
                                <div id="myDropdown" className="dropup-content dropdown-content">
                                <div className="dropupInsider">
                                    <Link className="footerContent footerContents">Austria</Link>
                                    <Link className="footerContent footerContents">Belgio</Link>
                                    <Link className="footerContent footerContents">Bulgaria</Link>
                                    <Link className="footerContent footerContents">Croazia</Link>
                                    <Link className="footerContent footerContents">Cipro</Link>
                                    <Link className="footerContent footerContents">Repubblica Ceca</Link>
                                    <Link className="footerContent footerContents">Danimarca</Link>
                                    <Link className="footerContent footerContents">Estonia</Link>
                                    <Link className="footerContent3 footerContents">Finlandia</Link>
                                    <Link className="footerContent2 footerContents">Francia</Link>
                                    <Link className="footerContent2 footerContents">Germania</Link>
                                    <Link className="footerContent2 footerContents">Grecia</Link>
                                    <Link className="footerContent2 footerContents">Ungheria</Link>
                                    <Link className="footerContent2 footerContents">Islanda</Link>
                                    <Link className="footerContent2 footerContents">Irlanda</Link>
                                    <Link className="footerContent2 footerContents">Italia</Link>
                                    <Link className="footerContent2 footerContents">Lettonia</Link>
                                    <Link className="footerContent3 footerContents">Liechtenstein</Link>
                                    <Link className="footerContent footerContents">Lituania</Link>
                                    <Link className="footerContent footerContents">Lussemburgo</Link>
                                    <Link className="footerContent footerContents">Malta</Link>
                                    <Link className="footerContent footerContents">Paesi Bassi</Link>
                                    <Link className="footerContent footerContents">Norvegia</Link>
                                    <Link className="footerContent footerContents">Polonia</Link>
                                    <Link className="footerContent footerContents">Portogallo</Link>
                                    <Link className="footerContent footerContents" >Romania</Link>
                                    <Link className="footerContent3 footerContents">Slovenia</Link>
                                    <Link className="footerContent4 footerContent footerContents">Spagna</Link>
                                    <aLink className="footerContent4 footerContent footerContents">Svezia</aLink>
                                    <Link className="footerContent4 footerContent footerContents">Svizzera</Link>
                                    </div>
                                </div>
                            </div>
                            <div id="myDropdown2" className="dropup-content2 dropdown-content2">
                            <div className="dropupInsider2"> 
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/united-states-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/>  United States</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/united-kingdom-uk-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> United Kingdom</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/australia-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> Australia</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/flag-for-flag-france-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> France</Link>
                                <Link class="footerContent5 footerContents"><img src="/assets/images/footer/flags/germany-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> Deutschland</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/italy-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> Italia</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/japan-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> 日本</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/republic-of-poland-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> Polska</Link>
                                <Link className="footerContent3 footerContents"><img src="/assets/images/footer/flags/brazil-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> Brasil</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/russia-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> Россия</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/spain-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> España</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/czech-republic-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> Česká republika</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/canada-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> Canada (En)</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/canada-svgrepo-com.svg" height="15px" width="15px" className="svgFoot" alt=""/> Canada (Fr)</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/denmark-svgrepo-com.svg" height="15px" width="15px" alt=""/> Danmark</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/finland-svgrepo-com.svg" height="15px" width="15px" alt=""/> Suomi</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/mexico-svgrepo-com.svg" height="15px" width="15px" alt=""/> México</Link>
                                <Link className="footerContent3 footerContents"><img src="/assets/images/footer/flags/netherlands-svgrepo-com.svg" height="15px" width="15px" alt=""/> Nederland</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/norway-svgrepo-com.svg" height="15px" width="15px" alt=""/> Norge</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/sweden-svgrepo-com.svg" height="15px" width="15px" alt=""/> Sverige</Link>
                                <Link className="footerContent5 footerContents">中国</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/flag-for-flag-south-korea-svgrepo-com.svg" height="15px" width="15px" alt=""/> 대한민국</Link>
                                <Link className="footerContent5 footerContents">繁體中文</Link>
                                <Link className="footerContent5 footerContents"><img src="/assets/images/footer/flags/turkey-svgrepo-com.svg" height="15px" width="15px" alt=""/> Türkiye</Link>
                                </div> 

                            </div>

                        </div>

                    </div>
                    <div className="lowerFooterGroup2">
                        <div className="linksGroup2">
                            <Link className="lowerFooterLink2" to="http://www.ea.com/it-it/legal" title="Note legali e privacy">Note legali e privacy</Link>
                            <Link className="lowerFooterLink2" to="https://www.ea.com/it-it/terms-of-service" title="NUOVO Accordo con l'utente">Accordo con l’utente</Link>
                            <Link className="lowerFooterLink2" to="https://www.ea.com/it-it/legal/privacy-and-cookie-policy" title="Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)">Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)</Link>
                            <Link className="lowerFooterLink2" to="/it-it/service-updates" title="Aggiornamenti sui servizi online">Aggiornamenti sui servizi online</Link>
                            <Link className="lowerFooterLink2" to="https://www.youtube.com/t/terms" title="Termini di servizio di YouTube">Termini di servizio di YouTube</Link>
                            <Link className="lowerFooterLink2" to="https://policies.google.com/privacy" title="Norme sulla privacy di Google">Norme sulla privacy di Google</Link>
                            <Link className="lowerFooterLink2" to="" title="Cookie Preferenze">Cookie Preferenze</Link>
                            <p className="electronicArts">© 2022 Electronic Arts Inc.</p>

                        </div>
                        <div className="trustELogo">
                            <Link  to="//privacy.truste.com/privacy-seal/validation?rid=2593a571-b03b-4951-9a22-c175bd66b351&amp;lang=it" target="_blank">
                                <img style={imgStyle} src="/assets/images/footer/trustE.svg" alt="TRUSTe"/>
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}