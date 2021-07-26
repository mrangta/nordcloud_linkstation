// Given points to test with (x,y) co-ordinates
const points = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18],
];

// Given Link Stations locations points, reach and power
const linkStations = [
  { stationPoints: [0, 0], reach: 10, power: 0 },
  { stationPoints: [20, 20], reach: 5, power: 0 },
  { stationPoints: [10, 0], reach: 12, power: 0 },
];

// Calculates the distance between two-dimensional points and returns a number
const getDistance = (pointA, pointB) => Math.sqrt(
  (Math.abs(pointA[0] - pointB[0]) ** 2) + (Math.abs(pointA[1] - pointB[1]) ** 2),
);

// Calculate the link station’s power to given distance and returns a number
const getPower = (distance, reach) => ((distance > reach) ? 0 : ((reach - distance) ** 2));

// Fetch the best link station from existing linkStations for given points.
let getbestStation = points.map((point) => {
  bestStation = linkStations.map((station) => {
    station.power = getPower(getDistance(point, station.stationPoints), station.reach);
    return station;
  }).filter((station) => station.power > 0)
    .sort((stationA, stationB) => stationA.power - stationB.power)
    .pop();

  if (!bestStation) {
    return `No link station within reach for point (${point[0]},${point[1]})`;
  }
  return `Best link station for point (${point[0]},${point[1]}) is (${bestStation.stationPoints[0]},${bestStation.stationPoints[1]}) with power: ${bestStation.power}`;
});

console.log(getbestStation);

module.exports = {
  getDistance,
  getPower,
};
