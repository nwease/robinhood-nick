 import React from 'react';
 import '../css/Feed.css';
 import Chart from './Chart';

 function Feed() {
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
                     </div>
                 </div>
             </div>
         </div>
     );
 }

 export default Feed;



