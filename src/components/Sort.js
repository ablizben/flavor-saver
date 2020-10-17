import React from 'react';

export default function Sort() {
    return (
        <form>
            <div className="form-group">
                <label for="sort">Sort By</label>
                <div className="select-wrap">
                    <select className="form-control" id="sort">
                        <option>Newest First</option>
                        <option>Closest First</option>
                        <i class="fas fa-chevron-down"></i>
                    </select>
                </div>
            </div>
        </form>
    );
};



