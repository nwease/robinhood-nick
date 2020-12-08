import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Stats from './components/Stats';

function App() {
    return (
        <div className='app'>
            <div className='app__header'>
                <Header />
            </div>

            <div className='app__body'>
                <div className='app__container'>
                    <Feed />
                    <Stats />
                {/*STATS*/}
                </div>
            </div>
        </div>
    );
}

export default App;
