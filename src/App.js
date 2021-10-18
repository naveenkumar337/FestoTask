import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import CourseIndex from './Components/Card/Index'
import CourseDetails from './Components/Card/CourseDetails'
import {GlobalProvider} from './Components/GlobalContext/GlobalState'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
function App() { 
  return (
    <div className="App">
        <Router>
      <GlobalProvider>
      <Switch>
        
        <Route path="/Course/:id" children={<CourseDetails/>}>
        </Route>
        <Route path="/" component={CourseIndex}/>
      </Switch>
    </GlobalProvider>
         </Router>
    </div>
  );
}

export default App;
