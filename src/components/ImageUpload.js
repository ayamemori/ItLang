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
        </>
    );
}

export default ImageUpload;