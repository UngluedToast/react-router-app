import React from 'react';
import './App.css';
import Home from './home';
import About from './about';
import Rats from './rat';
import PageNotFound from './PageNotFound'
import Header from './Header'
import Ratty from './Rats'


import {
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

// function AboutButton({history}) {
//   return(
//     <button onClick = {() => {
//       history.push('./about');
//     }} >Go to the About page</button>
//   )

// }

const SuperAboutButton = withRouter(({history}) => {
  return (
    <button onClick = {() => {
      history.push('/about');
  }} >Go to the About page</button>
  )
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Rats: [
        'Ikit',
        'Queek',
        'Skrolk',
        'Tretch'
      ]
    }
  }


  render() {
    return (
      <div className="App">

      <Header/>
      <br />
        <Link to="/">Home</Link>
      <br />
        <Link to="/Rats">Rats</Link>
      <br />
        <Link to="/About">About</Link>
        <SuperAboutButton/>

        <Switch>
          <Route  exact path="/" component={Home}/>



          {/* <Route path="/Rats" component={Rats}/> */}
          <Route path="/Rats"
            render={(props) => (
              <Rats
              {...props}
              rats={this.state.cats}
              /> 
            )}
          />



          <Route path="/About" component={About}/>



          <Route component={PageNotFound}/>
        </Switch>
        <Route path="/Rats/:rat" component={Ratty}/>
      </div>
    );
  }
}


export default App;
