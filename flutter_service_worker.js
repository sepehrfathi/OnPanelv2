'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c847b68b8d0783226d5de520e00d39bb",
"index.html": "5d087d5b5586d5491680cc6ab9797b83",
"/": "5d087d5b5586d5491680cc6ab9797b83",
"main.dart.js": "420ff47e318c1be2ac4419f118ada4b3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "4f2e20289db5f718324b9939dc2047e5",
"icons/Icon-192.png": "4f2e20289db5f718324b9939dc2047e5",
"icons/Icon-maskable-192.png": "4f2e20289db5f718324b9939dc2047e5",
"icons/Icon-maskable-512.png": "4f2e20289db5f718324b9939dc2047e5",
"icons/Icon-512.png": "4f2e20289db5f718324b9939dc2047e5",
"manifest.json": "fa9bc89fdcbd2fedbb37fda7f10e068b",
"assets/AssetManifest.json": "39b7bfacdd4c267066dd50a5db6d7b83",
"assets/NOTICES": "40946a07dc3427af4150c346443be502",
"assets/FontManifest.json": "f0b20643f34033f53679cd0dbae9da0e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/fx_flutterap_components/assets/images/list.svg": "2a9ad142ee450b68e893f3e4b40d9b84",
"assets/packages/fx_flutterap_components/assets/images/tick.png": "0893b2e5add78132f2ae63cb41fb9707",
"assets/packages/fx_flutterap_components/assets/images/baladmap.png": "6e0c1a3271933f1fa373f735b7f2742c",
"assets/packages/fx_flutterap_components/assets/images/HistoryOutlined.svg": "831cdfc47b8e6ee42d4e624893138ef0",
"assets/packages/fx_flutterap_components/assets/images/down.svg": "dbab5b8561981d6270eb2181820ae0fa",
"assets/packages/fx_flutterap_components/assets/images/instagram.png": "448690e07f0ab97bd6f6cf09195930a6",
"assets/packages/fx_flutterap_components/assets/images/calender.svg": "88596fd52078f631464bdcb83e940377",
"assets/packages/fx_flutterap_components/assets/images/googlemap.png": "1fe93005d5fd623f47f77c90638e62b8",
"assets/packages/fx_flutterap_components/assets/images/avatar5.png": "9f7b11fe3f0135f9a826761898564057",
"assets/packages/fx_flutterap_components/assets/images/ex2.JPG": "2367399c92478799fa346c44293420da",
"assets/packages/fx_flutterap_components/assets/images/ex3.JPG": "a3369d9dd624b2e32058a637a9ca130d",
"assets/packages/fx_flutterap_components/assets/images/avatar4.png": "e6083f162d515c451d4076f1037f7c5f",
"assets/packages/fx_flutterap_components/assets/images/onwebs.png": "4f2e20289db5f718324b9939dc2047e5",
"assets/packages/fx_flutterap_components/assets/images/favorite.svg": "806caa60bd4e8aa608275b6e3f08e690",
"assets/packages/fx_flutterap_components/assets/images/migration.svg": "2ec3d95eba4a488106411fb20d0912c2",
"assets/packages/fx_flutterap_components/assets/images/avatar6.png": "15b4422d5e9dff593a6fddadab28fd11",
"assets/packages/fx_flutterap_components/assets/images/ex1.png": "bbda79192f7baeb1ae60ed60e2eeb2ff",
"assets/packages/fx_flutterap_components/assets/images/logo.png": "62f11f0b3c107d989a25e43ca0b295f4",
"assets/packages/fx_flutterap_components/assets/images/cross.png": "26154b4c714cc253c2ae045eedff130a",
"assets/packages/fx_flutterap_components/assets/images/img3.png": "321f36524d0b21f7b0fe4adcbdc2c9c0",
"assets/packages/fx_flutterap_components/assets/images/avatar3.png": "3c5a27b96e0da3aba174d33a9fbddffa",
"assets/packages/fx_flutterap_components/assets/images/img3.jpg": "bf98d5f07e6bcc11fb5c8b93d290b435",
"assets/packages/fx_flutterap_components/assets/images/img2.jpg": "9b9eb84b9c4aced1afddb8b8381c8cf8",
"assets/packages/fx_flutterap_components/assets/images/img2.png": "f0c8012bf3e758e9b90a25dd8d38ef71",
"assets/packages/fx_flutterap_components/assets/images/avatar2.png": "c5c8157566e70ac75dd2ea32ddfaf007",
"assets/packages/fx_flutterap_components/assets/images/dribble.png": "e1508fddda9ef2292cbce9a01403192a",
"assets/packages/fx_flutterap_components/assets/images/img0.jpg": "93ef9b36a543556540c808afe5021d1d",
"assets/packages/fx_flutterap_components/assets/images/img1.jpg": "c71200a1c9daaa3cdf3962f55482074f",
"assets/packages/fx_flutterap_components/assets/images/avatar1.png": "3b3a9fdd6ed01ba842f3ba13b679cfd6",
"assets/packages/fx_flutterap_components/assets/images/img1.png": "49a34730a506dee5b64b1696f3f6b369",
"assets/packages/fx_flutterap_components/assets/images/status4.png": "580902bb6bff9e053347847734fb67c5",
"assets/packages/fx_flutterap_components/assets/images/status5.png": "33c617f4d4937cf770ddd8bfac1f2509",
"assets/packages/fx_flutterap_components/assets/images/ChatGPT.png": "7088cb8f14fa9cb4acfeea5ca515b5e2",
"assets/packages/fx_flutterap_components/assets/images/facebook.png": "a6820d8a64b937e76736b474d0a701b2",
"assets/packages/fx_flutterap_components/assets/images/status1.png": "b03d6aff411ff53eadf87582709d9941",
"assets/packages/fx_flutterap_components/assets/images/back.png": "e0cf68f6413d86bec3a639ce802d1f8a",
"assets/packages/fx_flutterap_components/assets/images/status2.png": "62527f835fa26a09a3e66139f126c534",
"assets/packages/fx_flutterap_components/assets/images/rain.png": "eeab4e29101f95a46e8d3b806c00de95",
"assets/packages/fx_flutterap_components/assets/images/status3.png": "2e9226d050c0a93b4ad8148a1a1e2bd6",
"assets/packages/fx_flutterap_components/assets/lotties/is_typing.json": "053670687bf49fcfba9296825057c4e4",
"assets/packages/fx_flutterap_components/assets/svgs/search.svg": "9aba65f5059ac2714b25574dcfc56b0b",
"assets/packages/fx_flutterap_components/assets/svgs/GoogleLogo.svg": "b50767c3a3eaf3b506145344af13af77",
"assets/packages/fx_flutterap_components/assets/svgs/YoutubeLogo.svg": "e9d2d4e392d3d1be1f1a7a3b18801eeb",
"assets/packages/fx_flutterap_components/assets/svgs/Megaphone.svg": "33e55b4e12391d906f63ba02e5a1b718",
"assets/packages/fx_flutterap_components/assets/svgs/playcircle.svg": "a94de590ae6705011a211b846ef44af7",
"assets/packages/fx_flutterap_components/assets/svgs/chart.svg": "adddc5542ca949a0725ea873e5e4f5f5",
"assets/packages/fx_flutterap_components/assets/svgs/shoppingcart.svg": "8fa20216f89c52cc756289594b9224d4",
"assets/packages/fx_flutterap_components/assets/svgs/arrowup2.svg": "7c5961f76d989dae0ce245627a5aa098",
"assets/packages/fx_flutterap_components/assets/svgs/Translate.svg": "f1224dddc75c7c6452004a9c2eec7345",
"assets/packages/fx_flutterap_components/assets/svgs/hearttick.svg": "2f8199dd25128363b60a2936ba471733",
"assets/packages/fx_flutterap_components/assets/svgs/home.svg": "c75a1f03acf00926320ffd263a16b46c",
"assets/packages/fx_flutterap_components/assets/svgs/profilecircle.svg": "d0933532b9d6e4e03fe519dbc46f66e5",
"assets/packages/fx_flutterap_components/assets/svgs/forward10seconds.svg": "f578631d1946d03bb0c87b90dd2ee7cc",
"assets/packages/fx_flutterap_components/assets/svgs/down.svg": "9cea1ed7364507064971daeab35fad25",
"assets/packages/fx_flutterap_components/assets/svgs/favoritechart.svg": "fec930bbfaac9d6479924d813428b49e",
"assets/packages/fx_flutterap_components/assets/svgs/map.svg": "1fc06e5ee231af237b0d54a435cba93d",
"assets/packages/fx_flutterap_components/assets/svgs/fastforward.svg": "a456d5da76464f0b599319ef5c5ab799",
"assets/packages/fx_flutterap_components/assets/svgs/up.svg": "53335a47f9ea7b381e9cca9a21862c24",
"assets/packages/fx_flutterap_components/assets/svgs/search_white.svg": "b81418aa6455c55b19fd951828ea0b1d",
"assets/packages/fx_flutterap_components/assets/svgs/Question.svg": "62e3fc6bb85c499b238afdd9ba9d2d16",
"assets/packages/fx_flutterap_components/assets/svgs/clipboard.svg": "066d75254d692a02ead9f89edbf5a9dc",
"assets/packages/fx_flutterap_components/assets/svgs/volumehigh.svg": "18adfe695e82b2070ad247960e07a646",
"assets/packages/fx_flutterap_components/assets/svgs/ticksquare.svg": "df3d9d82319d751eb4503f72a12e8c6e",
"assets/packages/fx_flutterap_components/assets/svgs/homehashtag.svg": "74851e44888c218484fa2b552a198747",
"assets/packages/fx_flutterap_components/assets/svgs/infocircle.svg": "151964223ab41a433ee67cf915062f11",
"assets/packages/fx_flutterap_components/assets/svgs/setting2.svg": "2d095f7f61b89852a42aca1cfe622bdb",
"assets/packages/fx_flutterap_components/assets/svgs/backward5seconds.svg": "f4c92cf4a1d0188bd28c7fd9f3eac5a2",
"assets/packages/fx_flutterap_components/assets/svgs/emojihappy.svg": "ee86365b3b11c9e3bd81c79b7b5d54df",
"assets/packages/fx_flutterap_components/assets/svgs/download.svg": "50ac9823947a3fc7c4ff63020bf29a7a",
"assets/packages/fx_flutterap_components/assets/svgs/gallery.svg": "82a8243037417932150e7daa0a313f02",
"assets/packages/fx_flutterap_components/assets/svgs/CaretRight.svg": "96368a00800b256ed714805213cf72ee",
"assets/packages/fx_flutterap_components/assets/svgs/folder2.svg": "9737429f7b3368b41a2fa9ec19ae39c1",
"assets/packages/fx_flutterap_components/assets/svgs/TwitterLogo.svg": "a3c6c5f89ad06f2fcfd9725bef5bf0be",
"assets/packages/fx_flutterap_components/assets/svgs/folderfavorite.svg": "3e1c541b2fa92e3a1bfa4f3469fd6463",
"assets/packages/fx_flutterap_components/assets/svgs/tick.svg": "c86386b7887b8ce5f60d87a6e4142e9c",
"assets/packages/fx_flutterap_components/assets/svgs/dollarsquare.svg": "61bb5059519c90b638114ec0eb18eb68",
"assets/packages/fx_flutterap_components/assets/svgs/teacher.svg": "4f8c1fb10c62335442fc9b98603e7171",
"assets/packages/fx_flutterap_components/assets/svgs/FacebookLogo.svg": "183831ddb5d86a9c8074b08d20e85988",
"assets/packages/fx_flutterap_components/assets/svgs/videocircle.svg": "1b310269b84dc05d3806e2c83adc8377",
"assets/packages/fx_flutterap_components/assets/svgs/document.svg": "fb6169a4ae49041d1e8fcfd4b734d172",
"assets/packages/fx_flutterap_components/assets/svgs/Check.svg": "7029dc953765f4098e0c1aed09e3420c",
"assets/packages/fx_flutterap_components/assets/svgs/info.svg": "96202ff4874d1b917e3149a57eda6b81",
"assets/packages/fx_flutterap_components/assets/svgs/add.svg": "7ce6597695f31c75b075ac07c6595fe4",
"assets/packages/fx_flutterap_components/assets/svgs/Gear.svg": "5298093e93cb9f69c91caad66934a597",
"assets/packages/fx_flutterap_components/assets/svgs/CaretLeft.svg": "91f46236f4c6c132f908eaf951812934",
"assets/packages/fx_flutterap_components/assets/svgs/CheckCircle.svg": "14ef05ce2995b115584ff16b621ac83a",
"assets/packages/fx_flutterap_components/assets/svgs/pages.svg": "fbae1b6724190121d49ca767e478f7bd",
"assets/packages/fx_flutterap_components/assets/svgs/pausecircle.svg": "ab114f17864609e564ca9476a9435880",
"assets/packages/fx_flutterap_components/assets/svgs/oceanprotocol.svg": "cc9d7b2032fddc0870bbf3aa957dd593",
"assets/packages/fx_flutterap_components/assets/svgs/WhatsappLogo.svg": "ca9c9a5e9a5780f578b5eac126430b24",
"assets/packages/fx_flutterap_components/assets/svgs/refresh.svg": "c164e048f0173af1f8a11d9e6f4504cb",
"assets/packages/fx_flutterap_components/assets/svgs/image.svg": "82a8243037417932150e7daa0a313f02",
"assets/packages/fx_flutterap_components/assets/svgs/CaretCircleRight.svg": "dfb047a9873a9d7ff78f87b9b087e12b",
"assets/packages/fx_flutterap_components/assets/svgs/bookmarks.svg": "19a9374f0c0e08af7c59237714119a7e",
"assets/packages/fx_flutterap_components/assets/svgs/right.svg": "2d0932cd9c3726d3b51c3fa454e070a5",
"assets/packages/fx_flutterap_components/assets/svgs/setting.svg": "b16070ca5108656c901575683d28f002",
"assets/packages/fx_flutterap_components/assets/svgs/message.svg": "d3411cc52842cc7143e3e425efe5693f",
"assets/packages/fx_flutterap_components/assets/svgs/directinbox.svg": "4223b6c76d2026394d5bbfe858434987",
"assets/packages/fx_flutterap_components/assets/svgs/square.svg": "596f5c966bc2751302663ed55ffa13e2",
"assets/packages/fx_flutterap_components/assets/svgs/play.svg": "303efb8f473422a5e7b837c2c1c4d53a",
"assets/packages/fx_flutterap_components/assets/svgs/backward.svg": "90e3eec929a7047325a317502c6812a0",
"assets/packages/fx_flutterap_components/assets/svgs/chat.svg": "2ac875308db753d3f7a56549d6e8d8f9",
"assets/packages/fx_flutterap_components/assets/svgs/notification.svg": "317d8385815e882ea7b0ed31337abd7b",
"assets/packages/fx_flutterap_components/assets/svgs/send.svg": "aee0cf5ca815c197864d5e629f5e5439",
"assets/packages/fx_flutterap_components/assets/svgs/ChatsCircle.svg": "d3411cc52842cc7143e3e425efe5693f",
"assets/packages/fx_flutterap_components/assets/svgs/night.svg": "4c0dac66a7f24478cde73a4b5c537c5b",
"assets/packages/fx_flutterap_components/assets/svgs/Facebook.svg": "719dc46dc53d4805fef94fd9fb13cafe",
"assets/packages/fx_flutterap_components/assets/svgs/arrowdown2.svg": "a10397fc62c5ffb99c9bbbbc6cec6145",
"assets/packages/fx_flutterap_components/assets/svgs/chatgpt.svg": "93f86bbc51f9a24593dbbe04b6a42ec9",
"assets/packages/fx_flutterap_components/assets/svgs/google.svg": "c775bbc9da38e4e00f5b601a21672815",
"assets/packages/fx_flutterap_components/assets/svgs/form.svg": "d9423b29887bd1a0a71277eb76521c29",
"assets/packages/fx_flutterap_components/assets/svgs/star.svg": "d785bce5041fd9d077f4320469cf258e",
"assets/packages/fx_flutterap_components/assets/svgs/sun.svg": "8ff3dba0d53be0bcad5b610c8ae6db94",
"assets/packages/fx_flutterap_components/assets/svgs/danger.svg": "b0140e19702265db97bd03fece29f388",
"assets/packages/fx_flutterap_components/assets/svgs/Gauge.svg": "9d2e2e8943e5a2ca36f8d6badc498e9a",
"assets/packages/fx_flutterap_components/assets/svgs/CalendarCheck.svg": "f516883538756c2c94bec1bdcd385ff7",
"assets/packages/fx_flutterap_components/assets/svgs/advanced.svg": "58f77ecd9487a2bc9bb5cd9c954d3a13",
"assets/packages/fx_flutterap_components/assets/svgs/CaretDoubleLeft.svg": "ed8b1786beeafc3c080d1c5d9f2c0ff1",
"assets/packages/fx_flutterap_components/assets/svgs/SignOut.svg": "0ef7ffc7eb6c5a374b9ed218091a9630",
"assets/packages/fx_flutterap_components/assets/svgs/Pencil.svg": "0efafc6ef458144c2b9a92b8be5398b9",
"assets/packages/fx_flutterap_components/assets/svgs/InstagramLogo.svg": "2cdba9e0c5d232926fe7ea3d3ea0bb31",
"assets/packages/fx_flutterap_components/assets/svgs/exit.svg": "411b8f48083f37a776f7bda07daaf2f2",
"assets/packages/fx_flutterap_components/assets/svgs/electricity.svg": "03ab4317539cb020741b10343dc2d47a",
"assets/packages/fx_flutterap_components/assets/svgs/CaretCircleLeft.svg": "8a92f884cd40f3214bd713e96d78651f",
"assets/packages/fx_flutterap_components/assets/svgs/Gift.svg": "37ea657d7b740cbf1a8a45063012e275",
"assets/packages/fx_flutterap_components/assets/svgs/CaretDoubleRight.svg": "4dc8d501ba507b491cc902b364c6cdbd",
"assets/packages/fx_flutterap_components/assets/svgs/share.svg": "5a834e1499c82d2f7a9ef1c651aad1e3",
"assets/packages/fx_flutterap_components/assets/svgs/video.svg": "3507c044ba39da3c9656dbfabdb829f6",
"assets/packages/fx_flutterap_components/assets/svgs/cross.svg": "db08e644d926ba561b003c85be879e8b",
"assets/packages/fx_flutterap_components/assets/svgs/truckfast.svg": "0919c41835160e775ed9587b6115ba40",
"assets/packages/fx_flutterap_components/assets/svgs/forward.svg": "29532283a013eeeb29184958dcdcdd6e",
"assets/packages/fx_flutterap_components/assets/svgs/notificationbing.svg": "c74a32aceb17ec0cf743806467347327",
"assets/packages/fx_flutterap_components/assets/svgs/menu.svg": "24f786603523e0525ca507d6c79d1ab9",
"assets/packages/fx_flutterap_components/assets/svgs/layer.svg": "443160837e9b7259b4d986e5048826dc",
"assets/packages/fx_flutterap_components/assets/svgs/folder.svg": "5c29c576809fa790709be99f37df0f7f",
"assets/packages/fx_flutterap_components/assets/svgs/LinkedinLogo.svg": "a2b84281b4e857a73a77b59f3f536096",
"assets/packages/fx_flutterap_components/assets/svgs/left.svg": "a9fc09a9838a07f00c6d5f1cc787dc15",
"assets/packages/fx_flutterap_components/assets/svgs/usdcoin.svg": "5590d327f322cbbe0a89f145fb95374e",
"assets/packages/fx_flutterap_components/assets/svgs/moon.svg": "4c0dac66a7f24478cde73a4b5c537c5b",
"assets/packages/fx_flutterap_components/assets/svgs/Heart.svg": "2e77d15ca5d58ffc52b311f7df14f020",
"assets/packages/fx_flutterap_components/assets/fonts/Arabic.ttf": "7c8c2f00c8d96ec4ab1da628790a1a67",
"assets/packages/fx_flutterap_components/assets/fonts/Product%2520Sans%2520Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/packages/fx_flutterap_components/assets/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/packages/fx_flutterap_components/assets/fonts/Calibri.ttf": "0d717c4bf80cbb556bf87777fef7d09e",
"assets/packages/fx_flutterap_template/assets/images/onwebs.png": "4f2e20289db5f718324b9939dc2047e5",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fx_flutterap_editable_components/assets/images/list.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/tick.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/baladmap.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/HistoryOutlined.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/down.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/calender.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/googlemap.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/ex2.JPG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/ex3.JPG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/favorite.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/migration.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/ex1.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/cross.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/img3.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/img2.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/img0.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/img1.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/fx_flutterap_editable_components/assets/images/back.png": "e0cf68f6413d86bec3a639ce802d1f8a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a881a83a88638c6279554236f7fd130e",
"assets/fonts/MaterialIcons-Regular.otf": "ec329c6b9a54af424ef9bdbd69ee75d9",
"assets/assets/images/404.png": "8da7dcf6c270848cf099111a5dcdd6d6",
"assets/assets/images/download_mobile.png": "a37b8bd11e6341c8c3e62c95dd9065fe",
"assets/assets/images/lock.png": "d4089439d2dd470c454259c83754cbe6",
"assets/assets/images/illustaration3.png": "03e4d14e1c68034a01e459259b1b9a6c",
"assets/assets/images/repairs.png": "1c400b5a160eb5408f83e0cf7a714c6a",
"assets/assets/images/404_2.png": "e444bb0a22d70acd29efd4f0ebb1bd94",
"assets/assets/images/forgotpass.png": "cc3b8553f417694139e9bb3967d73ac5",
"assets/assets/images/avatar1.png": "3b3a9fdd6ed01ba842f3ba13b679cfd6",
"assets/assets/images/download_desktop.png": "39135138261a655cc2c4a3eadcb79a7e",
"assets/assets/images/signin.png": "aac7d94df8d78fa174598f7e52c668bd",
"assets/assets/fonts/Arabic.ttf": "7c8c2f00c8d96ec4ab1da628790a1a67",
"assets/assets/fonts/Product%2520Sans%2520Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/assets/fonts/Calibri.ttf": "0d717c4bf80cbb556bf87777fef7d09e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
