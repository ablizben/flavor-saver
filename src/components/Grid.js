import React from 'react';

function styles(background) {
	const {photo} = background;
	return {
		background: `url(${photo})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center'
	}
}

function Grid(props) {
	return (
	    <div className="photo-grid row">
			{props.posts.map(item => (
				<a href="#" className="col-4" key={item._id}><div className="grid-image" style={styles(item)}></div></a>
			))}
		</div>
	);
}

export default Grid;
