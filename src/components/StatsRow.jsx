import React from 'react';
import '../css/StatsRow.css';
import StockChart from '../assets/stock.svg';
import {db} from '../firebase';

function StatsRow({name, shares, price, openPrice}) {

    const percentage = ((price - openPrice)/openPrice) * 100;

    const getStock = () => {
        db
            .collection('myStocks').where('ticker', '==', name)
            .get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    querySnapshot.forEach(function(doc) {
                        db.collection('myStocks').doc(doc.id).update({
                            shares: doc.data().shares += 1
                        })
                    });
                } else {
                    // console.log('Not Available')
                    db.collection('myStocks').add({
                        ticker: name,
                        shares: 1
                    })
                }
            })
    }

    return (
        <div className='row' onClick={getStock}>
            <div className='row__intro'>
                <h1>
                    {name}
                </h1>

                <p>
                    {
                        shares && (
                            shares + ' shares'
                        )
                    }
                </p>
            </div>

            <div className='row__chart'>
                <img src={StockChart} height={16} alt='Stock Chart' />
            </div>

            <div className='row__numbers'>
                <p className='row__price'>
                    {price}
                </p>

                <p className='row__percentage'>
                    +{Number(percentage).toFixed(2)}%
                </p>
            </div>
        </div>
    );
}

export default StatsRow;