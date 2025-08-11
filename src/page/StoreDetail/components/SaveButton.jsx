import React, { useState } from "react";
import SavedIcon from "@/assets/storeDetail/SavedIcon.svg?react"
import UnSavedIcon from "@/assets/storeDetail/UnSavedIcon.svg?react"

const SaveButton = () => {
    const [ isSaved, setIsSaved ] = useState(false);
    const handleSaveClick = () => {
        setIsSaved(!isSaved);
    };

    return(
        <button onClick = {handleSaveClick} className="cursor-pointer">
            {isSaved ? (
                <SavedIcon ClassName= "w-6 h-6" />
            ) : (
                <UnSavedIcon className="w-6 h-6" />
            )}
        </button>
    );
};

export default SaveButton;