import React from 'react';

function styles(background) {
	const {image} = background;
	return {
		background: `url(${image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center'
	}
}

function Grid(props) {
	return (
	    <div className="photo-grid row">
			{props.posts.map(item => (
				<a href={item.url} className="col-4" key={item.id}><div className="grid-image" style={styles(item)}></div></a>
			))}
		</div>
	);
}

export default Grid;
