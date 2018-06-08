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
    this.threats = [{"preview":false,"result":{"source_id":"fireeye:stix-b7b16e67-4292-46a3-ba64-60c1a491723d","source_path":"/opt/splunk/etc/apps/DA-ESS-ThreatIntelligence/default/data/threat_intel/fireeye-pivy-report-with-indicators.xml","source_type":"stix","threat_group":["F","admin338","japanorus","nitro","th3bug","wl","menupass"],"threat_category":["APT","APT","APT"],"count":"503"}},{"preview":false,"result":{"source_id":"emerging_threats_compromised_ip_blocklist","source_path":"/opt/splunk/etc/apps/SA-ThreatIntelligence/local/data/threat_intel/emerging_threats_compromised_ip_blocklist.csv","source_type":"csv","threat_group":"emerging_threats_compromised_ip_blocklist","threat_category":"threatlist","count":"1313"}},{"preview":false,"result":{"source_id":"emerging_threats_ip_blocklist","source_path":"/opt/splunk/etc/apps/SA-ThreatIntelligence/local/data/threat_intel/emerging_threats_ip_blocklist.csv","source_type":"csv","threat_group":"emerging_threats_ip_blocklist","threat_category":"threatlist","count":"2266"}},{"preview":false,"result":{"source_id":"iblocklist_logmein","source_path":"/opt/splunk/etc/apps/SA-ThreatIntelligence/local/data/threat_intel/iblocklist_logmein.csv","source_type":"csv","threat_group":"iblocklist_logmein","threat_category":"threatlist","count":"13"}},{"preview":false,"result":{"source_id":"mandiant:package-190593d6-1861-4cfe-b212-c016fce1e240","source_path":"/opt/splunk/etc/apps/DA-ESS-ThreatIntelligence/default/data/threat_intel/Appendix_G_IOCs_No_OpenIOC.xml","source_type":"stix","threat_group":"undefined","threat_category":"undefined","count":"1380"}},{"preview":false,"lastrow":true,"result":{"source_id":"mandiant:package-190593d6-1861-4cfe-b212-c016fce1e249","source_path":"/opt/splunk/etc/apps/DA-ESS-ThreatIntelligence/default/data/threat_intel/Appendix_F_SSLCertificates.xml","source_type":"stix","threat_group":"undefined","threat_category":"undefined","count":"13"}}];

    // example fetch method for REST API
    // fetch('https://api.myjson.com/bins/1041xi')
    //   .then(response => response.json())
    //   .then(json => {
    //     //console.log(JSON.stringify(json))
    //     this.threats = json;
    //   })
  }
})
