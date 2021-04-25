import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import Modal from './Modal';
import { motion } from 'framer-motion';

export default function ImageGrid() {
    const [selectedImg, setSelectedImg] = useState(null);
    const { docs } = useFirestore('images');

    return (
        <>
            <div className='img-grid'>
                { docs && docs.map(doc => (
                    <motion.div 
                        key={doc.id} 
                        className='img-card'
                        layout
                        whileHover={{ opacity: 1 }}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <motion.img 
                            src={doc.url} 
                            alt="gallery"
                        />
                    </motion.div>
                ))}
            </div>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </>
    )
};