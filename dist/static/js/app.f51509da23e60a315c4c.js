webpackJsonp([1],{"09yM":function(t,n){},"0QtD":function(t,n){},"2EMG":function(t,n){},"4OMF":function(t,n){},ANPb:function(t,n){},BNdo:function(t,n){},CfsF:function(t,n){},"E/SQ":function(t,n){},HG5e:function(t,n){},HYa9:function(t,n){},I4zz:function(t,n){},Kv8T:function(t,n){},NHnr:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("kV13"),r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"banner"},[e("div",{staticClass:"w"},[e("router-link",{staticStyle:{"border-bottom-color":"transparent"},attrs:{to:"/",exact:""}},[e("img",{attrs:{id:"logo",src:i("dkH8")}})]),t._v(" "),e("div",{staticClass:"tap"},[e("ul",[e("router-link",{staticClass:"taplink",attrs:{to:"/hyaku"}},[t._v("日本百名山")]),t._v(" "),e("router-link",{staticClass:"taplink",attrs:{to:"/tetsushiro"}},[t._v("铁道与城郭")]),t._v(" "),e("router-link",{staticClass:"taplink",attrs:{to:"/kyojiin"}},[t._v("京都的寺院")]),t._v(" "),e("router-link",{staticClass:"taplink",attrs:{to:"/kamajiin"}},[t._v("镰仓的寺院")]),t._v(" "),e("router-link",{staticClass:"taplink",attrs:{to:"/tokyosanpo"}},[t._v("在东京漫步")]),t._v(" "),e("router-link",{staticClass:"taplink",attrs:{to:"/shinsyo"}},[t._v("新书私笔记")])],1)])],1)]),t._v(" "),e("div",{staticClass:"banner_cushion"}),t._v(" "),e("router-view",{attrs:{name:"mp"}}),t._v(" "),e("router-view",{staticClass:"w"}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"banner_end w"},[n("div",{staticClass:"banner_end_brief"},[this._v("\n      2020 – 2020 PeppaMimi   |   About   E-Mail     \n    ")])])}]};var a=i("C7Lr")({name:"App",components:{},methods:{},data:function(){return{isActive:!0}}},r,!1,function(t){i("0QtD")},null,null).exports,s=i("48sp"),o=i("p7sN"),_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"main_main"})])}]};var u=i("C7Lr")({name:"MainPlain_main",props:[],components:{},data:function(){return{}},methods:{}},_,!1,function(t){i("m8vv")},null,null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"bg_center"},[n("br")])])}]};var l=i("C7Lr")({name:"Main",props:[],components:{},methods:{},data:function(){return{}}},c,!1,function(t){i("HG5e")},null,null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"main_hyaku wp"})])}]};var m=i("C7Lr")({name:"MainPlain",props:[],components:{},data:function(){return{}},methods:{}},k,!1,function(t){i("2EMG")},null,null).exports,v={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"bg_center"},[i("br"),t._v(" "),i("h1",[t._v("我的日本百名山")]),t._v(" "),i("section",[t._v("\n    日本百名山中18座的登山记录\n  ")]),t._v(" "),i("hr"),i("hr"),t._v(" "),i("section",[t._v("\n    《日本百名山》是日本登山家、作家深田久弥的著作，于1964年出版。其中精选了日本列岛的百座名山，\n    并以每座山为主题写下了100篇随笔。被列入这本书中的名山后来成为游客们向往的游览胜地。\n  ")]),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"yama"},t._l(t.yamalist,function(n,e){return i("div",{key:e},[i("router-link",{attrs:{to:n.link,id:n.id}},[i("div",{staticClass:"yama_banner"},[i("div",{class:n.banner},[i("div",{staticClass:"yama_name"},[t._v(t._s(n.en))])])]),t._v(" "),i("div",{staticClass:"yama_brief"},[t._v(t._s(n.jp))])]),t._v(" "),i("p",[t._v(t._s(n.height))])],1)}),0),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var d=i("C7Lr")({name:"Main",props:[],components:{},data:function(){return{yamalist:[{id:"fuji",link:"/hyaku/Fuji",en:"FUJIYAMA",jp:"富士山",height:"3776m",banner:"fuji_banner"},{id:"kirigamine",link:"/hyaku/Kirigamine",en:"KIRIGAMINE",jp:"霧ヶ峰",height:"1925m",banner:"kirigamine_banner"},{id:"tanzawa",link:"/hyaku/Tanzawa",en:"TANZAWA",jp:"丹沢山",height:"1567m",banner:"tanzawa_banner"},{id:"gisokoma",link:"/hyaku/Gisokoma",en:"GISOKOMA",jp:"木曽駒ヶ岳",height:"2956m",banner:"gisokoma_banner"},{id:"tanigawa",link:"/hyaku/Tanigawa",en:"TANIGAWA",jp:"谷川岳",height:"1963m / 1977m",banner:"tanigawa_banner"},{id:"hachimantai",link:"/hyaku/Hachimantai",en:"HACHIMANTAI",jp:"八幡平",height:"1614m",banner:"hachimantai_banner"},{id:"hakuba",link:"/hyaku/Hakuba",en:"HAKUBA",jp:"白馬岳",height:"2932m",banner:"hakuba_banner"},{id:"kitaaino",link:"/hyaku/Kitaaino",en:"KITA,AINO",jp:"北岳、間ノ岳",height:"3193m / 3189m",banner:"kitaaino_banner"},{id:"amagi",link:"/hyaku/Amagi",en:"AMAGI",jp:"天城岳",height:"1406m",banner:"amagi_banner"},{id:"daibosatu",link:"/hyaku/Daibosatu",en:"DAIBOSATU",jp:"大菩薩嶺",height:"2057m",banner:"daibosatu_banner"},{id:"yatsugadake",link:"/hyaku/Yatsugadake",en:"YATSUGADAKE",jp:"八ヶ岳",height:"2899m",banner:"yatsu_banner"},{id:"kinpu",link:"/hyaku/Kinpu",en:"KINPU",jp:"金峰山",height:"2599m",banner:"kinpu_banner"},{id:"asahi",link:"/hyaku/Asahi",en:"ASAHI",jp:"旭岳",height:"2291m",banner:"asahi_banner"},{id:"senjyokaikoma",link:"/hyaku/Senjyokaikoma",en:"SENJYO,KAIKOMA",jp:"仙丈ヶ岳、甲斐駒ヶ岳",height:"3033m / 2967m",banner:"senjyokaikoma_banner"},{id:"yarihotaka",link:"/hyaku/Yarihotaka",en:"YARI,HOTAKA",jp:"槍ヶ岳、穂高岳",height:"3180m / 3190m",banner:"yarihotaka_banner"}]}},methods:{}},v,!1,function(t){i("m4Qv")},null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),this._v("\n  Fuji\n  "),n("article")])}]};var p=i("C7Lr")({name:"Fuji",data:function(){return{}}},h,!1,function(t){i("E/SQ")},null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),this._v("\n  Kirigamine\n  "),n("article")])}]};var y=i("C7Lr")({name:"Kirigamine",data:function(){return{}}},f,!1,function(t){i("I4zz")},null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),this._v("\n  Tanzawa\n  "),n("article")])}]};var g=i("C7Lr")({name:"Tanzawa",data:function(){return{}}},b,!1,function(t){i("OXv1")},null,null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"main_tetsushiro"})])}]};var j=i("C7Lr")({name:"MainPlain_tetsushiro",props:[],components:{},data:function(){return{}},methods:{}},C,!1,function(t){i("CfsF")},null,null).exports,E={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"bg_center"},[i("br"),t._v(" "),t._m(0),t._v(" "),i("hr"),i("hr"),t._v(" "),t._m(1),t._v(" "),i("br"),i("br"),t._v(" "),i("ul",[i("h1",[t._v("北海道")]),t._v(" "),i("hr"),t._v(" "),t._l(t.hokaido_track,function(n,e){return i("li",{key:"hokaido_track"+e},[t._v(t._s(n.track))])}),t._v(" "),i("br"),t._v(" "),t._l(t.hokaido_siro,function(n,e){return i("li",{key:"hokaido_siro"+e},[t._v(t._s(n.siro))])})],2),t._v(" "),i("br"),t._v(" "),i("ul",[i("h1",[t._v("東北地方")]),t._v(" "),i("hr"),t._v(" "),t._l(t.tohoku_track,function(n,e){return i("li",{key:"tohoku_track"+e},[t._v(t._s(n.track))])}),t._v(" "),i("br"),t._v(" "),t._l(t.tohoku_siro,function(n,e){return i("li",{key:"tohoku_siro"+e},[t._v(t._s(n.siro))])})],2),t._v(" "),i("br"),t._v(" "),i("ul",[i("h1",[t._v("関東地方")]),t._v(" "),i("hr"),t._v(" "),t._l(t.kanto_track,function(n,e){return i("li",{key:"kanto_track"+e},[t._v(t._s(n.track))])}),t._v(" "),i("br"),t._v(" "),t._l(t.kanto_siro,function(n,e){return i("li",{key:"kanto_siro"+e},[t._v(t._s(n.siro))])})],2),t._v(" "),i("br"),t._v(" "),i("ul",[i("h1",[t._v("中部地方")]),t._v(" "),i("hr"),t._v(" "),t._l(t.tyubu_track,function(n,e){return i("li",{key:"tyubu_track"+e},[t._v(t._s(n.track))])}),t._v(" "),i("br"),t._v(" "),t._l(t.tyubu_siro,function(n,e){return i("li",{key:"tyubu_siro"+e},[t._v(t._s(n.siro))])})],2),t._v(" "),i("br"),t._v(" "),i("ul",[i("h1",[t._v("近畿地方")]),t._v(" "),i("hr"),t._v(" "),t._l(t.kinki_track,function(n,e){return i("li",{key:"kinki_track"+e},[t._v(t._s(n.track))])}),t._v(" "),i("br"),t._v(" "),t._l(t.kinki_siro,function(n,e){return i("li",{key:"kinki_siro"+e},[t._v(t._s(n.siro))])})],2),t._v(" "),i("br"),t._v(" "),i("ul",[i("h1",[t._v("中国地方")]),t._v(" "),i("hr"),t._v(" "),t._l(t.tyugoku_track,function(n,e){return i("li",{key:"tyugoku_track"+e},[t._v(t._s(n.track))])}),t._v(" "),i("br"),t._v(" "),t._l(t.tyugoku_siro,function(n,e){return i("li",{key:"tyugoku_siro"+e},[t._v(t._s(n.siro))])})],2),t._v(" "),i("br"),t._v(" "),i("ul",[i("h1",[t._v("四国")]),t._v(" "),i("hr"),t._v(" "),t._l(t.sikoku_track,function(n,e){return i("li",{key:"sikoku_track"+e},[t._v(t._s(n.track))])}),t._v(" "),i("br"),t._v(" "),t._l(t.sikoku_siro,function(n,e){return i("li",{key:"sikoku_siro"+e},[t._v(t._s(n.siro))])})],2),t._v(" "),i("br"),t._v(" "),i("ul",[i("h1",[t._v("九州")]),t._v(" "),i("hr"),t._v(" "),t._l(t.kyusyu_track,function(n,e){return i("li",{key:"kyusyu_track"+e},[t._v(t._s(n.track))])}),t._v(" "),i("br"),t._v(" "),t._l(t.kyusyu_siro,function(n,e){return i("li",{key:"kyusyu_siro"+e},[t._v(t._s(n.siro))])})],2),t._v(" "),i("br"),t._v(" "),i("ul",[i("h1",[t._v("沖縄諸島")]),t._v(" "),i("hr"),t._v(" "),t._l(t.okinawa_track,function(n,e){return i("li",{key:"okinawa_track"+e},[t._v(t._s(n.track))])}),t._v(" "),i("br"),t._v(" "),t._l(t.okinawa_siro,function(n,e){return i("li",{key:"okinawa_siro"+e},[t._v(t._s(n.siro))])})],2),t._v(" "),i("br")])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",[this._v("列岛铁道旅 "),n("span",[this._v("feat.")]),this._v("日本百名城")])},function(){var t=this.$createElement,n=this._self._c||t;return n("article",{staticClass:"intro"},[n("section",[n("div",[this._v("铁道")]),this._v("\n      JR（Japan Railways）是1987年日本国有铁道施行分割民营化后，所成立的7家铁路公司之合称。\n      此外，民营铁路也非常兴盛。\n    ")]),this._v(" "),n("section",[n("div",[this._v("城")]),this._v("\n      日本的城，是一种提供予地方领主（大名）居住的武装建筑。\n      日本百名城是日本城郭协会于2006年经过公众和专家选拔得出的100座日本代表性的名城。\n    ")])])}]};var A=i("C7Lr")({name:"Tetsudo",data:function(){return{hokaido_track:[{id:1,track:"海峡線：中小国駅（本州 青森県） - 木古内駅（渡島地方） (87.8km)"},{id:2,track:"函館本線: 函館駅（渡島地方） - 小樽駅（後志地方） - 札幌駅（石狩地方） - 旭川駅（上川地方） (423.1km)"},{id:3,track:"石北本線 : 新旭川駅（上川地方） - 網走駅（網走地方） (234.0km)"},{id:4,track:"釧網本線 : 東釧路駅（釧路地方） - 網走駅（網走地方） (166.2km)"},{id:5,track:"根室本線 : 滝川駅（空知地方） - 根室駅（根室地方） (443.8km)"},{id:6,track:"石勝線 : 南千歳駅（石狩地方） - 新得駅（十勝地方） (132.4km)"}],hokaido_siro:[{id:1,siro:"五稜郭（函館市）"}],tohoku_track:[{id:1,track:"東北本線：東京駅（関東地方） - 盛岡駅 (535.3km)"},{id:2,track:"いわて銀河鉄道線：盛岡駅（岩手県） - 目時駅（青森県） (82.0km)"},{id:3,track:"仙山線：仙台駅（宮城県） - 羽前千歳駅（山形県） (58.0km)"},{id:4,track:"奥羽本線：福島駅（福島県） - 青森駅（青森県） (484.5km)"},{id:5,track:"羽越本線：新津駅（中部地方） - 秋田駅 (271.7km)"}],tohoku_siro:[{id:1,siro:"弘前城（弘前市）"},{id:2,siro:"仙台城（仙台市）"},{id:3,siro:"久保田城（秋田市）"},{id:4,siro:"山形城（山形市）"},{id:5,siro:"若松城（会津若松市）"}],kanto_track:[{id:1,track:"両毛線：小山駅 - 新前橋駅 (84.4km)"},{id:2,track:"わたらせ渓谷鐵道わたらせ渓谷線：桐生駅 - 間藤駅 (44.1km)"},{id:3,track:"上越線：高崎駅 - 宮内駅 (162.6km)"},{id:4,track:"東武伊勢崎線：浅草駅 - 伊勢崎駅 (114.5km)"},{id:5,track:"東海道本線：東京駅 - 熱海駅 (104.6km)"},{id:6,track:"総武本線：東京駅 - 銚子駅 (120.5km)"},{id:7,track:"小田急小田原線：新宿駅 - 小田原駅 (82.5km)"},{id:8,track:"江ノ島電鉄：藤沢駅 - 鎌倉駅 (10.0km)"},{id:9,track:"御殿場線：国府津駅 - 沼津駅（60.2km）"},{id:10,track:"中央本線：新宿駅 - 塩尻駅 (211.8km)"},{id:11,track:"京成本線：京成上野駅 - 成田空港駅 (69.3km)"}],kanto_siro:[{id:1,siro:"水戸城（水戸市）"},{id:2,siro:"足利氏館（足利市）"},{id:3,siro:"金山城（太田市）"},{id:4,siro:"川越城（川越市）"},{id:5,siro:"江戸城（東京都）"},{id:6,siro:"八王子城（東京都）"},{id:7,siro:"小田原城（小田原市）"},{id:8,siro:"武田氏館（甲府市）"},{id:9,siro:"甲府城（甲府市）"},{id:10,siro:"松本城（松本市）"},{id:11,siro:"高遠城（伊那市）"}],tyubu_track:[{id:1,track:"東海道本線：熱海駅 - 米原駅 (341.3 km)"},{id:2,track:"小海線：小淵沢駅 - 小諸駅 (78.9km)"},{id:3,track:"あいの風とやま鉄道線：倶利伽羅駅 - 市振駅 (100.1km)"},{id:4,track:"七尾線..."},{id:5,track:"北陸本線：金沢駅 - 米原駅 (176.6km)"}],tyubu_siro:[{id:1,siro:"山中城（三島市）"},{id:2,siro:"駿府城（静岡市）"},{id:3,siro:"掛川城（掛川市）"},{id:4,siro:"名古屋城（名古屋市）"},{id:5,siro:"犬山城（犬山市）"},{id:6,siro:"岐阜城（岐阜市）"},{id:7,siro:"高岡城（高岡市）"},{id:8,siro:"金沢城（金沢市）"}],kinki_track:[{id:1,track:"東海道本線：米原駅 - 神戸駅 (143.6 km)"},{id:2,track:"関西本線：亀山駅 - JR難波駅 (115 km)"},{id:3,track:"京都丹後鉄道宮津線：西舞鶴駅 - 豊岡駅 (83.6 km)"},{id:4,track:"阪和線：天王寺駅 - 和歌山駅 (61.3 km)"},{id:5,track:"紀勢本線：亀山駅 - 新宮駅 (180.2km)"},{id:6,track:"きのくに線：新宮駅 - 和歌山駅 (204.0 km)"}],kinki_siro:[{id:1,siro:"彦根城（彦根市）"},{id:2,siro:"二条城（京都市）"},{id:3,siro:"大坂城（大阪市）"},{id:4,siro:"竹田城（朝来市）"},{id:5,siro:"姫路城（姫路市）"},{id:6,siro:"和歌山城（和歌山市）"}],tyugoku_track:[{id:1,track:"山陽本線：神戸駅 - 下関駅 (528.1 km)"},{id:2,track:"伯備線：倉敷駅 - 伯耆大山駅 (138.4km)"},{id:3,track:"山陰本線：京都駅 - 幡生駅 (673.8 km)"}],tyugoku_siro:[{id:1,siro:"岡山城（岡山市）"},{id:2,siro:"広島城（広島市）"},{id:3,siro:"松江城（松江市）"}],sikoku_track:[{id:1,track:"予讃線：高松駅 - 宇和島駅 (297.6km)"},{id:2,track:"阿佐線（ごめん・なはり線）：奈半利駅 - 後免駅 (42.7km)"},{id:3,track:"牟岐線：徳島駅 - 海部駅 (79.3km)"}],sikoku_siro:[{id:1,siro:"松山城（松山市）"},{id:2,siro:"高松城（高松市）"},{id:3,siro:"高知城（高知市）"},{id:4,siro:"徳島城（徳島市）"}],kyusyu_track:[{id:1,track:"鹿児島本線：門司港駅（福岡県） - 八代駅（熊本県） (232.3km)"},{id:2,track:"長崎本線：鳥栖駅（佐賀県） - 長崎駅（長崎県） (125.3km)"},{id:3,track:"肥薩おれんじ鉄道線：八代駅（熊本県） - 川内駅（鹿児島県） (116.9km)"},{id:4,track:"日豊本線：小倉駅 （福岡県） - 鹿児島駅（鹿児島県） (462.6km)"}],kyusyu_siro:[{id:1,siro:"佐賀城（佐賀市）"},{id:2,siro:"熊本城（熊本市）"}],okinawa_track:[{id:1,track:"沖縄都市モノレール線（ゆいレール）：那覇空港駅 - てだこ浦西駅 (17.0km)"}],okinawa_siro:[{id:1,siro:"今帰仁城（今帰仁村）"},{id:2,siro:"中城城（中城村）"},{id:3,siro:"首里城（那覇市）"}]}}},E,!1,function(t){i("BNdo")},null,null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"main_kyojiin"})])}]};var w=i("C7Lr")({name:"MainPlain_kyojiin",props:[],components:{},data:function(){return{}},methods:{}},$,!1,function(t){i("jYpx")},null,null).exports,F={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"bg_center"},[i("br"),t._v(" "),i("h1",[t._v("在京都的两周")]),t._v(" "),i("hr"),i("hr"),t._v(" "),t._m(0),t._v(" "),i("br"),i("br"),t._v(" "),i("ul",[i("h1",[t._v("洛中")]),t._v(" "),i("hr"),t._v(" "),t._l(t.rakutyu,function(n,e){return i("h2",{key:"rakutyu"+e},[t._v("\n      "+t._s(n.temple)+"\n      "),i("p",[t._v(t._s(n.rank))])])}),t._v(" "),i("br"),t._v(" "),i("h1",[t._v("洛東")]),t._v(" "),i("hr"),t._v(" "),t._l(t.rakutou,function(n,e){return i("h2",{key:"rakutou"+e},[t._v("\n      "+t._s(n.temple)+"\n      "),i("p",[t._v(t._s(n.rank))])])}),t._v(" "),i("br"),t._v(" "),i("h1",[t._v("洛南")]),t._v(" "),i("hr"),t._v(" "),t._l(t.rakunan,function(n,e){return i("h2",{key:"rakunan"+e},[t._v("\n      "+t._s(n.temple)+"\n      "),i("p",[t._v(t._s(n.rank))])])}),t._v(" "),i("br"),t._v(" "),i("h1",[t._v("洛西")]),t._v(" "),i("hr"),t._v(" "),t._l(t.rakusai,function(n,e){return i("h2",{key:"rakusai"+e},[t._v("\n      "+t._s(n.temple)+"\n      "),i("p",[t._v(t._s(n.rank))])])}),t._v(" "),i("br"),t._v(" "),i("h1",[t._v("洛北")]),t._v(" "),i("hr"),t._v(" "),t._l(t.rakuho,function(n,e){return i("h2",{key:"rakuho"+e},[t._v("\n      "+t._s(n.temple)+"\n      "),i("p",[t._v(t._s(n.rank))])])}),t._v(" "),i("br")],2),t._v(" "),i("br")])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("article",[n("section",[this._v('\n      京都古称"平安京"，其建设效仿唐代的长安和洛阳，以朱雀大路为中心，城市分为右京（又称“长安”）和左京（又称“洛阳”）两个对称的部分。\n      后来左京成为京都主要发展的地区，"洛阳"也成为京都的代称。\n    ')])])}]};var M=i("C7Lr")({name:"Kyoujiin",data:function(){return{rakutyu:[{id:1,temple:"東本願寺"},{id:2,temple:"西本願寺"},{id:3,temple:"釘抜地蔵（石像寺）"},{id:4,temple:"下鴨神社"},{id:5,temple:"二条城"}],rakutou:[{id:1,temple:"銀閣寺（慈照寺）"},{id:2,temple:"南禅寺",rank:"京都五山別格"},{id:3,temple:"知恩院"},{id:4,temple:"清水寺",rank:"京都五山第三位"},{id:5,temple:"建仁寺"},{id:6,temple:"東福寺",rank:"京都五山第四位"},{id:7,temple:"芬陀院・雪舟寺"},{id:8,temple:"泉涌寺"},{id:9,temple:"平安神宮"}],rakunan:[{id:1,temple:"東寺（教王護国寺）"},{id:2,temple:"醍醐寺"},{id:3,temple:"平等院"},{id:4,temple:"宇治上神社"},{id:5,temple:"伏見稲荷大社"}],rakusai:[{id:1,temple:"金閣寺（鹿苑寺）"},{id:2,temple:"龍安寺"},{id:3,temple:"仁和寺"},{id:4,temple:"妙心寺"},{id:5,temple:"天龍寺",rank:"京都五山第一位"}],rakuho:[{id:1,temple:"鞍馬寺"},{id:2,temple:"赤山禅院"},{id:3,temple:"大徳寺"},{id:4,temple:"瑞峯院"},{id:5,temple:"修学院離宮"},{id:6,temple:"貴船神社"}]}}},F,!1,function(t){i("HYa9")},null,null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"main_kamajiin"})])}]};var x=i("C7Lr")({name:"MainPlain_kamajiin",props:[],components:{},data:function(){return{}},methods:{}},R,!1,function(t){i("WBOW")},null,null).exports,K={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"bg_center"},[i("br"),t._v(" "),i("h1",[t._v("海浪，电铁和古寺")]),t._v(" "),i("hr"),i("hr"),t._v(" "),t._m(0),t._v(" "),i("br"),t._v(" "),i("br"),i("br"),t._v(" "),i("ul",t._l(t.kamatemple,function(n,e){return i("h2",{key:"kamatemple"+e},[t._v("\n    "+t._s(n.temple)+"\n    "),i("p",[t._v(t._s(n.rank))])])}),0),t._v(" "),i("br")])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("article",[n("section",[this._v("\n      镰仓三面环山，一面向海，曾经是镰仓幕府武家政权的所在地。区域内寺社众多，且保有着具有文化价值的中世纪建筑遗迹。\n    ")])])}]};var T=i("C7Lr")({name:"Kamajiin",data:function(){return{kamatemple:[{id:1,temple:"建長寺",rank:"鎌倉五山第一位"},{id:2,temple:"円覚寺",rank:"鎌倉五山第二位"},{id:3,temple:"寿福寺",rank:"鎌倉五山第三位"},{id:4,temple:"浄智寺",rank:"鎌倉五山第四位"},{id:5,temple:"浄妙寺",rank:"鎌倉五山第五位"},{id:6,temple:"英勝寺"},{id:7,temple:"海蔵寺"},{id:8,temple:"護国寺"},{id:9,temple:"浄光明寺"},{id:10,temple:"極楽寺"},{id:11,temple:"長勝寺"},{id:12,temple:"杉本寺"},{id:13,temple:"東慶寺"},{id:14,temple:"明月院"}]}}},K,!1,function(t){i("Kv8T")},null,null).exports,H={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"main_tokyosanpo"})])}]};var I=i("C7Lr")({name:"MainPlain_tokyosanpo",props:[],components:{},data:function(){return{}},methods:{}},H,!1,function(t){i("iMRH")},null,null).exports,L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"bg_center"},[n("br"),this._v(" "),n("h1",[this._v("东京散步20选")]),this._v(" "),n("hr"),n("hr"),this._v(" "),n("article",[n("section",[this._v("\n      东京古称江户，自德川幕府时代以来开始成为日本主要都市之一。\n      现在首都圈总人口高达3700万，是目前全球规模最大的都会区。\n    ")])]),this._v(" "),n("br")])}]};var N=i("C7Lr")({name:"Tokyosanpo",data:function(){return{}}},L,!1,function(t){i("ANPb")},null,null).exports,O={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"main_shinsyo"})])}]};var P=i("C7Lr")({name:"MainPlain_shinsyo",props:[],components:{},data:function(){return{}},methods:{}},O,!1,function(t){i("4OMF")},null,null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"bg_center"},[n("br"),this._v(" "),n("h1",[this._v('日语"新书"选读')]),this._v(" "),n("hr"),n("hr"),this._v(" "),n("article",[n("section",[this._v('\n      新书是"新书判（尺寸在173×105mm左右）"的书籍类型，岩波书店于1938年首次出版。\n      正面一般无封面配图，按出版顺序设置编号，每册内容围绕一个非虚构的题材展开讨论。\n    ')])]),this._v(" "),n("br")])}]};var Y=i("C7Lr")({name:"Shinsyo",data:function(){return{}}},S,!1,function(t){i("ij1u")},null,null).exports;e.default.use(o.a);var z=new o.a({scrollBehavior:function(t,n,i){return{x:0,y:0}},routes:[{path:"/",name:"Main",components:{default:l,mp:u}},{path:"/hyaku",name:"Hyaku",components:{default:d,mp:m}},{path:"/hyaku/Fuji",name:"Fuji",component:p},{path:"/hyaku/Kirigamine",name:"Kirigamine",component:y},{path:"/hyaku/Tanzawa",name:"Tanzawa",component:g},{path:"/tetsushiro",name:"Tetsushiro",components:{default:A,mp:j}},{path:"/kyojiin",name:"Kyojiin",components:{default:M,mp:w}},{path:"/kamajiin",name:"Kamajiin",components:{default:T,mp:x}},{path:"/tokyosanpo",name:"Tokyosanpo",components:{default:N,mp:I}},{path:"/shinsyo",name:"Shinsyo",components:{default:Y,mp:P}}]});e.default.use(s.a);var G=new s.a.Store({modules:{a:{state:{msg:"Welcome to Your Vue.js AppX"},getters:{uppercase:function(t){return t.msg=t.msg.toUpperCase(),t.msg}}},b:{state:{count:1},mutations:{increment:function(t){t.count++}},actions:{increment:function(t){t.commit("increment")}}}}}),B=i("TcQY"),Q=i.n(B);i("09yM");e.default.use(Q.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:z,store:G,components:{App:a},template:"<App/>"})},OXv1:function(t,n){},WBOW:function(t,n){},dkH8:function(t,n,i){t.exports=i.p+"static/img/my_logoB-slim4.7d672de.png"},iMRH:function(t,n){},ij1u:function(t,n){},jYpx:function(t,n){},m4Qv:function(t,n){},m8vv:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.f51509da23e60a315c4c.js.map