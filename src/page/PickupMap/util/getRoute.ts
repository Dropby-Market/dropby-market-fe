import axios from "axios";

export async function getRoute() {
  const startX = 127.147518;
  const startY = 36.800243;
  const endX = 127.149212;
  const endY = 36.801644;
  const passList =
    "127.149560,36.800312_127.150076,36.8011786";
  const startName = "출발"
  const endName = "도착"

  try {
    const response = await axios.post(
      "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json&callback=result",
      {
        startX,
        startY,
        endX,
        endY,
        passList,
        startName,
        endName,
      },
      {
        headers: {
          appKey: import.meta.env.VITE_T_MAP_API_KEY,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("응답 데이터:", response.data);
    return response.data;
  } catch (error) {
    console.error("Tmap API 요청 에러:", error.response ?? error);
    throw error;
  }
}