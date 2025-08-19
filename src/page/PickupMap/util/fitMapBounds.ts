export function fitMapBounds(map, geoData) {
  if (!geoData || geoData.length === 0) return;

  const newData = geoData[0];
  const PTbounds = new window.Tmapv3.LatLngBounds();

  for (let i = 0; i < newData.length; i++) {
    const mData = newData[i];
    const type = mData.geometry.type;

    if (type === 'Point') {
      const linePt = new window.Tmapv3.LatLng(
        mData.geometry.coordinates[1],
        mData.geometry.coordinates[0]
      );
      PTbounds.extend(linePt);
    } else {
      for (let j = 0; j < mData.geometry.coordinates.length; j++) {
        const linePt = new window.Tmapv3.LatLng(
          mData.geometry.coordinates[j][1],
          mData.geometry.coordinates[j][0]
        );
        PTbounds.extend(linePt);
      }
    }
  }

  map.fitBounds(PTbounds);
}
