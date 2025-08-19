import { useEffect, useRef } from 'react';
import { getRoute } from '@/page/PickupMap/util/getRoute.ts';
import { drawLine } from '@/page/PickupMap/util/drawLine.ts';

// 36.800243, 127.147518 : 출발지
// 36.800312, 127.149560
// 36.801178, 127.150076
// 36.801264, 127.150254
// 36.801644, 127.149212 : 마지막 가게

export default function Tmap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerList = useRef([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new window.Tmapv3.Map(mapRef.current, {
      center: new window.Tmapv3.LatLng(36.800243, 127.147518),
      width: '100%',
      height: 'calc(100vh - 138px)',
      zoom: 15,
    });

    const marker = new window.Tmapv3.Marker({
      position: new window.Tmapv3.LatLng(36.800243, 127.147518),
      map: map,
      title: '출발지',
      icon: 'src/assets/map/MyLocation.svg',
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

    addMarker(127.149560, 36.800312, 2);
    addMarker(127.150076, 36.801178, 3);
    addMarker(127.150254, 36.801264, 4);
    addMarker(127.149212, 36.801644, 5);

    getRoute().then(routeData => {
      drawLine(map, routeData);
    });
  }, []);

  return <div ref={mapRef} />;
}
