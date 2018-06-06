Vue.component('bread-crumb', {
  template: '<nav class="breadcrumb" aria-label="breadcrumbs" style="margin-bottom: 0;"><ul><li><a href="../">Central SOC</a></li><li><a href="../">China</a></li><li><a href="../">Beijing</a></li><li class="is-active"><a href="#" aria-current="page">Threat List</a></li></ul></nav>'
})


var app = new Vue({
  el: '#app',
  data: {
    threats: []
  },
  created () {
    // stored on myjson - A simple JSON store for your web or mobile app
    // full list https://api.myjson.com/bins/1eoswi, short list below
    // this.threats = [{"preview":false,"result":{"source_id":"fireeye:stix-b7b16e67-4292-46a3-ba64-60c1a491723d","source_path":"/opt/splunk/etc/apps/DA-ESS-ThreatIntelligence/default/data/threat_intel/fireeye-pivy-report-with-indicators.xml","source_type":"stix","threat_group":["F","admin338","japanorus","nitro","th3bug","wl","menupass"],"threat_category":["APT","APT","APT"],"count":"503"}},{"preview":false,"result":{"source_id":"emerging_threats_compromised_ip_blocklist","source_path":"/opt/splunk/etc/apps/SA-ThreatIntelligence/local/data/threat_intel/emerging_threats_compromised_ip_blocklist.csv","source_type":"csv","threat_group":"emerging_threats_compromised_ip_blocklist","threat_category":"threatlist","count":"1313"}},{"preview":false,"result":{"source_id":"emerging_threats_ip_blocklist","source_path":"/opt/splunk/etc/apps/SA-ThreatIntelligence/local/data/threat_intel/emerging_threats_ip_blocklist.csv","source_type":"csv","threat_group":"emerging_threats_ip_blocklist","threat_category":"threatlist","count":"2266"}},{"preview":false,"result":{"source_id":"iblocklist_logmein","source_path":"/opt/splunk/etc/apps/SA-ThreatIntelligence/local/data/threat_intel/iblocklist_logmein.csv","source_type":"csv","threat_group":"iblocklist_logmein","threat_category":"threatlist","count":"13"}},{"preview":false,"result":{"source_id":"mandiant:package-190593d6-1861-4cfe-b212-c016fce1e240","source_path":"/opt/splunk/etc/apps/DA-ESS-ThreatIntelligence/default/data/threat_intel/Appendix_G_IOCs_No_OpenIOC.xml","source_type":"stix","threat_group":"undefined","threat_category":"undefined","count":"1380"}},{"preview":false,"lastrow":true,"result":{"source_id":"mandiant:package-190593d6-1861-4cfe-b212-c016fce1e249","source_path":"/opt/splunk/etc/apps/DA-ESS-ThreatIntelligence/default/data/threat_intel/Appendix_F_SSLCertificates.xml","source_type":"stix","threat_group":"undefined","threat_category":"undefined","count":"13"}}];

    // example fetch method for REST API
    // fetch('https://api.myjson.com/bins/1041xi')
    //   .then(response => response.json())
    //   .then(json => {
    //     //console.log(JSON.stringify(json))
    //     this.threats = json;
    //   })
  }
})

var threats = [{ "Category": "南湖云主机", "VDC": "南湖卫生监督所", "Name": "jx-南湖卫生监督所-外交换和大数据交换前置机", "Create_Time": "2017-10-16 15:30:46", "ID": "i-00000536", "Status": "运行中", "Type": "普通虚拟机", "CPU": 1, "Memory": 2, "Disk": 100, "IP": "192.168.31.120,fe80::7959:e63e:b545:7e67;192.168.81.62,fe80::716f:7b2a:6167:4e0c", "Cluster": "JX_Cluster6" },{ "Category": "嘉兴资源池", "VDC": "总工会", "Name": "jx-总工会-数据库服务器2", "Create_Time": "2017-09-15 23:46:10", "ID": "i-000004EF", "Status": "运行中", "Type": "普通虚拟机", "CPU": 8, "Memory": 16, "Disk": 1500, "IP": "192.168.30.96,fe80::f9c7:1412:ff28:ebe9", "Cluster": "JX_Cluster6" },{ "Category": "嘉兴资源池", "VDC": "总工会", "Name": "jx-总工会-前置数据库", "Create_Time": "2017-09-15 23:46:03", "ID": "i-000004EE", "Status": "运行中", "Type": "普通虚拟机", "CPU": 4, "Memory": 8, "Disk": 500, "IP": "192.168.30.98,fe80::1452:6653:9f34:29c3", "Cluster": "JX_Cluster6" },{ "Category": "嘉兴资源池", "VDC": "总工会", "Name": "jx-总工会-数据库服务器1", "Create_Time": "2017-09-15 23:45:59", "ID": "i-000004EC", "Status": "运行中", "Type": "普通虚拟机", "CPU": 8, "Memory": 16, "Disk": 1500, "IP": "192.168.30.95,fe80::3c2e:ef11:9ef2:8d39", "Cluster": "JX_Cluster6" },{ "Category": "嘉兴资源池", "VDC": "总工会", "Name": "jx-总工会-应用服务器1", "Create_Time": "2017-09-15 23:46:07", "ID": "i-000004EB", "Status": "运行中", "Type": "普通虚拟机", "CPU": 4, "Memory": 16, "Disk": 200, "IP": "192.168.30.97,fe80::f190:8f37:abfc:481b", "Cluster": "JX_Cluster6" },{ "Category": "嘉兴资源池", "VDC": "住房保障局", "Name": "jx-住房保障局-统一配号数据库", "Create_Time": "2017-08-23 14:05:50", "ID": "i-0000047B", "Status": "运行中", "Type": "普通虚拟机", "CPU": 8, "Memory": 24, "Disk": 300, "IP": "192.168.162.4,fe80::2a6e:d4ff:fe88:cb51", "Cluster": "JX_Cluster8" },{ "Category": "嘉兴资源池", "VDC": "住房保障局", "Name": "jx-住房保障局-监管分析数据库", "Create_Time": "2017-08-23 14:04:36", "ID": "i-0000047A", "Status": "运行中", "Type": "普通虚拟机", "CPU": 8, "Memory": 24, "Disk": 500, "IP": "192.168.162.3,fe80::2a6e:d4ff:fe88:cb50", "Cluster": "JX_Cluster8" },{ "Category": "嘉兴资源池", "VDC": "住房保障局", "Name": "jx-住房保障局-住房保障数据库2", "Create_Time": "2017-08-23 14:02:12", "ID": "i-00000479", "Status": "运行中", "Type": "普通虚拟机", "CPU": 8, "Memory": 32, "Disk": 800, "IP": "192.168.162.2,fe80::2a6e:d4ff:fe88:cb4f", "Cluster": "JX_Cluster8" },{ "Category": "嘉兴资源池", "VDC": "住房保障局", "Name": "jx-住房保障局-住房保障数据库1", "Create_Time": "2017-08-23 14:02:12", "ID": "i-00000478", "Status": "运行中", "Type": "普通虚拟机", "CPU": 8, "Memory": 32, "Disk": 800, "IP": "192.168.162.1,fe80::2a6e:d4ff:fe88:cb4e", "Cluster": "JX_Cluster8" }];

$("#jsGrid").jsGrid({
    width: "100%",
    height: "80%",
    inserting: true,
    editing: true,
    sorting: true,
    // paging: true,
    data: threats,
    fields: [
        { name: "Category", type: "text", width: 70},
        { name: "VDC", type: "text", width: 100 },
        { name: "Name", type: "text", width: 200 },
        { name: "Create_Time", type: "number", width: 100 },
        { name: "ID", type: "text", width: 100 },
        { name: "Status", type: "text", width: 50 },
        { name: "Cluster", type: "text", width: 100 },
        { type: "control" }
    ],
    onItemEditing: function(args) {
      console.log(args.item)
    },
    onItemInserted: function(args) {
      console.log(args.item)
    },
    onItemDeleted: function(args) {
      console.log(args.item)
    }
});
