import React, { useState } from 'react';
import MapCopyIcon from "@/assets/storeDetail/MapCopyIcon.svg?react";

const MapCopyBtn = ({address}) => {

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(address);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className="flex flex-1">
            <button onClick={(handleCopy)}
            className="flex flex-1 items-center h-9 justify-center cursor-pointer">
            <MapCopyIcon />
            <div className="text-xs leading-4 font-medium text-[#374151]">주소복사</div>
        </button>
        </div>
    );
};

export default MapCopyBtn;