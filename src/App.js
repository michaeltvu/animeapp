import Row from './components/Row';
import './App.css';
import requests from './requests/home_requests';

function App() {
    return (
        <div className="App_Home">
            <h1>Home Page</h1>
            <Row type="Top" title="Top Airing Anime" fetchURL={requests.fetchTopAiring}/>
            <Row type="Genre" title="Action Anime" fetchURL={requests.fetchAction}/>
        </div>
    );
}

export default App;
