import React, { useState } from 'react';
import MapDetailIcon from "@/assets/storeDetail/MapDetailIcon.svg?react";

const MapCopyBtn = () => {


    return (
        <div className="flex flex-1">
            <button className="flex flex-1 items-center h-9 justify-center cursor-pointer">
            <MapDetailIcon />
            <div className="text-xs leading-4 font-medium text-[#374151]">지도보기</div>
        </button>
        </div>
    );
};

export default MapCopyBtn;