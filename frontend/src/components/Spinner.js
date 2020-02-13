import React from 'react'

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='container text-center mt-5'>
                <div className="spinner-grow text-dark" role="status"></div>
                <div className="spinner-grow text-dark" role="status"></div>
                <div className="spinner-grow text-dark" role="status"></div>
                <div className="spinner-grow text-dark" role="status"></div>
                <div className="spinner-grow text-dark" role="status"></div>
                <div className="spinner-grow text-dark" role="status"></div>
                <div className="spinner-grow text-dark" role="status"></div>
                <div className="spinner-grow text-dark" role="status"></div>
            </div>
        )
    }
}

export default Spinner