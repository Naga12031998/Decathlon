import React from 'react'

// React-router-dom
import { Link } from 'react-router-dom'

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    } 
    render() {
        return(
            <div className='container text-center'>
                <Link to='/' type='button' className='btn btn-light my-3' style={{width : 150}} data-toggle="tooltip" title="Top stories">Top Stories</Link><br />
                <Link to='/foryou' type='button' className='btn btn-light my-3' style={{width : 150}} data-toggle="tooltip" title="News For You">For You</Link><br />
                <hr></hr>
                <Link to='/worldnews' type='button' className='btn btn-light my-3' style={{width : 150}} data-toggle="tooltip" title="News For You">World</Link><br />
                <hr></hr>
                <h4 style={{fontFamily : 'Proza Libre'}}><b style={{color : '#aa614a'}} data-toggle="tooltip" title="Country">India</b></h4>
                <Link to='/businessnews' type='button' className='btn btn-light my-3' style={{width : 150}} data-toggle="tooltip" title="Business News">Business</Link><br />
                <Link to='/entertainmentnews' type='button' className='btn btn-light my-3' style={{width : 150}} data-toggle="tooltip" title="Entertainment News">Entertainment</Link><br />
                <Link to='/healthnews' type='button' className='btn btn-light my-3' style={{width : 150}} data-toggle="tooltip" title="Health News">Health</Link><br />
                <Link to='/sciencenews' type='button' className='btn btn-light my-3' style={{width : 150}} data-toggle="tooltip" title="Science News">Science</Link><br />
                <Link to='/sportsnews' type='button' className='btn btn-light my-3' style={{width : 150}} data-toggle="tooltip" title="Sports News">Sports</Link><br />
                <Link to='/technologynews' type='button' className='btn btn-light my-3' style={{width : 150}} data-toggle="tooltip" title="Technology News">Technology</Link><br />
                <small style={{color : '#aa614a'}}>@ createdBy Naga</small>
            </div>
        )
    }
}

export default Column