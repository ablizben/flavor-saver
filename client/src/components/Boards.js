import React from "react";
import AddBoard from './AddBoard';

function styles(background) {
	return {
        background: `url(${background})`
    }
}

function Boards(props) {
    return (
        <div id="boards">
            <AddBoard />
            <div className="boards row">
                {props.boards.map(board => (
                    <a href={board.url} className="col-6" key={board.id}>
                        <div className="board-images row">
                            <div className="col-6">
                                <div className="image-one" style={styles(board.images[0])}></div>
                            </div>
                            <div className="col-6">
                                <div className="image-two" style={styles(board.images[1])}></div>
                                <div className="image-three" style={styles(board.images[2])}></div>
                            </div>
                        </div>
                        <span className="board-name">{board.name}</span>
                    </a>
                ))}
			</div>
        </div>
    );
}

export default Boards;
