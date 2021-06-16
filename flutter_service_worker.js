'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "5ba28b87cd767efa81c0aee96cdc3b96",
".git/logs/HEAD": "28a5f38db6c09e0549c0ded0e0b3b598",
".git/logs/refs/remotes/origin/HEAD": "18ac1920be350430e0590d9e999556f4",
".git/logs/refs/remotes/origin/master": "913db3377fb911744d75a8fdbbfe8a84",
".git/logs/refs/heads/master": "28a5f38db6c09e0549c0ded0e0b3b598",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/53/3b1f0d32aaff13d5e09b17e3f2c765b589a7f9": "3d87147ef90f288291eab45a1e1bb0d1",
".git/objects/53/24864283107a69909f34dccbf056387af1dad6": "506b9baffa162cc78c366e3497a0019f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9207a10628dc146a8ff8679f2d54ada18b71e0": "900aeb93fb3b3dc1f9a4d0861c166249",
".git/objects/78/bda897b84b29b15f327e531712626e3638e38d": "6ec3b60a321228dfa8f9e6c76f500ced",
".git/objects/78/fd857465c7738f94f6e0261b2f519d7ec6e5c9": "75a2f840a1822002b31d4a5dad169d36",
".git/objects/af/9278203093b9b10534707c24c579e007258e13": "9f8ea8cfd5ede0016d80a34bf0d7cfef",
".git/objects/af/c2b3dee817d156faf7215c1b9275c6ee585e31": "468ed608bcc98e15fd94c8d033e62621",
".git/objects/80/330701ea168e29013cfc2fc43cd1b3d781b4f5": "58b94375e3d751246f1b14f9d27b77e0",
".git/objects/e5/00a2c5012c076eb23c9058745e83c707ef2f38": "49b7c4614194e2b2c52f3d6c2c9e9504",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/9d/0fb0a40ed69d250800964a09e142b2bf870ff7": "266110aed78c00245ac14202e83fab07",
".git/objects/66/a0afaacb93d4d69357f61028fb99302035d4bd": "8e1d0b6b8bad09bbaf03d64185aa00fa",
".git/objects/66/6e191219fbc2d5f9b405726bc9656e14808124": "2caa1a85bfb91682a3563031b5fdeb93",
".git/objects/2c/a95117ad4a8a713e48e18a21c46ab62416369c": "a2603333744e56a76414ed6bc0583a7b",
".git/objects/1d/33ec4476190546807a6244f750d9ad61f88001": "752b811461d1c733056b5d5c32e5ae8a",
".git/objects/1d/5934b2c477d868e105666d5c58580a62da0958": "34a4aad426d68fad26b5ece64f9a497e",
".git/objects/db/1e24a0fc4e2e33ac2485643d17ce799e0af225": "a25c891849eb19c05464b257a0b4410b",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/db/1d3bcf4a6975532102788471082f5b4bcff68b": "1afa7461c96d255f66b1070f6139cdaf",
".git/objects/0f/a6b675c0a52be9242fc68269eefce46828ad43": "3732df75a452960f40377486a7eb2955",
".git/objects/0f/40b26aeecbf7c64013a245102b94c378653786": "4b2338103618e560b99a5ebb088f28c2",
".git/objects/71/d47239b9fc7ad8a55dd3f2c2cac989d72b6b96": "664468cbd9a4996507955cce25083917",
".git/objects/71/0adfb2b1c1401e2d010a97ed64cf9903d257ed": "0be6255bdc7cad4864903a9cdb2c280c",
".git/objects/ef/2edf8ea3fc42258464231e29140c8723458c1e": "1582856bbd06da50094f56e9a1d1d8e4",
".git/objects/08/0d6c77ac21bb2ef88a6992b2b73ad93daaca92": "f26fdfe06721560cfda28c4d18d77457",
".git/objects/6b/60c1042f58d9fabb75485aa3624dddcf633b5c": "ae322a11c2bb563e44437a28f9f9f5e7",
".git/objects/93/e3a395d72173e57046e2f72823e1981aa4c048": "009e84709127400d1eb0df05f1f40ae6",
".git/objects/93/51aced5b0cf9e729e690c5482e49e6731013cf": "5e14e06e18c66391913c936d5fb8664f",
".git/objects/74/b5e053450a48a6bdb4d71aad648e7af821975c": "86409cfc44b46eaccb13a8246a7a5cf1",
".git/objects/16/77e6dd434e73f8a0fad61fbcb86d16c9e93ea3": "ca90286bcdfaff693f6e4357f4c532fb",
".git/objects/24/9c21c21ad60815fc86988a3e7ccfd4d3b490ef": "10ec6e375a5c1d863e3f852e7fa66746",
".git/objects/09/b92f0cdc601f44da5be1c6c42ea72531a40f72": "d44f5420a435d39a977a2fd12f60342c",
".git/objects/a5/ed83abdaa7b693b4fc1bed9d295a590309b9e5": "9d239a1b3e258d7783c2e6b8aa9530a0",
".git/objects/20/f66cc0022caddf5e3270673e27f7033b612ed8": "fd169db95fc206dd2d62bd7695de1a1d",
".git/objects/20/07dc79c85635ec42397fad250ace961e2497a4": "35bb8173254e96ce6bd8616e62b5a1dc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/f9/0e661ef839d86c2acd5e6c169451d27c539eb0": "b639cd616b3c98e9b25f4de0a9de7a2f",
".git/objects/f9/ba6950a097f0c21f1ffc7a4f4b4e2a72927adb": "711be47085da29d04da2467eb31eeed4",
".git/objects/e1/f0f02fa047eff83351d2c40b3729258574f4b3": "6ed5854f515b93e82d279a28b0b70be3",
".git/objects/e1/bdcf79a64fc8a49b3ef23676230001c935a42c": "c672d8f91b8342e56dc37429ae313db6",
".git/objects/54/786d199bb5168c131924f66fafd9dbcd8224e0": "6bbba7392be3d23238ebd525d83cb961",
".git/objects/54/9c7b3fc33365ccaed6d705ada7b74777957ed2": "f176d34446d1dd0b454945f98950609b",
".git/objects/1e/ad891a4fd9c28180850b311a0e6bf7c130e8c0": "ec78baa4a31355ba626cf82b46de06ec",
".git/objects/30/29d844969eef86df3b151c6b79371dfbdba59a": "37893c8be98d4a02032250802ff6fb10",
".git/objects/81/e1b5608d30fff8babee1b0bb23c76fb6c15048": "680a8f927022cc0ce9c041edeac07412",
".git/objects/81/120ec098c9616da6604adc2ed7eca0b0c1f502": "421149920cf6ba24d78bef8061ff9e83",
".git/objects/a6/0c9b70dd0989df2ae680ebeb46183e256c1046": "162067f109c199a02b707bb64065e14c",
".git/objects/b5/f8980732c6cc5a29b2149380a9948197f28277": "9e0440b50a769b2a850d791c0084309f",
".git/objects/85/85773ec87521021306317953fd4cbbffec0c3f": "eb5087899ecd9b89b3d7c286d2f3cc65",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/6ae46c758077c1cb4701ea0af9d192ddd11aa3": "268c81a0bbc964cf0c6ecd12d116e4ad",
".git/objects/39/db1a9fd200ea52338f2594b0375eda672ee460": "6ed5dca2a48ff080e552585d1b5244fb",
".git/objects/10/23c479b8750aa7236318f2019a1be46a7cc4a1": "4e237a858186464a13409ce5c229267e",
".git/objects/10/254d36ccd82ae2b01b4683d6dd199d03f713f3": "265181ec55530cfb012fedb6799bdbc1",
".git/objects/87/2d786c4e5cc41086f620abe90746af9a99c42b": "2581844623df5265888481daebf35be7",
".git/objects/87/8515ca28cca7db492c4e285bf76e9bca0c884b": "96bcef8cddbf4145686bcf2f4e05bf43",
".git/objects/3e/314c2de4f3def415cf64a380388be7bd589d3b": "44543b3f46d6495ee1792b624d473965",
".git/objects/3e/22070918bb596bcb314339e97187277d18e487": "452f9f93a976402557310298a53540d9",
".git/objects/36/16d5f2b1c0d45a521567025758a6a6ecc26fb5": "8cfd11eff701b356bd57612d91d0585c",
".git/objects/89/e7be489f34c84aa9a7ccbcd9bd8d3d546310d0": "67543294b1549bde20ac4d69129c06d6",
".git/objects/89/14f2d88e5c81911d00bd893f36a6ee19fd4837": "395957b3b725ac193f8c1255e151198e",
".git/objects/be/e7318f19031ddb2c32d5bc9239294756a83818": "c50acb9dd7029f2b08c6c7baba8a08b2",
".git/objects/be/01e4096d0a215fb097b40745dd564dc1103205": "b5499f225a47c4149e5123bdbb4cae1a",
".git/objects/c0/89a5cce5b5bcf3bd39deb1883194ccb7f64f68": "45808e2e2f76a4dd3171c7990aeeb601",
".git/objects/d6/411563b18a52df5b332af318f54f86e6ba0c22": "9e585f5bc47e5105748a425ed49f5609",
".git/objects/cf/2c60ece001a7bb103396e68cb07fd4976167aa": "4ef5a4fc816816df4294ee8dbc466124",
".git/objects/28/bb7f2523c9833c33aa6a1361e22024f93242b2": "14056d02aee25087e143ea6ff6c01f6f",
".git/objects/c4/da7b55e0694935f03fa8fb8c4c3eb399cd48d4": "40495dd084d8aa4ee33804c6200e0587",
".git/objects/00/8bde36b04251084ce6c3f99317c8c82d8693c8": "086f40fda8611988bc211b5244b7b3cb",
".git/objects/00/80fb7f5a826f1c83821fb6d1098cc73dd4384f": "0a036b1c70938f974326f33a3ce43e60",
".git/objects/7b/955be1bf46296a75d6a2f8f466a33682116077": "93d42811ef4eba827c042c498e9ef0c7",
".git/objects/1b/4631d6fef13d7d7270b30c44fe9846da4a0ef2": "0466b25d090cfb71b23a8040f9d0deeb",
".git/objects/1b/2915eafadd5f219f2b94edd802417af37bcdc2": "d6a597feb40af96c6f2c2e8918d394ec",
".git/objects/1b/cfd27dead97182b989bbbca37b5bb8cc908574": "b3e7440a1584686652e0521daea7c183",
".git/objects/e3/4b635ce8992575d5bc78ab9b31896d6a9dc436": "6b494fcda5b4332b3f0651fef63058ec",
".git/objects/0b/95b73e84d54067e70686c2b641afec56dea632": "53e253236d1d7bc71e8faf8beeab5f96",
".git/objects/e7/605d0aa62d999e2a361bb165387ed8cd76ab76": "554331ce3ae9c351a659291eb0f31efb",
".git/objects/8f/2609b7b3e0e3897ab3bcaad13caf6876e48699": "f18775d58d6660023c692edb91cfbc93",
".git/objects/d5/3e6524f3f4467b7d342373668168c868bc2261": "2be37dd35d696b81a62a9658a771017c",
".git/objects/0c/83cde2ce793a26e49d9a3ef8b180384cdc5a38": "eb41ab61fab0a03964f16c24c9986ab4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/1777cc471a4344702741ab1c8a588998b1311a": "f0bb36bf0ddee93dfc3200f4c8429c9e",
".git/objects/e9/01ce61db1ebf1b7a509ea6b8e4a3f78a19dae8": "8cc3648a04d9e179d8fa391f27f65447",
".git/objects/e9/e57dc4d41b9b46e05112e9f45b7ea6ac0ba15e": "a2d5b36ef6f3dc9b3d2585f84fa8ae47",
".git/objects/b1/b753125a98c26c2a0c19e0d550325bd4f575a5": "b040bc43dff03bb728652a167c1ebd3e",
".git/objects/37/845757234ccb68531c10cf7a2ffc589c47e342": "7aba0becd8aaec2077687a5c220d0851",
".git/objects/4d/a42d01f8c796666859a576da31b7f5bc19500d": "ac54269a14318fb40ffa0915ee70a484",
".git/objects/4d/29575de80483b005c29bfcac5061cd2f45313e": "7f127d2f958120c0a0a2fa9dc0ea74a8",
".git/objects/52/53d3ad9e6be6690549cb255f5952337b02401d": "6b6835f956fbe23e69168c4611b6d114",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/aa/069f27cbd9d53394428171c3989fd03db73c76": "b8cac44fd2c52ec63d0cb621a9ae7f6b",
".git/objects/22/c13ac4e0735cc67d51a5c9d1612c6daac13b3a": "39f34dfd4a4a4c490797da0b44678592",
".git/objects/1f/03afeece5ac28064fa3c73a29215037465f789": "a317bbf43c11f99a48d342bddcf9ce7b",
".git/objects/29/973f9a4d5a33219cdf17b525c14aef96d4219c": "02d548d561c3e3eed602dde821120104",
".git/objects/c3/e647e31257e6dafa119309e045548feaa50d7a": "d8aa1c7672dcda95e6fc5031dc1596d5",
".git/objects/76/39eeecc2f558e25154a15bca937eb4315dcfe5": "88dc0baab253dacc497356f840c67e55",
".git/objects/eb/2e3362c3bb0afc3e5fc3d926f72160af59d8d1": "7a14bfeff69e04e840e6cba9041b6a1f",
".git/objects/8e/29b36dea7f04ae8729d8b33ecc05c3c9b0fe46": "b8f97b6fbc7fee4d6b7df601a8d60c14",
".git/objects/8e/58bfc5c0a746a5a1a9e40fbad64bd9a1ed58ae": "64acc8137ae40a0fba4d7c49664dbbac",
".git/objects/ed/70f6413e87f59e98bf327a8900a4edc25ed080": "0c172b07e7bcb42c58ce2ab4bb6341ba",
".git/objects/6a/9f85fe9c677d07dcb919087e26622b2840b4e4": "3991dc6e0f0eb3171ed7ed07277db0dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a3/799f1d229aa25113609c422b6b1de06e8f658e": "f61fcdb904b72ef883f3502b578b5ef1",
".git/objects/26/16b2f026a973ef865c1226a3ac29171fa326b4": "16ea684d4b0e8d66286ffb4be166f575",
".git/objects/e6/eb3a11707bdfc45d22e4713fee1522eb950791": "e35058b8b6ae14f76c0a946e5d48353b",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/a0/fd768284887640786d8d7c99d49be3898e41de": "def3febe9f6f9474bee61fabca49a3ad",
".git/objects/75/fa98ebedf98618a343e004255a67eadd6aaf99": "b6e2480b178718bed17a6aa912fad9e4",
".git/objects/d1/51d246a5bc651533e6669f02c4a6974395975c": "4bdffc50d87d4f26d61227e583fdaccf",
".git/objects/d1/ff8d830fa6f1b50b5ad1067f32bfd993336143": "deffa66d53490b0151ec872b94130cee",
".git/objects/d1/a8ae71cdcfafab098a0bcbdd730253cf4cbfa7": "34ab78986ca114e1d3637681b1f55d4f",
".git/objects/13/1ff1410fdaf474e41e7de361130ffc7c2e734f": "93886e4d454d927072543d6615287701",
".git/objects/45/a75d32daf737789909dcdf8f80deaaf8eeccaf": "5c33bc4dc9c821514f6f16ad562109b8",
".git/objects/45/f20fa7c5fa641518b6c323d7b63bdca5965392": "5d2e55359acf89ddb25689b5dfddd05f",
".git/objects/cb/88e4bf4a6adcadcbe3552977fbf484c5691d5a": "18dba15248bb41ff90a397486401bf00",
".git/objects/ac/a93deaa55db855a3c461e76d709e81791746d9": "200acac9460e4d612901e5c5c7de9506",
".git/objects/ac/2013ced941cab2578160c7d3a8a48a2f23c7c9": "7f281e44b86b836e6752604acbf7ffdf",
".git/objects/ac/d62f6404d96614ff7234f78372a41ead103184": "0094ce825e0dcecca16107fda1b99ed9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e0/b7ceb7a107144f0000710861f51dad4b51f2c8": "f74cd20884d4b7b99698903bc50eb4a6",
".git/objects/bb/e59c6068ff54609236a7d055df9b3c381927a0": "835ff8f2188ddcde98231ee3ce53ba29",
".git/objects/c5/9cf7e21617058831258d31146bde7754382a39": "d6399e09c234fe123a3d8a3232b32572",
".git/objects/c5/218832f638c02ee3ddbfaba36242c4337d1516": "cf3c2d6a349f894df61e4507d203c18c",
".git/objects/47/8606ebc6fd78265fb844d9ee3c882f91ca0ca4": "916088227f8c08c8de236bb9e83bdcde",
".git/objects/90/3e7526dfab0efc91e96fb1fa5954f85c1956d5": "85d2ae5e25eadc2554fede26798e9587",
".git/objects/90/f43b40ca746407b81f3d86891778924f3d1ad4": "a69fd31cfdd2cce865688cdcde97f760",
".git/objects/7f/f7781b3c146701ae5276603b15741a72115639": "fe0e7ae52fef690996f835f5b4500ca6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/9f/ac9e9df5f367d9a052eb7874b85a4845c9a462": "d819b094371cb822b7422b4b429ba042",
".git/objects/9f/bc32b62ff7260192ee5ceae19a8da6a373ecb0": "2b4b9365c3dea3c457269a603c17fd9c",
".git/objects/9f/15ec88a528f83d153dc07efd9ab03ad0029e48": "957dff37f756bdacfe5a24b6c6568fa3",
".git/objects/49/bf6f3456a7baffe3e605031c0cd85cd56bd463": "efaa5e55d577a7e2f8fc9e600a223122",
".git/objects/49/1644e8b47bd9c6e2a6f73ddfb1171484f172d3": "1110ea1f34061ec2e9c869f187c3e8b8",
".git/objects/60/99906f60901f5ea8740fc9ddca964b3b64d30f": "bad7fdf002beb2426e9c6cce02600185",
".git/objects/60/59c2935a2a81a66e0a87861b94e590b3be24fe": "50f35bdee39e288b510c9fd55be5e485",
".git/objects/a4/e47a6545bc15971f8f63fba70e4013df88a664": "2511086bcbe568dba2f6e949fb061f6c",
".git/objects/8b/c494ebbda087989025a200b2c31ad650fd35fd": "a57d7e951a24789b84d4b6ffda910a4a",
".git/objects/b0/7d4574ab52d566fed12ad5abcce439b6a9f134": "e2557738b31e6265a07cd8b68435a645",
".git/objects/61/a9bf844674c727efd245b0c66b0712de0b7f5a": "cd087272b04a513fbda97dbe1a46e108",
".git/objects/67/70c6e577f2292106dbb5904e1fb6fd4f919d89": "e095b853d4f53397d42e010412bedca5",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/67/f81053cb8ff97860e5c16ceab00206922baead": "045e2b5d2f5d622b958c275199798793",
".git/objects/40/951e67cebebb51dc076ad6a049fbd07df9e48c": "0f2f96b79619c706d45f72445235378d",
".git/objects/df/d5b6efd35be9b6e3b785bd23d538acad4c1178": "f4fa732cc69f8aa6491782915d3b7e65",
".git/objects/df/680356c3d222e228239ca3bbd151f52c4bd949": "3f58d9e6f7385072ed5d6c0b0b380bcd",
".git/objects/25/e686698645a42fd158e869e4a46a08e4935ae2": "c58865d65a8f5d5d5c64fe974b3a918f",
".git/objects/1a/aa5253b73e2899d5c4d6c9999720cde87ab6a6": "5859681b45d6b57abea54dfe19812185",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e86256d795f8636232ab31699b63560f576984": "7e7a8f29eae414569ab533051bc791bb",
".git/objects/8a/4cdf6ac9d7b184de788a3e95e594d992ab20fb": "07c1e40f0c6ef3bb1b1907f3eedb6ee6",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/43/20c05014283e09f00dedcd064534e6b6cc403a": "6c248889ebffd11c123af102a0abbef1",
".git/objects/fc/449856666424f875c8a2139124faf78062fd15": "20fc8ff03d9e30759256ddbe71855e21",
".git/objects/fc/44b0a3796c0e0a64c3d858ca038bd4570465d9": "aa1db0c30ac5a1b003fa1db8d3f87636",
".git/objects/cc/8336decd1c59354c1ff912dbac59062da23f7e": "548344a05bb32bd3f11c5a71b82737f3",
".git/objects/cd/8c5b8b710beb0cb7ebca06758771edc510b4f1": "e54c805d8b100890f270767a2e82c885",
".git/objects/ec/2585e8c0bb8188184ed1e0703c4c8f2a8419b0": "f403ec4133882df022be178ad306848b",
".git/objects/6e/37160ea68b2ec034da5a5fbd20938cad41d717": "7ac03e4e4afd7b95812679996a78f16d",
".git/objects/4c/ac311f237d51810146c8ea25e7345904a4b3da": "f83914d176d561b652059312469753eb",
".git/objects/64/7ca3c1ae43e9784d48326fde077846a32c93c3": "3608b8b13754f95343f20e1892671130",
".git/objects/f4/ab0f8baf76970cb57c976d1480bb3823eb27d2": "9d9a9ec94092b23b4118f0bf26994e0f",
".git/objects/83/f46144653945939578c9de580bf6646b57b035": "d58a9dd7d854ded8b837cd08cf84d6a9",
".git/objects/03/88bf29e1147bdb1195d5fbd6ca609702f7d409": "96bf08df87f9138e5386ea2421c56eb1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/4f0d7fea1e3c61cb393d333bffad3d9e9e6f7f": "969f84b818b12292eeaed0d163897c3b",
".git/objects/c2/b81406ebf38a9091e479932b67b5cfadbcf69e": "3b02c611c0b9e6f2f03e2cf956d30409",
".git/objects/c2/2b5796152d4549e9c9fd59dcd979c07f114d19": "20722753caf439e748efb2eadc8da540",
".git/objects/c2/c4ff71c5615b8d42114eb96fc8aa5c4d02a488": "cc7a59d12b1d337d9108c15e007dc2b1",
".git/objects/8c/3f7edd8d08bb0305f131bcfb76ec9447c8be1e": "c056f2aa0c1433d4bbedce66d06caed3",
".git/objects/2b/ee8cb197af95c057bd95f9d7949a00c04923c2": "f97bbc42bfe268d4d57c6db02adb781c",
".git/objects/5b/58ef601fd10ec32e8097b0910454e9a7701563": "ad6d4e89ab5e9a022133d938795081ea",
".git/objects/21/d489b687fb3851c4ff680ec68592dacfd56413": "ace8fd7bdf95ecc7df1da3fc65db61f9",
".git/objects/21/7f104ce8b167f6e42f4d5d13e568cdbd8d2b7b": "935c9eba439545bf47a134064f7e1d37",
".git/objects/e2/625bd469349612f9f13b87adb60eaa348dec84": "58f44cd28a097e699962a73bd70fcc40",
".git/objects/b4/4da150e8b19dc5beedd7c7dcf6984887ce7395": "fc44689597ab9902eeb210ff737c39b7",
".git/objects/b4/c9d32d61f3c02b50f3f989c116fd4e64b3c5e9": "8192c3940c8be0e9c840d3c407ff7955",
".git/objects/69/2fbf005280788d7c9233d7406814685baefe5a": "6f667b716e984011375e55a3b2ccecd8",
".git/objects/69/be173ac4e9391eeb4a1abc65130d969e9b7142": "327813137533e9c73b94d66746f1ebd6",
".git/objects/0d/f50f8e7eba8bef3f871e9e5f0ea55794e15dcb": "f40b409bf6613737c3f9333d5751ac7d",
".git/objects/11/cfae09d4766243ed7dd8dbecda277ab0f85dec": "d77fb9f763bfc05acdb973083c8fc1d2",
".git/objects/11/e84f6a54b3616c830d3d7d71cbea84c6172681": "712ded02b28bcbb2deaca24c231e4500",
".git/config": "ea8898139f7702dfd7c275e3c17f5fde",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/packed-refs": "d56c491c5cc40832bc4a009d0382a9a4",
".git/COMMIT_EDITMSG": "83efbb4d135d58808d010260c79c363c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "cadc1db96734033e6456053e811d9f05",
".git/refs/heads/master": "cadc1db96734033e6456053e811d9f05",
"manifest.json": "be4c4362215f4b1aeac3fd1b5161aa49",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "c069a0d9f3191eb4dc80fae672bd8985",
"/": "c069a0d9f3191eb4dc80fae672bd8985",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "e752178035da6f04ef102488f1aacc98",
".idea/modules.xml": "be066d83c11b00d07ca0083744d51281",
".idea/libraries/Dart_SDK.xml": "713f26df5e2b59e8a3c8997f3c78ced5",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
"version.json": "d301ff750031e64fab85ccde4142350f",
"assets/AssetManifest.json": "3d5b2067cd44b7d5adaaf0db4c034cb5",
"assets/NOTICES": "0bf54a1a260c02c2cdbc41f252268d46",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/test.jpg": "2061af3881c5bf7ed8c3620eec39a309",
".dart_tool/version": "a03fe3a197e75b945b39e13abe90e06b",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/web_release_bundle.stamp": "51b9925be0aba58c9de5919cf479b66c",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/dart2js.d": "c3348b0af2755e248b7dcb30fca9ec9c",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/dart2js.stamp": "0c4ee7e9ef47d8966dd1799d1681a174",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/main.dart.js": "7268e5725b24be8b7dbcec6d2bed5da6",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/web_resources.d": "e2202f234f284e4fa9bfcc78d94a26f9",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/outputs.json": "e9559ab1c794bf9005203c9c72a26665",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/main.dart": "aff491564a99e0eab4e43b4206a61200",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/service_worker.d": "e010b2eb68704fac4ec3c95d83e4c32a",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/app.dill.deps": "bd1d0549271a46472a5b1183c71db622",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/flutter_assets.d": "e035dfe5e737403bd22cd9e7548a043a",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/web_service_worker.stamp": "6a4df6b9433f6c14a5789178816fa785",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/web_entrypoint.stamp": "db61a5b27313302c7e564e64185cd2ff",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/app.dill": "5f3d6fc5ab7aff24422f6b7ff537331f",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/main.dart.js.deps": "50721037cd9da41fd6ad0d9fb9d64a54",
".dart_tool/package_config_subset": "c12ff7fcf36cad4485ce5b11f1533cfe",
".dart_tool/package_config.json": "42390b0f7b64dd1d09f5e9515d22a263"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
