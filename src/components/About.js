import React from "react";
import styled from "styled-components";
import { AiFillWechat } from "react-icons/ai";
import { IoRocket } from "react-icons/io5";
import { FaSackDollar, FaCartShopping } from "react-icons/fa6";
import AnkkitPic from '../assets/AnkkitPic2.webp';

const Wrapper = styled.section`
  font-family: 'PT Sans Narrow', sans-serif;
  text-align: center;

`;

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 80%;
  padding: 40px 0 20px 0;

  @media (max-width: 576px) {
    width: 95%;
    padding: 30px 0 20px 0;
  }
`;

const Title = styled.h3`
  font-size: 50px;
  background: linear-gradient(90deg, #000, #555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

const LineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 40px 0;
`;

const Line = styled.div`
  width: 80%;
  height: 0.5px;
  background: rgba(136, 138, 115, 0.56);
`;

const TiltedLabel = styled.div`
  position: absolute;
  background: white;
  padding: 15px 50px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.9);
  transform: rotate(-15deg);

  @media (max-width: 576px) {
    padding: 10px 30px;
    font-size: 14px;
  }
`;

const SectionTitle = styled.h4`
  font-size: 28px;
  font-weight: 600;
  margin: 40px 0 20px 0;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 24px;
    margin: 30px 0 15px 0;
  }
`;

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 576px) {
    gap: 25px;
  }
`;

const Card = styled.div`
  width: 45%;
  padding: 20px 15px;
  text-align: left;
  gap: 20px;
  display: flex;
  flex-direction: column;
  font-size: 19px;
  font-weight: 400;
  border: 0px solid black;
  border-radius: 30px;
  background-color: white;

  h3 {
    font-weight: 500;
  }

  small {
    font-size: 12px;
    margin-top: 10px;
    color: #444;
  }

  @media (max-width: 576px) {
    width: 80%;
    font-size: 16px;
    padding: 15px 12px;
  }
`;

const ProfileImage = styled.img`
  width: 370px;
  height: 370px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #f0f0f0;
`;

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

const ButtonsBox = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

const ButtonGithub = styled.a`
  padding: 8px 15px;
  background-color: white;
  border: 2px solid black;
  color: black;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ButtonLiveDemo = styled.a`
  padding: 8px 15px;
  background-color: black;
  border: 2px solid black;
  color: white;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export default function About() {
  return (
    <Wrapper>
      <Container>
        <TitleBox>
          <Title>
            A Glimpse Into My World
          </Title>
        </TitleBox>

        <LineContainer>
          <Line />
          <TiltedLabel>ABOUT ME</TiltedLabel>
        </LineContainer>

        
        <CardsRow>
        
        <ProfileImage src={AnkkitPic} alt="Ankkit Seth" />
        
        
 
          <Card>
            
            
            <p>Hey, I’m Ankkit Seth, a passionate full-stack developer who enjoys transforming creative ideas into real-world solutions through code.
               I hold a Bachelor of Science (B.Sc.) in Computer Applications & Cyber Security and am currently pursuing my Master of Computer Applications (MCA). My academic journey has helped me develop a strong foundation in computer science concepts and problem-solving techniques.
               I'm skilled in frontend technologies like React, HTML/CSS, and JavaScript, and equally comfortable building robust backends with Node.js, Express.js, and databases like MongoDB and MySQL. I love building applications that are not just functional, but also clean, responsive, and user-friendly.
               Beyond development, I’ve also trained and mentored college and school freshers — helping them understand technical tools, build confidence, and grow in the tech space.
               In short, I build with intention, learn with curiosity, and collaborate with purpose. Let’s build something awesome together. 🚀
            </p>
          </Card>
 
        </CardsRow>

       
      </Container>
    </Wrapper>
  );
}
