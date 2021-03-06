export const INITIAL_ACCESS  = [
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
    "item": "T1091",
    "meta": "Replication Through Removable Media",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 1,
    "count_tactics": 2,
    "count_datasources": 2,
    "count_adversaries": 3,
    "count_malware": 12,
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
    "the_tactics": "lateral-movement|initial-access",
    "the_subtechniques": "non",
    "the_platforms": "windows",
    "the_adversaries": "apt28|darkhotel|tropic-trooper",
    "the_malware": "agent.btz|chopstick|dustysky|flame|h1n1|ramsay|shipshape|usbstealer|usbferry|unknown-logger|ursnif|njrat",
    "the_tools": "non",
    "the_datasources": "data-loss-prevention|file-monitoring"
  },
  {
    "item": "T1133",
    "meta": "External Remote Services",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 2,
    "count_tactics": 2,
    "count_datasources": 1,
    "count_adversaries": 14,
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
    "the_tactics": "persistence|initial-access",
    "the_subtechniques": "non",
    "the_platforms": "windows|linux",
    "the_adversaries": "apt18|apt41|chimera|dragonfly-2.0|fin5|gold-southfield|ke3chang|night-dragon|oilrig|sandworm-team|soft-cell|temp.veles|threat-group-3390|wizard-spider",
    "the_malware": "linux-rabbit",
    "the_tools": "non",
    "the_datasources": "authentication-logs"
  },
  {
    "item": "T1189",
    "meta": "Drive-by Compromise",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 4,
    "count_tactics": 1,
    "count_datasources": 6,
    "count_adversaries": 19,
    "count_malware": 5,
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
    "the_tactics": "initial-access",
    "the_subtechniques": "non",
    "the_platforms": "windows|linux|macos|saas",
    "the_adversaries": "apt19|apt32|apt37|apt38|bronze-butler|dark-caracal|darkhotel|dragonfly|dragonfly-2.0|elderwood|lazarus-group|leafminer|platinum|promethium|patchwork|rtm|threat-group-3390|turla|windshift",
    "the_malware": "bundlore|karae|loudminer|pooraim|revil",
    "the_tools": "non",
    "the_datasources": "network-device-logs|network-intrusion-detection-system|packet-capture|process-use-of-network|ssl-tls-inspection|web-proxy"
  },
  {
    "item": "T1190",
    "meta": "Exploit Public-Facing Application",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 7,
    "count_tactics": 1,
    "count_datasources": 7,
    "count_adversaries": 11,
    "count_malware": 1,
    "count_tools": 2,
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
    "the_tactics": "initial-access",
    "the_subtechniques": "non",
    "the_platforms": "linux|windows|macos|aws|gcp|azure|network",
    "the_adversaries": "apt28|apt29|apt39|apt41|axiom|blacktech|blue-mockingbird|gold-southfield|night-dragon|rocke|soft-cell",
    "the_malware": "sorefang",
    "the_tools": "havij|sqlmap",
    "the_datasources": "application-logs|aws-cloudtrail-logs|azure-activity-logs|packet-capture|stackdriver-logs|web-application-firewall-logs|web-logs"
  },
  {
    "item": "T1195",
    "meta": "Supply Chain Compromise",
    "count_techniques": 0,
    "count_subtechniques": 3,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 2,
    "count_adversaries": 1,
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
    "the_tactics": "initial-access",
    "the_subtechniques": "T1195.001|T1195.002|T1195.003",
    "the_platforms": "linux|windows|macos",
    "the_adversaries": "elderwood",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "file-monitoring|web-proxy"
  },
  {
    "item": "T1199",
    "meta": "Trusted Relationship",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 7,
    "count_tactics": 1,
    "count_datasources": 6,
    "count_adversaries": 3,
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
    "the_tactics": "initial-access",
    "the_subtechniques": "non",
    "the_platforms": "linux|windows|macos|aws|gcp|azure|saas",
    "the_adversaries": "apt28|gold-southfield|menupass",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "application-logs|authentication-logs|aws-cloudtrail-logs|azure-activity-logs|stackdriver-logs|third-party-application-logs"
  },
  {
    "item": "T1200",
    "meta": "Hardware Additions",
    "count_techniques": 0,
    "count_subtechniques": 0,
    "count_platforms": 3,
    "count_tactics": 1,
    "count_datasources": 2,
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
    "the_tactics": "initial-access",
    "the_subtechniques": "non",
    "the_platforms": "windows|linux|macos",
    "the_adversaries": "darkvishnya",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "asset-management|data-loss-prevention"
  },
  {
    "item": "T1566",
    "meta": "Phishing",
    "count_techniques": 0,
    "count_subtechniques": 3,
    "count_platforms": 5,
    "count_tactics": 1,
    "count_datasources": 9,
    "count_adversaries": 2,
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
    "the_tactics": "initial-access",
    "the_subtechniques": "T1566.001|T1566.002|T1566.003",
    "the_platforms": "linux|macos|windows|saas|office-365",
    "the_adversaries": "dragonfly|gold-southfield",
    "the_malware": "non",
    "the_tools": "non",
    "the_datasources": "anti-virus|detonation-chamber|email-gateway|file-monitoring|mail-server|network-intrusion-detection-system|packet-capture|ssl-tls-inspection|web-proxy"
  }
]
