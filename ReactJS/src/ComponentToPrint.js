import React from 'react';
import Data from './db.json';
import ReactToPrint from "react-to-print";





class ComponentToPrint extends React.Component {

     
render() {
    
return (
<>


    <div className="custom-haed custom-paper">
        <div className="row-of-img">
            {Data.images.map((image) => { return(
            <div class="parallelogram">
                <img src={image.imageUrl} alt="thisisimage" />
            </div>
            );})}
        </div>

        <div className="shadow-of-blue"></div>

        <div className="content-of-top">

            <h1>{Data.fonts.map((fontr) => { return(
                <span style={{ color: fontr.secondaryColour }}>Unit</span>
                );})} Information
            </h1>
            <div className="address">
                <div className="img-locate">
                    <img src="./img/placeholder.svg" alt="thisisimage" />
                </div>
                <div className="address-paragraph">
                    {Data.fonts.map((fontr) => { return(<p style={{ color: fontr.secondaryColour }}>Mall of vthe south</p>);})}
                    {/* <p className="address-p">{address.streetAddress}</p> */}
                </div>
            </div>
            <div className="view-pdf">
                <img src="./img/add.svg" alt="thisisimage" />
                <p>View additional units</p>
            </div>
        </div>
        <div className="bg-s">
            <div className="main-box">
                <div className="custom-unit"><b>{Data.fonts.map((fontr) =>{ return (<p className="font-size-unit2" style={{ color: fontr.secondaryColour }}>Unit 354</p>);})}</b></div>
                <div className="font-size-unit3 ">
                    <img src="./img/add.svg" alt="thisisimage" width="30px" /> More
                </div>
                <div className="inner-main-box">
                    <div className="custom-inner-boxes">
                        {Data.units.map((unitsnew, index) => {
                        return(
                        <div className="data-table-boxes">
                            <div className="d-flex">
                                <div className="font-size-unit5 ">Unit 354 {Data.fonts.map((fontr) => { return ( <span style={{ color: fontr.secondaryColour }}>/ {index + 1}</span>);})}</div>
                                <div className="font-size-unit4 ">
                                    <img src="./img/add.svg" alt="thisisimage" width="30px" /> More
                                </div>
                            </div>
                            <div className="border-bottoms"></div>
                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/box.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> GLA </span>
                                        <br />
                                        <span> {unitsnew.gla} m<sup>2</sup></span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">

                                    </div>
                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/money.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Asking Gross </span>
                                        <br />
                                        <span> {unitsnew.gmr.toFixed(0)} / m<sup>2</sup></span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">
                                        <span> Asking Net </span>
                                        <br />
                                        <span> {unitsnew.netAskingRental} / m<sup>2</sup></span>
                                    </div>

                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/factory.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Category </span>
                                        <br />
                                        <span> {unitsnew.category} </span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">
                                        <span> Space Type </span>
                                        <br />
                                        <span> GLA</span>
                                    </div>

                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box2">
                                <div className="small-box-i">
                                    <div className="">
                                        <img src="./img/i.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Additional Information Generator onsite, keys with secutity on premis showers</span>

                                    </div>
                                </div>
                            </div>



                        </div>





                        );
                        })}



                    </div>
                    <div className="border-bottoms-full"></div>
                    <div className="d-flex">

                        <div className="very-small-boxes">
                            <div className="">
                               
                            </div>
                            <div className="font-size-unit">
                                <span> Available </span>
                                <br />
                                {Data.units.map((unitsr, index) => {
                                return(<span> {unitsr.availableFrom}<br/> </span>);
                                })}
                            </div>
                        </div>


                        <div className="very-small-boxes">
                            <div className="">
                                <img src="./img/layers.png" className="menu-img" />
                            </div>
                            <div className="font-size-unit">
                                <span> floor </span>
                                <br />
                                {Data.units.map((unitsr, index) => {
                                return(<span> {unitsr.floors}<br/> </span>);
                                })}
                            </div>
                        </div>


                        <div className="very-small-boxes">
                            <div className="">
                                <img src="./img/2.png" className="menu-img" />
                            </div>
                            <div className="font-size-unit">
                                <span> Subdivisible </span>
                                <br />
                                <span> Size </span>
                                <br />
                                <span> 300 m<sup>2</sup> </span>
                            </div>
                        </div>


                        <div className="very-small-boxes">
                            <div className="">
                                <img src="./img/expand.png" className="menu-img" />
                            </div>
                            <div className="font-size-unit">
                                <span> Combinable </span>
                                <br />
                                <span> </span>
                            </div>
                        </div>


                    </div>

                    <div className="">

                        <div className="very-small-boxes">
                            <div className="font-size-unit">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="custom-unit custom-unit-6"><b>{Data.fonts.map((fontr) => { return (<p className="font-size-unit2" style={{ color: fontr.secondaryColour }}>Unit 354</p>);})}</b></div>

                <div className="inner-main-box2">

                    <div className="custom-inner-boxes">
                        {Data.units.map((unitsnew, index) => {
                        return(
                        <div className="data-table-boxes">


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/box.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> GLA </span>
                                        <br />
                                        <span> {unitsnew.gla} m<sup>2</sup></span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">

                                    </div>
                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/money.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Asking Gross </span>
                                        <br />
                                        <span> {unitsnew.gmr.toFixed(0)} / m<sup>2</sup></span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">
                                        <span> Asking Net </span>
                                        <br />
                                        <span> {unitsnew.netAskingRental} / m<sup>2</sup></span>
                                    </div>

                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/factory.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Category </span>
                                        <br />
                                        <span> {unitsnew.category} </span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">
                                        <span> Space Type </span>
                                        <br />
                                        <span> GLA</span>
                                    </div>

                                </div>
                            </div>
                            <div className="border-bottoms"></div>



                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/layers.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Floor </span>
                                        <br />
                                        <span> 2 </span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">

                                    </div>

                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/2.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Subdivisible </span>
                                        <br />
                                        <span style={{color:"red"}}> N </span>
                                    </div>
                                </div>

                                <div className="small-box-">


                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/expand.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Combinable </span>
                                        <br />
                                        <span style={{color:"yellow"}}> Y </span>
                                    </div>
                                </div>

                                <div className="small-box-">


                                </div>
                            </div>
                            <div className="border-bottoms"></div>





                            <div className="main-small-box2">
                                <div className="small-box-i">
                                    <div className="">
                                        <img src="./img/i.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Additional Information Generator onsite, keys with secutity on premis showers</span>

                                    </div>
                                </div>
                            </div>



                        </div>





                        );
                        })}



                    </div>




                </div>


                <div className="custom-unit custom-unit-7"><b>{Data.fonts.map((fontr) => { return (<p className="font-size-unit2" style={{ color: fontr.secondaryColour }}>Unit 354</p>);})}</b></div>
                <div className="inner-main-box3">
                    <div className="custom-inner-boxes">
                        {Data.units.map((unitsnew, index) => {
                        return(
                        <div className="data-table-boxes">


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/box.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> GLA </span>
                                        <br />
                                        <span> {unitsnew.gla} m<sup>2</sup></span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">

                                    </div>
                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/money.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Asking Gross </span>
                                        <br />
                                        <span> {unitsnew.gmr.toFixed(0)} / m<sup>2</sup></span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">
                                        <span> Asking Net </span>
                                        <br />
                                        <span> {unitsnew.netAskingRental} / m<sup>2</sup></span>
                                    </div>

                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/factory.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Category </span>
                                        <br />
                                        <span> {unitsnew.category} </span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">
                                        <span> Space Type </span>
                                        <br />
                                        <span> GLA</span>
                                    </div>

                                </div>
                            </div>
                            <div className="border-bottoms"></div>



                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/layers.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Floor </span>
                                        <br />
                                        <span> 2 </span>
                                    </div>
                                </div>

                                <div className="small-box-">
                                    <div className="font-size-unit">

                                    </div>

                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/2.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Subdivisible </span>
                                        <br />
                                        <span style={{color:"red"}}> N </span>
                                    </div>
                                </div>

                                <div className="small-box-">


                                </div>
                            </div>
                            <div className="border-bottoms"></div>


                            <div className="main-small-box">
                                <div className="small-box">
                                    <div className="">
                                        <img src="./img/expand.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Combinable </span>
                                        <br />
                                        <span style={{color:"yellow"}}> Y </span>
                                    </div>
                                </div>

                                <div className="small-box-">


                                </div>
                            </div>
                            <div className="border-bottoms"></div>





                            <div className="main-small-box2">
                                <div className="small-box-i">
                                    <div className="">
                                        <img src="./img/i.png" className="menu-img" />
                                    </div>
                                    <div className="font-size-unit">
                                        <span> Additional Information Generator onsite, keys with secutity on premis showers</span>

                                    </div>
                                </div>
                            </div>



                        </div>


                        );
                        })}



                    </div>




                </div>

            </div>
            <div>hasBrokerLogo
                <div className="footer">
                <div className="logos">
                    <img src="./img/logo.png" className="custom-logo-f"/>
                    {/* {Data.fonts.map((fontr) => {return (<img src={fontr.hasBrokerLogo}/>);})} */}
                </div>
                    <div className="custom-footer2"><b>{Data.fonts.map((fontr) => {return (<a href="https://www.gmaven.com/" target="_blank" className="font-size-unit2" style={{ color: fontr.secondaryColour }}>www.gmaven.com</a>);})}</b></div>
                </div>
            </div>
        </div>
    </div>
</>
);
}

}


class Example extends React.Component {
render() {
return (
<div>
    
        <ComponentToPrint ref={(el)=> (this.componentRef = el)} />
        <br/>
        <div className="text-center">
        <ReactToPrint trigger={()=> <button className="print_Button">Print this out!</button>}
        content={() => this.componentRef}
        />
        </div>
        <br/>
        <br/>
</div>
);
}
}

export default Example;