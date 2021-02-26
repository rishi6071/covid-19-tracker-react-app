import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Loader = (props) => {

    return (
        <>
            <div className={`spinner-border text-${props.colorClass} d-block mx-auto mt-5`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </>
    );
}

export default Loader;