var endpoints = {};

server_china = "http://172.18.175.204:8080";

if (true) {
  endpoints.circlerose = "https://api.myjson.com/bins/1ed9e6";
  endpoints.circlerosedupe = "https://api.myjson.com/bins/1ed9e6";
  endpoints.colorbar = "https://api.myjson.com/bins/fgtwu";
  endpoints.flagbar = "https://api.myjson.com/bins/106pri";
  endpoints.linegraph = "https://api.myjson.com/bins/1gmhry";
  endpoints.plainbar = "https://api.myjson.com/bins/y1rpa";
} else {
  endpoints.circlerose = server_china + "/api/threats/level_pers";
  endpoints.circlerosedupe = server_china + "/api/threats/area_pers";
  endpoints.colorbar = server_china + "/api/threats/asset/top4";
  endpoints.flagbar = server_china + "/api/threats/src/top5";
  endpoints.linegraph = server_china + "/api/threats/trend/month";
  endpoints.plainbar = server_china + "/api/threats/area/top4";
  endpoints.score = server_china + "/api/threats/score";
  endpoints.map = server_china + "/api/threats/map";
}
// didn't setup test api for this end
endpoints.nestedpie = server_china + "/api/threats/type_pers";
