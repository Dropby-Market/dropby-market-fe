import { fitMapBounds } from '@/page/PickupMap/util/fitMapBounds.ts';

export function drawLine(map, data) {
  const pointArray = [];
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
        strokeColor: '#10B981',
        strokeWeight: 2,
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

  fitMapBounds(map, newData);

  return {
    polylines: new_polyLine,
    markers,
    geoData: newData,
    pointArray,
  };
}
