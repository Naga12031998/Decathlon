import React from 'react'

// CSS
import '../index.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div>
                <nav className="sticky navbar navbar-expand-lg navbar-light bg-light">
                    <a href="/" className="navbar-brand" style={{fontFamily : 'Proza Libre', color : '#aa614a'}} data-toggle="tooltip" data-placement="top" title="Home"><b>Decathlon</b></a>
                </nav>
            </div>
        )
    }
}

export default Navbar