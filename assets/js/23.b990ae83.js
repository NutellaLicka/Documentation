(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{261:function(e,t,o){"use strict";o.r(t);var a=o(2),n=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"how-to-build-a-new-custom-consensus-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build-a-new-custom-consensus-module","aria-hidden":"true"}},[e._v("#")]),e._v(" How to Build a New Custom Consensus Module")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("The following content and tutorial are provided for advanced developers desiring to discover deeper levels of potential in Komodo software. The content focuses around Komodo's framework for building blockchain-based decentralized applications (dApps). This framework is called, Custom Consensus, or CC for short.")]),e._v(" "),o("h4",{attrs:{id:"assumptions-for-this-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#assumptions-for-this-content","aria-hidden":"true"}},[e._v("#")]),e._v(" Assumptions for this Content")]),e._v(" "),o("p",[e._v("This discussion is intended for developers who have a strong understanding of the C/C++ languages and who understand the core fundamentals of blockchain engineering, as these are prerequisites for use of the Custom Consensus (CC) framework.")]),e._v(" "),o("p",[e._v("Developers who possess this knowledge and who are already familiar with the essential nature of the CC framework may optionally skip all the following conceptual content and proceed directly to the tutorial.")]),e._v(" "),o("p",[e._v("If the developer needs more experience with blockchain technology, the Komodo team recommends that they first study the seminal textbook, "),o("a",{attrs:{href:"https://bitcoinbook.info/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mastering Bitcoin,"),o("OutboundLink")],1),e._v(" before approaching the CC framework.")]),e._v(" "),o("p",[e._v("Also, experienced developers who write in other languages, such as Python, JavaScript, or Solidity, may find value in skimming this discussion to understand key concepts at a high level. At this time, the CC framework has not expanded to include other languages, but Komodo may change this offering in the forseeable future.")]),e._v(" "),o("h4",{attrs:{id:"note-for-other-developers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#note-for-other-developers","aria-hidden":"true"}},[e._v("#")]),e._v(" Note for Other Developers")]),e._v(" "),o("p",[e._v("While creating a new Custom Consensus (CC) module requires a high level of specific blockchain and coding knowledge, developers who do not have this specific knowledge may still benefit from the CC framework.")]),e._v(" "),o("p",[e._v("Each module built on the CC framework can be designed to have API commands that can be called quickly and easily from other software and programming languages. Most CC modules that are added to the core "),o("code",[e._v("komodod")]),e._v(" software have their API documentation added to this website.")]),e._v(" "),o("p",[e._v("For example, consider the MuSig CC module. This module relies on the CC framework to enable a complicated technology called Schnorr Signatures, which are a new method for creating multi-signature blockchain transactions. The API for this module allows any developer of essentially any skill level to adopt the MuSig functionality into the developer's software without having to gain an in-depth understanding of Schnorr technology.")]),e._v(" "),o("p",[o("router-link",{attrs:{to:"/basic-docs/customconsensus/musig.html#introduction"}},[e._v("See the MuSig module documentation here")])],1),e._v(" "),o("p",[e._v("As the library of available modules grows, so too do the advantages to the many types of developers in the Komodo ecosystem. For this reason, members of the Komodo community express gratitude to the more experienced blockchain developers who build and share CC modules via open-source ideology.")]),e._v(" "),o("h2",{attrs:{id:"conceptual-explanation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conceptual-explanation","aria-hidden":"true"}},[e._v("#")]),e._v(" Conceptual Explanation")]),e._v(" "),o("p",[e._v("Custom Consensus (CC) is a framework for making decentralized applications (dApps). The framework is built in the C and C++ languages. The reader may better understand the purpose and use case of CC by first understanding the key problem that CC solves.")]),e._v(" "),o("h3",{attrs:{id:"a-consensus-mechanism-is-not-easy-to-create-or-change"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-consensus-mechanism-is-not-easy-to-create-or-change","aria-hidden":"true"}},[e._v("#")]),e._v(" A Consensus Mechanism Is Not Easy to Create or Change")]),e._v(" "),o("p",[e._v("Adding new code into a blockchain's consensus mechanism (CM) is a challenging task. Creating an entirely new CM is more difficult by an order of magnitude. Yet, despite these facts, often when an experienced developer first approaches blockchain technology with creative intent, their initial impulse is to dive directly into the CM itself. As time passes, the developer can come to a realization that they are attempting to solve a problem that is too large for any one person.")]),e._v(" "),o("p",[e._v("Consider the Bitcoin consensus mechanism. This protocol is approximately ten years old and receives perhaps more attention than all other blockchain protocols combined. Every year, thousands upon thousands of the world's most intelligent developers, mathematicians, and cryptographers pore over the intricacies of this profitable technology. Yet, despite all this valuable insight, mistakes in the code continue to reveal themselves: in 2018, the Bitcoin Core and Bitcoin Cash teams together "),o("a",{attrs:{href:"https://www.coindesk.com/the-latest-bitcoin-bug-was-so-bad-developers-kept-its-full-details-a-secret",target:"_blank",rel:"noopener noreferrer"}},[e._v("discovered a flaw in the code"),o("OutboundLink")],1),e._v(" that would have allowed a malicious user to print an arbitrary number of new Bitcoins.")]),e._v(" "),o("p",[e._v("Mistakes in the code of a CM can cause economic instability, and volatility of this nature can wreak havoc on the lives of the CM's users. For this reason, seasoned blockchain engineers often avoid changing the CM altogether, once it is relatively stable.")]),e._v(" "),o("p",[e._v("For those few projects that create a useful and unique consensus mechanism, a new challenge immediately presents itself. If the CM relies on a Proof of Work type model, the project team must attract a sufficient number of miners. If the CM is more akin to Proof of Stake, the team must ensure the blockchain's total stake is distributed in a manner that ensures trustlessness. Neither of these tasks are easy to achieve.")]),e._v(" "),o("p",[e._v("In light of these challenges, the blockchain engineer finds themselves confronted with a paradox. The engineer desires to create something new, and at the same time, they cannot easily change the core software.")]),e._v(" "),o("h3",{attrs:{id:"a-popular-but-flawed-solution-the-decentralized-virtual-machine"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-popular-but-flawed-solution-the-decentralized-virtual-machine","aria-hidden":"true"}},[e._v("#")]),e._v(" A Popular, But Flawed Solution: The Decentralized Virtual Machine")]),e._v(" "),o("p",[e._v("A popular solution to this paradox is to associate the consensus mechanism (CM) with a virtual machine (VM). This method was made popular by the Ethereum project.")]),e._v(" "),o("p",[e._v("In this model, the CM's design can be similar to existing and stable CM's, but it has one difference. The CM listens to instructions given by an external VM that is decentralized across all validating nodes. While code inside the VM can be arbitrary, the CM does not listen to the code's execution. Instead, the CM only listens to the same data as before: the history of transactions and associated meta data.")]),e._v(" "),o("p",[e._v("This solution is more effective than writing an entirely new CM, yet the solution is limited. The limitations include: the requirement of working in the mandatory VM programming language, such as Solidity; an excessive dependency on the core-software development team; volatile economics, and a lack of blockchain processing and storage capacity.")]),e._v(" "),o("p",[e._v("The requirement of the limited programming language derives from security concerns. All validating nodes in the decentralized VM must run all blockchain-related code in the ecosystem. Having this code written in a unique language designed for the VM reduces the available opportunities to malicious actors. While the limitation provides baseline security, the customized and often unstable nature of the VM programming language can make the creative process difficult. Also, the need to master a new language adds an additional burden to the developer.")]),e._v(" "),o("p",[e._v("The dependency on the blockchain's core engineers also slows creative progress for ecosystem developers. When the ecosystem developer discovers a new core-level technology that would increase the developer's productivity and creativity, they must convince the core-software team to implement the new feature. The core-software engineers may have conflicting interests, as their needs must meet the needs of all developers and users in their ecosystem.")]),e._v(" "),o("p",[e._v('In many of the VM-based models, economics for blockchain usage can be volatile, and blockchain storage and speed are often in short supply. The economics can be adversely unpredictable, because the underlying "gas" token that the VM requires (such as Ether) can change in price and value according to the interests of the uneducated masses. This may sound advantageous to a speculator, but for a practical business attempting to consistently please a customer, the volatility can scare away new users.')]),e._v(" "),o("p",[e._v("Furthermore, as the VM frequently relies on a single blockchain, block space can be in short supply due to high demand on popular chains, and data that is entirely irrelevant to the developer can become required baggage to maintain their own data validation.")]),e._v(" "),o("p",[e._v("These challenges make the VM model unpleasant for many experienced blockchain engineers. In fact, before Komodo existed, these very concerns inspired the Komodo engineers to avoid the VM model in search of a better solution for blockchain creativity. Custom Consensus is this solution.")]),e._v(" "),o("h3",{attrs:{id:"custom-consensus-creativity-at-the-consensus-level-without-losing-the-consensus-mechanism"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-consensus-creativity-at-the-consensus-level-without-losing-the-consensus-mechanism","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom Consensus: Creativity at the Consensus Level, Without Losing the Consensus Mechanism")]),e._v(" "),o("p",[e._v("Custom Consensus (CC) allows a developer to add arbitrary code at the consensus level, and within the core software's daemon, without interferring with the existing consensus mechanism (CM). This grants the developer the ability to add core-level features and innovations without waiting for other members of the Komodo ecosystem. Combined with Komodo's Bitcoin-hash rate security, the simplicity of CC provides the developer with a competitive level of creative freedom.")]),e._v(" "),o("p",[e._v("The entry point between the CC framework and the CM is a new Bitcoin-script "),o("a",{attrs:{href:"https://bitcoin.org/en/glossary/op-code",target:"_blank",rel:"noopener noreferrer"}},[e._v("operation code"),o("OutboundLink")],1),e._v(', "OP_CHECKCRYPTOCONDITIONS", or OP_CCC for short. When executed, OP_CCC is able to initiate additional arbitrary code that is written in any programming language, assuming the language can call and execute C/C++ code in return. The arbitrary code is separate from the CM, thus maintaining the CM\'s reliability. When the arbitrary code completes, OP_CCC returns a '),o("code",[e._v("true")]),e._v(" or "),o("code",[e._v("false")]),e._v(" statement to the daemon.")]),e._v(" "),o("p",[e._v("If the returned OP_CCC value is "),o("code",[e._v("true")]),e._v(", the daemon performs a transaction. The transaction can contain meta data in the normal manner. As an aside, these transactions can implement other data-storage features of Komodo software. Examples include the "),o("router-link",{attrs:{to:"/basic-docs/komodo-api/blockchain.html#kvupdate"}},[e._v("key-value storage")]),e._v(" feature, the "),o("router-link",{attrs:{to:"/basic-docs/customconsensus/oracles.html#introduction"}},[e._v("Oracles CC Module")]),e._v(", or using the native "),o("code",[e._v("vout")]),e._v(" and "),o("code",[e._v("batontxid")]),e._v(" properties of a utxo as a database (see the "),o("router-link",{attrs:{to:"/basic-docs/customconsensus/rogue.html"}},[e._v("Rogue CC Module")]),e._v(".")],1),e._v(" "),o("p",[e._v("With access to the meta data established, CC is able to act as application-state manager. State-related data is held in utxos that are accessible to the CM. As the application-state management aspect of CC can be based on the utxo model, the application-state aspect can follow the CM's rules for consensus. This powerful combination allows the developer to collect, organize, and act upon data in a securely decentralized manner.")]),e._v(" "),o("p",[e._v("In addition, once the data is notarized, it can also be called by other Komodo-based asset chains, depending on the manner in which the developer(s) form their chain. This allows developers to form clusters of blockchains to enhance their software, as opposed to relying on a single blockchain, or on a single child chain. The speed and data-storage capabilities of a cluster are thus exponentially greater than a VM-based competitor.")]),e._v(" "),o("p",[e._v("With the CC framework in place, the developer may add to their blockchains whatever creativity the developer can imagine.")]),e._v(" "),o("h3",{attrs:{id:"custom-consensus-in-action-accomplishing-years-worth-of-work-in-but-a-weekend"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-consensus-in-action-accomplishing-years-worth-of-work-in-but-a-weekend","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom Consensus In Action: Accomplishing Years' Worth of Work In But A Weekend")]),e._v(" "),o("p",[e._v("Examples of the power of Custom Consensus (CC) can be found by observing existing modules. Consider how CC allowed the Komodo ecosystem to swiftly and easily upgrade the Komodo consensus mechanism (CM) to include Quantum-Proofing capabilities.")]),e._v(" "),o("p",[e._v("In years past, many other blockchain projects "),e._v(" had focused on manually upgrading their CM for Quantum-Proof protection, and during the boom of 2017 this was sometimes touted as a key feature. Adding this manually to the "),e._v(" CM was a time-consuming and expensive process. Paradoxically, once the new Quantum-Proof CM was achieved, it only served to isolate the project team. Their customized CM was incompatible with much of the activity in the open-source blockchain ecosystem, and therefore for each industry-wide technological advancement, the team often had to adapt on their own.")]),e._v(" "),o("p",[e._v("Komodo's engineers chose not to spend energy building a new CM, but rather they worked towards adding CC first. Once CC was available, the Komodo core software team took existing Quantum-Proofing technology, read summaries published by academics and researchers, and created a new CC module to add this functionality to the Komodo CM.")]),e._v(" "),o("p",[e._v("The time between project initiation and releasing a beta version for community testing was approximately one weekend. Only one core developer's attention was required. The Komodo daemon remains compatible with all other software features as before, able to quickly adopt new ideas from others in the open-source community as soon as they arrive. At the same time, users who desire Quantum-Proofing for their long-term financial interests have a CC tool readily available.")]),e._v(" "),o("p",[e._v("Also of note is the simplicity of CC architecture. All new code created for the Quantum-Proof module is contained in an optional library, and is included in compilation only for participating blockchains. The Komodo daemon has no need of an external VM. This eliminates what would otherwises be unnecessary baggage for the developer and the core engineers, and yet the daemon offers all the capabilities of a VM-based blockchain -- and arguably more.")]),e._v(" "),o("p",[e._v("The ability to adopt the ideas of others quickly, while maintaining the accomplishments, security, and compatibilities of one's predecessors, makes Custom Consensus a wise choice for experienced developers who wish to maintain a long-term course of productivity and creativity in their work.")]),e._v(" "),o("h2",{attrs:{id:"outline-sketch-for-the-next-sections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#outline-sketch-for-the-next-sections","aria-hidden":"true"}},[e._v("#")]),e._v(" (Outline) Sketch for the Next Sections")]),e._v(" "),o("p",[e._v("In this section, the reader will learn more about Custom Consensus through hands-on participation.")]),e._v(" "),o("p",[e._v("The agenda for this tutorial is the following:")]),e._v(" "),o("pre",[o("code",[e._v('item 1\nitem 2..."\n')])]),e._v(" "),o("p",[e._v("Make sure they're oriented, and then away we go with the tutorial.")]),e._v(" "),o("p",[e._v("I haven't looked at your stuff in depth yet. From the quick skim, it does look like you've got it very well laid out. I appreciate how you take the time to speak slowly to the reader, making sure each step of the journey is covered with an appropriate explanation.")]),e._v(" "),o("p",[e._v("Once you and gcharang have all the necessary information put together, I'll edit it and write that final outro section.")]),e._v(" "),o("p",[e._v("If you can think of a few ideas for what we should leave our reader with, that would be great.")]),e._v(" "),o("p",[e._v("I was thinking something along the lines of,")]),e._v(" "),o("p",[e._v('"Now that the reader is introduced to Custom Consensus, the journey from here is entirely of in the realms of the imagination.')]),e._v(" "),o("p",[e._v("The reader may find insight by observing the manner in which other CC modules function. The Rogue CC module displays how different softwares can be combined into one CC module. The pieces of the Rogue module include the following:")]),e._v(" "),o("pre",[o("code",[e._v("Customized CC code in this repository:\n    Link to Repository\n    These files in particular are of note:\n        File 1: Link\n        File 2: Link\nA combination with the Oracles CC module\n    To learn more about the Oracles CC module, look here:\n        Link to Oracles Documentation here\n    Observe how the oracle is integrated into the Rogue Module this file here:\n        File: Link\n    The reader may see the oracle itself by installing the Rogue asset chain and executing an RPC to call the Oracle's oracle_txid\n        Link to installation instructions for Rogue\n        Link to RPC that returns oracle txid\n    The reader may see the publisher that receives and publishes data by executing this call\n        Link to RPC, and possibly an example of the cli command\nAn implementation of this old-school Rogue softwares\n    Link to Rogue software installation that we borrowed\n    Link to manual\nAnything else Rogue took\n")])]),e._v(" "),o("p",[e._v("S\n13:17\nThese open-source softwares, in combination with the customized CC code from a trained Komodo developer, swiftly created a new CC module that displays how CC can be used in the gaming industry.")]),e._v(" "),o("p",[e._v('CC is also useful in many other industries. The Komodo team looks forward to discovering what the community creates. Please reach out to the Komodo team on Discord with questions and discoveries, and please reach out to the marketing team for assistance in displaying new ideas."')]),e._v(" "),o("h2",{attrs:{id:"other-content-not-developed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-content-not-developed","aria-hidden":"true"}},[e._v("#")]),e._v(" Other Content Not Developed")]),e._v(" "),o("p",[e._v('Today, in looking through the many innovations occuring within the blockchain industry, an observant researcher can quickly discover that many ideas that are touted as "new" and "novel" are, in fact, old ideas. For example, the idea of a "smart contract" was explored as early as the 1980\'s by computer-science academics. Yet another example can be found in the early proposals of the complicated "zk-SNARKS" technology, which Komodo now offers for privacy-based transactions.')]),e._v(" "),o("p",[e._v("The reason the world never heard of these relatively old computer-science technologies until today is that they were useless without a consensus mechanism. Without a method whereby a user could prove for themselves, without having to trust their fellow users, whether the code executed properly, no smart-contract code nor zk-SNARK could ever be considered safe when dealing with real value. When Satoshi Nakamoto created the first functioning consensus mechanism, everything changed.")]),e._v(" "),o("p",[e._v("Creating a new consensus mechanism is not an easy task. Prior to the birth of Bitcoin there were hundreds of intelligent researchers and academics in small circles of the world of cryptography and academia, searching for the proper combination of cryptography and code. Even with all the attention placed on blockchain technology more recently, including billions of dollars in funding and hundreds of thousands of developers flooding into this industry, only a small handful of new consensus mechanisms have emerged.")]),e._v(" "),o("p",[e._v("To create a new consensus mechanism, one must create a sequence of highly technical code that can withstand the most rigorous of trials the world has to offer. Even Satoshi Nakamoto's own first attempts at creating the Bitcoin consensus mechanism were nowhere near secure. Over the years of early development, dozens of high-risk security flaws were discovered by the early blockchain intelligencia. This process continues even to this day, where recently a member of the industry discovered yet another flaw in Bitcoin and alerted the Bitcoin developers to swiftly correct the error.")]),e._v(" "),o("p",[e._v("While Bitcoin's first consensus mechanism")]),e._v(" "),o("p",[e._v('If this were easy, the world would have thousands of well functioning consensus mechanisms already. The name "Bit CC itself is not a standalone programming language. This is in contast to other popular blockchain platforms, such as Ethereum, where the creation of decentralized applications requires a unique programming language, such as Solidity.')]),e._v(" "),o("h4",{attrs:{id:"knowledge-requirements-before-attempting-to-use-custom-consensus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#knowledge-requirements-before-attempting-to-use-custom-consensus","aria-hidden":"true"}},[e._v("#")]),e._v(" Knowledge Requirements Before Attempting to Use Custom Consensus")]),e._v(" "),o("p",[e._v("At this time, the creation of a new CC module is only achievable among experienced C/C++ developers, and who possess a working knowledge of the principles of blockchain engineering.")]),e._v(" "),o("p",[e._v("Those who are not experienced developers, or who work on high-level languages, such as JavaScript and Python, may still take advantage of the CC")]),e._v(" "),o("p",[e._v("(Notes)")]),e._v(" "),o("p",[e._v("Summary:")]),e._v(" "),o("p",[e._v("Public key cryptography is used when a private and public key pair are used for proving something.\nPrivate Keys are stored in a wallet, not on the blockchain.\nPrivate keys sign transactions.\nSignatures on transaction are proven by the network using the corresponding public key to spend the claimed ownership of funds.\nTransactions fill blocks, like an item on a shopping list fills a piece of paper.\nBlocks are arranged in sequential order, forming a chain.\nEach block contains agreed transactional information. The proof of the transactional detail and it's arrangement in the block is called consensus. Consensus is achieved by each participant relying on their own computation.\nCoins & Tokens are used in transaction details to transfer value.\nNodes is the jargon term for computers that do the computations to maintain the network.")]),e._v(" "),o("p",[e._v('jl777\nbool custom_validate(struct CCcontract_info *cp,int32_t height,Eval *eval,const CTransaction tx)\n{\nchar expectedaddress[64]; CPubKey pk;\nif ( tx.vout.size() != 2 ) // make sure the tx only has 2 outputs\nreturn eval->Invalid("invalid number of vouts");\nelse if ( custom_opretdecode(pk,tx.vout[1].scriptPubKey) != \'1\' ) // verify has opreturn\nreturn eval->Invalid("invalid opreturn");\nGetCCaddress(cp,expectedaddress,pk);\nif ( IsCClibvout(cp,tx,0,expectedaddress) == COIN ) // make sure amount and destination matches\nreturn(true);\nelse return eval->Invalid("invalid vout0 amount");\n}\nJ\nthat is the validation function for the customcc.cpp EVAL_CUSTOM CC')]),e._v(" "),o("p",[e._v('jl777\nTHAT is the CC validation\nJ\nit is invoked if you spend a CC vout with EVAL_CUSTOM evalcode\nnot sure what you mean by "into account"\nmylo5ha5\ncustom_func1 is great btw. thx.')]),e._v(" "),o("p",[e._v('Ssiddhartha_crypto do you want to "normal coin" p2p consensus? mastering bitcoin book explains.')]),e._v(" "),o("p",[e._v("siddhartha_crypto\nTo put it into other words, to check for understanding:")]),e._v(" "),o("p",[e._v('This is the code of Custom Consensus that every machine must run to ensure that the consensus across all machines is the same?\nS\njl777\nyes. custom_validate is what has to return "true" for it to pass validation\nJ\nsiddhartha_crypto\nGreat\nS')]),e._v(" "),o("p",[e._v('How would you describe (in common language) the challenges a developer would face when trying to write a "smart contract" (for lack of a better term) that relies on a blockchain?\njl777\nit is a very simple CC, so the validation is really simple. as you make more CC methods, you need to add the corresponding validation. otherwise they are not validated\nJ\nsmart contract does not change consensus rules, it is an interpreted set of commands that must follow consensus\ni have no idea how to put CC in the context of smart contract\nsiddhartha_crypto\nsmart contract does not change consensus rules, it is an interpreted set of commands that must follow consensus\nS\nthis is good stuff\njl777\nit is like trying to explain a 3D object when all you have are 2D.\nJ\ni guess you can sort of explain it but it will always be approximations. when the actual thing is so simple, why not to discuss the real thing, instead of a simulation of something that must be interpreted\nthe first consensus took many years to get working stable, ie. bitcoin protocol')]),e._v(" "),o("p",[e._v("anytime there is a new consensus it is a BIG project\nchanging consensus rules with CC is a bit easier, ie. customcc.cpp. it is simple enough it is possible for a coder to do in a few hours for simple things and a weekend for not that complex things\ninstead of taking years, it is reduced to weeks or days\nsiddhartha_crypto\nthis is helpful\nS\njl777\nit is like being able to make a car with custom engines in it, without even having to make a new car, or even a new engine. just the exact thing that is different needs to be created")]),e._v(" "),o("p",[e._v("How accurate is this, for the next thing we say to him:")]),e._v(" "),o("p",[e._v("The reason why you would choose Komodo over [insert competitor], is that Komodo allows you to add your creativity into the consensus mechanism itself, without having to rewrite the consensus mechanism from scratch.")]),e._v(" "),o("p",[e._v("Let's say that you want to make a game, and you want to have the rules of gameplay be adopted as a part of the blockchain consensus mechanism. You don't want to have to run a centralized database, because then it would put the responsibility over consensus on your shoulders, instead of on your players. This saves you loads of hassle. Everyone can verify the blockchain, and therefore everyone can be assured that the gameplay and the blockchain are in harmony.")]),e._v(" "),o("p",[e._v("The problem is this: Once you start adding a gameplay rule to a normal blockchain, you're basically dealing with a whole new consensus mechanism. It took years to make the Bitcoin consensus mechanism stable.")]),e._v(" "),o("p",[e._v("when you try to add on your creativity, without a framework to help you, you are going to have to basically start from scratch.")]),e._v(" "),o("p",[e._v("CC allows you to add in your creativity, without having to start over in the testing phase.")]),e._v(" "),o("p",[e._v("The only rule is that you have to bring everything down to true/false. If the result of your creative code + the user's actions is true, then a transaction is executed. It can have any metadata or value transfer in it you want. If false, then no transaction is executed.")]),e._v(" "),o("p",[e._v("J\nyou are not understanding the magnitude of labor savings\nsiddhartha_crypto\nHow can I better understand it?\nS\njl777\nimagine you have the idea of a little gizmo to make a car run more efficiently. this is your expertise. it might be hard to do, but you are good at this\nJ\nyou can basically plug that into a CC and test a new blockchain using your value add, in a weekend\nalternative is to what?\nwrite a new blockchain from scratch?\nsiddhartha_crypto\nright.\nS\nno need to build a new car, if you're just trying to build a better radio")]),e._v(" "),o("p",[e._v("mylo5ha5\nthe CC stuff....whatever they customize, they just have build the validation rules for what they build.\nexample:")]),e._v(" "),o("p",[e._v("i will let daniel to put 10KMD into a CC address\ni will let myself put 1KMD into the same CC address\nthere is a value in an oracle that tracks how many hits on the komodo website a page gets\nif one day a page get 1000 hits, the author gets teh CC address funds released to their address\nthe author & their key is mapped\nThe validation rules are:")]),e._v(" "),o("p",[e._v("the registered oracle value is >1000 (if not, do nothing)\nif it's >1000, get the author's payout address\nrelease the funds to that address")]),e._v(" "),o("p",[e._v("jl777\nsomething that projects with $100 mil of funding take years to get completed\nJ\nassuming there is an oracle, the CC would use the consensus rule that checks the tx for the pubkey of who is trying to spend it. then depending on that pubkey, checking the oracle to make sure they are allowed to do whatever spend is in the tx\ntx.vout[0].nValue is the amount\ntx.vout[0].scriptPubKey is the spending script (destination)\nsiddhartha_crypto\nOkay, from here we need to get more into the technical stuff, and this is where we need to rely on Mylo for help.")])])},[],!1,null,null,null);t.default=n.exports}}]);