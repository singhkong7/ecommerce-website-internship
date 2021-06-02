import React from 'react';
import './App.scss';
import { connect } from "react-redux";
import Directory from "../src/directory-menu/directory";
import Shop_page from "./shop_page/shop_page";
import {Switch,Route, Redirect} from 'react-router-dom';
import Header from "./header/header-component";
import Signin from "./signin-page/sign-in";
import CheckoutPage from "./checkout-page/checkout-page";
import {auth,createUserProfileDocument} from "./firebase/firebase-utility";
import {setCurrentUser} from "./Redux/user/user-actions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./Redux/user/user-selector";
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
            <Route  path='/Hats' component={Hats} />
            <Route  path='/Jackets' component={Jackets} />
            <Route  path='/Sneakers' component={Sneakers} />
            <Route  path='/Men' component={Men} />
            <Route  path='/Women' component={Women} />
            <Route  path="/shop" component={Shop_page} />
            <Route exact path="/checkoutpage" component={CheckoutPage} />
            <Route 
              exact 
              path='/signin' 
              render={()=>
              this.props.currentUser?(
                <Redirect to ="/"/>
              ):(
                  <Signin />
                )
                } 

              />
          </Switch>
        </div> 
      </div>
    );
  }
}
const mapToStateProps= createStructuredSelector ({

  currentUser:selectCurrentUser
  
});
const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}) 

export default connect(mapToStateProps, mapDispatchToProps)(App);
