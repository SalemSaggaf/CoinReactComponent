import { useState } from 'react';
import './App.css'
import styled from 'styled-components';

const Coin = styled.div<{isSpinning: boolean, coinFaceImage: string, coinBackImage: string}>`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: url(${({coinFaceImage}) => coinFaceImage});
  background-size: 103% 106%;
  background-position: center;
  margin: auto;
  position: relative;
  transform-style: preserve-3d;

  @keyframes spin {
    0% {
      transform: rotateX(0deg);
      left: 0;
      top: 0;
    }
    50% {
      transform: rotateX(720deg);
      left: 0px;
      top: -400px;
    }

    100% {
      transform: rotateX(1080deg);
      left: 0;
      top: 0;
    }
  }

  animation: ${({isSpinning}) => isSpinning ? 'spin 4s ease-in' : 'none'};

  &:after {
    background-color: #a37131;
    background-image: url("${({coinBackImage}) => coinBackImage}");
    background-position: center;
    background-size: 120%;
    background-repeat: no-repeat;
    border-radius: 100%;
    content: '';
    height: 100px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100px;
    -webkit-transform: translateZ(-1px);
  }


`;

const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 50vh;
 
`;

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const coinFaceImage = "http://coins.thefuntimesguide.com/images/blogs/presidential-dollar-coin-reverse-statue-of-liberty-public-domain.png";
  const coinBackImage = "https://toppng.com/uploads/preview/gold-coin-png-11552734544buvivt5vmi.png";
  const [coinFace, setCoinFace] = useState(coinFaceImage);
  const [coinBack, setCoinBack] = useState(coinBackImage);

  const selectRandomCoinFace = () => {
    const random = Math.random();
    setCoinFace(random > 0.5 ? coinFaceImage : coinBackImage);
    setCoinBack(random > 0.5 ? coinBackImage : coinFaceImage);
  }

  return (
    <CoinContainer>
      <Coin coinFaceImage={coinFace} coinBackImage={coinBack} isSpinning={isSpinning} onClick={() => setIsSpinning(true)} onAnimationEnd={() => {setIsSpinning(false); selectRandomCoinFace();}}></Coin>
    </CoinContainer>
  )
}

export default App
