import React from 'react';
import './Card.css'


const Card = ({name,email,id}) =>{
	return (
		<div className='tc  dib br3 pa3 ma2 grow bw2 shadow-5 cardBackground'>
			  <img alt='robot' src={`https://robohash.org/${id}?200X200`}/>
			  <div>
			     <h2>{name}</h2>
			     <p>{email}</p>
			  </div>
	    </div>	
	         
	);
}

export default Card;