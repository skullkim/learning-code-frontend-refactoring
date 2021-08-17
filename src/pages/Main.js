import axios from 'axios';
import {useEffect} from 'react';

/* eslint-disable */
const Main = () => {
  useEffect(() => {
    axios.get('http://localhost:8080/main-page-images')
      .then(data => console.log(data))
      .catch(err => console.log(err));
  });
  return (<div>main</div>);
}

export default Main;