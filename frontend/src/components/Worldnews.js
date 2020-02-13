import React from 'react'

// Axios 
import Axios from 'axios'

// component
import Spinner from './Spinner'

class Worldnews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCountryNews: [],
            searchField: '',
            status: false,
            isLoading: false,
            lastTen: [],
            countries: [{ 'country': 'India', 'code': 'in' }, { 'country': 'United Arab Emirates', 'code': 'ae' }, { 'country': 'Argentina', 'code': 'ar' }, { 'country': 'Austria', 'code': 'at' }, { 'country': 'Australia', 'code': 'au' }, { 'country': 'Belgium', 'code': 'be' }, { 'country': 'Bulgaria', 'code': 'bg' }, { 'country': 'Brazil', 'code': 'br' }, { 'country': 'Canada', 'code': 'ca' }, { 'country': 'Switzerland', 'code': 'ch' }, { 'country': 'China', 'code': 'cn' }, { 'country': 'Colombia', 'code': 'co' }, { 'country': 'Cuba', 'code': 'cu' }, { 'country': 'Czechia', 'code': 'cz' }, { 'country': 'Germany', 'code': 'de' }, { 'country': 'Egypt', 'code': 'eg' }, { 'country': 'France', 'code': 'fr' }, { 'country': '	United Kingdom of Great Britain and Northern Ireland', 'code': 'gb' }, { 'country': 'Greece', 'code': 'gr' }, { 'country': 'Hong Kong', 'code': 'hk' }, { 'country': 'Hungary', 'code': 'hu' }, { 'country': 'Indonesia', 'code': 'id' }, { 'country': 'Ireland', 'code': 'ie' }, { 'country': 'Israel', 'code': 'il' }, { 'country': 'Italy', 'code': 'it' }, { 'country': 'Japan', 'code': 'jp' }, { 'country': 'Korea', 'code': 'kr' }, { 'country': 'Lithuania', 'code': 'lt' }, { 'country': 'Latvia', 'code': 'lv' }, { 'country': 'Morocco', 'code': 'ma' }, { 'country': 'Mexico', 'code': 'mx' }, { 'country': 'Malaysia', 'code': 'my' }, { 'country': 'Nigeria', 'code': 'ng' }, { 'country': 'Netherlands', 'code': 'nl' }, { 'country': 'Norway', 'code': 'no' }, { 'country': 'New Zealand', 'code': 'nz' }, { 'country': 'Philippines', 'code': 'ph' }, { 'country': 'Poland', 'code': 'pl' }, { 'country': 'Portugal', 'code': 'pt' }, { 'country': 'Romania', 'code': 'ro' }, { 'country': 'Serbia', 'code': 'rs' }, { 'country': 'Russia', 'code': 'ru' }, { 'country': 'Saudi Arabia', 'code': 'sa' }, { 'country': 'Sweden', 'code': 'se' }, { 'country': 'Singapore', 'code': 'sg' }, { 'country': 'Slovenia', 'code': 'si' }, { 'country': 'Slovakia', 'code': 'sk' }, { 'country': 'Thailand', 'code': 'th' }, { 'country': 'Turkey', 'code': 'tr' }, { 'country': 'Taiwan', 'code': 'tw' }, { 'country': 'Ukraine', 'code': 'ua' }, { 'country': 'USA', 'code': 'us' }, { 'country': 'Venezuela', 'code': 've' }, { 'country': 'South Africa', 'code': 'za' }]
        }
        window.onscroll = () => {
            var d = document.documentElement;
            var offset = d.scrollTop + window.innerHeight;
            var height = d.offsetHeight;

            if (offset === height) {
                this.timer = setTimeout(() => {
                    Axios.get(`https://newsapi.org/v2/top-headlines?country=${this.state.searchField}&apiKey=c8ca65b96c864b2aa46262c0e029520e`)
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

    handleChange = (e) => {
        this.setState({
            status: true,
            [e.target.name]: e.target.value,
            searchField: e.target.value
        })
        Axios.get(`https://newsapi.org/v2/top-headlines?country=${e.target.value}&apiKey=c8ca65b96c864b2aa46262c0e029520e`)
            .then(this.setState({
                selectedCountryNews: []
            }))
            .then(res => {
                this.setState({
                    selectedCountryNews: res.data.articles.slice(0, Math.floor(res.data.articles.length / 2))
                })
            })
    }

    componentWillUnMount = () => {
        clearTimeout(this.timer)
        this.setState({
            isLoading : false
        })
    }

    render() {
        const { isLoading, lastTen, countries, selectedCountryNews, status } = this.state
        return (
            <div className='container'>
                <div className="input-group my-3">
                    <select className="custom-select" id="inputGroupSelect01" onChange={this.handleChange}>
                        <option defaultValue>Choose...</option>
                        {countries.map(e => {
                            return (
                                <option key={e.code} name='name' value={e.code}>{e.country}</option>
                            )
                        })}
                    </select>
                </div>
                {status ? <div>
                    {selectedCountryNews.map(e => {
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
                </div> : <h1 className="mt-5" style={{ fontFamily: 'Proza Libre', color: "#aa614a" }}>Please Choose Your Country</h1>}
                {isLoading ? <div>
                    {lastTen.map(e => {
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
            </div>
        )
    }
}

export default Worldnews