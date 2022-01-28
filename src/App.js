import Row from './components/Row';
import './App.css';
import requests from './requests/home_requests';
import Banner from './components/Banner';
import Nav from './components/Nav'

function App() {
    return (
        <div className="App_Home">
            <Nav/>
            <Banner/>
            <Row type="Current" title="Currently Watching" fetchURL={requests.fetchCurrentlyWatching}/>
            <Row type="Top" title="Top Airing Anime" fetchURL={requests.fetchTopAiring}/>
            <Row type="Seasonal" title="Seasonal Anime" fetchURL={requests.fetchSeasonalAnime}/>
            <Row type="Genre" title="Popular Action" fetchURL={requests.fetchAction}/>
            <Row type="Genre" title="Popular Comedy" fetchURL={requests.fetchComedy}/>
        </div>
    );
}

export default App;
