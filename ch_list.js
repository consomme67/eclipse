const ch_list = [
	{"chnum":15, "chname":"SPEEDチャンネル1", chelement:{option:["single","set"],set:[16]},price:{single:900, set:1200}},
	{"chnum":16, "chname":"SPEEDチャンネル2", chelement:{option:["set"],set:[15]},price:{set:1200}}, //スピード1.2セットだと1200
	{"chnum":21, "chname":"アニマックス(SD)", chelement:{kihon:[]},price:{}},
	{"chnum":22, "chname":"えひめ・すこやかチャンネル", chelement:{kihon:[]},price:{}},
	{"chnum":23, "chname":"えひめ・まなビジョン", chelement:{kihon:[]},price:{}},
	{"chnum":100, "chname":"プレビュー", chelement:{kihon:[]},price:{}},
	{"chnum":101, "chname":"鉄道チャンネル", chelement:{osu:[]},price:{}},
	{"chnum":105, "chname":"ダンスチャンネル by エンタメ～テレ", chelement:{option:["single"],ent:[]},price:{single:900}},
	{"chnum":113, "chname":"Eおんがくチャンネル", chelement:{kihon:[]},price:{}},
	{"chnum":114, "chname":"愛顔スポーツチャンネル", chelement:{kihon:[]},price:{}},
	{"chnum":115, "chname":"ワンダーチャンネル", chelement:{kihon:[]},price:{}},
	{"chnum":116, "chname":"マチスキチャンネル", chelement:{kihon:[]},price:{}},
	{"chnum":117, "chname":"マツリ☆チャンネル", chelement:{kihon:[]},price:{}},
	{"chnum":118, "chname":"NHKワールドJAPAN", chelement:{kihon:[]},price:{}},
	{"chnum":119, "chname":"ウィットチャンネル", chelement:{kihon:[]},price:{}},
	{"chnum":121, "chname":"ディスカバリーチャンネル", chelement:{osu:[]},price:{}},
	{"chnum":122, "chname":"ムービープラス", chelement:{osu:[]},price:{}},
	{"chnum":123, "chname":"女性チャンネル♪LaLa TV", chelement:{osu:[]},price:{}},
	{"chnum":124, "chname":"スーパー! ドラマTV", chelement:{option:["set"],set:[133],osu:[]},price:{set:900}},
	{"chnum":125, "chname":"日本映画専門チャンネル", chelement:{option:["single"], osu:[]},price:{single:700}},
	{"chnum":126, "chname":"アジアドラマチックＴＶ", chelement:{option:["single"], osu:[]},price:{single:600}},
	{"chnum":127, "chname":"衛星劇場", chelement:{option:["single"]},price:{single:1800}},
//	{"chnum":129, "chname":"ディズニーXD HD", chelement:{},price:{}},
	{"chnum":131, "chname":"FOX", chelement:{ent:[], ote:[]},price:{}},
	{"chnum":132, "chname":"J SPORTS 4", chelement:{option:["single","set"],set:[158,166,169]},price:{single:1300,set:2515}},
	{"chnum":133, "chname":"ザ・シネマ", chelement:{option:["set"],set:[124,134]},price:{set:900}},
	{"chnum":134, "chname":"ヒストリーチャンネル", chelement:{osu:[],option:["set"],set:[133]},price:{set:900}},
	{"chnum":135, "chname":"チャンネル銀河", chelement:{osu:[]},price:{}},
	{"chnum":136, "chname":"テレ朝チャンネル1", chelement:{option:["single"], dor:[]},price:{single:600}},
	{"chnum":137, "chname":"フジテレビNEXT", chelement:{option:["single","set"],set:[138,139]},price:{single:1000,set:1500}},
	{"chnum":138, "chname":"フジテレビONE", chelement:{sup:[],option:["set"],set:[137,139]},price:{set:1500}},
	{"chnum":139, "chname":"フジテレビTWO", chelement:{sup:[],option:["set"],set:[137,138]},price:{set:1500}},
	{"chnum":140, "chname":"ショップチャンネル", chelement:{kihon:[]},price:{}},
	{"chnum":141, "chname":"ホームドラマチャンネル", chelement:{option:["single"], dor:[]},price:{single:600}},
	{"chnum":142, "chname":"ナショナル ジオグラフィック", chelement:{ent:[], ote:[]},price:{}},
	{"chnum":143, "chname":"旅チャンネル", chelement:{osu:[]},price:{}},
	{"chnum":144, "chname":"TBSチャンネル1", chelement:{option:["single","set"], sup:[],set:[176]},price:{single:600,set:1000}},
	{"chnum":145, "chname":"釣りビジョン", chelement:{option:["single"], osu:[]},price:{single:1200}},
	{"chnum":146, "chname":"GAORA SPORTS", chelement:{osu:[],option:["single"]},price:{single:1320}},
	{"chnum":147, "chname":"スカイA", chelement:{option:["single"], sup:[], ote:[]},price:{single:1000}},
	{"chnum":148, "chname":"AXN", chelement:{osu:[]},price:{}},
	{"chnum":149, "chname":"アニマックス", chelement:{osu:[],option:["single"]},price:{single:739}},
	{"chnum":150, "chname":"MUSIC TELEVISION MTV", chelement:{dor:[], ote:[],option:["single"]},price:{single:700}},
	{"chnum":151, "chname":"映画・チャンネルNECO", chelement:{osu:[],option:["single"]},price:{single:600}},
	{"chnum":152, "chname":"TBS NEWS", chelement:{option:[], osu:[]},price:{single:371}},
	{"chnum":153, "chname":"AXNミステリー", chelement:{osu:[]},price:{}},
	{"chnum":154, "chname":"TAKARAZUKA SKY STAGE", chelement:{option:["single"]},price:{single:2700}},
	{"chnum":155, "chname":"WOWOWプラス", chelement:{option:["single"],dor:[], ote:[]},price:{single:700}},
	{"chnum":156, "chname":"スペースシャワーTV", chelement:{osu:[]},price:{}},
	{"chnum":157, "chname":"ファミリー劇場", chelement:{osu:[]},price:{}},
	{"chnum":158, "chname":"J SPORTS 3", chelement:{osu:[],option:["set"],set:[132,168,169]},price:{set:2515}},
	{"chnum":159, "chname":"時代劇専門チャンネル", chelement:{option:["single"], osu:[]},price:{single:700}},
	{"chnum":160, "chname":"MONDO TV", chelement:{ent:[], ote:[]},price:{}},
	{"chnum":161, "chname":"ミュージック･エア", chelement:{option:["single"], dor:[]},price:{single:600}},
	{"chnum":162, "chname":"MUSIC ON! TV", chelement:{osu:[]},price:{}},
	{"chnum":163, "chname":"キッズステーション", chelement:{osu:[],option:["single"]},price:{single:739}},
	{"chnum":164, "chname":"グリーンチャンネル1", chelement:{option:["set"],set:[165]},price:{set:1000}},
	{"chnum":165, "chname":"グリーンチャンネル2", chelement:{option:["set"],set:[164]},price:{set:1000}},
	{"chnum":166, "chname":"日テレジータス", chelement:{osu:[],option:["single"]},price:{single:900}},
	{"chnum":167, "chname":"ゴルフネットワーク", chelement:{osu:[],option:["single"]},price:{single:2254}},
	{"chnum":168, "chname":"J SPORTS 1", chelement:{osu:[],option:["set"],set:[132,158,169]},price:{set:2515}},
	{"chnum":169, "chname":"J SPORTS 2", chelement:{osu:[],option:["set"],set:[132,158,168]},price:{set:2515}},
	{"chnum":170, "chname":"ミュージック・ジャパンTV", chelement:{option:["single"]},price:{single:400}},
	{"chnum":171, "chname":"海外アニメ！カートゥーンネットワーク", chelement:{osu:[]},price:{}},
	{"chnum":172, "chname":"QVC", chelement:{kihon:[]},price:{}},
	{"chnum":173, "chname":"東映チャンネル", chelement:{option:["single"]},price:{single:1500}},
	{"chnum":174, "chname":"KNTV", chelement:{option:["single"]},price:{single:3600}},
	{"chnum":175, "chname":"歌謡ポップスチャンネル", chelement:{option:["single"], osu:[]},price:{single:800}},
	{"chnum":176, "chname":"TBSチャンネル2", chelement:{sup:[],option:["single"]},price:{single:600}},
//	{"chnum":177, "chname":"ジャパネットチャンネルDX", chelement:{},price:{}},
	{"chnum":178, "chname":"CNN/US", chelement:{option:["single"], ent:[]},price:{single:1600}},
	{"chnum":180, "chname":"CNNj", chelement:{osu:[]},price:{}},
	{"chnum":181, "chname":"Mnet", chelement:{option:["single"]},price:{single:2300}},
	{"chnum":182, "chname":"アニメシアターX (AT-X)", chelement:{option:["single"]},price:{single:1800}},
	{"chnum":183, "chname":"ディズニー・チャンネル", chelement:{option:["single"]},price:{single:739}},
	{"chnum":184, "chname":"KBS WORLD", chelement:{ent:[]},price:{}},
	{"chnum":185, "chname":"日経CNBC", chelement:{option:["single"], osu:[]},price:{single:900}},
	{"chnum":186, "chname":"アニマルプラネット", chelement:{osu:[]},price:{}},
	{"chnum":187, "chname":"エンタメ～テレ☆", chelement:{option:["single"], ent:[]},price:{single:600}},
	{"chnum":188, "chname":"テレ朝チャンネル2", chelement:{option:["single"], dor:[]},price:{single:6000}},
	{"chnum":190, "chname":"日テレプラス", chelement:{sup:[]},price:{}},
	{"chnum":191, "chname":"パチンコ☆パチスロTV!", chelement:{option:["single"]},price:{single:1000}},
	{"chnum":192, "chname":"ジュエリー☆GSTV", chelement:{kihon:[]},price:{}},
	{"chnum":195, "chname":"Ｖ☆パラダイス", chelement:{option:["single"]},price:{single:700}},
	{"chnum":196, "chname":"囲碁・将棋チャンネル", chelement:{osu:[]},price:{}},
	{"chnum":252, "chname":"日テレNEWS24", chelement:{sup:[], ote:[],option:["single"]},price:{single:480}},
//	{"chnum":284, "chname":"日テレプラス", chelement:{sup:[]},price:{}},
	{"chnum":291, "chname":"レッドチェリー", chelement:{option:["single","set"],set:[394]},price:{single:2500,set:3000}},
	{"chnum":393, "chname":"レインボーチャンネル", chelement:{option:["single"]},price:{single:2300}},
	{"chnum":394, "chname":"プレイボーイ チャンネル", chelement:{option:["single","set"],set:291},price:{single:2500,set:3000}},
	{"chnum":400, "chname":"たうんチャンネル4K", chelement:{kihon:[]},price:{}},
	{"chnum":401, "chname":"ケーブル4K", chelement:{kihon:[]},price:{}},
	{"chnum":416, "chname":"ショップチャンネル4K", chelement:{kihon:[]},price:{}},
	{"chnum":417, "chname":"4K QVC", chelement:{kihon:[]},price:{}},
	{"chnum":418, "chname":"ザ・シネマ4K", chelement:{osu:[]},price:{}},
	{"chnum":500, "chname":"イベントプレミアムチャンネル", chelement:{option:["single"]},price:{single:300}},
	
];

/*let list_example =[
	{chNum:111},
	{chName:"aaa"},
	{chElement:["osusume","dorama&ongaku","option"]},
	{price:1000}//optionあれば、なければnull
]
*/

const pack_list = {
	osu : {ch_list:[168,169,158,123,122,167,135,125,159,121,186,146,149,163,
		148,153,162,126,157,196,418,124,134,145,171,143,166,180,175,185,152,120,156,151],
		price:3200},	//+放送大学？
	ote : {ch_list:[147,252,155,150,131,142,160],price:500},
	dor : {ch_list:[136,188,141,155,150,161],price:500},
	sup : {ch_list:[147,138,139,144,176,252,284],price:500},
	ent : {ch_list:[131,142,160,187,105,178,184],price:500},
	kihon : {ch_list:[21,100,118,140,172,192]}
};