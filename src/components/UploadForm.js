import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected) {
            if (allowedTypes.includes(selected.type)) {
                setFile(selected);
                setError('');
                return;
            } else {
                setFile(null);
                setError('Please, select a valid image format');
                return;
            }
        }

        setFile(null);
        setError(null);
    };

    return (
        <form>
            <input
                id='upload-image'
                type='file' 
                className='custom-file-input'
                onChange={changeHandler}
            />
            <div>
                { error && <div className='error'>{error}</div>}
                { file && <div>{file.name}</div>}
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
};