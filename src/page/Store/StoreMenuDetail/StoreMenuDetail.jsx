import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StoreMenuDetailUI from './components/StoreMenuDetailUI';

const StoreMenuDetail = () => {
  const {storeId, menuId} = useParams();

  const [items, setItems] = useState([]);
  const [store,setStore] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try{
        const storeUrl = new URL("./mock/store.json", import.meta.url).href;
        const itemsUrl = new URL("./mock/items.json", import.meta.url).href;

        const { data: storeData } = await axios.get(storeUrl);
        const { data: itemsData } = await axios.get(itemsUrl);

        const selectedStore = storeData.find((s) => s.storeId === Number(storeId));
        const storeItemsObj = itemsData.find((i) => i.storeId === Number(storeId))

        const filteredItems = storeItemsObj?.items || [];

        const finalItems = menuId
          ? filteredItems.filter(item => item.id === Number(menuId))
          : filteredItems;

        setStore(selectedStore || null);
        setItems(finalItems);
      } catch (error) {
        console.error("메뉴 조회 실패", error)
      }
    };
      fetchMenu();
  }, [storeId, menuId]);

  if (!store) {
    return <div>찾으시는 메뉴 정보가 없습니다.</div>
  }

  return (
    <div>
      {items.map((item) => (
          <StoreMenuDetailUI
          key={item.id}
          name={item.name}
          price={item.price}
          menuId={item.id}
          origin={store.storeInfo.origin}
          storeId={store.storeId}/>
        ))}
    </div>
)}

export default StoreMenuDetail;
