import Navbar from "../../components/navbar/Navbar"
import "./payment.css"
import book from "./Icon book.png"
import ads from "./Icon ads.png"
import hat from "./Icon hat.png"
import clock from "./Icon nomal.png"
import tv from "./Icon tv.png"
import img1 from "./Razorpay Icon.png"
import smallClock from "./Icon Clock small.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"




const Payment = () => {
  const[fee,setFee]=useState(0)
  const[val,setVal]=useState(18401)
  const handleClick=(i,j)=>{
    setFee(i)
    setVal(j)
  }
  
  return (
    <div className="payment">
      <Navbar/>
      <div className="payContainer">
        <div className="leftDesc">
          
          <h1> Access curated courses worth 
             <FontAwesomeIcon id="i" icon={faIndianRupeeSign}/> <span id="strikeOff" >18500</span>  at just  <span id="blue"><FontAwesomeIcon id="i1" icon={faIndianRupeeSign}/> 99</span> per year!</h1>
          
            <div className="iconWrap">
              <div id="icons">
                <img id="mainI" src={book} width="40px" alt="book" />
                <div><span id="blue">100+</span>  Job relevant courses</div>
              </div>
            
            
              <div id="icons">
                <img id="mainI" src={clock} width="40px" alt="book" />
                <div><span id="blue">20,000+</span>  Hours of content</div>
              </div>
            
          
              <div id="icons">
                <img id="mainI" src={tv} width="40px" alt="book" />
              <div><span id="blue">Exclusive</span>  webinar access</div>
              </div>
            
            
              <div id="icons">
                <img id="mainI" src={hat} width="40px" alt="book" />
                <div>Scholarship worth <span id="blue"> <FontAwesomeIcon icon={faIndianRupeeSign}/>94,500</span></div>
              </div>
            
            
              <div id="icons">
                <img id="mainI" src={ads} width="40px" alt="book" />
                <div><span id="blue">Ad free</span> learning experience</div>
              </div>
              </div>
          
        </div>
        <div className="rightblock">
          <div>
            <div className="top">
             <div className="haha">
              <button className="no">1</button>
              <label htmlFor="no">sign</label>
              </div>
              <div className="haha">
              <button className="no">2</button>
              <label htmlFor="no">sign</label>
              </div>
            </div>
            {/* <div id="sign">
              <span>Sign up</span>
              <span>Subscribe</span>
            </div> */}
            <h3>Select your subscription plan</h3>
            {/* plans */}

            
            <div id="planWrap">
            <div className="plan1" id="disable">
              <div className="pleft">
                <input type="radio" disabled checked={true}onClick={()=>handleClick('99','18500')}/>
                <div id="p12"><b>12 Months Subscription</b></div> 
              </div>
              <div className="pright">
                <div> <span id="total">Total</span>  <FontAwesomeIcon icon={faIndianRupeeSign}/>99</div>
                
                <div> <span id="perMo"><FontAwesomeIcon icon={faIndianRupeeSign}/>33</span> <span id="month">/mo</span> </div>
              </div>
            </div>
            </div>
           
            <div className="plan1">
              <div className="pleft">
                <input type="radio" name="tick" onClick={()=>handleClick('179','18580')}/>
                <div id="p12"><b>12 Months Subscription</b></div> 
              </div>
              <div className="pright">
                <div> <span id="total">Total</span>  <FontAwesomeIcon icon={faIndianRupeeSign}/>179</div>
                
                <div> <span id="perMo"><FontAwesomeIcon icon={faIndianRupeeSign}/>33</span> <span id="month">/mo</span> </div>
              </div>
            </div>
            <div className="plan1">
              <div className="pleft">
                <input type="radio" name="tick" onClick={()=>handleClick('149','18550')}/>
                <div id="p12"> <b>6 Months Subscription</b> </div> 
              </div>
              <div className="pright">
                <div> <span id="total">Total</span>  <FontAwesomeIcon icon={faIndianRupeeSign}/>149</div>
                
                <div> <span id="perMo"><FontAwesomeIcon icon={faIndianRupeeSign}/>33</span> <span id="month">/mo</span> </div>
              </div>
            </div>
            <div className="plan1">
              <div className="pleft">
                <input type="radio" name="tick"onClick={()=>handleClick('99','18500')}/>
                <div id="p12"><strong>3 Months Subscription</strong>
                </div> 
              </div>
              <div className="pright">
                <div> <span id="total">Total</span>  <FontAwesomeIcon icon={faIndianRupeeSign}/>99</div>
                
                <div> <span id="perMo"><FontAwesomeIcon icon={faIndianRupeeSign}/>33</span> <span id="month">/mo</span> </div>
              </div>
            </div>


            {/* total */}
            <hr />
            <div className="amt"> Subscription Fee 
              <span><FontAwesomeIcon icon={faIndianRupeeSign} />{val}</span>
            </div>

            {/* offer */}
            
            <div className="offer">
              <div className="offerL">
                <div id="offerTxt"> <b>Limited time offer</b> </div>
                <div id="offerValid"><img src={smallClock} alt="clock" width={15} /> <span>Offer valid till 25th March 2023</span> </div>
              </div>
              <div className="offerR">
                <div>-<FontAwesomeIcon icon={faIndianRupeeSign} />18,401 </div>
              </div>
              </div>
            </div>


            <div className="amt">
              <div><b>Total</b> (Incl.of 18% GST)</div>  
              <span id="totalAmt"><FontAwesomeIcon icon={faIndianRupeeSign}/> <b>{fee}</b> </span>
            </div>
            <div className="btns">
            <button type="button" id="cancel" >CANCEL</button>
              {/* <button id="cancel">CANCEL</button> */}
              <button id="pay">PROCEED TO PAY</button>
              
            </div>
            <img id="razor" src={img1} alt="sticker" width={70} />
          </div>
        
      </div>
    </div>
  )
}

export default Payment