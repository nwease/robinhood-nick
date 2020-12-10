import React, {useEffect, useState} from 'react';
import '../css/Stats.css';
import axios from 'axios';
import StatsRow from './StatsRow';
import {db} from '../firebase';

const TOKEN = 'bv8arun48v6rnm7argg0'
const BASE_URL = 'https://finnhub.io/api/v1/quote'

function Stats() {

    const [stockData, setStockData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);

    const getMyStocks = () => {
        db.collection('myStocks')
            .onSnapshot(snapshot => {
                let promises = [];
                let tempData = []
                snapshot.docs.map((doc) => {
                    promises.push(getStockData(doc.data().ticker)
                        .then(res => {
                            tempData.push({
                                id: doc.id,
                                data: doc.data(),
                                info: res.data
                            })
                        })
                    )
                })

                Promise.all(promises).then(() => {
                    setMyStocks(tempData);
                })
            })
    }

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

        getMyStocks();

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

        Promise.all(promises).then(() => {
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

                    </div>
                </div>

                <div className='stats__header'>
                    <p>
                        Lists
                    </p>
                </div>

                <div className='stats__content'>
                    <div className='stats__rows'>
                        {
                            stockData.map((stock) => (
                                <StatsRow
                                    key={stock.name}
                                    name={stock.name}
                                    openPrice={stock.o}
                                    price={stock.c}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;