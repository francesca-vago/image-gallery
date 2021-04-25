import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

export default function useFirestore(collection) {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore
        .collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            setDocs(documents);
        });

        // unsubscribe from the collection when the component unmounts
        return () => unsub();
    }, [collection]);

    return { docs };

};