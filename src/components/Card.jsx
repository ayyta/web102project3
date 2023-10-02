import { useState } from "react";
import InputBox from "./InputBox";


const flagsData = [
  {
    name: 'Austria',
    img: 'https://www.worldometers.info/img/flags/small/tn_au-flag.gif'
  }, {
    name: 'Mongolia',
    img: 'https://www.worldometers.info/img/flags/small/tn_mg-flag.gif'
  }, {
    name: 'Myanmar',
    img: 'https://www.worldometers.info/img/flags/small/tn_bm-flag.gif'
  }, {
    name: 'Oman',
    img: 'https://www.worldometers.info/img/flags/small/tn_mu-flag.gif'
  }, {
    name: 'Egypt',
    img: 'https://www.worldometers.info/img/flags/small/tn_eg-flag.gif'
  }, {
    name: 'Finland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg'
  }, {
    name: 'Greece',
    img: 'https://www.worldometers.info/img/flags/small/tn_gr-flag.gif'
  }, {
    name: 'Holy See',
    img: 'https://vaticantips.com/wp-content/uploads/2021/12/vaticanflag.jpeg'
  }, {
    name: 'Indonesia',
    img: 'https://www.worldometers.info/img/flags/small/tn_id-flag.gif'
  }, {
    name: 'Iceland',
    img: 'https://www.worldometers.info/img/flags/small/tn_ic-flag.gif'
  }, {
    name: 'Japan',
    img: 'https://www.worldometers.info/img/flags/small/tn_ja-flag.gif'
  }, {
    name: 'Malaysia',
    img: 'https://www.worldometers.info/img/flags/small/tn_my-flag.gif'
  }, {
    name: 'Mexico',
    img: 'https://www.worldometers.info/img/flags/small/tn_mx-flag.gif'
  }
]

const FrontCard = (props) => {
  return (
  <div className="front">
    <img src={props.img}></img>
  </div>
  )
}

const BackCard = (props) => {
  return (
    <div className="back">
      <p>{props.name}</p>
    </div>
  )
}

const Card = () => {
  const [index, setIndex] = useState(0)
  const [state, setState] = useState('front')

  const front = <FrontCard img={flagsData[index].img}/>
  const back = <BackCard name={flagsData[index].name}/>
  const [card, setCard] = useState(front)



  const changeSide = () => {
    setState(state === 'front' ? 'back': 'front')
    setCard(state === 'front' ? front: back)
  }

  const goFoward = () => {
    const total = flagsData.length

    if ((index + 1) < total) {
      setIndex(index + 1)
      setCard(<FrontCard img={flagsData[index+1].img}/>)
      setState('front')
    } else {
      setIndex(0)
      setCard(<FrontCard img={flagsData[0].img}/>)
      setState('front')
    }

  }

  const goBack = () => {
    const total = flagsData.length

    if ((index - 1) < 0) {
      setIndex(total-1)
      setCard(<FrontCard img={flagsData[total-1].img}/>)
      setState('front')
    } else {
      setIndex(index-1)
      setCard(<FrontCard img={flagsData[index-1].img}/>)
      setState('front')
    }
  }

  return (
  <div>
    <div className="card-container" onClick={changeSide}>
      {card}
    </div>
    
    <InputBox/>
    <button className="go-button" onClick={goBack}>←</button>
    <button className="go-button" onClick={goFoward}>→</button>

  </div>

  )

}


export default Card 