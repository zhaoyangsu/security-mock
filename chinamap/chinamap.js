var dom = document.getElementById("main");
var myChart = echarts.init(dom);
var app = {};

var option = {
  tooltip : {
    trigger: 'item',
    formatter: '{b}'
  },
  series : [{
    name: '中国',
    type: 'map',
    mapType: 'china',
    selectedMode : 'single',
    itemStyle:{
      normal:{
      borderWidth:0.5,
      borderColor:'#12C3C0',
      color: '#0E3678',
      label:{show:false}
    },
      emphasis:{label:{show:false}}
    },
    data:[]
  }]
};
myChart.setOption(option);

myChart.on(echarts.config.EVENT.MAP_SELECTED,function(param) {
 var data = [param.event.layerX,param.event.layerY]
 var geoCo = myChart.chart.map.getGeoByPos("china",data)
 var serData = option.series[0].data;

option.series[0].markPoint = {
  itemStyle : {
    normal:{
      color:'red'
    }
  },
  data : [
    {name : 'poin', value : 'asd'}
  ]
};
option.series[0].geoCoord =	{'poin': geoCo};
myChart.setOption(option);
});
var box = new twaver.ElementBox();
  var network = new twaver.vector.Network(box);
var view = network.getView();

var dataBox = new twaver.ElementBox();
//北美洲地图
var northAmericaBox = new twaver.ElementBox();
var northAmericaNetWork = new twaver.vector.Network(northAmericaBox);
var northAmericaView = northAmericaNetWork.getView();

//南美洲地图
var southAmericaBox = new twaver.ElementBox();
var southAmericaNetWork = new twaver.vector.Network(southAmericaBox);
var southAmericaView = southAmericaNetWork.getView();

//亚洲地图
var asiaBox = new twaver.ElementBox();
var asiaNetWork = new twaver.vector.Network(asiaBox);
  var asiaView = asiaNetWork.getView();
//非洲地图
var africaBox = new twaver.ElementBox();
var africaNetWork = new twaver.vector.Network(africaBox);
  var africaView = africaNetWork.getView();
//欧洲地图
var europeBox = new twaver.ElementBox();
var europeNetWork = new twaver.vector.Network(europeBox);
  var europeView = europeNetWork.getView();
//大洋洲
var oceaniaBox = new twaver.ElementBox();
var oceaniaNetWork = new twaver.vector.Network(oceaniaBox);
  var oceaniaView = oceaniaNetWork.getView();

//全网威胁
var threatLevelBox = new twaver.ElementBox();
var threatLevelNetWork = new twaver.vector.Network(threatLevelBox);
var threatLevelView = threatLevelNetWork.getView();

//TOP资产
var topRiskAssetBox = new twaver.ElementBox();
var topRiskAssetBoxNetWork = new twaver.vector.Network(topRiskAssetBox);
var topRiskAssetBoxView = topRiskAssetBoxNetWork.getView();

//表格
var alarmBox = new twaver.ElementBox();
var alarmBoxNetWork = new twaver.vector.Network(alarmBox);
var alarmBoxView = alarmBoxNetWork.getView();
var table = new twaver.controls.Table(alarmBox);
var tablePane1 = new twaver.controls.TablePane(table);
var tableDom1 = tablePane1.getView();

//TOP国家
var topRiskCountryBox = new twaver.ElementBox();
var topRiskCountryBoxNetWork = new twaver.vector.Network(topRiskCountryBox);
var topRiskCountryBoxView = topRiskCountryBoxNetWork.getView();
//TOP区域
var topRiskRegionBox = new twaver.ElementBox();
var topRiskRegionBoxNetWork = new twaver.vector.Network(topRiskRegionBox);
var topRiskRegionBoxView = topRiskRegionBoxNetWork.getView();
var colors = ["#06CC49","#009AE7","#FFCC00","#FFA235","#F82A2A"];
var regions = ["北研所","南研所","美研所","荷兰分部","上海办事处"];//测试使用区域集合
var countrys = ["美国","俄罗斯","新西兰","冰岛","巴西"];//测试使用国家集合
var viewBounds;
var fullscreen = false;
var nodeCache={};
var attackCache = [];
var regionNodeCache ={};
//静态、动态线都需要两个unvisble的弄的作为起始和结束点
var unvisbleNodeCache = {};
var continentNodeCache = {};
var continentLocate = [];
var continentName;
var flowLinks = this.flowLinks = new twaver.List();
//var

 //表格
var alarmBox = new twaver.ElementBox();
var alarmBoxNetWork = new twaver.vector.Network(alarmBox);
var alarmBoxView = alarmBoxNetWork.getView();
var table = new twaver.controls.Table(alarmBox);
var tablePane1 = new twaver.controls.TablePane(table);
var tableDom1 = tablePane1.getView();

var toolBarBox = new twaver.ElementBox();
var toolBarNetWork = new twaver.vector.Network(toolBarBox);
var toolBarView = toolBarNetWork.getView();
var toolbarClick = true;

var toolBarButtonBox = new twaver.ElementBox();
var toolBarButtonNetWork = new twaver.vector.Network(toolBarButtonBox);
var toolBarButtonView = toolBarButtonNetWork.getView();

var changeZoomBox = new twaver.ElementBox();
var changeZoomNetWork = new twaver.vector.Network(changeZoomBox);
var changeZoomView = changeZoomNetWork.getView();

 var regionJson1 ='[{"elementId":"1","parentId":null,"lon":"116","lat":"39","name":null,"type":"RegionNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_ENGLISH_TITLE":"总部","ServiceID":1},"unresolvedEventCount":0,"threatSeverity":90,"point":null,"id":1,"regionName":"总部","locationX":819.5555489648307,"locationY":232.2083606152293,"threatLevel":0,"threatNum":0,"regionCountry":"RU"},{"elementId":"2","lon":"117","lat":"32","parentId":null,"name":null,"type":"RegionNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_ENGLISH_TITLE":"分支1","ServiceID":2},"unresolvedEventCount":0,"threatSeverity":82,"point":null,"id":2,"regionName":"分支1","locationX":732.5419220898174,"locationY":468.7956411718789,"threatLevel":0,"threatNum":0,"regionCountry":"BR"},{"elementId":"3","lon":"108","lat":"28","parentId":null,"name":null,"type":"RegionNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_ENGLISH_TITLE":"分支1","ServiceID":3},"unresolvedEventCount":0,"threatSeverity":20,"point":null,"id":3,"regionName":"分支2","locationX":732.5419220898174,"locationY":468.7956411718789,"threatLevel":0,"threatNum":0,"regionCountry":"BR"},{"elementId":"4","lon":"85","lat":"30","parentId":null,"name":null,"type":"RegionNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_ENGLISH_TITLE":"分支1","ServiceID":4},"unresolvedEventCount":0,"threatSeverity":45,"point":null,"id":4,"regionName":"分支3","locationX":732.5419220898174,"locationY":468.7956411718789,"threatLevel":0,"threatNum":0,"regionCountry":"BR"},{"elementId":"5","lon":"85","lat":"39","parentId":null,"name":null,"type":"RegionNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_ENGLISH_TITLE":"分支1","ServiceID":5},"unresolvedEventCount":0,"threatSeverity":10,"point":null,"id":5,"regionName":"分支4","locationX":732.5419220898174,"locationY":468.7956411718789,"threatLevel":0,"threatNum":0,"regionCountry":"BR"},{"elementId":"Philippines","parentId":null,"name":"菲律宾","type":"AttackSourceNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_COUNTRY_CODE":"PH","TOPOELEM_ENGLISH_TITLE":"Philippines"},"unresolvedEventCount":1,"threatSeverity":0,"point":null,"sourceType":"country"},{"elementId":"Turkey","parentId":null,"name":"土耳其","type":"AttackSourceNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_COUNTRY_CODE":"TR","TOPOELEM_ENGLISH_TITLE":"Turkey"},"unresolvedEventCount":1,"threatSeverity":0,"point":null,"sourceType":"country"},{"elementId":"Russia","parentId":null,"name":"俄罗斯","type":"AttackSourceNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_COUNTRY_CODE":"RU","TOPOELEM_ENGLISH_TITLE":"elementId"},"unresolvedEventCount":1,"threatSeverity":0,"point":null,"sourceType":"country"},{"elementId":"Australia","parentId":null,"name":"澳大利亚","type":"AttackSourceNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_COUNTRY_CODE":"AU","TOPOELEM_ENGLISH_TITLE":"Australia"},"unresolvedEventCount":1,"threatSeverity":0,"point":null,"sourceType":"country"},{"elementId":"Thailand","parentId":null,"name":"泰国","type":"AttackSourceNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_COUNTRY_CODE":"TH","TOPOELEM_ENGLISH_TITLE":"Thailand"},"unresolvedEventCount":0,"threatSeverity":0,"point":null,"sourceType":"country"},{"elementId":"Egypt","parentId":null,"name":" 埃及","type":"AttackSourceNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_COUNTRY_CODE":"EG","TOPOELEM_ENGLISH_TITLE":"Egypt"},"unresolvedEventCount":1,"threatSeverity":0,"point":null,"sourceType":"country"},{"elementId":"United States of America","parentId":null,"name":"美国","type":"AttackSourceNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_COUNTRY_CODE":"US","TOPOELEM_ENGLISH_TITLE":"United States of America"},"unresolvedEventCount":0,"threatSeverity":0,"point":null,"sourceType":"country"},{"elementId":"Brazil","parentId":null,"name":"巴西","type":"AttackSourceNode","topoTipInfo":null,"needTooltip":true,"userPropertites":{"TOPOELEM_COUNTRY_CODE":"BR","TOPOELEM_ENGLISH_TITLE":"Brazil"},"unresolvedEventCount":1,"threatSeverity":11,"point":null,"sourceType":"country"},{"elementId":"Brazil-2","parentId":null,"name":"巴西-->>分支1","type":"AttackLink","topoTipInfo":null,"needTooltip":true,"userPropertites":{"lon":null,"TOPOELEM_ENGLISH_TITLE":"巴西-->>分支1","lat":null},"unresolvedEventCount":1,"threatSeverity":65,"fromNodeId":"Brazil","toNodeId":"4","linkType":"static"},{"elementId":"Turkey-1-dynamic","parentId":null,"name":"土耳其-->>总部","type":"AttackLink","topoTipInfo":null,"needTooltip":true,"userPropertites":{"lon":null,"TOPOELEM_ENGLISH_TITLE":"Turkey-->>总部","lat":null},"unresolvedEventCount":1,"threatSeverity":20,"fromNodeId":"Turkey","toNodeId":"1","linkType":"dynamic"},{"elementId":"Russia-1","parentId":null,"name":"俄罗斯-->>总部","type":"AttackLink","topoTipInfo":null,"needTooltip":true,"userPropertites":{"lon":null,"TOPOELEM_ENGLISH_TITLE":"RU-->>总部","lat":null},"unresolvedEventCount":1,"threatSeverity":45,"fromNodeId":"Russia","toNodeId":"1","linkType":"static"},{"elementId":"Russia-1-dynamic","parentId":null,"name":"俄罗斯-->>总部","type":"AttackLink","topoTipInfo":null,"needTooltip":true,"userPropertites":{"lon":null,"TOPOELEM_ENGLISH_TITLE":"RU-->>总部","lat":null},"unresolvedEventCount":1,"threatSeverity":0,"fromNodeId":"Russia","toNodeId":"1","linkType":"dynamic"},{"elementId":"Egypt-1","parentId":null,"name":"埃及-->>总部","type":"AttackLink","topoTipInfo":null,"needTooltip":true,"userPropertites":{"lon":null,"TOPOELEM_ENGLISH_TITLE":"埃及-->>分支1","lat":null},"unresolvedEventCount":1,"threatSeverity":0,"fromNodeId":"Egypt","toNodeId":"2","linkType":"static"},{"elementId":"United States of America-1","parentId":null,"name":"美国-->>总部","type":"AttackLink","topoTipInfo":null,"needTooltip":true,"userPropertites":{"lon":null,"TOPOELEM_ENGLISH_TITLE":"United States of America-->>总部","lat":null},"unresolvedEventCount":122,"threatSeverity":90,"fromNodeId":"United States of America","toNodeId":"1","linkType":"dynamic"},{"elementId":"Australia-3","parentId":null,"name":"澳大利亚-->>分支2","type":"AttackLink","topoTipInfo":null,"needTooltip":true,"userPropertites":{"lon":null,"TOPOELEM_ENGLISH_TITLE":"澳大利亚-->>分支2","lat":null},"unresolvedEventCount":1,"threatSeverity":23,"fromNodeId":"Australia","toNodeId":"3","linkType":"dynamic"},{"elementId":"Australia-2","parentId":null,"name":"澳大利亚-->>分支1","type":"AttackLink","topoTipInfo":null,"needTooltip":true,"userPropertites":{"lon":null,"TOPOELEM_ENGLISH_TITLE":"澳大利亚-->>分支1","lat":null},"unresolvedEventCount":1,"threatSeverity":0,"fromNodeId":"Australia","toNodeId":"2","linkType":"static"},{"elementId":"5-5","parentId":null,"name":"分支4-->>分支4","type":"AttackLink","topoTipInfo":null,"needTooltip":true,"userPropertites":{"lon":null,"TOPOELEM_ENGLISH_TITLE":"分支4-->>分支4","lat":null},"unresolvedEventCount":1,"threatSeverity":0,"fromNodeId":"5","toNodeId":"5","linkType":"static"}]';
var regionJson = JSON.parse(regionJson1);
var valu = 0;
var alaLevel=['2','5','3','3','5','1','1','1','5','4','4'];

$(document).ready(function(){
   //updateRefreshTime();
  init();
  window.onresize = doOnResize;
  doOnResize();
  setInterval( playan,5000);
});

function initfullscreen()
{
 var searc = window.location.search;
 if(searc.indexOf("yes")>-1)
 {
   toFullscreen("fullscreen");
 }
}

function init()
{
  updateRefreshTime();
  registerImage();
  initNetWork();
  // used to load other continents
  loadMapData();
  initContinent();
 //view.appendChild(div);
}

function updateRefreshTime() {
  var nowTime = formateTime(new Date(), "yyyy-MM-dd hh:mm:ss");
  $("#refreshTimeValue").html(nowTime);
}

/*
*计算当前网页相对于全屏百分比
*/
function calcuNetPercent()
{
var scrollWidth = document.documentElement.scrollWidth;
var scrollHeight = document.documentElement.scrollHeight;
var screenHeight = window.screen.height;
 var screenWidth = window.screen.width;
}

function initNetWork()
  {
     var width = document.documentElement.scrollWidth;
     var scrollHeight = document.documentElement.scrollHeight;
     //var height = document.documentElement.clientHeight;

     var height = 0.75*window.screen.height;
     viewBounds = {x:0, y:2, width:width, height:height};
     //console.log(viewBounds); {x: 0, y: 2, width: 1214, height: 810}
     // window.screen.height
     var screenHeight = 1000;
     var screenWidth = 1200;
     var netPer = (width*scrollHeight)/(screenWidth*screenHeight)
     var continentHeight = screenHeight*1/5;
     var continentWidth = width*1/5;

   //初始化北美洲network
   northAmericaNetWork.setZoom(0.5);
   document.body.appendChild(northAmericaView);
   northAmericaNetWork.adjustBounds({x:0,y:2,width:continentWidth, height:continentHeight});
   // northAmericaNetWork.getView().left = "40px";
   // northAmericaNetWork.getView().right = "40px";

   // northAmericaNetWork.getView().style.transform = "scale(0.7,0.7)";
   // northAmericaNetWork.getView().top = "100px";

   northAmericaView.left = "7%";
   northAmericaView.style.left = '7%';

   // northAmericaView.style.marginLeft = '5%';
   // this makes background translucent
   northAmericaView.style.backgroundColor = 'rgba(8,14,23,0.01)';//背景颜色
   northAmericaNetWork.setDragToPan(false);//设置network是否可以拖拽移动
   twaver.Styles.setStyle('select.style', 'none');//设置选中的样式
   northAmericaNetWork.setScrollBarVisible(0);

   //初始化南美洲network
   southAmericaNetWork.setZoom(0.5);
   document.body.appendChild(southAmericaView);
   southAmericaNetWork.adjustBounds({x:0,y:continentHeight,width:continentWidth, height:continentHeight});
   // southAmericaView.style.marginLeft = '5%';
   southAmericaNetWork.getView().style.backgroundColor = 'rgba(8,14,23,0.01)';//背景颜色
   southAmericaNetWork.setDragToPan(false);//设置network是否可以拖拽移动
   twaver.Styles.setStyle('select.style', 'none');//设置选中的样式
   southAmericaNetWork.centerByLogicalPoint(0.5*489,0.5*483);
   southAmericaNetWork.setScrollBarVisible(0);

    //初始化非洲network
   africaNetWork.setZoom(0.5);
   document.body.appendChild(africaView);
   africaNetWork.adjustBounds({x:0,y:continentHeight*2,width:continentWidth, height:continentHeight});
   // africaView.style.marginLeft = '5%';
   africaNetWork.getView().style.backgroundColor = 'rgba(8,14,23,0.01)';//背景颜色
   africaNetWork.setDragToPan(false);//设置network是否可以拖拽移动
   twaver.Styles.setStyle('select.style', 'none');//设置选中的样式
   africaNetWork.centerByLogicalPoint(0.5*715,0.5*451);
   africaNetWork.setScrollBarVisible(0);

   //初始化亚洲network
   asiaNetWork.setZoom(0.5);
   document.body.appendChild(asiaView);
   asiaNetWork.adjustBounds({x:width*0.65,y:0,width:continentWidth, height:continentHeight});
   asiaNetWork.getView().style.backgroundColor = 'rgba(8,14,23,0.01)';//背景颜色
   asiaNetWork.setDragToPan(false);//设置network是否可以拖拽移动
   twaver.Styles.setStyle('select.style', 'none');//设置选中的样式
   asiaNetWork.centerByLogicalPoint(0.5*960,0.5*324);
   asiaNetWork.setScrollBarVisible(0);

   //初始化欧洲network
   europeNetWork.setZoom(0.5);
   document.body.appendChild(europeView);
   europeNetWork.adjustBounds({x:width*0.65,y:continentHeight,width:continentWidth, height:continentHeight});
   europeNetWork.getView().style.backgroundColor = 'rgba(8,14,23,0.01)';//背景颜色
   europeNetWork.setDragToPan(false);//设置network是否可以拖拽移动
   twaver.Styles.setStyle('select.style', 'none');//设置选中的样式
   europeNetWork.centerByLogicalPoint(0.5*962,0.5*213);
   europeNetWork.setScrollBarVisible(0);

   //初始化大洋洲network
   oceaniaNetWork.setZoom(0.6);
   document.body.appendChild(oceaniaView);
   oceaniaNetWork.adjustBounds({x:width*0.65,y:continentHeight*2,width:continentWidth, height:continentHeight});
   oceaniaNetWork.getView().style.backgroundColor = 'rgba(8,14,23,0.01)';//背景颜色
   oceaniaNetWork.setDragToPan(true);//设置network是否可以拖拽移动
   twaver.Styles.setStyle('select.style', 'none');//设置选中的样式
   //oceaniaNetWork.centerByLogicalPoint(850,400);
   oceaniaNetWork.centerByLogicalPoint(0.6*1045,0.6*522);
   //var oceaniaCountry = oceaniaBox.getDataById("AU");
   //console.log("country:"+oceaniaCountry);
   //设置滚动条不可见
   oceaniaNetWork.setScrollBarVisible(0);
    //network.setZoom(false);
   document.body.appendChild(view);
   network.adjustBounds(viewBounds);
   network.setMaxZoom(1);
   network.setMinZoom(1);
   //network.onZoomChanged  = function(a,b){alert(123);}

   network.getView().style.backgroundColor = 'rgba(1,1,1,0.01)';//背景颜色
   network.setDragToPan(false);//设置network是否可以拖拽移动
   twaver.Styles.setStyle('select.style', 'none');//设置选中的样式
  // network.getView().appendChild(dom);

  network.getView().addEventListener('mousemove', function(e) {
   var target = network.getElementAt(e);
   if(target instanceof twaver.Link && target.getClient('link.type') === 'flowLink') {
     target.s('link.width',2.5);
   } else {
     window.flowLinks.forEach(function(link){
     link.s('link.width',1);
     });
   }
   //target.s('link.width',1);
   });
    network.setLinkPathFunction(function(linkUI, defaultPoints) {
     var link = linkUI._element;
     var from = link.getFromNode();
     var to = link.getToNode();
     if(from.getId() === to.getId()){
      var f = linkUI.getFromPoint();
      var t = linkUI.getToPoint();
      var points = new twaver.List();

       var aWidth = 34, aX = f.x - aWidth/2, aY = f.y, aHeight = 38;
      var hB = (aWidth / 2) * .5522848,
      vB = (aHeight / 2) * .5522848,
      eX = aX + aWidth,
      eY = aY + aHeight,
      mX = aX + aWidth / 2,
      mY = aY + aHeight / 2;

      // points.add({x:aX,y:mY});

      points.add({x:mX,y:aY});

      var cps = new twaver.List();
      cps.add({x:mX + hB, y:aY});
      cps.add({x:eX,y: mY - vB});
      cps.add({x:eX,y:mY});
      points.add(cps);

      var cps = new twaver.List();
      cps.add({x:eX, y:mY + vB});
      cps.add({x:mX + hB, y:eY});
      cps.add({x:mX, y:eY});
      points.add(cps);

      var cps = new twaver.List();
      cps.add({x:mX - hB,y: eY});
      cps.add({x:aX, y:mY + vB});
      cps.add({x:aX, y:mY});
      points.add(cps);

      var cps = new twaver.List();
      cps.add({x:aX, y:mY - vB});
      cps.add({x:mX - hB, y:aY});
      cps.add({x:mX, y:aY});
      points.add(cps);

      return points;
    } else if (link.getClient('link.type') === 'flowLink') {
     var f = linkUI.getFromPoint();
     var t = linkUI.getToPoint();
     var factor = link.getClient('factor') || 1;

     var points = new twaver.List();
     points.add(f);
     points.add(t);

     var lineLength = _twaver.math.getDistance(f, t);
     var offset = -lineLength / 5;
     var m = {
     x: (f.x + t.x) / 2 + offset ,
     y: (f.y + t.y) / 2 + offset + Math.pow(-1,factor)*factor * 5
     }

     var cps = new twaver.List();
     cps.add(m);
     cps.add(t);

     points.removeAt(1);
     points.add(cps);
     return points;
   } else {
     return defaultPoints;
   }
   });
}
/*加载地图数据*/
// possible to load json using another method?, Failed to load Cross origin requests
function loadMapData () {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'world-lowres.geo_c.json');
  xhttp.onload = function () {
  _loadData(xhttp.responseText);
  };
  xhttp.send();
}

function _loadData (json) {
JSON.parse(json).features.forEach(function (feature) {
  //每一个国家实质上就是一个ShapeNode
  var node = new twaver.ShapeNode(feature.id);
  dataBox.add(node);
  //设置每个国家区域的颜色，填充色等属性  vector.gradient  vector.gradient.color
  node.setStyle('vector.fill', true)
  .setStyle('vector.fill.color', '#1D2945')
  .setStyle('vector.outline.color', '#12C3C0')
  .setStyle('select.color', '#FFFFFF')
  .setStyle('vector.outline.width', 0.8);
  node.setMovable(false);
  node.setClient('type','');
  node.setClient('continent',feature.properties.continent);
  node.setToolTip(feature.properties.name);

  //根据读取的地图数据，设置shapeNode的绘制方式，这块代码可不用理解，也不需要任何改动。
  var segments = new twaver.List();
  var points = new twaver.List();
  if (feature.geometry.type === 'MultiPolygon') {
   feature.geometry.coordinates.forEach(function (polygon) {
   polygon.forEach(function (coordinate) {
     segments.add('moveto');
     coordinate.forEach(function (point, i) {
     if (i !== 0) {
       segments.add('lineto');
     }
     points.add({ x: point[0] / 10 + 230, y: -point[1] / 10 + 1087 });
     });
   });
   });
  } else if (feature.geometry.type === 'Polygon') {
   feature.geometry.coordinates.forEach(function (coordinate) {
   segments.add('moveto');
   coordinate.forEach(function (point, i) {
     if (i !== 0) {
     segments.add('lineto');
     }
     points.add({ x: point[0] / 10 + 230, y: -point[1] / 10 + 1087 });
   });
   });
  } else {
   console.log(feature.geometry.type);
  }
  node.setSegments(segments);
  node.setPoints(points);
  if(feature.properties.continent == "Africa")
  {
   node.setStyle('vector.fill.color', '#0E283C');
   //.setStyle('vector.gradient', 'radial.center')
     //.setStyle('vector.gradient.color', '#492D3A')
   africaBox.add(node);
  }
  else if(feature.properties.continent == "North America")
  {
   //#342534  .setStyle('vector.fill.color', '#1D2945')
   node.setStyle('vector.fill.color', '#342534')
   .setStyle('vector.gradient', 'radial.center')
     .setStyle('vector.gradient.color', '#492D3A')
   .setStyle('vector.join', 'round');
   /*node.setStyle('shadow.blur',20);
   vector.join
        node.setStyle('shadow.xoffset',5);
        node.setStyle('shadow.yoffset',5);#09302F
    node.setStyle('select.color',twaver.Colors.orange);*/
   northAmericaBox.add(node);
  }
  else if(feature.properties.continent == "South America")
  {
   node.setStyle('vector.fill.color', '#09302F');
   //.setStyle('vector.gradient', 'linear.east')
     //.setStyle('vector.gradient.color', '#492D3A')
   southAmericaBox.add(node);
  }
  else if(feature.properties.continent == "Asia")
  {
   node.setStyle('vector.fill.color', '#30302E')
   .setStyle('vector.gradient', 'radial.center')
     .setStyle('vector.gradient.color', '#072E27');
   asiaBox.add(node);
  }
  else if(feature.properties.continent == "Europe")
  {
   node.setStyle('vector.fill.color', '#072A29')
   .setStyle('vector.gradient', 'radial.center')
     .setStyle('vector.gradient.color', '#072E27');
   europeBox.add(node);
  }
  else if(feature.properties.continent == "Oceania")
  {
   node.setStyle('vector.fill.color', '#07442C')
   .setStyle('vector.gradient', 'radial.center')
     .setStyle('vector.gradient.color', '#072E27');
   oceaniaBox.add(node);
  }
});
var oceaniaCountry = oceaniaBox.getDataById("AU");
// console.log(oceaniaCountry.getCenterLocation ());
//创建单独的一层，用于放置所有的link，目的是让link置于最上层
var linkLayer = new twaver.Layer('link');
//layer由layerBox进行管理，使用方法和DataBox类似
box.getLayerBox().add(linkLayer);
showRegionView();
doAnimate();
}

//显示国家和区域
function showRegionView()
{
/*var toolBarNode = new twaver.Node();
toolBarNode.setImage('toolbar');
toolBarNode.setLocation(5,5);
toolBarNode.setSize(30,30);
toolBarNode.setClient("cursor","pointer");
toolBarNode.setMovable(false);
toolBarNode.setToolTip("过滤条件");
//toolBarNode.s("cursor","pointer");
// node.setLayerId('link');getStyleProperties
//console.log(toolBarNode.s("cursor"));
//console.log(123);
box.add(toolBarNode);*/
//network.addInteractionListener(function (e) {console.log();});
 /*产生威胁的区域*/
if(regionJson.length>0)
{
 for ( var i = 0; i < regionJson.length; i++) {

 if(regionJson[i].type=="RegionNode"){
   var node = new twaver.Node();
   node.setImage('locate');
   node.setClient('c_value',regionJson[i].threatSeverity);
   //node.setClient('c_value',88);
   node.setClient('c_name', regionJson[i].regionName);
   //node.setSize(100,100);
   node.setToolTip(regionJson[i].regionName);
   //node.setClient('color', 'red');
   node.setClient('radius', 100);
   node.setClient('node_type', regionJson[i].type);
   node.setSize(25,25);
   node.setClient('r_state','unattacked');
   //node.setClient('country',regionJson[i].regionCountry);116,40
   var lonlat = [regionJson[i].lon,regionJson[i].lat];
   node.setClient("lonlat",lonlat);
   var geoCo = myChart.chart.map.getPosByGeo("china",lonlat)
   var marg = $("#main").css("margin-left");
   node.setLayerId('link');//将node放在linklayer中，防止被覆盖
   //node.setCenterLocation(regionJson[i].locationX,
   //		regionJson[i].locationY);
   node.setCenterLocation(geoCo[0]+parseInt(marg),geoCo[1]);
      //node.setCenterLocation(859, 212);
   node.setMovable(false);//不可以拖动
   //将区域信息加入缓存中
   regionNodeCache[regionJson[i].regionName] = node;
   //regionCache.push(node);
   nodeCache[regionJson[i].elementId] = node;
   box.add(node);
   }
   else if(regionJson[i].type=="AttackSourceNode")
   {
     var country = dataBox.getDataById(regionJson[i].userPropertites.TOPOELEM_COUNTRY_CODE);
     if(country)
     {
       var continentName = country.getClient("continent");
       nodeCache[regionJson[i].elementId] = continentNodeCache[continentName];
     }
   }
   else if(regionJson[i].type=="AttackLink")
   {
     attackCache.push(regionJson[i]);
   }
 }
}

}

function doAnimate()
{
for ( var i = 0; i < attackCache.length; i++)
{
 if(nodeCache[attackCache[i].elementId])
 {
   nodeCache[attackCache[i].elementId].playAnimate();
 }
 else
 {
   var fromNode;
   var toNode;
   var fromNodeId =attackCache[i].fromNodeId;
   var toNodeId =attackCache[i].toNodeId;
   var fromOldNode = nodeCache[fromNodeId];
   var toOldNode = nodeCache[toNodeId];
   if(unvisbleNodeCache[fromNodeId])
   {
     fromNode = unvisbleNodeCache[fromNodeId];
   }
   else
   {
     fromNode = new twaver.Node();
     var fromCenter = fromOldNode.getCenterLocation();
       fromNode.setImage('unvisble');
       // fromNode.setId(fromNodeId);
       fromNode.setSize(100, 100);
       fromNode.setLayerId('link');
       fromNode.setMovable(false);//不可以拖动
       fromNode.setCenterLocation(fromCenter.x, fromCenter.y);
       //unvisbleNodeCache.push(fromNode);
       unvisbleNodeCache[fromNodeId] = fromNode;
       box.add(fromNode);
   }

   if(unvisbleNodeCache[toNodeId])
   {
     toNode = unvisbleNodeCache[toNodeId];
   }
   else
   {
     toNode = new twaver.Node();
     var toCenter = toOldNode.getCenterLocation();
     toNode.setImage('unvisble');
       // toNode.setId(toNodeId);
       toNode.setSize(100, 100);
       toNode.setLayerId('link');
         toNode.setMovable(false);//不可以拖动
       toNode.setCenterLocation(toCenter.x, toCenter.y);
         //unvisbleNodeCache.push(toNode);
         unvisbleNodeCache[toNodeId] = toNode;
         box.add(toNode);
   }
     var link;
     if(fromNodeId == toNodeId)
     {
       link = new FlowLink(attackCache[i].elementId,fromNode, fromNode);
       link.s('link.width', 2.5);
     }
     else
     {
       link = new FlowLink(attackCache[i].elementId,fromNode, toNode);
       link.s('link.width', 1);
     }
     // fixed color
     var color = '#f2ba02';
     link.setLayerId('link');
     link.setClient('box',box);
     link.setClient('factor',i);
     link.setClient('tail',25);
     link.setClient('tailRadius',3);
     //设置线条为动态线还是静态线tailRadius

     link.setClient('linkType',attackCache[i].linkType);
     link.setClient('link.color',getColor(attackCache[i].threatSeverity));
     link.setClient('link.type','flowLink');
     link.s('link.color',getColor(attackCache[i].threatSeverity));
     if(attackCache[i].linkType != "static")
     {
       link.s('link.pattern',[4,2]);
     }
     link.s('arrow.to',true);
     link.s('arrow.from',false);
     link.s('arrow.from.shape','arrow.tail');
     link.s('arrow.from.shadow',true);

     link.s('arrow.from.shadow.blur',1);
     link.s('arrow.from.shadow.color',getColor(attackCache[i].threatSeverity));
     link.s('arrow.from.color',getColor(attackCache[i].threatSeverity));
     link.s('arrow.from.at.edge',true);
     link.s('arrow.from.xoffset',0.000001);
     link.s('arrow.to.shape',"arrow.slant");
     link.s('arrow.to.at.edge',false);
     link.s('arrow.to.color',getColor(attackCache[i].threatSeverity));
     //link.s("link.join","round");

     //攻击源为区域的时候需要做偏移
     if(fromOldNode.getClient("node_type")=="RegionNode")
     {
       link.s('link.from.yoffset',20);
       //link.s('link.from.xoffset',3);
       if(fromCenter.x>toCenter.x)
       {
         link.s("link.to.xoffset",10);
       }
       else
       {
         link.s("link.to.xoffset",-10);
       }
     }
     else
     {
       if(fromCenter.x>toCenter.x)
       {
         link.s("link.to.xoffset",16);
       }
       else
       {
         link.s("link.to.xoffset",-16);
       }
     }
     link.setAnimate(3000);
     if(attackCache[i].linkType == "static")
     {
       nodeCache[attackCache[i].elementId] = link;
     }
     box.add(link);
     flowLinks.add(link);
     link.playAnimate();
 }
}
}

function doOnResize()
{
var width = document.documentElement.scrollWidth;
var height = window.innerHeight;
//var height = 0.75*window.screen.height;
if(height>0.75*window.screen.height)
{
  height = 0.75*window.screen.height;
}
if(fullscreen)
{
 height = window.screen.height;
 width = window.screen.width;
}
var data = {width:width,height:height};
adjustConNetWork(data);
initContinentLocate(data)
viewBounds = {x:0,y:0,width:width, height:height};
network.adjustBounds(viewBounds);
toolBarButtonNetWork.adjustBounds({x:5,y:7,width:40, height:40});
threatLevelNetWork.adjustBounds({x:viewBounds.width-220,y:8,width:210, height:250});
topRiskAssetBoxNetWork.adjustBounds({x:viewBounds.width-220,y:310,width:210, height:230});
toolBarNetWork.adjustBounds({x:30,y:5,width:viewBounds.width-300, height:40});
var topoRiskWidth = viewBounds.width/6;
 if(topoRiskWidth>250)
 {
   topoRiskWidth = 250;
 }
 //var tableWidth
 topRiskCountryBoxNetWork.adjustBounds({x:viewBounds.width/3-topoRiskWidth,y:viewBounds.height-250,width:topoRiskWidth, height:250});
 topRiskRegionBoxNetWork.adjustBounds({x:(viewBounds.width/3-topoRiskWidth*2),y:viewBounds.height-250,width:topoRiskWidth, height:250});
 tableWidth = viewBounds.width*2/3;
 var alarmBoxBounds={x:viewBounds.width-tableWidth,y:viewBounds.height-250,width:tableWidth, height:250};
 alarmBoxNetWork.adjustBounds(alarmBoxBounds);
 tablePane1.adjustBounds({x:0,y:30,width:alarmBoxBounds.width-8,height:alarmBoxBounds.height - 30});
 var timewidth = 135;
   var columwidth =(alarmBoxBounds.width-8-timewidth*1)/9;
  table.getColumnBox().getDatas().forEach(function(e)
  {
   if(e.getPropertyName().indexOf("time")!=-1)
   {
     e.setWidth(timewidth);
   }
   else
   {
     e.setWidth(columwidth);
   }
  });
  resizeNodeLocate();
  //var zoomPer = 0.8*(data.width*data.height)/(1680*1050);
// tableDom1.style.width = alarmBoxBounds.width-8;
 //tableDom1.style.height = alarmBoxBounds.height - 30;
}

function adjustConNetWork(data) {
  var continentWidth = data.width*1/5;
  var continentHeight = data.height*1/4;
  //以1680*1050分辨率的屏幕为标准，各大洲的缩放比例以该值为标准
  var zoom = 0.5*(data.width*data.height)/(1680*1050);

  //北美
  northAmericaNetWork.setZoom(zoom);
  northAmericaNetWork.adjustBounds({x:0,y:2,width:continentWidth, height:continentHeight});
  northAmericaNetWork.centerByLogicalPoint(zoom*389,zoom*233);

  //南美
  southAmericaNetWork.setZoom(zoom);
  southAmericaNetWork.adjustBounds({x:0,y:continentHeight,width:continentWidth, height:continentHeight});
  southAmericaNetWork.centerByLogicalPoint(zoom*489,zoom*483);
  //非洲
  africaNetWork.setZoom(zoom);
  africaNetWork.adjustBounds({x:0,y:continentHeight*2,width:continentWidth, height:continentHeight});
  africaNetWork.centerByLogicalPoint(zoom*715,zoom*421);
  //亚洲
  asiaNetWork.setZoom(zoom);
  asiaNetWork.adjustBounds({x:data.width*0.65,y:0,width:continentWidth, height:continentHeight});
  asiaNetWork.centerByLogicalPoint(zoom*960,zoom*324);
  //欧洲
  europeNetWork.setZoom(zoom);
  europeNetWork.adjustBounds({x:data.width*0.65,y:continentHeight,width:continentWidth, height:continentHeight});
  europeNetWork.centerByLogicalPoint(zoom*962,zoom*213);
  //大洋洲
  var oceniaZoom = 0.6*(data.width*data.height)/(1680*1050);
  oceaniaNetWork.setZoom(oceniaZoom);
  oceaniaNetWork.adjustBounds({x:data.width*0.65,y:continentHeight*2,width:continentWidth, height:continentHeight});
  oceaniaNetWork.centerByLogicalPoint(oceniaZoom*1045,oceniaZoom*522);
  var chinaWidth = continentWidth*2;
  var chinaHeight = continentHeight*3;
  var chinaMarleft = continentWidth;
  if(fullscreen)
  {
   chinaWidth = continentWidth*2.5;
   chinaMarleft = continentWidth*0.75;
  }
  $("#main").css({"height":continentHeight*3,"width":chinaWidth,"margin-left": chinaMarleft,"margin-top": 20});
  myChart.resize();
}

function initContinent()
{
continentName = ['<s:text name="cis.web.config.home.map.northamerica"/>',
                    '<s:text name="cis.web.config.home.map.southamerica"/>',
                    '<s:text name="cis.web.config.home.map.africa"/>',
                    '<s:text name="cis.web.config.home.map.asia"/>',
                    '<s:text name="cis.web.config.home.map.europe"/>',
                    '<s:text name="cis.web.config.home.map.ceania"/>'];
continentEngName = ["North America","Africa","South America","Asia","Europe","Oceania"];
var width = document.documentElement.scrollWidth;
var height = window.innerHeight;
//var height = 0.75*window.screen.height;
if(height>0.75*window.screen.height)
{
  height = 0.75*window.screen.height;
}
var data = {width:width,height:height};
var northX = data.width*170/1680;
var northY = data.height*130/1050;
var continentWidth = data.width*1/5;
var continentHeight = data.height*1/4;
var asiaX= data.width*0.65+northX;
continentLocate = [[northX,northY],[northX,northY+continentHeight],[northX,northY+continentHeight*2],
                  [asiaX,northY],[asiaX,northY+continentHeight],[asiaX,northY+continentHeight*2]];
for(var i=0;i<continentName.length;i++)
{
 //box.remove(continentNodeCache[continentName[i]]);
 var continentNode = new twaver.Node();
 continentNode.setImage('threatsrc2');//circle
 continentNode.setToolTip(continentName[i]);
 continentNode.setSize(20, 20);
 continentNode.setLayerId('link');
 continentNode.setCenterLocation(continentLocate[i][0], continentLocate[i][1]);
 continentNodeCache[continentEngName[i]] = continentNode;
 box.add(continentNode);
}
}

function initContinentLocate(data)
{
var northX = data.width*170/1680;
var northY = data.height*130/1050;
var continentWidth = data.width*1/5;
var continentHeight = data.height*1/4;
var asiaX= data.width*0.65+northX;
continentLocate = [[northX,northY],[northX,northY+continentHeight],[northX,northY+continentHeight*2],
                  [asiaX,northY],[asiaX,northY+continentHeight],[asiaX,northY+continentHeight*2]];
for(var i=0;i<continentLocate.length;i++)
{
 var continentNode = continentNodeCache[continentEngName[i]];
 continentNode.setCenterLocation(continentLocate[i][0], continentLocate[i][1]);
}
}
function resizeNodeLocate()
{
//分辨率改变时，重新定位区域位置
for(var ke in regionNodeCache)
{
 var node = regionNodeCache[ke];
 var lonlat = node.getClient("lonlat");;
 var geoCo = myChart.chart.map.getPosByGeo("china",lonlat)
 var marg = $("#main").css("margin-left");
 node.setCenterLocation(geoCo[0]+parseInt(marg),geoCo[1]);
}
for(var ke in unvisbleNodeCache)
{
 var node = unvisbleNodeCache[ke];
 var regionNode = nodeCache[ke];
 var centerLocate = regionNode.getCenterLocation();
 node.setCenterLocation(centerLocate.x, centerLocate.y);
}
}
function playan()
{
var tail = 15;
var min = 0;

window.requestAnimFrame = (function(){
 return  window.requestAnimationFrame       ||
 window.webkitRequestAnimationFrame ||
 window.mozRequestAnimationFrame    ||
 window.oRequestAnimationFrame      ||
 window.msRequestAnimationFrame     ||
 function(callback, element){
   window.setTimeout(callback, 1000/60);
 };
 })();

 var fps = 1;
 var now;
 var then = Date.now();
 var interval = 1200/fps;
 var delta;

 function animate() {
 handle = requestAnimFrame(animate);
 now = Date.now();
 delta = now - then;
 if (delta > interval) {
   then = now - (delta % interval);
   draw();
 }
 }
 function draw() {
 flowLinks.forEach(function(link){
   link.playAnimate();
 });
 }
draw();
}
