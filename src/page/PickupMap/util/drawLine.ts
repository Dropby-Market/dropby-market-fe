import { fitMapBounds } from '@/page/PickupMap/util/fitMapBounds.ts';

export function drawLine(map, data) {
  const pointArray= [];
  const new_polyLine = [];
  const markers = [];

  const newData = [];
  let equalData = [];
  let pointId1 = '-1234567';

  for (let i = 0; i < data.features.length; i++) {
    const feature = data.features[i];

    if (feature.geometry.type === 'LineString') {
      const ar_line = feature.geometry.coordinates.map((coord: number[]) => {
        pointArray.push(coord);
        return new window.Tmapv3.LatLng(coord[1], coord[0]);
      });

      const polyline = new window.Tmapv3.Polyline({
        path: ar_line,
        strokeColor: '#ff0000',
        strokeWeight: 6,
        map,
      });

      new_polyLine.push(polyline);
    }

    const pointId2 = feature.properties.viaPointId;
    if (pointId1 !== pointId2) {
      equalData = [];
      equalData.push(feature);
      newData.push(equalData);
      pointId1 = pointId2;
    } else {
      equalData.push(feature);
    }
  }

  for (let i = 0; i < newData.length; i++) {
    const mData = newData[i];
    const pointType = mData[0].properties.pointType;

    let lon: number, lat: number, img: string | undefined;

    if (pointType === 'S') {
      img = '/upload/tmap/marker/pin_r_m_s.png';
      [lon, lat] = mData[0].geometry.coordinates;
    } else if (pointType === 'E') {
      img = '/upload/tmap/marker/pin_r_m_e.png';
      [lon, lat] = mData[0].geometry.coordinates;
    } else {
      [lon, lat] = mData[0].geometry.coordinates;
    }

    if (lon && lat) {
      const marker = new window.Tmapv3.Marker({
        position: new window.Tmapv3.LatLng(lat, lon),
        map,
        icon: img,
      });
      markers.push(marker);
    }
  }

  fitMapBounds(map, newData);

  return {
    polylines: new_polyLine,
    markers,
    geoData: newData,
    pointArray,
  };
}
