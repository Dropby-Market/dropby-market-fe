import { fitMapBounds } from '@/page/PickupMap/util/fitMapBounds.ts';

export function drawLine(map: any, data: any) {
  const pointArray: number[][] = [];
  const new_polyLine: any[] = [];
  const markers: any[] = [];

  const newData: any[][] = [];
  let equalData: any[] = [];
  let lastPointId = '';

  for (let i = 0; i < data.features.length; i++) {
    const feature = data.features[i];

    // LineString 처리
    if (feature.geometry.type === 'LineString') {
      const lineCoords = feature.geometry.coordinates.map((coord: number[]) => {
        pointArray.push(coord);
        return new window.Tmapv3.LatLng(coord[1], coord[0]);
      });

      const polyline = new window.Tmapv3.Polyline({
        path: lineCoords,
        strokeColor: '#10B981',
        strokeWeight: 6,
        map,
      });
      new_polyLine.push(polyline);
    }

    // viaPointId 기준으로 그룹핑
    const currentPointId = feature.properties.viaPointId;
    if (lastPointId !== currentPointId) {
      if (equalData.length > 0) {
        newData.push([...equalData]); // 이전 그룹 저장
      }
      equalData = [feature]; // 새로운 그룹 시작
      lastPointId = currentPointId;
    } else {
      equalData.push(feature);
    }
  }

  // 마지막 그룹 추가
  if (equalData.length > 0) {
    newData.push([...equalData]);
  }

  // 마커 생성
  newData.forEach(group => {
    const firstFeature = group[0];
    const pointType = firstFeature.properties.pointType;
    const [lon, lat] = firstFeature.geometry.coordinates;

    let icon: string | undefined;
    if (pointType === 'S') {
      icon = '/upload/tmap/marker/pin_r_m_s.png';
    } else if (pointType === 'E') {
      icon = '/upload/tmap/marker/pin_r_m_e.png';
    } else {
      icon = undefined; // 기본 아이콘 사용
    }

    if (lon != null && lat != null) {
      const marker = new window.Tmapv3.Marker({
        position: new window.Tmapv3.LatLng(lat, lon),
        map,
        ...(icon ? { icon } : {}),
      });
      markers.push(marker);
    }
  });

  // 지도 bounds 맞추기
  fitMapBounds(map, newData);

  return {
    polylines: new_polyLine,
    markers,
    geoData: newData,
    pointArray,
  };
}
