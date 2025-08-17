import React, { useState } from 'react';

const PhoneCopyButton = ({phone}) => {

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(phone);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div>
            <button onClick={handleCopy}
            className="cursor-pointer flex gap-1 text-xs leading-4 font-medium text-[#059669]">
                복사
            </button>
        </div>
    );
};

export default PhoneCopyButton;