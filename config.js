if (true) {
  circleroseEndpoint = "https://api.myjson.com/bins/1ed9e6";
  circlerosedupeEndpoint = "https://api.myjson.com/bins/1ed9e6";
  colorbarEndpoint = "https://api.myjson.com/bins/fgtwu";
  flagbarEndpoint = "https://api.myjson.com/bins/106pri";
  linegraphEndpoint = "https://api.myjson.com/bins/1gmhry";
  plainbarEndpoint = "https://api.myjson.com/bins/y1rpa";
} else {
  server_china = "http://172.18.175.204:8080";
  circleroseEndpoint = server_china + "/api/threats/level_pers";
  circlerosedupeEndpoint = server_china + "/api/threats/area_pers";
  colorbarEndpoint = server_china + "/api/threats/asset/top4";
  flagbarEndpoint = server_china + "/api/threats/src/top5";
  linegraphEndpoint = server_china + "/api/threats/trend/month";
  plainbarEndpoint = server_china + "/api/threats/area/top4";
  nestedpieEndpoint = server_china + "/api/threats/type_pers";
  scoreEndpoint = server_china + "/api/threats/score";
  mapEndpoint = server_china + "/api/threats/map";
}
