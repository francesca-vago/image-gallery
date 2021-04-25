import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

export default function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);

        storageRef
        .put(file)
        .on('state-changed', 
            snap => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            },
            err => {
                setError(err);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                setUrl(url);
            });
    }, [file]);

    return { progress, url, error };
};