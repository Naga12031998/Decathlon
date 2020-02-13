import React from 'react'

// Reat-router-dom
import { Route, BrowserRouter as Router } from 'react-router-dom'

// CSS
import './index.css'

// Components
import Foryou from './components/Foryou'
import Landingpage from './components/Landingpage'
import Business from './components/Business'
import Health from './components/Health'
import Entertainment from './components/Entertainment'
import Science from './components/Science'
import Sports from './components/Sports'
import Technology from './components/Technology'
import Worldnews from './components/Worldnews'
import Column from './components/Column'
import Navbar from './components/Navbar'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <Router>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <Navbar />
                        </div>
                        <div id="example"  className='sticky card shadow col-xl-2 col-lg-4 col-sm-12 col-md-4' style={{ overflowY: 'scroll', height : window.innerHeight, position :'sticky'}}>
                            <Column />
                        </div>
                        <div id="example"  className='col-xl-10 col-lg-8 col-sm-12 col-md-8' style={{ overflowY: 'scroll'}}>
                            <Route path='/' exact component={Landingpage} />
                            <Route path='/foryou' component={Foryou} />
                            <Route path='/businessnews' component={Business} />
                            <Route path='/healthnews' component={Health} />
                            <Route path='/entertainmentnews' component={Entertainment} />
                            <Route path='/sciencenews' component={Science} />
                            <Route path='/sportsnews' component={Sports} />
                            <Route path='/technologynews' component={Technology} />
                            <Route path='/worldnews' component={Worldnews} />
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App