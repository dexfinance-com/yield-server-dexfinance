// adaptors which we don't want to be triggered +
// which we don't want to be included in the enriched dataset
// in case we have old values in db
// note (added cbridge cause their apy values are kinda fake given they move the positions to a different chain)
const excludeAdaptors = [
  'koyo-finance',
  'pony-finance',
  'optifi',
  'cbridge',
  'friktion',
  'armor', // is now ease.org
  'lachain-yield-market',
  'euler', // adapter is breaking since hack, need to fix,
  'ratio-finance',
  '0vix', // pausing cause of hack
  'rehold', // apy values are fake
  'deficurrent', // vaults deprecated
  'dogium-farm', // seems to be dead
  'zest-protocol', // tiny pools
  'hedge', // seems to be dead, ui not working
  'double-club', // seems to be dead
  'yieldwolf', // dead
  'hubble-exchange', // no live pools
  'yodeswap', // v1 deprecated
  'optyfi', // dead
  'rodeo', // exploited
  'fairfi', // seems dead
  'mole', // needs to be reimplement
  'luxsfi',
  'geist-finance',
  'el-dorado-exchange', // hacked
  'sturdy', // hacked
  // removing cause a) curve pool is redundant cause we already have that on curve adapter
  // and the rebonding strategy is targeting a max apy
  'lusd-chickenbonds',
  'eternal-finance',
  'wild-base', // empty
  'vendor-v1', // empty
  'uncx-network-v2',
  'rocifi-v2',
  'steadefi', // hacked,
  'bank-of-chain',
  'zunami-protocol', // hacked
  'myso-v1',
  'civfund',
  'midas-capital',
  'pearlfi', // tmp
  'foodcourt',
  'yield-protocol',
  'autofarm',
  'complifi',
  'illuminate',
  'klap',
  'polylend',
  'tempus-finance',
  'kolibri',
];

const excludePools = [
  '0xf4bfe9b4ef01f27920e490cea87fe2642a8da18d',
  'DWmAv5wMun4AHxigbwuJygfmXBBe9WofXAtrMCRJExfb', // Solend COOL coin pool
  // ripae pools (reported by MathieuB as scam project, and definitely not noIL!)
  'ripae-seth-weth-42161',
  'ripae-peth-weth-42161',
  '0x3eed430cd45c5e2b45aa1adc609cc77c6728d45b', // mind-wavax on traderjoe, snowtrace shows tiny lp value, but tvl is huge
  '0x3c42B0f384D2912661C940d46cfFE1CD10F1c66F-ethereum', // test pool on curve? (CTDL-WBTC)
  '0x165ab553871b1a6b3c706e15b6a7bb29a244b2f3', // XSTUSD-WETH on uniswap
  '0xf81ebbc00b9bbc3a0b0cb1bc4e87ac157028698f', // nitrodoge on sushiswap, tvl on our side is way to large
  '0xEc54859519293B8784bc5Bf28144166f313618aF', // dai-o uniswap
  'BRnJFznuWEuqMZTHGKyWjYijugcj8wtb3oiLMyu2Tj4R', // usdh soldust pool
  '0xec54859519293b8784bc5bf28144166f313618af', // dai-o uniswap
  '0xE6D31ab5607eb7618a16B5923b67314d16BD350f-miMATIC-fantom', // decomissioned tarot pool
  // bunch of aave-v3 pools on fantom, are all frozen (updated adapter to consider frozen state, but need to add here
  // otherwise we' gonna see those pools on the UI for the next 7days. (can be removed afterwards))
  '0x191c10aa4af7c30e871e70c95db0e4eb77237530-fantom',
  '0x6d80113e533a2c0fe82eabd35f1875dcea89ea97-fantom',
  '0x078f358208685046a11c85e8ad32895ded33a249-fantom',
  '0xf329e36c7bf6e5e86ce2150875a84ce77f477375-fantom',
  '0xe50fa9b3c56ffb159cb0fca61f5c9d750e8128c8-fantom',
  '0x82e64f49ed5ec1bc6e43dad4fc8af9bb3a2312ee-fantom',
  '0x6ab707aca953edaefbc4fd23ba73294241490620-fantom',
  '0xc45a479877e1e9dfe9fcd4056c699575a1045daa-fantom',
  '0x625e7708f30ca75bfd92586e17077590c60eb4cd-fantom',
  '0x513c7e3a9c69ca3e22550ef58ac1c0088e918fff-fantom',
  '0xf0d17f404343D7Ba66076C818c9DC726650E2435-dot-dot-finance',
  '0xa3B615667CBd33cfc69843Bf11Fbb2A1D926BD46-6', // magpie ABNBC pool
  '0x1d03D8199f43ea030a5D1c2a5d4675d18581D129', // dino pool form unicrypt, jumped from 1mil to > 800mil in tvl
  '0x726e324c29a1e49309672b244bdc4ff62a270407000200000000000000000702', // USDC-XSGD balancer pool on polygon. can't find on UI
  '0xf4c0dd9b82da36c07605df83c8a416f11724d88b', // GNO-WETH on aura
  '0xa33c1963d74d203df6bffdfda3bff39a1d76e1d0', // sol pool on lyra
  '0x7a5011bf1dad77a23ec35ce04dcc2ac7d29963c5', // matic-peco
  '0x19D3364A399d251E894aC732651be8B0E4e85001', // ydai
  '0x09AA7178049Ba617119425A80faeee12dBe121de', // weth on klap
  '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9', // old usdc vault on yearn
  '0x152d62dccc2c7c7930c4483cc2a24fefd23c24c2-fantom',
  '0x5427f192137405e6a4143d1c3321359bab2dbd87-fantom',
  '0x7a5011bf1dad77a23ec35ce04dcc2ac7d29963c5',
  '0x45859D71D4caFb93694eD43a5ecE05776Fc2465d-dot-dot-finance', // until fixed
  '0xc3d088842dcf02c13699f936bb83dfbbc6f721ab', // bifrost veth v1
  '0x015908fec4ac33782d7bcd7a6ae88ab0ade405f4', //drop-usdc pool
  '0x7578aa78d5c5f622800d9205e942b12d353432b7',
  '0x05d3d04f1aeb77d591a0581827b148ea634c0d1c',
  '0xc1b228c22ca914069c7164e5489e8d79a9cbb922',
  '0xe50341e6f27a2514908f347e743119f3dfd84ad5',
  '0xb59A93eAB4059C58d33b0c29fE4Fa3F3433997cc',
  '0xB657B895B265C38c53FFF00166cF7F6A3C70587d',
  // curve exploit
  '0x8301AE4fc9c624d1D396cbDAa1ed877821D7C511-ethereum',
  '0xC4C319E2D4d66CcA4464C0c2B32c9Bd23ebe784e-ethereum',
  '0xc897b98272AA23714464Ea2A0Bd5180f1B8C0025-ethereum',
  '0x9848482da3Ee3076165ce6497eDA906E66bB85C5-ethereum',
  '0x4CF4f433e359a343648c480b2f3952FD64616a9a', // peth harvest
  '0x7ba1D55606900c5028Fb3BB82Fa0c198e3b0580E',
  '0x0DEA7dc835e2dB8E1fF8853577a5B8D5E5F55413',
  '0xB3D81Fad8f5092903592249d30cdeBD681057153',
  '0x80eF5eF7099C69bC9fcF952217240331F96bdF5F',

  // balancer hack
  // https://github.com/BalancerMaxis/multisig-ops/blob/main/BIPs/00notGov/2023-08-mitigation.md
  '0x2b4af4bb149cc06f5de580be013e86f81e4d2b30000100000000000000000373',
  '0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e',
  '0x585d95df0231fa08aeee35ff0c16b92fd0ecdc3300020000000000000000045f',
  '0xb3d658d5b95bf04e2932370dd1ff976fe18dd66a000000000000000000000ace',
  '0xf572649606db4743d217a2fa6e8b8eb79742c24a000000000000000000000039',
  '0x48e6b98ef6329f8f0a30ebb8c7c960330d64808500000000000000000000075b',
  '0xc7e6389e364f4275eb442ef215ed21877028e2af000000000000000000000ac7',
  '0x0bc54e914f53f98d16035f4f0d948f3e09c2fac0000200000000000000000bac',
  '0x02e139d53ebf4033bf78ab66c6a1e7f1f204487f0002000000000000000009f9',
  '0xb973ca96a3f0d61045f53255e319aedb6ed49240000200000000000000000011',
  '0x3efb91c4f9b103ee45885695c67794591916f34e000200000000000000000b43',
  '0xc2b021133d1b0cf07dba696fd5dd89338428225b000000000000000000000598',
  '0xa3ed6f78edc29f69df8a0d16b1d1ccf9871f918c000000000000000000000032',
  '0x53bc3cba3832ebecbfa002c12023f8ab1aa3a3a0000000000000000000000411',
  '0x5a6a8cffb4347ff7fc484bf5f0f8a2e234d34255000200000000000000000275',
  '0x9fb771d530b0ceba5160f7bfe2dd1e8b8aa1340300000000000000000000040e',
  '0xe78b25c06db117fdf8f98583cdaaa6c92b79e917000000000000000000000b2b',
  '0x302b8b64795b064cadc32f74993a6372498608070001000000000000000003e0',
  '0xdfc65c1f15ad3507754ef0fd4ba67060c108db7e000000000000000000000406',
  '0x9a020bdc2faff5bd24c6acc2020d01ff9f2c627a000000000000000000000ae2',
  '0xa55318e5d8b7584b8c0e5d3636545310bf9eeb8f000000000000000000000337',
  '0x970712708a08e8fb152be4d81b2dc586923f5369000200000000000000000479',
  '0x559d2ac340216e3a6630741147cda6a2cdbc2be10001000000000000000005de',
  '0xb95829adbacd8af89e291dee78bc09e24de51d6b000000000000000000000043',
  '0xe94c45de980f914904fdcfa9fbbe7c4a0ffe6ac70000000000000000000000e0',
  '0x1379b816b9be611431d693290289c204720ca56d000100000000000000000b6f',
  '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
  '0x6abe4e7a497b8293c258389c1b00d177e4f257ed00010000000000000000080d',
  '0x2a96254ca32020b20ed3506f8f75318da24709f9000200000000000000000456',
  '0x4cbde5c4b4b53ebe4af4adb85404725985406163000000000000000000000595',
  '0xee02583596aee94cccb7e8ccd3921d955f17982a00000000000000000000040a',
  '0xd3d5d45f4edf82ba0dfaf061d230766032a10e07000200000000000000000413',
  '0x8fd39252d683fdb60bddd4df4b53c9380b496d59000200000000000000000b45',
  '0x88e2a551655daadd7e4e67d14cf48bfb413d72680001000000000000000005d2',
  '0x7d6bff131b359da66d92f215fd4e186003bfaa42000000000000000000000058',
  '0x41503c9d499ddbd1dcdf818a1b05e9774203bf46000000000000000000000594',
  '0xeb567dde03f3da7fe185bdacd5ab495ab220769d000000000000000000000548',
  '0x7fe29a818438ed2759e30f65c2302295711d66fc0000000000000000000000e5',
  '0xfedb19ec000d38d92af4b21436870f115db22725000000000000000000000010',
  '0xf48f01dcb2cbb3ee1f6aab0e742c2d3941039d56000000000000000000000445',
  '0x20b156776114e8a801e9767d90c6ccccc8adf398000000000000000000000499',
  '0x8d13d878e44e8005efc0db4a831b95f84cb4b1540000000000000000000003c6',
  '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
  '0x05e7732bf9ae5592e6aa05afe8cd80f7ab0a7bea00020000000000000000005a',
  '0xf22a66046b5307842f21b311ecb4c462c24c0635000000000000000000000b15',
  '0xd2f3b9e67c69762dd1c88f1d3dadd1649a190761000200000000000000000bf7',
  '0x174d2608b1d794e9078ae2a4861684a38d4e7ae200020000000000000000065b',
  '0x2645b13fd2c5295296e94a76280b968bdcbbdfed000000000000000000000c11',
  '0x66f33ae36dd80327744207a48122f874634b3ada000100000000000000000013',
  '0x959216bb492b2efa72b15b7aacea5b5c984c3cca000200000000000000000472',
  '0xe8c56405bc405840154d9b572927f4197d110de10000000000000000000005a4',
  '0x53dd233c2af0147846579010b7c80bf9440afff4000200000000000000000602',
  '0x882c7a84231484b3e9f3fd45ac04b1eb5d35b076000200000000000000000a91',
  '0xac2cae8d2f78a4a8f92f20dbe74042cd0a8d5af3000000000000000000000be2',
  '0x00c2a4be503869fa751c2dbcb7156cc970b5a8da000000000000000000000477',
  '0xed35f28f837e96f81240ebb82e0e3f518c7e8a2f000100000000000000000bb5',
  '0xf28f17be00f8ca3c9b7f66a4aad5513757fb3341000200000000000000000b5a',
  '0xe0b50b0635b90f7021d2618f76ab9a31b92d009400010000000000000000003a',
  '0xbec621c9ab4ceddcc2a157ca9b5c475fab65f6a40000000000000000000000f3',
  '0xba1a5b19d09a79dada039b1f974015c5a989d5fd000100000000000000000046',
  '0x64dea772866476c9f88fbe95ee83664d6c909c1800000000000000000000022c',
  '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014',
  '0x89f1146fee52b5d9166e9c83cc388b6d8f69f1380001000000000000000009e7',
  '0xe051605a83deae38d26a7346b100ef1ac2ef8a0b0000000000000000000003ce',
  '0xe6909c2f18a29d97217a6146f045e1780606991f000100000000000000000bfe',
  '0x1e550b7764da9638fdd32c8a701364de31f45ee800000000000000000000047c',
  '0x9cf9358300e34bf9373d30129a1e718d8d058b54000200000000000000000913',
  '0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6000000000000000000000037',
  '0xa718042e5622099e5f0ace4e7122058ab39e1bbe000200000000000000000475',
  '0xbe0f30217be1e981add883848d0773a86d2d2cd4000000000000000000000471',
  '0x45c4d1376943ab28802b995acffc04903eb5223f000000000000000000000470',
  '0x133d241f225750d2c92948e464a5a80111920331000000000000000000000476',
  '0xe274c9deb6ed34cfe4130f8d0a8a948dea5bb28600000000000000000000000d',
  '0x6c56e72c551b5ac4bf54a620a76077ca768c8fe40002000000000000000004da',
  '0xf7705cd188a8ac806d28f85bdb13a38313e985ff0000000000000000000005b7',
  '0x23ca0306b21ea71552b148cf3c4db4fc85ae19290000000000000000000000ac',
  '0x60683b05e9a39e3509d8fdb9c959f23170f8a0fa000000000000000000000489',
  '0x8a2872fd28f42bd9f6559907235e83fbf4167f480001000000000000000000f2',
  '0x593acbfb1eaf3b6ec86fa60325d816996fdcbc0d000000000000000000000038',
  '0xe4dc3c1998ac693d68f4c77476d7c815694c3e94000200000000000000000416',
  '0x077794c30afeccdf5ad2abc0588e8cee7197b71a000000000000000000000352',
  '0xc443c15033fcb6cf72cc24f1bda0db070ddd9786000000000000000000000593',
  '0x04b54ea92d73de2d62d651db7d9778f0c49157d8000200000000000000000ba2',
  '0xba0e9aea8a7fa1daab4edf244191f2387a4e472b000100000000000000000737',
  '0xb1c9ac57594e9b1ec0f3787d9f6744ef4cb0a02400000000000000000000006e',
  '0x05513ca725b6ce035ca2641075474eb469f05f4c00020000000000000000041f',
  '0x8fbd0f8e490735cfc3abf4f29cbddd5c3289b9a7000000000000000000000b5b',
  '0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef',
  '0x4ce0bd7debf13434d3ae127430e9bd4291bfb61f00020000000000000000038b',
  '0xc46066ff87b3861ffc5c26ad2e9705190c22aa56000000000000000000000727',
  '0x519cce718fcd11ac09194cff4517f12d263be067000000000000000000000382',
  '0x779d01f939d78a918a3de18cc236ee89221dfd4e0000000000000000000004c7',
  '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015',
  '0x1bd2f176a812e312077bca87e37c08432bb09f3e0000000000000000000005a1',
  '0x6e6dc948ce85c62125ff7a1e543d761a88f0a4cb000000000000000000000743',
  '0x8a6b25e33b12d1bb6929a8793961076bd1f9d3eb0002000000000000000003e8',
  '0xb371aa09f5a110ab69b39a84b5469d29f9b22b76000000000000000000000b37',
  '0x1e2576344d49779bdbb71b1b76193d27e6f996b700020000000000000000032d',
  '0xde45f101250f2ca1c0f8adfc172576d10c12072d00000000000000000000003f',
  '0x9b692f571b256140a39a34676bffa30634c586e100000000000000000000059d',
  '0xe2d16b0a39f3fbb4389a0e8f1efcbecfb3d1e6e10000000000000000000005a7',
  '0x4c8d2e60863e8d7e1033eda2b3d84e92a641802000000000000000000000040f',
  '0xfe48fefea11cceb3bdeb328428f1b25446edad700001000000000000000003d2',
  '0x31adc46737ebb8e0e4a391ec6c26438badaee8ca000000000000000000000306',
  '0x0392ebb4aea38233e5b89acfabf7b418cdea8e4300010000000000000000073f',
  '0xcba9ff45cfb9ce238afde32b0148eb82cbe635620000000000000000000003fd',
  '0xf42ed61450458ee4620f5ef4f29adb25a6ef0fb6000000000000000000000bf8',
  '0xdb455199d96d5513d831f0029bd819597bc9d158000200000000000000000728',
  '0x600bd01b6526611079e12e1ff93aba7a3e34226f0000000000000000000009e4',
  '0x592fa9f9d58065096f2b7838709c116957d7b5cf00020000000000000000043c',
  '0x402cfdb7781fa85d52f425352661128250b79e12000000000000000000000be3',
  '0xa5a935833f6a5312715f182733eab088452335d7000100000000000000000bee',
  '0x428e1cc3099cf461b87d124957a0d48273f334b100000000000000000000007f',
  '0x30c016f5cf1d34c1bce4c8c9c302f66a268847fd0001000000000000000003f6',
  '0x1352fd97a1828093bf375f62e088bc196facd1ee000000000000000000000404',
  '0xea256adb68dffd067d27e95f4ad14eba12e86079000100000000000000000586',
  '0x3f7a7fd7f214be45ec26820fd01ac3be4fc75aa70002000000000000000004c5',
  '0xa10285f445bcb521f1d623300dc4998b02f11c8f00000000000000000000043b',
  '0xea52e5eb660ba64b9ba10ad9ae55a8156aa4d29a0002000000000000000003a2',
  '0x0c06e87c7b88d998f645b91c1f53b51294b12bca000100000000000000000bb9',
  '0x150e7b885bdfce974f2abe88a72fdbd692175c6f0002000000000000000009fd',
  '0x32be2d0ddeaf3333501b24a28668ce373ba8e763000200000000000000000014',
  '0x173063a30e095313eee39411f07e95a8a806014e0002000000000000000003ab',
  '0x6da14f5acd58dd5c8e486cfa1dc1c550f5c61c1c0000000000000000000003cf',
  '0x435272180a4125f3b47c92826f482fc6cc165958000200000000000000000059',
  '0xc6eee8cb7643ec2f05f46d569e9ec8ef8b41b389000000000000000000000475',
  '0x10441785a928040b456a179691141c48356eb3a50001000000000000000002fa',
  '0xf47f4d59c863c02cbfa3eefe6771b9c9fbe7b97800000000000000000000072b',
  '0xfebb0bbf162e64fb9d0dfe186e517d84c395f016000000000000000000000502',
  '0x6c8c7fc50247a47038015eb1fd5dc105d05dafba000200000000000000000ba0',
  '0x9d7f992c900fbea0ec314bdd71b7cc1becf76a33000200000000000000000573',
  '0x4a0b73f0d13ff6d43e304a174697e3d5cfd310a400020000000000000000091c',
  '0xec3626fee40ef95e7c0cbb1d495c8b67b34d398300000000000000000000053d',
  '0xab269164a10fab22bc87c39946da06c870b172d6000000000000000000000bfc',
  '0xbd4e35784c832d0f9049b54cb3609e5907c5b495000100000000000000000b14',
  '0xbbf9d705b75f408cfcaee91da32966124d2c6f7d00000000000000000000047e',
  '0x64cee2338369aa9b36fc756ea231eb9bc242926f0000000000000000000000df',
  '0xcd7b2232b7435595bbc7fd7962f1f352fc2cc61a0000000000000000000000f0',
  '0x64b301e21d640f9bef90458b0987d81fb4cf1b9e00020000000000000000022e',
  '0x341068a547c3cde3c09e338714010dd01b32f93f000200000000000000000a34',
  '0x5470f064a19c65263b3033da3a6124fdf0a9bab80000000000000000000000e6',
  '0x9cebf13bb702f253abf1579294694a1edad00eaa000000000000000000000486',
  '0x2e0d46d884af4053787e1838793bf98dcb87488e00020000000000000000072c',
  '0xe2dc0e0f2c358d6e31836dee69a558ab8d1390e70000000000000000000009fa',
  '0xe1c86d3908dc524aa3555e56adf973de7d3acdba000100000000000000000267',
  '0x00fcd3d55085e998e291a0005cedecf58ac14c4000020000000000000000047f',
  '0xf86785fe1cefd5069e6df1b4b54b72b1992003110000000000000000000005b3',
  '0xcf87708ea94916d7ccd13b86ce56006472d806fe000100000000000000000378',
  '0xffecea216f0d0d08bfe2cf572e03f217f8a2bf1300020000000000000000041a',
  '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013',
  '0xe0fcbf4d98f0ad982db260f86cf28b49845403c5000000000000000000000504',
  '0x624601b34e64a48ef91a6bf888e74ef3eceb1bf9000100000000000000000419',
  '0xf57c794f42da72b38c8f610ff3b5e8502e48cbde00000000000000000000055c',
  '0x56897add6dc6abccf0ada1eb83d936818bc6ca4d0002000000000000000002e8',
  '0xb5e3de837f869b0248825e0175da73d4e8c3db6b000200000000000000000474',
  '0xd7edb56f63b2a0191742aea32df1f98ca81ed9c600000000000000000000058e',
  '0xac6286126044e2ee2589d394a102cb54b7ab15a7000200000000000000000629',
  '0x8b8225bfedebaf1708c55743acb4ad43fd4d0f21000200000000000000000918',
  '0x31bccf9e28b94e5dacebaa67fe8bc1603cecd904000000000000000000000a01',
  '0x4ccb966d8246240afb7a1a24628efb930870b1c40002000000000000000009fc',
  '0x4689122d360c4725d244c5cfea22861333d862e6000100000000000000000468',
  '0x96a78983932b8739d1117b16d30c15607926b0c500000000000000000000006d',
  '0x8d7ca68d9a33148daf3ad1a495ed290f4eee013e0001000000000000000003b9',
  '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f',
  '0x483006684f422a9448023b2382615c57c5ecf18f000000000000000000000488',
  '0x8b6d3aa69c1cf47677281691b1abf3831ba1329d0001000000000000000000d0',
  '0x481c5fc05d63a58aa2f0f2aa417c021b5d419cb200000000000000000000056a',
  '0x03090a9811181a2afe830a3a0b467698ccf3a8b1000000000000000000000bf5',
  '0x639883476960a23b38579acfd7d71561a0f408cf000200000000000000000505',
  '0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f',
  '0x5ddb92a5340fd0ead3987d3661afcd6104c3b757000000000000000000000187',
  '0x3db543faf7a92052de7860c5c9debabee59ed5bd000000000000000000000a62',
  '0x9fb7d6dcac7b6aa20108bad226c35b85a9e31b63000200000000000000000412',
  '0xf48f01dcb2cbb3ee1f6aab0e742c2d3941039d56000200000000000000000012',
  '0x6f34a44fce1506352a171232163e7716dd073ade000200000000000000000015',
  '0xf51776b52dfb5bf9a7f3ed150c20e78d4dff6e640002000000000000000004e9',
  '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b',
  '0x216690738aac4aa0c4770253ca26a28f0115c595000000000000000000000b2c',
  '0x8b58a1e7fff52001c22386c2918d45938a6a9be30001000000000000000008d9',
  '0xb841b062ea8ccf5c4cb78032e91de4ae875560420002000000000000000005b7',
  '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473',
  '0x10b040038f87219d9b42e025e3bd9b8095c87dd9000000000000000000000b11',
  '0x968024662b9566b42d78af23a0f441bc8723fa83000200000000000000000418',
  '0x9321e2250767d79bab5aa06daa8606a2b3b7b4c5000000000000000000000bf4',
  '0xcf8b555b7754556cf2ac2165e77ee23ed8517d7900020000000000000000045e',
  '0xcb89e89d798a4563d1599ea5508282e13b225b520000000000000000000000e4',
  '0xf227486361252907cb768142a2f4caed08a3d7cb0001000000000000000005dd',
  '0x949a12b95ec5b80c375b98963a5d6b33b0d0efff0002000000000000000009fe',
  '0x904018c54b2382929b15abaae55136a392af4294000100000000000000000729',
  '0x567ecfcb22205d279bb8eed3e066989902bf03d5000000000000000000000452',
  '0xe15cac1df3621e001f76210ab12a7f1a1691481f000000000000000000000044',
  '0x93c7defe51d787010babfdb19504d5a72166e11200020000000000000000041c',
  '0xff600724d670727872a1f7483049326c111d993d000100000000000000000448',
  '0xb266ac3b7c98d7bcb28731dac0ef42dba1b276be000000000000000000000be4',
  '0xd69959fa7910ceb3a2d359ed33cb8297670b69370000000000000000000005b2',
  '0xbf2ef8bdc2fc0f3203b3a01778e3ec5009aeef3300000000000000000000058d',
  '0xd4accb350f9cf59fe3cf7a5ee6ed9ace6a568ea9000200000000000000000b75',
  '0xff8f84e8c87532af96aef5582ee451572233678b000200000000000000000478',
  '0x2e52c64fd319e380cdbcfc4577ea1fda558a32e40002000000000000000005ba',
  '0x4fd63966879300cafafbb35d157dc5229278ed230000000000000000000000e9',
  '0xc83b55bbd005f1f84906545fcdb145dee53523e0000200000000000000000b30',
  '0x11839d635e2f0270da37e8ef4324d4d5d54329570002000000000000000004d8',
  '0xac976bb42cb0c85635644e8c7c74d0e0286aa61c0000000000000000000003cb',
  '0x86aef31951e0a3a54333bd9e72f9a95587d058c5000200000000000000000912',
  '0x9001cbbd96f54a658ff4e6e65ab564ded76a543100000000000000000000050a',
  '0xb9bd68a77ccf8314c0dfe51bc291c77590c4e9e6000200000000000000000385',
  '0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd000000000000000000000046',
  '0xa611a551b95b205ccd9490657acf7899daee5db700000000000000000000002e',
  '0x02d928e68d8f10c0358566152677db51e1e2dc8c00000000000000000000051e',
  '0x198a22e73aadd2d0ea8e2963799d38ae26adee2e000000000000000000000577',
  '0xd997f35c9b1281b82c8928039d14cddab5e13c2000000000000000000000019c',
  '0xc5dc1316ab670a2eed5716d7f19ced321191f38200000000000000000000056e',
  '0x4228290ee9cab692938ff0b4ba303fbcdb68e9f200020000000000000000057d',
  '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e',
  '0x3dbb8d974b82e82ce79c20c0f5995f4f1f533ede000000000000000000000470',
  '0x216d6db0c28204014618482c369d7fbf0a8f3232000100000000000000000b60',
  '0x418de00ae109e6f874d872658767866d680eaa1900000000000000000000047d',
  '0x098f32d98d0d64dba199fc1923d3bf4192e787190001000000000000000000d2',
  '0x7f4f4942f2a14b6ab7b08b10ada1aacede4ee8d4000200000000000000000b44',
  '0xd00f9ca46ce0e4a63067c4657986f0167b0de1e5000000000000000000000b42',
  '0x2ba7aa2213fa2c909cd9e46fed5a0059542b36b00000000000000000000003a3',
  '0x43da214fab3315aa6c02e0b8f2bfb7ef2e3c60a50000000000000000000000ae',
  '0x334c96d792e4b26b841d28f53235281cec1be1f200020000000000000000038a',
  '0x981fb05b738e981ac532a99e77170ecb4bc27aef00010000000000000000004b',
  '0x479a7d1fcdd71ce0c2ed3184bfbe9d23b92e8337000000000000000000000049',
  '0xd0dc20e6342db2de82692b8dc842301ff9121805000200000000000000000454',
  '0x2c8dbe8eb86135d9f2f26d196748c088d47f73e7000200000000000000000a29',
  '0xb973ca96a3f0d61045f53255e319aedb6ed4924000000000000000000000042f',
  '0x70b7d3b3209a59fb0400e17f67f3ee8c37363f4900020000000000000000018f',
  '0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d0002000000000000000000cc',
  '0xa9cb51abfbbf2ca877b290e988b453f8bf4ab630000000000000000000000430',
  '0x1f131ec1175f023ee1534b16fa8ab237c00e238100000000000000000000004a',
  '0xeb38aa08bc00ba68237543d2daa1476b4dfd37f800000000000000000000073a',
  '0xf0211cceebe6fcc45052b4e57ee95d233f5669d2000100000000000000000c01',
  '0x362715c164d606682c4ea7e479633e419d9345eb0001000000000000000000e7',
  '0x8c63702d4d4a521a6a8ecec8ab8f7ce9d1d6299e000200000000000000000443',
  '0xa8af146d79ac0bb981e4e0d8b788ec5711b1d5d000000000000000000000047b',
  '0xd6d20527c7b0669989ee082b9d3a1c63af742290000000000000000000000483',
  '0xc69771058481551261709d8db44977e9afde645000010000000000000000042a',
  '0x99c88ad7dc566616548adde8ed3effa730eb6c3400000000000000000000049a',
  '0xa8bf1c584519be0184311c48adbdc4c15cb2e8c1000000000000000000000bf6',
  '0x5b3240b6be3e7487d61cd1afdfc7fe4fa1d81e6400000000000000000000037b',
  '0xf52fc9d5aa16c782c9ba51be0da10f1ccf05c702000100000000000000000394',
  '0xae8535c23afedda9304b03c68a3563b75fc8f92b0000000000000000000005a0',
  '0x2c4a83f98d1cdbeeec825fabacd09c46e2dd3c570002000000000000000000de',
  '0x4b18597d3f7c9786a133827572e6a318d55c9fd200020000000000000000028b',
  '0x9964b1bd3cc530e5c58ba564e45d45290f677be2000000000000000000000036',
  '0xefc1bb0b97780cf7c22059aa7c7e7e88a049d21100020000000000000000041b',
  '0x7449f09c8f0ed490472d7c14b4eef235620d027000010000000000000000072d',
  '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012',
  '0xc0064b291bd3d4ba0e44ccfc81bf8e7f7a579cd200000000000000000000042c',
  '0xecc53ac812123d471360ea3d90023318868b56a5000000000000000000000429',
  '0x68a69c596b3839023c0e08d09682314f582314e5000200000000000000000011',
  '0xde0a77ab6689b980c30306b10f9131a007e1af81000200000000000000000ba1',
  '0xd1af4974fcc995cf36ba40b189caa92964a9126d0000000000000000000000f1',
  '0xff2753aaba51c9f84689b9bd0a21b3cf380a1cff00000000000000000000072e',
  '0x71bd10c2a590b5858f5576550c163976a48af906000000000000000000000b27',
  '0xe191504f9127deb015910768c8a6ac71d185bf91000200000000000000000603',
  '0x57793d39e8787ee6295f6a27a81b6cca68e85cdf000000000000000000000397',
  '0x04248aabca09e9a1a3d5129a7ba05b7f17de768400000000000000000000050e',
  '0x4de21b365d6543661d0e105e579a34b963862497000200000000000000000045',
  '0xd4500f270880488a481de1b3256a19b3d9c8fd7e000000000000000000000710',
  '0xeb480dbbdd921cd6c359e4cc4c65ddea6395e2a1000200000000000000000946',
  '0x252ff6a3a6fd7b5e8e999de8e3f5c3b306ed1401000200000000000000000bec',
  '0x015f34e47ca0a88675098c4d6601817403f07a32000200000000000000000723',
  '0xd90dc295d571adc7575563d892aa96ac3811d21c000200000000000000000402',
  '0x4a77ef015ddcd972fd9ba2c7d5d658689d090f1a000000000000000000000b38',
  '0xe0042e7ee284ff355622b7660ccb34be114936fa000100000000000000000400',
  '0x49a0e3334496442a9706e481617724e7e37eaa080000000000000000000003ff',
  '0x25accb7943fd73dda5e23ba6329085a3c24bfb6a000200000000000000000387',
  '0x5a7f39435fd9c381e4932fa2047c9a5136a5e3e7000000000000000000000400',
  '0x7839210cd48356bdd6fd400e30cfc7140e1e5ad6000100000000000000000449',
  '0x59cfc2307e8b218c242ba61407a07cade73bd6d7000100000000000000000585',
  '0xe2272cddb2cc408e79e02a73d1db9acc24a843d5000200000000000000000ba7',
  '0x7079a25dec33be61bbd81b2fb69b468e80d3e72c0000000000000000000009ff',
  '0x26c2b83fc8535deead276f5cc3ad9c1a2192e02700020000000000000000056b',
  '0x9e2d87f904862671eb49cb358e74284762cc9f42000200000000000000000013',
  '0x91e96deddca930669feb699d16cc3416289ec7aa000100000000000000000748',
  '0x547e9ad4b824f09e9cf1c6d163cf308d4cf998120001000000000000000003c9',
  '0x980dfa8bd5c4a96e1b762fe8154b8a2045dab2d70002000000000000000003ef',
  '0xa5eb9166679a85bdb3eaa2941ed35c8d909484db00020000000000000000052b',
  '0x78ab08bf98f90f29a09c9b1d85b3b549369b03a3000100000000000000000354',
  '0xcaa052584b462198a5a9356c28bce0634d65f65c0000000000000000000004db',
  '0x50fd4d5d60d6df38f5e29721bc241b537e182bf40002000000000000000005f9',
  '0x4c81255cc9ed7062180ea99962fe05ac0d57350b0000000000000000000005a3',
  '0xa1ea76c42b2938cfa9abea12357881006c52851300000000000000000000048f',
  '0xff09914bf3d1f61ff3468cfcc4529665b908afa3000100000000000000000741',
  '0x4ae3661afa119892f0cc8c43edaf6a94989ac171000000000000000000000c06',
  '0x16b98793f3e6a17d15931a2c9f98fe28d1c845a1000100000000000000000c1f',
  '0xa50f89e9f439fde2a6fe05883721a00475da3c4500000000000000000000048b',
  '0x4c36a9a52ca3baf1069e3531d57d96c171a66a230002000000000000000001e9',
  '0x3035917be42af437cbdd774be26b9ec90a2bd677000200000000000000000543',
  '0xc963ef7d977ECb0Ab71d835C4cb1Bf737f28d010', // rdnt-weth sushi pool in radiant v1 adapter, redundant
  '0x7007535de9f864f0c15fe6fa288ce3feb842f72c',
  '0xbefaba1c380d8b0a53bc604d8b809684775e74f8',
  '0x4b4b425586fa9b5cf0d06baf5ba9eb9e9b936e66-avalanche',
  '0x295d1119c1183dc64feeb4bdc3f06f652525013d-avalanche',
];

const boundaries = {
  // we only insert pools into the db with a tvlUsd of minimum $1k
  tvlUsdDB: { lb: 1e3, ub: 5e10 },
  // we only get pools for the UI with a tvlUsd of minimum $10k and max ($20 billion)
  tvlUsdUI: { lb: 1e4, ub: 2e10 },
  // we only get pools for the UI with a maximum apy of 1million %
  apy: { lb: 0, ub: 1e6 },
  // reading from database returns only pools which is max 7 days old
  age: 7,
};

module.exports = {
  excludeAdaptors,
  excludePools,
  boundaries,
};
