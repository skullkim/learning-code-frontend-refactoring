/*eslint-disable*/
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';

import IsLoggedIn from "../components/IsLoggedIn";

const Posting = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();
    useEffect(() => {
        IsLoggedIn()
            .then((result) => {
                if(!result) {
                    return history.push('/');
                }
                setLoggedIn(result);
            })
            .catch((b) => {
                console.log(b);
            });
    }, []);

    return (
      <>
          {loggedIn && <div>hi</div>}
      </>
    );
}

export default Posting;