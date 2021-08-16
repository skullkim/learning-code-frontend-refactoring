import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Main from './pages/Main';
import Signin from "./pages/Signin";
import SigninPassword from "./pages/SigninPassword";
import Signup from "./pages/signup";
import Letters from "./pages/letters";
import Letter from "./pages/Letter";
import Book from './pages/Book';
import SearchResult from "./pages/SearchResult";
import UserInfo from "./pages/UserInfo";
import Profile from "./pages/Profile";
import Posting from "./pages/Posting";
import EditPosting from "./pages/EditPosting";
import UserPassword from "./pages/UserPassword";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route path='/' component={Main} exact/>
                    <Route path='/signin' component={Signin} exact/>
                    <Route path='/signin/password' component={SigninPassword}/>
                    <Route path='/signup' component={Signup} />
                    <Route path='/letters' component={Letters} />
                    <Route path='/letter/:letterId' component={Letter} />
                    <Route path='/books/:bookCategory' component={Book} />
                    <Route path='/user/:userId/my-info' component={UserInfo}/>
                    <Route path='/user/:userId/profile' component={Profile}/>
                    <Route path='/user/:userId/posting' component={Posting} exact/>
                    <Route path='/user/:userId/posting/:postingId' component={EditPosting} exact/>
                    <Route path='/user/:userId/password' component={UserPassword} exact />
                    <Route path='/search/:category/:target' component={SearchResult} />
                    <Route component={NotFound}/>
                </Switch>
            </Router>
            <Footer />
        </>

    );
}

export default App;
