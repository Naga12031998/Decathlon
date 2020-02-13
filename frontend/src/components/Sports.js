import React from 'react'

// Axios 
import Axios from 'axios'

// component
import Spinner from './Spinner'

class Sports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            isLoading: false,
            sportsArray: [],
            lastTen: []
        }
        window.onscroll = () => {
            var d = document.documentElement;
            var offset = d.scrollTop + window.innerHeight;
            var height = d.offsetHeight;

            if (offset === height) {
                this.timer = setTimeout(() => {
                    Axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c8ca65b96c864b2aa46262c0e029520e`)
                        .then((res) => {
                            this.setState({
                                lastTen: res.data.articles.slice(Math.floor(res.data.articles.length / 2), res.data.articles.length),
                                isLoading: true
                            })
                        })
                }, 500)
            }
        };
    }

    componentDidMount = () => {
        Axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c8ca65b96c864b2aa46262c0e029520e`)
            .then(res => {
                this.setState({
                    status: true,
                    sportsArray: res.data.articles.slice(0, Math.floor(res.data.articles.length / 2))
                })
            })
    }

    componentWillUnmount = () =>{
        clearTimeout(this.timer)
        this.setState({
            isLoading : false
        })
    }

    render() {
        const { isLoading, lastTen, sportsArray, status } = this.state
        return (
            <div>
                {status ? <div>
                    {sportsArray.map(e => {
                        return (
                            <div className='card my-3' key={e.url}>
                                <div className='row'>
                                    <div className='col-lg-8 col-md-12 col-sm-6 mx-3 my-3'>
                                        <a href={e.url} style={{ color: 'black' }} target='_blank' rel="noopener noreferrer"><p style={{ fontFamily: 'Proza Libre' }} >{e.title}</p></a>
                                        <p className='text-muted' style={{ fontFamily: 'Open Sans' }}>{e.publishedAt}</p>
                                        <p className='my-3' style={{ fontFamily: 'Open Sans', color: '#aa614a' }}>{e.source.name}</p>
                                    </div>
                                    <div className='col-lg-3 col-md-0 col-sm-6'>
                                        <img src={e.urlToImage} className="img-fluid my-3" style={{ borderRadius: 10 }} alt='Pic' />
                                    </div>
                                    <div className='col-1'></div>
                                </div>
                            </div>
                        )
                    })}
                </div> : <Spinner />}
                {isLoading ?
                    <div>
                        {lastTen.map(e => (
                            <div className='card my-3' key={e.url}>
                                <div className='row'>
                                    <div className='col-lg-8 col-md-12 col-sm-6 mx-3 my-3'>
                                        <a href={e.url} style={{ color: 'black' }} target='_blank' rel="noopener noreferrer">
                                            <p style={{ fontFamily: 'Proza Libre' }} >{e.title}</p>
                                        </a>
                                        <p className='text-muted' style={{ fontFamily: 'Open Sans' }}>{e.publishedAt}</p>
                                        <p className='my-3' style={{ fontFamily: 'Open Sans', color: '#aa614a' }}>{e.source.name}</p>
                                    </div>
                                    <div className='col-lg-3 col-md-0 col-sm-6'>
                                        <img src={e.urlToImage} className="img-fluid my-3" style={{ borderRadius: 10 }} alt='Pic' />
                                    </div>
                                    <div className='col-1'></div>
                                </div>
                            </div>
                        ))}
                    </div> :
                    <div>
                        <Spinner />
                    </div>}
            </div>
        )
    }
}

export default Sports