import React from 'react';

// stateless functional component (sole function is to take in an input and spit out an output)
function Stream({ tracks = [] }) {
	return (
		<div>
			{
				tracks.map((track, key) => {
					return <div className="track" key={key}>{track.title}</div>;
				})
			}
		</div>
	);
}

export default Stream;

/* 

	//	*** ES6 class component (if component had state or if you need component lifecycle methods) ***

class Stream extends React.Component {

	render() {
		const { tracks = [] } = this.props;

		return (
			<div>
				{
					tracks.map((track, key) => {
						return <div className="track" key={key}>{track.title}</div>;
					})
				}
			</div>
		);
	}

}
*/