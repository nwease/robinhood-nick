import React, {useState, useEffect} from 'react';
import '../css/Stats.css';
import axios from 'axios';

const TOKEN = 'bv8arun48v6rnm7argg0'
const BASE_URL = 'https://finnhub.io/api/v1/quote'

function Stats() {

    const [stockData, setStockData] = useState([]);

    const getStockData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error) => {
                console.error("Error", error.message);
            });
    }


    useEffect(() => {
        let tempStockData = [];

        const stocksList = ['AAPL', 'MSFT', 'TSLA', 'FB', 'BABA', 'UBER', 'DIS', 'SBUX'];

        let promises = [];
        stocksList.map((stock) => {
            promises.push(
                getStockData(stock)
                    .then((res) => {
                        tempStockData.push({
                            name: stock,
                            ...res.data
                        });
                    })
            )
        });

        Promise.all(promises).then(()=>{
            setStockData(tempStockData);
        })
    }, [])

    return (
        <div className='stats'>
            <div className='stats__container'>
                <div className='stats__header'>
                    <p>
                        Stocks
                    </p>
                </div>

                <div className='stats__content'>
                    <div className='stats__rows'>
                        {/*CURRENT STOCKS*/}
                    </div>
                </div>

                <div className='stats__header'>
                    <p>
                        Lists
                    </p>
                </div>

                <div className='stats__content'>
                    <div className='stats__rows'>
                        {/*FUTURE STOCKS*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;