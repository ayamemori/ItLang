import React, { useState } from "react";
import placeholder from '../assets/img/upload.png';

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
            <div>
                <img className="show" src={imgTmp} alt="" width="250px" />
                <img className="hide" src={placeholder} alt="" width="250px" />
            </div>
        </>
    );
}

export default ImageUpload;