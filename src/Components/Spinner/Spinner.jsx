import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-[60vh]">
          <span className="loading loading-bars loading-lg text-primary"></span>
        </div>
    );
};

export default Spinner;