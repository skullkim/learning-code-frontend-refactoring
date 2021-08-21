import axios from 'axios';
import {useState, useEffect} from 'react';
import styled from "styled-components";

const MainBox = styled.main`
  height: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const ImageBox = styled.div`
  height: 700px;
  width: 80%;
  background-color: yellow;
  display: flex;
  flex-wrap: wrap;
`;



/* eslint-disable */
const Main = () => {
  const [imageUrls, setImageUrls] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/main-page-images')
      .then(({data: {data}}) => setImageUrls(data))
      .catch(err => err);
  }, []);
  console.log(imageUrls);
  return (
      <>
          <MainBox>
              <ImageBox />
          </MainBox>
      </>
  );
}

export default Main;