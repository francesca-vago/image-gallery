import React from 'react';
import  useFirestore from '../hooks/useFirestore';

export default function ImageGrid() {
    const { docs } = useFirestore('images');

    console.log(docs);

    return (
        <div className='img-grid'>
            { docs && docs.map(doc => (
                <div key={doc.id} className='img-card'>
                    <img src={doc.url} alt="gallery" />
                </div>
            ))}
        </div>
    )
};