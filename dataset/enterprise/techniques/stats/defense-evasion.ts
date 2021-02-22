export const DEFENSE_EVASION = [
  {
    "item": "T1006",
    "meta": "Direct Volume Access",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 1,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "windows",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "api-monitoring"
  },
  {
    "item": "T1014",
    "meta": "Rootkit",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 3,
    "count_adversaries": 4,
    "count_malware": 14,
    "count_tools": 1,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "apt28|apt41|rocke|winnti-group",
    "the_malware": "carberp|drovorub|hidedrv|hacking-team-uefi-rootkit|hiddenwasp|hikit|lojax|poisonivy|ramsay|skidmap|umbreon|uroburos|winnti-for-linux|zeroaccess",
    "the_tools": "htran",
    "the_datasources": "bios|mbr|system-calls"
  },
  {
    "item": "T1027",
    "meta": "Obfuscated Files or Information",
    "count_techniques": 0,
    "count_subtechniques": 5,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 12,
    "count_adversaries": 50,
    "count_malware": 146,
    "count_tools": 8,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "2%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1027.001|T1027.002|T1027.003|T1027.004|T1027.005",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "apt-c-36|apt18|apt19|apt28|apt29|apt3|apt32|apt33|apt37|apt41|blackoasis|blue-mockingbird|chimera|cobalt-group|dark-caracal|darkhotel|dust-storm|elderwood|fin6|fin7|fin8|frankenstein|gallmaker|gamaredon-group|group5|honeybee|inception|lazarus-group|leafminer|leviathan|machete|magic-hound|mofang|molerats|muddywater|night-dragon|oilrig|patchwork|putter-panda|rocke|sandworm-team|silence|soft-cell|ta505|threat-group-3390|tropic-trooper|turla|whitefly|wizard-spider|menupass",
    "the_malware": "advstoreshell|agent-tesla|anchor|aria-body|astaroth|attor|auditcred|avenger|boostwrite|backconfig|bisonal|bundlore|carrotbat|coreshell|carbanak|carberp|carbon|cardinal-rat|cointicker|comrat|comnie|cookieminer|cozycar|dogcall|dacls|daserf|denis|drovorub|dustysky|ebury|elise|emissary|emotet|epic|exaramel-for-linux|felixroot|fatduke|finfisher|final1stspy|flawedgrace|fruitfly|fysbis|gazer|goldenspy|goopy|gravityrat|greyenergy|h1n1|hawkball|homefry|httpbrowser|hancitor|helminth|hi-zor|hiddenwasp|hotcroissant|hydraq|isminjector|icedid|innaputrat|invisimole|jhuhugit|jpin|kazuar|kessel|keyboy|kwampirs|lightneuron|lokibot|loudminer|machete|matroyshka|maze|metamorfo|micropsia|miniduke|mosquito|nokki|nanhaishu|nanocore|netwalker|oldbait|osx_oceanlotus.d|oopsie|orz|poshspy|powerstats|punchbuggy|punchtrack|pillowmint|pipemon|pisloader|poetrat|poisonivy|polyglotduke|pony|powerstallion|prikormka|quadagent|revil|rtm|ramsay|reaver|redleaves|regduke|remexi|remsec|rifdoor|rising-sun|roguerobin|sdbot|sharpstats|shotput|sqlrat|sakula|samsam|seasalt|shamoon|shimrat|skidmap|smoke-loader|sorefang|speakup|stonedrill|streamex|strongpity|synack|tinytyphon|typeframe|tajmahal|trickbot|trojan.karagany|uboatrat|usbstealer|ursnif|vermin|valak|volgmer|windtail|winnti-for-linux|xtunnel|yahoyah|zerot|zeus-panda|jrat|njrat",
    "the_tools": "carrotball|empire|imminent-monitor|invoke-psimage|mcmd|powersploit|remcos|shimratreporter",
    "the_datasources": "binary-file-metadata|email-gateway|environment-variable|file-monitoring|malware-reverse-engineering|network-intrusion-detection-system|network-protocol-analysis|process-command-line-parameters|process-monitoring|process-use-of-network|ssl-tls-inspection|windows-event-logs"
  },
  {
    "item": "T1036",
    "meta": "Masquerading",
    "count_techniques": 0,
    "count_subtechniques": 6,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 5,
    "count_malware": 5,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "2%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1036.001|T1036.002|T1036.003|T1036.004|T1036.005|T1036.006",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "apt32|bronze-butler|dragonfly-2.0|windshift|menupass",
    "the_malware": "dacls|rtm|ramsay|trickbot|windtail",
    "the_tools": "non",
    "the_datasources": "binary-file-metadata|file-monitoring|process-command-line-parameters|process-monitoring"
  },
  {
    "item": "T1055",
    "meta": "Process Injection",
    "count_techniques": 0,
    "count_subtechniques": 11,
    "count_platforms": 3,
    "count_tactics": 2,
    "count_datasources": 5,
    "count_adversaries": 10,
    "count_malware": 25,
    "count_tools": 4,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "3%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion|privilege-escalation",
    "the_subtechniques": "T1055.001|T1055.002|T1055.003|T1055.004|T1055.005|T1055.008|T1055.009|T1055.011|T1055.012|T1055.013|T1055.014",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "apt32|apt37|apt41|cobalt-group|honeybee|kimsuky|platinum|sharpshooter|silence|turla",
    "the_malware": "abk|attor|auditcred|avenger|bbk|backdoor.oldrea|cardinal-rat|dyre|gazer|hoplight|hyperbro|invisimole|jhuhugit|jpin|navrat|revil|ryuk|smoke-loader|stonedrill|tscookie|taidoor|wiarp|wingbird|gh0st-rat|cobalt-strike",
    "the_tools": "empire|htran|poshc2|remcos",
    "the_datasources": "api-monitoring|dll-monitoring|file-monitoring|named-pipes|process-monitoring"
  },
  {
    "item": "T1070",
    "meta": "Indicator Removal on Host",
    "count_techniques": 0,
    "count_subtechniques": 6,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 5,
    "count_adversaries": 0,
    "count_malware": 13,
    "count_tools": 1,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "2%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1070.001|T1070.002|T1070.003|T1070.004|T1070.005|T1070.006",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "non",
    "the_malware": "bankshot|goopy|maze|metamorfo|misdat|orz|pillowmint|poetrat|prikormka|rtm|rising-sun|sdbot|njrat",
    "the_tools": "mcmd",
    "the_datasources": "api-monitoring|file-monitoring|process-command-line-parameters|process-monitoring|windows-event-logs"
  },
  {
    "item": "T1078",
    "meta": "Valid Accounts",
    "count_techniques": 0,
    "count_subtechniques": 4,
    "count_platforms": 9,
    "count_tactics": 4,
    "count_datasources": 4,
    "count_adversaries": 25,
    "count_malware": 3,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion|persistence|privilege-escalation|initial-access",
    "the_subtechniques": "T1078.001|T1078.002|T1078.003|T1078.004",
    "the_platforms": "linux|macos|windows|aws|gcp|azure|saas|office-365|azure-ad",
    "the_adversaries": "apt18|apt28|apt33|apt39|apt41|carbanak|chimera|dragonfly-2.0|fin10|fin4|fin5|fin6|fin8|leviathan|night-dragon|oilrig|pittytiger|sandworm-team|silence|soft-cell|suckfly|temp.veles|threat-group-3390|wizard-spider|menupass",
    "the_malware": "duqu|linux-rabbit|seaduke",
    "the_tools": "non",
    "the_datasources": "authentication-logs|aws-cloudtrail-logs|process-monitoring|stackdriver-logs"
  },
  {
    "item": "T1112",
    "meta": "Modify Registry",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 5,
    "count_adversaries": 16,
    "count_malware": 55,
    "count_tools": 4,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "windows",
    "the_adversaries": "apt19|apt32|apt38|apt41|blue-mockingbird|dragonfly-2.0|fin8|gamaredon-group|gorgon-group|honeybee|lazarus-group|patchwork|silence|threat-group-3390|turla|wizard-spider",
    "the_malware": "advstoreshell|attor|backspace|badcall|bankshot|chopstick|cardinal-rat|catchamas|comrat|darkcomet|exaramel-for-windows|felixroot|greyenergy|hoplight|hydraq|invisimole|keymarble|konni|lojax|metamorfo|mosquito|naid|nanocore|nerex|netwalker|phoreal|plaintee|pillowmint|pipemon|plugx|poetrat|poisonivy|polyglotduke|powershower|quadagent|revil|rtm|regduke|regin|rover|soundbite|shamoon|shimrat|streamex|synack|typeframe|tajmahal|trickbot|ursnif|valak|volgmer|zeus-panda|gh0st-rat|njrat|zwshell",
    "the_tools": "crackmapexec|quasarrat|reg|remcos",
    "the_datasources": "file-monitoring|process-command-line-parameters|process-monitoring|windows-event-logs|windows-registry"
  },
  {
    "item": "T1127",
    "meta": "Trusted Developer Utilities Proxy Execution",
    "count_techniques": 0,
    "count_subtechniques": 1,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 2,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1127.001",
    "the_platforms": "windows",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "file-monitoring|process-monitoring"
  },
  {
    "item": "T1134",
    "meta": "Access Token Manipulation",
    "count_techniques": 0,
    "count_subtechniques": 5,
    "count_platforms": 1,
    "count_tactics": 2,
    "count_datasources": 6,
    "count_adversaries": 2,
    "count_malware": 4,
    "count_tools": 3,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "2%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion|privilege-escalation",
    "the_subtechniques": "T1134.001|T1134.002|T1134.003|T1134.004|T1134.005",
    "the_platforms": "windows",
    "the_adversaries": "blue-mockingbird|fin6",
    "the_malware": "duqu|hydraq|ryuk|sslmm",
    "the_tools": "empire|poshc2|powersploit",
    "the_datasources": "access-tokens|api-monitoring|authentication-logs|process-command-line-parameters|process-monitoring|windows-event-logs"
  },
  {
    "item": "T1140",
    "meta": "Deobfuscate/Decode Files or Information",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 3,
    "count_adversaries": 19,
    "count_malware": 86,
    "count_tools": 3,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "windows|linux|macos",
    "the_adversaries": "apt19|apt28|bronze-butler|darkhotel|frankenstein|gamaredon-group|gorgon-group|honeybee|leviathan|molerats|muddywater|oilrig|rocke|sandworm-team|threat-group-3390|tropic-trooper|turla|wirte|menupass",
    "the_malware": "abk|agent-tesla|aria-body|astaroth|auditcred|avenger|azorult|bbk|bbsrat|boostwrite|backconfig|bankshot|bisonal|bundlore|carbon|cardinal-rat|cointicker|comrat|cookieminer|ddkong|denis|drovorub|dyre|fatduke|finfisher|final1stspy|goopy|hancitor|hiddenwasp|isminjector|invisimole|konni|kessel|kwampirs|lightneuron|messagetap|machete|metamorfo|miragefox|more_eggs|nokki|netwalker|osxshlayer|okrum|onionduke|oopsie|powerstats|punchbuggy|pillowmint|pipemon|plugx|polyglotduke|proton|quadagent|rdat|revil|rgdoor|ramsay|regduke|remexi|rising-sun|roguerobin|sdbot|sqlrat|shamoon|shimrat|skidmap|smoke-loader|sorefang|starloader|tscookie|typeframe|trickbot|ursnif|vermin|valak|volgmer|wellmail|wellmess|windtail|winnti-for-linux|yahoyah|zebrocy|zerot|zeus-panda|gh0st-rat",
    "the_tools": "expand|imminent-monitor|certutil",
    "the_datasources": "file-monitoring|process-command-line-parameters|process-monitoring"
  },
  {
    "item": "T1197",
    "meta": "BITS Jobs",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 1,
    "count_tactics": 2,
    "count_datasources": 4,
    "count_adversaries": 3,
    "count_malware": 3,
    "count_tools": 1,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion|persistence",
    "the_subtechniques": "non",
    "the_platforms": "windows",
    "the_adversaries": "apt41|leviathan|patchwork",
    "the_malware": "jpin|uboatrat|cobalt-strike",
    "the_tools": "bitsadmin",
    "the_datasources": "packet-capture|process-command-line-parameters|process-monitoring|windows-event-logs"
  },
  {
    "item": "T1202",
    "meta": "Indirect Command Execution",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 0,
    "count_malware": 1,
    "count_tools": 1,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "windows",
    "the_adversaries": "non",
    "the_malware": "revenge-rat",
    "the_tools": "forfiles",
    "the_datasources": "file-monitoring|process-command-line-parameters|process-monitoring|windows-event-logs"
  },
  {
    "item": "T1205",
    "meta": "Traffic Signaling",
    "count_techniques": 0,
    "count_subtechniques": 1,
    "count_platforms": 4,
    "count_tactics": 3,
    "count_datasources": 2,
    "count_adversaries": 0,
    "count_malware": 4,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion|persistence|command-and-control",
    "the_subtechniques": "T1205.001",
    "the_platforms": "linux|macos|windows|network",
    "the_adversaries": "non",
    "the_malware": "chaos|synful-knock|umbreon|winnti-for-linux",
    "the_tools": "non",
    "the_datasources": "netflow-enclave-netflow|packet-capture"
  },
  {
    "item": "T1207",
    "meta": "Rogue Domain Controller",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 1,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "windows",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "mimikatz",
    "the_datasources": "api-monitoring|authentication-logs|network-protocol-analysis|packet-capture"
  },
  {
    "item": "T1211",
    "meta": "Exploitation for Defense Evasion",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 3,
    "count_adversaries": 1,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "linux|windows|macos",
    "the_adversaries": "apt28",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "file-monitoring|process-monitoring|windows-error-reporting"
  },
  {
    "item": "T1216",
    "meta": "Signed Script Proxy Execution",
    "count_techniques": 0,
    "count_subtechniques": 1,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 2,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1216.001",
    "the_platforms": "windows",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "process-command-line-parameters|process-monitoring"
  },
  {
    "item": "T1218",
    "meta": "Signed Binary Proxy Execution",
    "count_techniques": 0,
    "count_subtechniques": 11,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 9,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "3%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1218.001|T1218.002|T1218.003|T1218.004|T1218.005|T1218.007|T1218.008|T1218.009|T1218.010|T1218.011|T1218.012",
    "the_platforms": "windows",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "api-monitoring|binary-file-metadata|dll-monitoring|file-monitoring|loaded-dlls|process-command-line-parameters|process-monitoring|process-use-of-network|windows-registry"
  },
  {
    "item": "T1220",
    "meta": "XSL Script Processing",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 1,
    "count_malware": 1,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "windows",
    "the_adversaries": "cobalt-group",
    "the_malware": "astaroth",
    "the_tools": "non",
    "the_datasources": "dll-monitoring|process-command-line-parameters|process-monitoring|process-use-of-network"
  },
  {
    "item": "T1221",
    "meta": "Template Injection",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 7,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "windows",
    "the_adversaries": "apt28|darkhydrus|dragonfly-2.0|frankenstein|gamaredon-group|inception|tropic-trooper",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "anti-virus|email-gateway|network-intrusion-detection-system|web-logs"
  },
  {
    "item": "T1222",
    "meta": "File and Directory Permissions Modification",
    "count_techniques": 0,
    "count_subtechniques": 2,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1222.001|T1222.002",
    "the_platforms": "linux|windows|macos",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "file-monitoring|process-command-line-parameters|process-monitoring|windows-event-logs"
  },
  {
    "item": "T1480",
    "meta": "Execution Guardrails",
    "count_techniques": 0,
    "count_subtechniques": 1,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 1,
    "count_adversaries": 0,
    "count_malware": 1,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1480.001",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "non",
    "the_malware": "anchor",
    "the_tools": "non",
    "the_datasources": "process-monitoring"
  },
  {
    "item": "T1484",
    "meta": "Group Policy Modification",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 1,
    "count_tactics": 2,
    "count_datasources": 1,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 1,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion|privilege-escalation",
    "the_subtechniques": "non",
    "the_platforms": "windows",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "empire",
    "the_datasources": "windows-event-logs"
  },
  {
    "item": "T1497",
    "meta": "Virtualization/Sandbox Evasion",
    "count_techniques": 0,
    "count_subtechniques": 3,
    "count_platforms": 3,
    "count_tactics": 2,
    "count_datasources": 2,
    "count_adversaries": 0,
    "count_malware": 8,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion|discovery",
    "the_subtechniques": "T1497.001|T1497.002|T1497.003",
    "the_platforms": "windows|macos|linux",
    "the_adversaries": "non",
    "the_malware": "agent-tesla|chopstick|carberp|cozycar|hancitor|metamorfo|rtm|stonedrill",
    "the_tools": "non",
    "the_datasources": "process-command-line-parameters|process-monitoring"
  },
  {
    "item": "T1535",
    "meta": "Unused/Unsupported Cloud Regions",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 3,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "0%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "non",
    "the_platforms": "aws|gcp|azure",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "aws-cloudtrail-logs|azure-activity-logs|stackdriver-logs"
  },
  {
    "item": "T1542",
    "meta": "Pre-OS Boot",
    "count_techniques": 0,
    "count_subtechniques": 5,
    "count_platforms": 3,
    "count_tactics": 2,
    "count_datasources": 8,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "2%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion|persistence",
    "the_subtechniques": "T1542.001|T1542.002|T1542.003|T1542.004|T1542.005",
    "the_platforms": "linux|windows|network",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "api-monitoring|bios|component-firmware|disk-forensics|efi|mbr|process-monitoring|vbr"
  },
  {
    "item": "T1548",
    "meta": "Abuse Elevation Control Mechanism",
    "count_techniques": 0,
    "count_subtechniques": 4,
    "count_platforms": 3,
    "count_tactics": 2,
    "count_datasources": 5,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "privilege-escalation|defense-evasion",
    "the_subtechniques": "T1548.001|T1548.002|T1548.003|T1548.004",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "api-monitoring|file-monitoring|process-command-line-parameters|process-monitoring|windows-registry"
  },
  {
    "item": "T1550",
    "meta": "Use Alternate Authentication Material",
    "count_techniques": 0,
    "count_subtechniques": 4,
    "count_platforms": 3,
    "count_tactics": 2,
    "count_datasources": 3,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion|lateral-movement",
    "the_subtechniques": "T1550.001|T1550.002|T1550.003|T1550.004",
    "the_platforms": "windows|office-365|saas",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "authentication-logs|oauth-audit-logs|office-365-audit-logs"
  },
  {
    "item": "T1553",
    "meta": "Subvert Trust Controls",
    "count_techniques": 0,
    "count_subtechniques": 4,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 10,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1553.001|T1553.002|T1553.003|T1553.004",
    "the_platforms": "windows|macos|linux",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "api-monitoring|application-logs|binary-file-metadata|dll-monitoring|file-monitoring|loaded-dlls|process-command-line-parameters|process-monitoring|windows-event-logs|windows-registry"
  },
  {
    "item": "T1556",
    "meta": "Modify Authentication Process",
    "count_techniques": 0,
    "count_subtechniques": 4,
    "count_platforms": 4,
    "count_tactics": 2,
    "count_datasources": 6,
    "count_adversaries": 0,
    "count_malware": 2,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "credential-access|defense-evasion",
    "the_subtechniques": "T1556.001|T1556.002|T1556.003|T1556.004",
    "the_platforms": "windows|linux|macos|network",
    "the_adversaries": "non",
    "the_malware": "ebury|kessel",
    "the_tools": "non",
    "the_datasources": "api-monitoring|authentication-logs|dll-monitoring|file-monitoring|process-monitoring|windows-registry"
  },
  {
    "item": "T1562",
    "meta": "Impair Defenses",
    "count_techniques": 0,
    "count_subtechniques": 7,
    "count_platforms": 6,
    "count_tactics": 1,
    "count_datasources": 12,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "2%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1562.001|T1562.002|T1562.003|T1562.004|T1562.006|T1562.007|T1562.008",
    "the_platforms": "linux|windows|macos|aws|gcp|azure",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "anti-virus|api-monitoring|authentication-logs|aws-cloudtrail-logs|azure-activity-logs|environment-variable|file-monitoring|gcp-audit-logs|process-command-line-parameters|process-monitoring|services|windows-registry"
  },
  {
    "item": "T1564",
    "meta": "Hide Artifacts",
    "count_techniques": 0,
    "count_subtechniques": 7,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 6,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "2%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1564.001|T1564.002|T1564.003|T1564.004|T1564.005|T1564.006|T1564.007",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "api-monitoring|authentication-logs|file-monitoring|powershell-logs|process-command-line-parameters|process-monitoring"
  },
  {
    "item": "T1574",
    "meta": "Hijack Execution Flow",
    "count_techniques": 0,
    "count_subtechniques": 11,
    "count_platforms": 3,
    "count_tactics": 3,
    "count_datasources": 6,
    "count_adversaries": 0,
    "count_malware": 3,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "3%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "persistence|privilege-escalation|defense-evasion",
    "the_subtechniques": "T1574.001|T1574.002|T1574.004|T1574.005|T1574.006|T1574.007|T1574.008|T1574.009|T1574.010|T1574.011|T1574.012",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "non",
    "the_malware": "denis|ramsay|shimrat",
    "the_tools": "non",
    "the_datasources": "dll-monitoring|environment-variable|file-monitoring|loaded-dlls|process-command-line-parameters|process-monitoring"
  },
  {
    "item": "T1578",
    "meta": "Modify Cloud Compute Infrastructure",
    "count_techniques": 0,
    "count_subtechniques": 4,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1578.001|T1578.002|T1578.003|T1578.004",
    "the_platforms": "aws|gcp|azure",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "aws-cloudtrail-logs|azure-activity-logs|gcp-audit-logs|stackdriver-logs"
  },
  {
    "item": "T1599",
    "meta": "Network Boundary Bridging",
    "count_techniques": 0,
    "count_subtechniques": 1,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 2,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1599.001",
    "the_platforms": "network",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "netflow-enclave-netflow|packet-capture"
  },
  {
    "item": "T1600",
    "meta": "Weaken Encryption",
    "count_techniques": 0,
    "count_subtechniques": 2,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 1,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1600.001|T1600.002",
    "the_platforms": "network",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "file-monitoring"
  },
  {
    "item": "T1601",
    "meta": "Modify System Image",
    "count_techniques": 0,
    "count_subtechniques": 2,
    "count_platforms": 1,
    "count_tactics": 1,
    "count_datasources": 3,
    "count_adversaries": 0,
    "count_malware": 0,
    "count_tools": 0,
    "percent_malware": "%",
    "percent_tools": "%",
    "percent_tactics": "%",
    "percent_techniques": "0%",
    "percent_subtechniques": "1%",
    "from_total_tactics": 0,
    "from_total_techniques": 205,
    "from_total_subtechniques": 474,
    "from_total_malware": 0,
    "from_total_tools": 0,
    "is_legacy_matrix": false,
    "the_tactics": "defense-evasion",
    "the_subtechniques": "T1601.001|T1601.002",
    "the_platforms": "network",
    "the_adversaries": "non",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "file-monitoring|network-device-configuration|network-device-run-time-memory"
  }
]
