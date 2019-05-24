(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{314:function(t,e,o){"use strict";o.r(e);var a=o(2),r=Object(a.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"how-to-write-utxo-based-cc-modules-for-kmd-based-chains-by-jl777"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-write-utxo-based-cc-modules-for-kmd-based-chains-by-jl777","aria-hidden":"true"}},[t._v("#")]),t._v(" How to write UTXO based CC modules for KMD based chains - by jl777")]),t._v(" "),o("p",[t._v("A non-technical introduction: "),o("a",{attrs:{href:"https://komodoplatform.com/crypto-conditions-utxo-based-smart-contracts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://komodoplatform.com/crypto-conditions-utxo-based-smart-contracts/"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Source text: "),o("a",{attrs:{href:"https://github.com/jl777/komodo/blob/FSM/src/cc/CC%20made%20easy.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("jl777/komodo:src/cc/CC%20made%20easy@FSM"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),o("p",[t._v("This is not the only smart contracts methodology that is possible to build on top of "),o("code",[t._v("OP_CHECKCRYPTOCONDITION")]),t._v(", just the first one. All the credit for getting "),o("code",[t._v("OP_CHECKCRYPTOCONDITION")]),t._v(" working in the Komodo codebase goes to "),o("a",{attrs:{href:"https://github.com/libscott",target:"_blank",rel:"noopener noreferrer"}},[t._v("@libscott"),o("OutboundLink")],1),t._v(". I am just hooking into the code that he made and tried to make it just a little easier to make new contracts.")]),t._v(" "),o("p",[t._v('There is probably some fancy marketing name to use, but for now, I will just call it "CC contract" for short, knowing that it is not 100% technically accurate as the CryptoConditions aspect is not really the main attribute. However, the KMD contracts were built to make the CryptoConditions codebase that was integrated into it to be more accessible.')]),t._v(" "),o("p",[t._v("Since CC contracts run native C/C++ code, it is turing complete and that means that any contract that is possible to do on any other platform will be possible to create via CC contract.")]),t._v(" "),o("p",[t._v("UTXO based contracts are a bit harder to start writing than for balance based contracts. However, they are much more secure as they leverage the existing bitcoin utxo system. That makes it much harder to have bugs that issue a zillion new coins from a bug, since all the CC contract operations needs to also obey the existing bitcoin utxo protocol.")]),t._v(" "),o("p",[t._v("This document will be heavily example based so it will utilize many of the existing reference CC contracts. After understanding this document, you should be in a good position to start creating either a new CC contract to be integrated into komodod or to make rpc based dapps directly.")]),t._v(" "),o("p",[t._v("I hope this document will help you understand what a Komodo utxo based CC contract is and how it is different from the other smart contracts. If you are able to dive into the "),o("a",{attrs:{href:"https://github.com/jl777/komodo/blob/FSM/src/cc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cc directory"),o("OutboundLink")],1),t._v(" and start making your own CC contract after reading this document, then I am very happy!")])])},[],!1,null,null,null);e.default=r.exports}}]);