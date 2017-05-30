import React from 'react';

const StaticMap = (props) =>{
	const {lat, lon} = props;
	return (
		<div>
			<img className="mdl-shadow--2dp"
				  src={"https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=256x150&maptype=hybrid&markers=size:mid|color:red|" +
				  lat + "," + lon + "&key=AIzaSyA_wN_yiyfYH-0nUFDr84bCsnQXUaedNsA"}/>
		</div>
	);
};

export default StaticMap;
