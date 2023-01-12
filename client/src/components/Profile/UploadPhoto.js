import React, { useState } from 'react';

function UploadPhoto() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        // Check that the file is a PNG or JPG
        if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
            setFile(event.target.files[0]);
        } else {
            alert('Please select a PNG or JPG file');
        }
    };

const handleUpload = () => {
    // Update Fetch - Upload the photo to backend
    var formData = new FormData();
    formData.append("file", file);
}
    return (
    <div>
        <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg"  />
        <button onClick={handleUpload}>Upload</button>
    </div>
    );
}

export default UploadPhoto
