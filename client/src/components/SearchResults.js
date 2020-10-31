import React from 'react';
import MetaData from "./MetaData";

function SearchResults(props) {
	const { locationResults } = props;

	return (
		<ul className="search-results">
			{locationResults
				? locationResults.map(location => (
					<MetaData
						key={location.reference}
						link="#"
						type="location"
						term={location.formatted_address}
						location={location}
					/>
				))
				: <h1>No results</h1>
			}
		</ul>
	)
}

export default SearchResults;
