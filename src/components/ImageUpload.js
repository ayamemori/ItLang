import React, { useState } from "react";

function ImageUpload() {
    const [imgTmp, setImgTmp] = useState();

    const handleChange = (e) => {
        const file = e.target.files[0];
        file.preView = URL.createObjectURL(file);
        console.log(file.preView);
        setImgTmp(file.preView);
    };

    return (
        <>
            <input class="form-control mb-2" type="file" onChange={handleChange} multiple />
            <img className="show" src={imgTmp} alt="" />
        </>
    );
}

export default ImageUpload;