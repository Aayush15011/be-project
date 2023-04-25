    import React from 'react'
// import Button from '@material-ui/core/Button';
import './Style.css';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanetOne from '../images/planet.svg';
import PlanetTwo from '../images/planet-2.svg';
import PlanetThree from '../images/planet-3.svg';
import PlanetFour from '../images/planet-4.svg';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #302c4d;
  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 0vh;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem 0rem;
  margin-top: -10em;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    @media screen and (max-width: 768px){
      font-size: 29px;
      margin-left: 1em;
      line-height: 41px;
    }
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 20px;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 768px){
      margin-top: -4.5em;
    }
  
  
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 110px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;


const Menu = () => {
  const history = useHistory();
  //-------
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  }
  return (
    <>


      {/* -----------------------------😊  */}
      <Section>
        <Container>
          <ColumnLeft>
            <div class="wrapper">
              {/* <div class="static-txt">Welcome to</div> */}
              <ul class="dynamic-txts">
                <li><span>Welcome🙂!! </span></li>
                {/* <li><span>Designer</span></li> */}
                {/* <li><span>Developer</span></li> */}
                {/* <li><span>Freelancer</span></li> */}
              </ul>
            </div>
            <p >Generate Your <span style={{ color: "#FC6D6D" }}>OWN</span>  <br /> Digital CArd</p>

            <div className="menu_btn">
              <button onClick={() => history.push('/main')}> Generate Card</button>
            </div>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={PlanetOne}
              alt='planet'
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetTwo}
              alt='planet'
              whileTap={{ scale: 0.6 }}
              drag={true}
              dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetThree}
              alt='planet'
              whileTap={{ scale: 0.8 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetFour}
              alt='planet'
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
          </ColumnRight>
        </Container>
      </Section>

    </>
  )
}

export default Menu