import { useState } from "react"

const Carrousel = ({productInfo}) => {

// KNOW THE POSITION OF THE CURRENT IMAGE AND MAKE THE TRANSFER ACCORDINGLY 
  const [position, setPosition] = useState(1)
  const [translate, setTranslate] = useState()

//CHECK WHICH ONE IS ACTIVATE AND DETERMINE COLOR
  const [activeLeft, setActiveLeft] = useState()
  const [activeRight, setActiveRigth] = useState()


//TRANSLATION TO THE LEFT DEPENDING ON CURRENT POSITION
  const handlePointLeft = () => {

    if(position == 2){
      setTranslate({transform: 'translateX(0%)'})
      setPosition(1)
     }else if(position == 3){
      setTranslate({transform: 'translateX(-33.3%)'})
      setPosition(2)
     }
//DETERMINE BOTTON'S COLOR
    setActiveLeft({backgroundColor: 'lightblue'})
    setActiveRigth({backgroundColor: 'white'}) 
  }
//TRANSLATION TO THE LEFT DEPENDING ON CURRENT POSITION
  const handlePointRight = () => {

    if(position == 1){
     setTranslate({transform: 'translateX(-33.3%)'})
     setPosition(2)
    }else if(position == 2){
     setTranslate({transform: 'translateX(-66.3%)'})
     setPosition(3)
    }
//DETERMINE BOTTON'S COLOR
    setActiveRigth({backgroundColor: 'lightblue'})
    setActiveLeft({backgroundColor: 'white'})
  } 

  return (
  <div className="carrousel_container">
    <div className='carrousel'>

      <div className="grande" style={translate}>
        {
          productInfo?.productImgs.map(image => (
            <img className='img' key={image} 
            src={image} alt={`${productInfo?.title} image`} />
          ))
        }
      </div>

      <ul className="puntos">
        <li className="punto" style={activeLeft} onClick={handlePointLeft}></li>
        <li className="punto" style={activeRight} onClick={handlePointRight}></li>
      </ul>
    
    </div>
  </div>

  )
}

export default Carrousel