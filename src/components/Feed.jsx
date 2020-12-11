 import React, {useState, useEffect} from 'react';
 import '../css/Feed.css';
 import Chart from './Chart';
 import TimeLine from './TimeLine';
 import { Avatar } from '@material-ui/core';
 import Chip from '@material-ui/core/Chip';

 function Feed() {

     const [popularTopics, setTopics] = useState([
         'Technology',
         'Top Movies',
         'Upcoming Earnings',
         'Crypto',
         'Cannabis',
         'Healthcare Supplies',
         'Index ETFs',
         'Technology',
         'China',
         'Pharma',
     ]);

     useEffect(() => {

     }, [])

     return (
         <div className='feed'>
             <div className='feedContainer'>
                 <div className='feed__chartSection'>
                     <div className='feed__portfolio'>
                         <h1>
                             $150,000.00
                         </h1>

                         <p>
                             +$56.63 (+0.05%) Today
                         </p>
                     </div>


                     <div className='feed__chart'>
                         <Chart />
                         <TimeLine />
                     </div>
                 </div>

                 <div className='feed__buy__section'>
                     <h2>
                         Buying Power
                     </h2>

                     <h2>
                         $4.11
                     </h2>
                 </div>

                 <div className='feed__market__section'>
                     <div className='feed__market__box'>
                         <p>
                             Markets Closed
                         </p>

                         <h1>
                             Merry Christmas
                         </h1>
                     </div>
                 </div>

                 <div className='feed__popular__section'>
                     <h1>
                         Popular Lists
                     </h1>

                     <p>
                         Show More
                     </p>
                 </div>

                 <div className='feed__popular__badges'>
                     {
                         popularTopics.map((topic) => (
                            <Chip
                                className='topic__badge'
                                variant='outlined'
                                label={topic}
                                avatar={
                                    <Avatar
                                        src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                    />
                                }
                            />
                        ))
                     }
                 </div>
             </div>
         </div>
     );
 }

 export default Feed;



