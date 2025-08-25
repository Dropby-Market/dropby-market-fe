import React, { useState } from "react";
import { Counter } from '@/shared/ui/Counter.tsx';
import AddCartBtn from "./AddCartBtn.jsx"
import Modal from './Modal';

const StoreMenuDetailUI = ({ menuId, name, price, origin }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="px-4">
            <h2 className="text-[#1F2937] text-2xl leading-8 font-semibold">{name}</h2>
            <button onClick={() => setIsModalOpen(true)}
            className="pt-2 text-[#059669] cursor-pointer text-xs leading-4 font-medium">원산지 및 영양성분 보기</button>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} origin={origin} />}

            <div className="flex pt-10 pb-5 justify-between items-center">
                <p className="flex text-[#1F2937] text-base leading-6 font-semibold">{price.toLocaleString()}원</p>
                <Counter />
            </div>
            
            <div className="-mx-4 h-[6px] bg-[#F3F4F6]" />

            <footer className="pt-4 fixed bottom-4 left-0 right-0 flex justify-center">
                <AddCartBtn />
            </footer>
        </div>
    )
}

export default StoreMenuDetailUI;