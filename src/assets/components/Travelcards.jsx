import React, {useState} from 'react'
import './Travelcards.css'
import LocationIcon from '../../../public/images/location-icon.svg'
import Navbar from './Navbar'

 /*
    fetch the data
    convert the data so I can use the props
    create a .map function so the cards show multiple times.
    change the cards data
 */


function Travelcards(props) {
  let description = props.item.description
  const truncatedDescription = description.substring(0, 150) + "..."
  const container = document.getElementsByClassName("container-card-2") 
  
  const [popup, setPopup] = useState(false) 

  const togglePopup = () => {
    setPopup(!popup)
  }

  let button = <button onClick={togglePopup}>Read more...</button>

  if (description.length > 150) {
    description = truncatedDescription
  } else  {
    button = <button style={{display: "none"}}>Shit</button>
  }
  
  return (
    <div className='card-container'>
        <img className='cover-image' src={props.item.coverImg} />
        <div className='container-card-2'>
            <div className='container-horizontal-spacebtwn'>
                <div className='container-horizontal'>
                    <img src={LocationIcon} width="30px" />
                    <p>{props.item.country}</p>
                </div>
                <a href={props.item.mapsLink} target='_blank'>View on Google Maps</a>
            </div>
            <h2>{props.item.title}</h2>

            <div className='container-horizontal'>
              <h3>{props.item.date.startDate}</h3>
              <h3>-</h3>
              <h3>{props.item.date.endDate}</h3>
            </div>
            <p id='description-el'>{description}</p>
            <div className="container">
              {button}

              {popup && (
                <div className="popup">
                  <div onClick={togglePopup} className="overlay"></div>
                  <div className="popup-content">
                    <p>{props.item.description}</p>
                    <button className='close-x' onClick={togglePopup}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Travelcards



// const descriptionEl = document.getElementById("description-el")

// function readMoreOnClick(){
//   descriptionEl.addEventListener("click")
// }

// <button style={{buttonCondition}}>TEST</button>