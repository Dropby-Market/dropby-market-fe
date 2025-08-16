import React, { useState } from 'react';
import MapDetailIcon from "@/assets/storeDetail/MapDetailIcon.svg?react"

const MapDetailBtn = () => {

    return (
        <button className="flex flex-1 items-center h-9 justify-center cursor-pointer">
            <MapDetailIcon />
            <div className="text-xs leading-4 font-medium text-[#374151]">주소복사</div>
        </button>
    );
};

export default MapDetailBtn;