import React from 'react';
import './App.scss';
import { connect } from "react-redux";
import Directory from "../src/directory-menu/directory";
import Shop_page from "./shop_page/shop_page";
import {Switch,Route} from 'react-router-dom';
import Header from "./header/header-component";
import signIn from "./signin-page/sign-in";
import {auth,createUserProfileDocument} from "./firebase/firebase-utility";
import {setCurrentUser} from "./Redux/user/user-actions";
const Hats = () =>(
  <div>
    
    <h1>HATS</h1>
  </div>
);
const Jackets = () =>(
  <div>
    
    <h1>JACKETS SECTION</h1>
  </div>
);
const Sneakers = () =>(
  <div>
    <h1>SNEAKERS SECTION</h1>
  </div>
);
const Men = () =>(
  <div>
    <h1>MEN SECTION</h1>
  </div>
);
const Women= () =>(
  <div>
    <h1>WOMEN SECTION</h1>
  </div>
);
class App extends React.Component {
  
  unsubscribeFromAuth= null
  componentDidMount()
  {
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
     if(userAuth)
     {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot =>
        {
          setCurrentUser({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
     }
     setCurrentUser(userAuth);
    })
  }
  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render()
  {
    return (
      <div className="App">
        <div className="homepage">
          <Header  />
          <Switch>
            <Route exact path="/" component={Directory} />
            <Route exact path='/Hats' component={Hats} />
            <Route exact path='/Jackets' component={Jackets} />
            <Route exact path='/Sneakers' component={Sneakers} />
            <Route exact path='/Men' component={Men} />
            <Route exact path='/Women' component={Women} />
            <Route exact path="/shop" component={Shop_page} />
            <Route exact path='/sign' component={signIn} />
          </Switch>
        </div> 
      </div>
    );
  }
}
const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}) 

export default connect(null, mapDispatchToProps)(App);
