export const COMMAND_AND_CONTROL = [
  {
    "item": "T1001",
    "meta": "Data Obfuscation",
    "count_techniques": 0,
    "count_subtechniques": 3,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 1,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "T1001.001|T1001.002|T1001.003",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "axiom",
    "the_malware": "flawedammyy|rdat",
    "the_tools": "non",
    "the_datasources": "network-protocol-analysis|packet-capture|process-monitoring|process-use-of-network"
  },
  {
    "item": "T1008",
    "meta": "Fallback Channels",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 5,
    "count_adversaries": 3,
    "count_malware": 28,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "non",
    "the_platforms": "linux|windows|macos",
    "the_adversaries": "apt41|lazarus-group|oilrig",
    "the_malware": "anchor|biscuit|blackenergy|chopstick|cardinal-rat|derusbi|dustysky|fatduke|hoplight|invisimole|jhuhugit|kazuar|kwampirs|linfo|machete|miniduke|mis-type|neteagle|pipemon|quadagent|rdat|s-type|shimrat|sslmm|trickbot|valak|winmm|xtunnel",
    "the_tools": "non",
    "the_datasources": "malware-reverse-engineering|netflow-enclave-netflow|packet-capture|process-monitoring|process-use-of-network"
  },
  {
    "item": "T1071",
    "meta": "Application Layer Protocol",
    "count_techniques": 0,
    "count_subtechniques": 4,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 6,
    "count_adversaries": 3,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "T1071.001|T1071.002|T1071.003|T1071.004",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "dragonfly-2.0|magic-hound|rocke",
    "the_malware": "duqu|neteagle|regin|cobalt-strike",
    "the_tools": "non",
    "the_datasources": "dns-records|netflow-enclave-netflow|network-protocol-analysis|packet-capture|process-monitoring|process-use-of-network"
  },
  {
    "item": "T1090",
    "meta": "Proxy",
    "count_techniques": 0,
    "count_subtechniques": 4,
    "count_platforms": 4,
    "count_tactics": 1,
    "count_datasources": 5,
    "count_adversaries": 4,
    "count_malware": 19,
    "count_tools": 5,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "T1090.001|T1090.002|T1090.003|T1090.004",
    "the_platforms": "linux|macos|windows|network",
    "the_adversaries": "apt41|blue-mockingbird|sandworm-team|turla",
    "the_malware": "aria-body|auditcred|badcall|cardinal-rat|dridex|hardrain|hoplight|kessel|ngrok|plead|sdbot|socksbot|tscookie|typeframe|ursnif|vasport|xtunnel|zxshell|jrat",
    "the_tools": "htran|poshc2|quasarrat|remcos|netsh",
    "the_datasources": "netflow-enclave-netflow|packet-capture|process-monitoring|process-use-of-network|ssl-tls-inspection"
  },
  {
    "item": "T1092",
    "meta": "Communication Through Removable Media",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 2,
    "count_adversaries": 1,
    "count_malware": 2,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "non",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "apt28",
    "the_malware": "chopstick|usbstealer",
    "the_tools": "non",
    "the_datasources": "data-loss-prevention|file-monitoring"
  },
  {
    "item": "T1095",
    "meta": "Non-Application Layer Protocol",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 4,
    "count_tactics": 1,
    "count_datasources": 6,
    "count_adversaries": 4,
    "count_malware": 30,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "non",
    "the_platforms": "windows|linux|macos|network",
    "the_adversaries": "apt29|apt3|fin6|platinum",
    "the_malware": "anchor|aria-body|bubblewrap|carbon|crimson|cryptoistic|derusbi|drovorub|fakem|hiddenwasp|invisimole|metamorfo|mis-type|misdat|moonwind|neteagle|phoreal|pipemon|plugx|rarstone|reaver|regin|remsec|sdbot|tscookie|umbreon|windshield|wellmail|winnti-for-linux|gh0st-rat",
    "the_tools": "non",
    "the_datasources": "host-network-interface|netflow-enclave-netflow|network-intrusion-detection-system|network-protocol-analysis|packet-capture|process-use-of-network"
  },
  {
    "item": "T1102",
    "meta": "Web Service",
    "count_techniques": 0,
    "count_subtechniques": 3,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 5,
    "count_adversaries": 5,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "T1102.001|T1102.002|T1102.003",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "chimera|fin6|gamaredon-group|inception|rocke",
    "the_malware": "ngrok",
    "the_tools": "non",
    "the_datasources": "host-network-interface|netflow-enclave-netflow|network-protocol-analysis|packet-capture|ssl-tls-inspection"
  },
  {
    "item": "T1104",
    "meta": "Multi-Stage Channels",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 5,
    "count_adversaries": 3,
    "count_malware": 4,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "non",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "apt3|apt41|muddywater",
    "the_malware": "backspace|blackcoffee|chaos|valak",
    "the_tools": "non",
    "the_datasources": "netflow-enclave-netflow|network-device-logs|network-protocol-analysis|packet-capture|process-use-of-network"
  },
  {
    "item": "T1105",
    "meta": "Ingress Tool Transfer",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 7,
    "count_adversaries": 41,
    "count_malware": 190,
    "count_tools": 12,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "non",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "apt-c-36|apt18|apt28|apt3|apt32|apt33|apt37|apt38|apt39|apt41|bronze-butler|chimera|cobalt-group|dragonfly-2.0|elderwood|fin7|fin8|frankenstein|gamaredon-group|gorgon-group|lazarus-group|leviathan|magic-hound|molerats|muddywater|oilrig|platinum|patchwork|rancor|rocke|sandworm-team|sharpshooter|silence|soft-cell|ta505|threat-group-3390|tropic-trooper|turla|wirte|whitefly|menupass",
    "the_malware": "abk|agent-tesla|agent.btz|anchor|aria-body|astaroth|attor|auditcred|avenger|azorult|badnews|bbk|biscuit|bondupdater|babyshark|backconfig|badpatch|bankshot|bisonal|bonadan|briba|bundlore|carrotbat|chopstick|coreshell|calisto|callme|cannon|carberp|cardinal-rat|chches|china-chopper|cloudduke|cointicker|cookieminer|crimson|cryptoistic|ddkong|dogcall|dacls|darkcomet|daserf|denis|dipsind|downdelph|drovorub|dyre|elise|emissary|evilbunny|exaramel-for-linux|felixroot|felismus|gazer|gold-dragon|goldenspy|greyenergy|h1n1|happywork|hoplight|httpbrowser|hancitor|helminth|hi-zor|hiddenwasp|hotcroissant|hydraq|hyperbro|icedid|invisimole|ixeshe|jhuhugit|jpin|karae|keymarble|konni|kasidet|kazuar|kessel|keyboy|kivars|kwampirs|lowball|lightneuron|linfo|loudminer|machete|mechaflounder|metamorfo|micropsia|miniduke|misdat|mivast|mobileorder|more_eggs|mosquito|ndiskmonitor|nokki|nanhaishu|nanocore|navrat|nerex|netwalker|nidiran|osx_oceanlotus.d|octopus|okrum|oopsie|orz|plaintee|plead|poshspy|powersource|powerstats|powruner|punchbuggy|pasam|pipemon|pisloader|plugx|poetrat|poisonivy|polyglotduke|pony|powerduke|psylo|pteranodon|rarstone|ratankba|rdat|revil|rgdoor|rokrat|rtm|redleaves|regduke|remotecmd|remsec|revenge-rat|roguerobin|sdbot|seasharpee|sharpstats|shutterspeed|slowdrift|sqlrat|sakula|seaduke|seasalt|servhelper|shamoon|shimrat|skidmap|smoke-loader|sorefang|speakup|stonedrill|strongpity|tdtess|tscookie|turnedup|typeframe|trickbot|trojan.karagany|uboatrat|uppercut|unknown-logger|ursnif|vbshower|vermin|valak|vasport|volgmer|webc2|wellmail|wellmess|wiarp|winnti-for-linux|xbash|yahoyah|zlib|zebrocy|zerot|zeus-panda|zxshell|build_downer|down_new|gh0st-rat|jrat|njrat",
    "the_tools": "bitsadmin|carrotball|empire|koadic|mcmd|pupy|quasarrat|remcos|shimratreporter|certutil|cmd|esentutl",
    "the_datasources": "file-monitoring|netflow-enclave-netflow|network-protocol-analysis|packet-capture|process-command-line-parameters|process-monitoring|process-use-of-network"
  },
  {
    "item": "T1132",
    "meta": "Data Encoding",
    "count_techniques": 0,
    "count_subtechniques": 2,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 4,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "T1132.001|T1132.002",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "non",
    "the_malware": "badnews|h1n1|linux-rabbit|ursnif",
    "the_tools": "non",
    "the_datasources": "network-protocol-analysis|packet-capture|process-monitoring|process-use-of-network"
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
    "item": "T1219",
    "meta": "Remote Access Software",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 8,
    "count_malware": 3,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "non",
    "the_platforms": "linux|windows|macos",
    "the_adversaries": "carbanak|cobalt-group|darkvishnya|kimsuky|night-dragon|rtm|sandworm-team|thrip",
    "the_malware": "carbanak|dridex|rtm",
    "the_tools": "non",
    "the_datasources": "network-intrusion-detection-system|network-protocol-analysis|process-monitoring|process-use-of-network"
  },
  {
    "item": "T1568",
    "meta": "Dynamic Resolution",
    "count_techniques": 0,
    "count_subtechniques": 3,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 3,
    "count_adversaries": 0,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "T1568.001|T1568.002|T1568.003",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "non",
    "the_malware": "maze|neteagle|rtm",
    "the_tools": "non",
    "the_datasources": "dns-records|ssl-tls-inspection|web-logs"
  },
  {
    "item": "T1571",
    "meta": "Non-Standard Port",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 4,
    "count_adversaries": 11,
    "count_malware": 18,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "non",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "apt-c-36|apt32|apt33|darkvishnya|fin7|lazarus-group|magic-hound|rocke|sandworm-team|silence|temp.veles",
    "the_malware": "badcall|bankshot|derusbi|emotet|goldenspy|gravityrat|hardrain|hoplight|metamorfo|moonwind|poetrat|rtm|redleaves|strongpity|typeframe|trickbot|wellmail|njrat",
    "the_tools": "non",
    "the_datasources": "netflow-enclave-netflow|packet-capture|process-monitoring|process-use-of-network"
  },
  {
    "item": "T1572",
    "meta": "Protocol Tunneling",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 5,
    "count_adversaries": 3,
    "count_malware": 4,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "non",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "cobalt-group|fin6|oilrig",
    "the_malware": "duqu|flipside|ngrok|cobalt-strike",
    "the_tools": "non",
    "the_datasources": "netflow-enclave-netflow|network-protocol-analysis|packet-capture|process-monitoring|process-use-of-network"
  },
  {
    "item": "T1573",
    "meta": "Encrypted Channel",
    "count_techniques": 0,
    "count_subtechniques": 2,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 6,
    "count_adversaries": 1,
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
    "the_tactics": "command-and-control",
    "the_subtechniques": "T1573.001|T1573.002",
    "the_platforms": "linux|macos|windows",
    "the_adversaries": "tropic-trooper",
    "the_malware": "cryptoistic|gh0st-rat",
    "the_tools": "non",
    "the_datasources": "malware-reverse-engineering|netflow-enclave-netflow|packet-capture|process-monitoring|process-use-of-network|ssl-tls-inspection"
  }
]