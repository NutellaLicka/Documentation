(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{252:function(e,t,r){"use strict";r.r(t);var a=r(2),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"complete-checklist-for-new-coins-to-setup-explorers-electrum-servers-agama-wallet-activate-dpow-barterdex-trading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#complete-checklist-for-new-coins-to-setup-explorers-electrum-servers-agama-wallet-activate-dpow-barterdex-trading","aria-hidden":"true"}},[e._v("#")]),e._v(" Complete Checklist for New Coins to Setup Explorers, Electrum Servers, Agama Wallet, Activate dPoW & BarterDEX Trading")]),e._v(" "),r("p",[e._v("This document will guide you through creating an independent assetchain/coin using Komodo and setup explorer, electrum servers, integrate into Agama GUI wallet, dPoW and enable trading on BarterDEX.")]),e._v(" "),r("h2",{attrs:{id:"step-1-create-an-assetchain-coin-setup-insight-based-explorer-electrum-servers-and-agama-gui-wallet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-an-assetchain-coin-setup-insight-based-explorer-electrum-servers-and-agama-gui-wallet","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 1: Create an Assetchain/Coin, Setup Insight based Explorer, Electrum Servers and Agama GUI Wallet")]),e._v(" "),r("ol",[r("li",[e._v("The various parameters using which the new blockchain can be customized are explained here: "),r("router-link",{attrs:{to:"/basic-docs/installations/asset-chain-parameters.html"}},[e._v("Parameters to customize Blockchains created using Komodo Platform")])],1),e._v(" "),r("li",[e._v("Install explorer: "),r("a",{attrs:{href:"https://github.com/DeckerSU/komodo-explorers-install",target:"_blank",rel:"noopener noreferrer"}},[e._v("DeckerSU/komodo-explorers-install"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("router-link",{attrs:{to:"/komodo/setup-electrumX-server.html"}},[e._v("Setup Electrum SPV server")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/gui/agama/desktop/add-Komodo-Assetchains-Agama-Desktop.html"}},[e._v("Integrate into Agama Desktop wallet")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/gui/agama/mobile/add-Komodo-Assetchains-Agama-Mobile.html"}},[e._v("Integrate into Agama Mobile wallet")])],1)]),e._v(" "),r("p",[e._v("We have used Zaddex (ZEX) coin as example for some part of this document. Please change to your coin name where ever applicable.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("Coin name: Zaddex\nTicker: ZEX\nStart Command: `"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("./komodod -pubkey"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("$pubkey -ac_name"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ZEX -ac_cc"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2 -ac_founders"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1 -ac_halving"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("525600 -ac_reward"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("13000000000 -ac_pubkey"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("039d4a50cc70d1184e462a22edb3b66385da97cc8059196f8305c184a3e21440af -addnode"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("5.9.102.210 "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("`\nRPCport: 26477\n")])])]),r("h2",{attrs:{id:"step-2-pr-list-for-activating-dpow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-pr-list-for-activating-dpow","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 2: PR List for Activating dPoW")]),e._v(" "),r("p",[e._v("In order to activate dPoW you need to submit Pull Requests into 2 GitHub repos.")]),e._v(" "),r("ol",[r("li",[e._v("Komodo repo ("),r("code",[e._v("dev")]),e._v(" branch) - "),r("a",{attrs:{href:"https://github.com/jl777/komodo",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/komodo"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("SuperNET repo ("),r("code",[e._v("dev")]),e._v(" branch) - "),r("a",{attrs:{href:"https://github.com/jl777/SuperNET",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/SuperNET"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"step-2-1-changes-required-for-komodo-repo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-1-changes-required-for-komodo-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 2.1 Changes required for Komodo repo")]),e._v(" "),r("ul",[r("li",[e._v("2 new files need to be created and 2 existing files need updating. These new files are executable scripts named as the "),r("strong",[e._v("coin ticker with small letters")]),e._v(". They would go inside "),r("code",[e._v("~/komodo/src/ac/")]),e._v(" and "),r("code",[e._v("~/komodo/src/fiat/")]),e._v(" dir and required for quering the chain easily. i.e.: "),r("code",[e._v("~/komodo/src/ac/zex getinfo")]),e._v(" .")])]),e._v(" "),r("p",[e._v("Contents of these 2 new files would be as following:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n./komodo-cli -ac_name"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ZEX "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$2")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$3")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$4")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$5")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$6")]),e._v("\n")])])]),r("ul",[r("li",[e._v("So, you will have "),r("a",{attrs:{href:"https://github.com/jl777/komodo/blob/dev/src/ac/zex",target:"_blank",rel:"noopener noreferrer"}},[e._v("~/komodo/src/ac/zex"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/jl777/komodo/blob/dev/src/fiat/zex",target:"_blank",rel:"noopener noreferrer"}},[e._v("~/komodo/src/fiat/zex"),r("OutboundLink")],1),e._v(" . "),r("strong",[e._v("Make sure both of the files have proper executable permission")]),e._v(" .")]),e._v(" "),r("li",[e._v("Next, is to add coin parameters at the bottom of "),r("a",{attrs:{href:"https://github.com/jl777/komodo/blob/dev/src/assetchains.json#L202",target:"_blank",rel:"noopener noreferrer"}},[e._v("assetchains.json"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/jl777/komodo/blob/dev/src/assetchains.old#L47",target:"_blank",rel:"noopener noreferrer"}},[e._v("assetchains.old"),r("OutboundLink")],1),e._v(" files inside "),r("code",[e._v("~/komodo/src/")]),e._v(" directory. Please check the links to the files to understand how they were done. The "),r("code",[e._v(".json")]),e._v(" file is basically converting the ZEX chain's startup command from shell fromat to JSON format.")]),e._v(" "),r("li",[e._v("Check "),r("a",{attrs:{href:"https://github.com/jl777/komodo/commit/7f5ed6ec453b78042bd791062203452a7043aa93",target:"_blank",rel:"noopener noreferrer"}},[e._v("this commit"),r("OutboundLink")],1),e._v(" to fully understand what was done to add ZEX to the Komodo repo.")])]),e._v(" "),r("h3",{attrs:{id:"step-2-2-changes-required-for-supernet-repo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-2-changes-required-for-supernet-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 2.2 Changes required for SuperNET repo")]),e._v(" "),r("ul",[r("li",[e._v("To the SuperNET repo, we need to add 1 new file called "),r("a",{attrs:{href:"https://github.com/jl777/SuperNET/blob/dev/iguana/coins/zex_7776",target:"_blank",rel:"noopener noreferrer"}},[e._v("zex_7776"),r("OutboundLink")],1),e._v(" inside "),r("code",[e._v("~/SuperNET/iguana/coins/")]),e._v(" (please change zex with your coin ticker). "),r("strong",[e._v("Make sure this file has executable permission")]),e._v(" . This file gets created automatically in the directory where you start the chain from. Generally inside "),r("code",[e._v("~/komodo/src/")]),e._v(" dir.")]),e._v(" "),r("li",[e._v("And, we need to edit 4 existing files, "),r("a",{attrs:{href:"https://github.com/jl777/SuperNET/blob/dev/iguana/dpowassets#L50",target:"_blank",rel:"noopener noreferrer"}},[e._v("dpowassets"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/jl777/SuperNET/blob/dev/iguana/iguana_notary.c#L543",target:"_blank",rel:"noopener noreferrer"}},[e._v("iguana_notary.c"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/jl777/SuperNET/blob/dev/iguana/m_notary_run#L106",target:"_blank",rel:"noopener noreferrer"}},[e._v("m_notary_run"),r("OutboundLink")],1),e._v(" & "),r("a",{attrs:{href:"https://github.com/jl777/SuperNET/blob/dev/iguana/m_splitfund#L51",target:"_blank",rel:"noopener noreferrer"}},[e._v("m_splitfund"),r("OutboundLink")],1),e._v(") inside "),r("code",[e._v("~/SuperNET/iguana/")]),e._v(" dir. These links points to the line where you should be checking.")]),e._v(" "),r("li",[e._v("Check "),r("a",{attrs:{href:"https://github.com/jl777/SuperNET/commit/c715f0aa4c99d20de6b99b5d173d543d2a94010f",target:"_blank",rel:"noopener noreferrer"}},[e._v("this commit"),r("OutboundLink")],1),e._v(" to fully understand what was done to add ZEX in SuperNET repo.")]),e._v(" "),r("li",[e._v("Once you have all the changes done locally, you can submit a PR to Komodo and SuperNET repo "),r("code",[e._v("dev")]),e._v(" branch. After the PR gets merged , it will be announced and Komodo Notary Node operators will update their node and start notarizing the coin.")])]),e._v(" "),r("h2",{attrs:{id:"step-3-pr-list-for-enabling-barterdex-trading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-3-pr-list-for-enabling-barterdex-trading","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 3: PR List for enabling BarterDEX trading")]),e._v(" "),r("p",[e._v("In order for the coin to be enabled in BarterDEX trading platform you need to submit a PR to "),r("a",{attrs:{href:"https://github.com/jl777/coins",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/coins"),r("OutboundLink")],1),e._v(" repo.")]),e._v(" "),r("p",[r("router-link",{attrs:{to:"/mmV1/coin-integration.html"}},[e._v("Here")]),e._v(" is an useful guide for the process.")],1),e._v(" "),r("p",[e._v("Requirements:")]),e._v(" "),r("ol",[r("li",[e._v("Logo (icon) - "),r("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/icons/zex.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/coins:icons/zex.png@master"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Explorer - "),r("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/explorers/ZEX",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/coins:explorers/ZEX@master"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Coin info - "),r("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/coins#L2789",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/coins:coins@master#L2789"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Electrum servers (BEER as example)- "),r("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/electrums/BEER",target:"_blank",rel:"noopener noreferrer"}},[e._v("jl777/coins:electrums/BEER@master"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=o.exports}}]);