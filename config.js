var endpoints = {};

server_china = "http://172.18.175.204:8080";

if (true) {
  endpoints.circlerose = "https://api.myjson.com/bins/1ed9e6";
  endpoints.circlerosedupe = "https://api.myjson.com/bins/1ed9e6";
  endpoints.colorbar = "https://api.myjson.com/bins/fgtwu";
  endpoints.flagbar = "https://api.myjson.com/bins/106pri";
  endpoints.linegraph = "https://api.myjson.com/bins/1gmhry";
  endpoints.plainbar = "https://api.myjson.com/bins/16la2m";
  endpoints.grid = "https://api.myjson.com/bins/qytm6";
  endpoints.nestedpie = "https://api.myjson.com/bins/s3dqc";
} else {
  endpoints.circlerose = server_china + "/api/threats/level_pers";
  endpoints.circlerosedupe = server_china + "/api/threats/area_pers";
  endpoints.colorbar = server_china + "/api/threats/asset/top4";
  endpoints.flagbar = server_china + "/api/threats/src/top5";
  endpoints.linegraph = server_china + "/api/threats/trend/month";
  endpoints.plainbar = server_china + "/api/threats/area/top4";
  endpoints.nestedpie = server_china + "/api/threats/type_pers";
}
// didn't setup test api for these end
endpoints.score = server_china + "/api/threats/score";
