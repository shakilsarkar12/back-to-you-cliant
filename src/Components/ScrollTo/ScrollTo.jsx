import React from 'react';
import { Link } from 'react-scroll';

const ScrollTo = ({name, to, className}) => {
    return (
        <Link
            to={to}
        className={className}>
            {name}
        </Link>
    );
};

export default ScrollTo;