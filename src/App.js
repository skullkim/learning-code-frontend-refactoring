import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Footer from "./components/Footer";
import GlobalStyle from './components/GlobalStyle';
import Header from "./components/Header";
import Book from './pages/Book';
import EditPosting from "./pages/EditPosting";
import Letter from "./pages/Letter";
import Main from './pages/Main';
import NotFound from "./pages/NotFound";
import Posting from "./pages/Posting";
import Profile from "./pages/Profile";
import SearchResult from "./pages/SearchResult";
import Signin from "./pages/Signin";
import SigninPassword from "./pages/SigninPassword";
import UserInfo from "./pages/UserInfo";
import UserPassword from "./pages/UserPassword";
import Letters from "./pages/letters";
import Signup from "./pages/signup";

function App() {
    return (
        <>
        <Router>
            <GlobalStyle />
            <Header />
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
                <Route path='/search/:category' component={SearchResult} />
                <Route component={NotFound}/>
            </Switch>
        </Router>
        <Footer />
        </>

    );
}

export default App;
