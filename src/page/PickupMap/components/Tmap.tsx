import { useEffect, useRef } from 'react';
import { getRoute } from '@/page/PickupMap/util/getRoute.ts';
import { drawLine } from '@/page/PickupMap/util/drawLine.ts';

// 36.800073, 127.148372 시작 위치
// 36.800759, 127.149342
// 36.800738, 127.150280
// 36.801720, 127.149450 마지막 위치

export default function Tmap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerList = useRef([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new window.Tmapv3.Map(mapRef.current, {
      center: new window.Tmapv3.LatLng(36.800073, 127.148372),
      width: '100%',
      height: 'calc(100vh - 138px)',
      zoom: 15,
    });

    const marker = new window.Tmapv3.Marker({
      position: new window.Tmapv3.LatLng(36.800073, 127.148372),
      map: map,
      title: '출발지',
    });

    const addMarker = (lon: number, lat: number, tag: number) => {
      const marker = new window.Tmapv3.Marker({
        position: new window.Tmapv3.LatLng(lat, lon),
        map: map,
      });

      marker.tag = tag;

      markerList.current[tag] = marker;
      return marker;
    };

    addMarker(127.148372, 36.800073, 1);
    addMarker(127.149342, 36.800759, 2);
    addMarker(127.150280, 36.800738, 3);
    addMarker(127.149450, 36.801720, 4);

    getRoute().then(routeData => {
      drawLine(map, routeData);
    });
  }, []);

  return <div ref={mapRef} />;
}
