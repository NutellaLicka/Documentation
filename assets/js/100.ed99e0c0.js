(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{338:function(t,e,s){"use strict";s.r(e);var r=s(2),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"setup-electrumx-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-electrumx-server","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup ElectrumX Server")]),t._v(" "),s("p",[t._v("Here are the steps required to run electrumx for KMD. Replace the variables according to your setup. You need to setup minimum 2 electrum servers for same coin to ensure stable operation.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("$user")]),t._v(" is the username under which electrumx will run")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("$rpcuser")]),t._v(" and "),s("code",[t._v("$rpcpass")]),t._v(" are from the config of the wallet daemon")])])]),t._v(" "),s("h2",{attrs:{id:"general-part"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-part","aria-hidden":"true"}},[t._v("#")]),t._v(" General part")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python3-setuptools python3-multidict python3.6 python3.6-dev libleveldb-dev\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/cipig/electrumx -b kmdassets\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" electrumx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python3.6 setup.py "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h2",{attrs:{id:"coin-specific-part"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coin-specific-part","aria-hidden":"true"}},[t._v("#")]),t._v(" Coin specific part")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" contrib/systemd/electrumx.service /etc/systemd/system/electrumx_KMD.service\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/systemd/system/electrumx_KMD.service\n        Description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Electrumx_KMD\n        EnvironmentFile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/electrumx_KMD.conf\n        User"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/electrumdb_KMD\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/electrumx_KMD.conf\n        COIN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Komodo\n        DB_DIRECTORY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /home/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v("/electrumdb_KMD\n        DAEMON_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcuser")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcpass@127")]),t._v(".0.0.1:7771/\n        RPC_HOST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 127.0.0.1\n        RPC_PORT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 8001\n        HOST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        TCP_PORT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 10001\n        EVENT_LOOP_POLICY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uvloop\n        PEER_DISCOVERY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start electrumx_KMD\n")])])]),s("h2",{attrs:{id:"more-coins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-coins","aria-hidden":"true"}},[t._v("#")]),t._v(" More coins")]),t._v(" "),s("p",[t._v("In order to setup and start more electrumx servers, just alter the coin specific part from above accordingly, replacing KMD by another coin symbol, setting COIN to another coin name, setting the right "),s("code",[t._v("rpcport")]),t._v(" in "),s("code",[t._v("DAEMON_URL")]),t._v(" and using another "),s("code",[t._v("RPC_PORT")]),t._v(" and "),s("code",[t._v("TCP_PORT")]),t._v(" for electrumx. Here is an example for SUPERNET:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" contrib/systemd/electrumx.service /etc/systemd/system/electrumx_SUPERNET.service\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/systemd/system/electrumx_SUPERNET.service\n    Description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Electrumx_SUPERNET\n    EnvironmentFile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/electrumx_SUPERNET.conf\n    User"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/electrumdb_SUPERNET\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/electrumx_SUPERNET.conf\n    COIN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SuperNET\n    DB_DIRECTORY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /home/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v("/electrumdb_SUPERNET\n    DAEMON_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcuser")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcpass@127")]),t._v(".0.0.1:11341/\n    RPC_HOST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 127.0.0.1\n    RPC_PORT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 8005\n    HOST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    TCP_PORT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 10005\n    EVENT_LOOP_POLICY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uvloop\n    PEER_DISCOVERY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start electrumx_KMD\n")])])])])},[],!1,null,null,null);e.default=a.exports}}]);