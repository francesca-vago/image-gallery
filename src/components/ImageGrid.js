import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import Modal from './Modal';

export default function ImageGrid() {
    const [selectedImg, setSelectedImg] = useState(null);
    const { docs } = useFirestore('images');

    return (
        <>
            <div className='img-grid'>
                { docs && docs.map(doc => (
                    <div key={doc.id} className='img-card'>
                        <img 
                            src={doc.url} 
                            alt="gallery" 
                            onClick={() => setSelectedImg(doc.url)}
                        />
                    </div>
                ))}
            </div>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </>
    )
};