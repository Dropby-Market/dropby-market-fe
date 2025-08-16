import React, { useState } from 'react';
import MapCopyIcon from "@/assets/storeDetail/MapCopyIcon.svg?react";

const MapCopyBtn = () => {

    return (
        <button className="flex flex-1 items-center h-9 justify-center cursor-pointer">
            <MapCopyIcon />
            <div className="text-xs leading-4 font-medium text-[#374151]">주소복사</div>
        </button>
    );
};

export default MapCopyBtn;