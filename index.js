//cssは基本的にbootstrapを使用してます。classで指定

let pool_ch = [];

let set_items = {
	osu:[],
	ote:[],
	dor:[],
	sup:[],
	ent:[],
	kihon:[],
	opt:[]
};

let judge_items = {
	osu:false,
	ote:false,
	dor:false,
	sup:false,
	ent:false,
	kihon:false,
	opt:false
};

let working_items = {
	osusume:[],
	otegaru:[],
	doraon:[],
	supobara:[],
	entame:[],
	option:[]
}
let option = [];

let tableEle = document.getElementById('data-table');
let packDiv = document.getElementById('Available-pack');
let optDiv = document.getElementById('option-list');
let psDiv = document.getElementById('ps');
let priceDiv = document.getElementById('price');
for (let i = 0; i < ch_list.length; i++) {

  	// テーブルの行を 要素分追加したのちcell追加
	let tr = document.createElement('tr');
	tr.id = "tableId_" + `${i}`;
	tr.classList = "toggle";
	tr.classList.add("hit");
	tr.classList.add("small")
	tr.onclick = test;
	//tr.onclick = func(arguments[0]);
	tableEle.appendChild(tr);


	let numtd = document.createElement('th');
	let nametd = document.createElement('td');

	let kihontd = document.createElement('th');
	let osutd = document.createElement('td');
	let otetd = document.createElement('td');
	let dortd = document.createElement('td');
	let suptd = document.createElement('td');
	let enttd = document.createElement('td');
	let opttd = document.createElement('td');

	nametd.scope = "row";
	if (ch_list[i].chnum < 100){
//		console.log("aaa");
		numtd.innerHTML = `0${ch_list[i].chnum}`;
	}else{
//		console.log("bbb");
		numtd.innerHTML = ch_list[i].chnum;	
	}
	
	nametd.innerHTML = ch_list[i].chname;
	
	for (let key in ch_list[i].chelement){
		if (key == "kihon"){
			let Textnode = document.createTextNode("●") 
			kihontd.appendChild(Textnode);
			kihontd.style.textAlign = "center";
		}
		if (key == "osu"){
			let Textnode = document.createTextNode("●") 
			osutd.appendChild(Textnode);
			osutd.style.textAlign = "center";
		}
		if (key == "ote"){
			let Textnode = document.createTextNode("●") 
			otetd.appendChild(Textnode);
			otetd.style.textAlign = "center";
		}
		if (key == "dor"){
			let Textnode = document.createTextNode("●") 
			dortd.appendChild(Textnode);
			dortd.style.textAlign = "center";
		}
		if (key == "sup"){
			let Textnode = document.createTextNode("●") 
			suptd.appendChild(Textnode);
			suptd.style.textAlign = "center";
		}
		if (key == "ent"){
			let Textnode = document.createTextNode("●") 
			enttd.appendChild(Textnode);
			enttd.style.textAlign = "center";
		}
		if (key == "option"){
			let Textnode = document.createTextNode("●") 
			opttd.appendChild(Textnode);
			opttd.style.textAlign = "center";
		}
	}

	tr.appendChild(nametd);
	tr.appendChild(numtd);
	tr.appendChild(kihontd);
	tr.appendChild(osutd);
	tr.appendChild(otetd);
	tr.appendChild(dortd);
	tr.appendChild(suptd);
	tr.appendChild(enttd);
	tr.appendChild(opttd);
	
	
}

function test(e){
	console.log(e);
	console.log(e.path[1].id)
	packDiv.innerHTML = "";
	optDiv.innerHTML = "";
	psDiv.innerHTML = "";
	priceDiv.innerHTML = "";
	//console.log(`aaa:${option}`)
//	console.log(e.path[1].id);

	let selectID = e.path[1].id;
	console.log(`ca1:${selectID}`);
	let ele = document.getElementById(selectID);
	console.log(ele);
	//選択した行を色変更class追加・削除
	ele.classList.toggle('active');

	let mmm = parseInt(ele.children[1].innerHTML);
//	console.log("-------");
	if(pool_ch.includes(mmm)){
		let index = pool_ch.indexOf(mmm);
		if (index > -1) {
			pool_ch.splice(index, 1);
			remove(mmm);
		}
	}
	else{
		pool_ch.push(mmm);
		add(mmm);
	}
	console.log(`ca2:${mmm}`)
//	console.log(`selected_chList :${pool_ch}`);
	
	
	//各パックごとのoptionCHリストを作成✓
	//CH_list.jsの情報にoptionとその値段追加✓
	//合計値を出す
	
	option = judge();
	
	for (let keyname in set_items){
		if (keyname != 'kihon' && keyname != 'opt' && judge_items[keyname] == true){
			create_div(keyname,mmm);
		}else if (keyname == 'opt' && judge_items[keyname] == true){
			create_div(keyname,mmm);
		}
	}
	
	let total = price_pack(judge_items) + price_option(option);
	total = total + (total * 0.1);
	total = Math.ceil(total);
	total_div(total);
	//console.log(total);
	
//	console.log(option);
	//create_div();
}

//渡された2つの配列から重複値をリスト化
function dupdup(array01, array02){
	return [...new Set(array01)].filter(value => array02.includes(value));
}

//選択されたchが新規の場合各リストへ追加
function add(new_ch){
	let mmm = new_ch;
	let Index = getIndex(mmm, ch_list, "chnum");
	
	for (let key in ch_list[Index].chelement){
		if (key == "osu"){
			set_items["osu"].push(mmm);
		}
		if (key == "ote"){
			set_items["ote"].push(mmm);
		}
		if (key == "dor"){
			set_items["dor"].push(mmm);
		}
		if (key == "sup"){
			set_items["sup"].push(mmm);
		}
		if (key == "ent"){
			set_items["ent"].push(mmm);
		}
		if (key == "kihon"){
			set_items["kihon"].push(mmm)
		}
		if (key == "option"){
			set_items["opt"].push(mmm);
		}
//		console.log(`func_add-${key} :${set_items[key]}`);
	}
	
};

//既出chが選択された場合リストから削除
function remove(selected_ch){
	let mmm = selected_ch;
	for (let key in set_items){
		if (set_items[key].includes(mmm)){
			let Index = set_items[key].indexOf(mmm);
			set_items[key].splice(Index, 1);
		}
	
	}//console.log(`func_remove :${set_items}`);
}

//配列のindex取得(ネスト2つ)
function getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1; //値が存在しなかったとき
}

function judge(){
	//osusumeとoptionの重複出して、あればoptionの方を削除
	judge_items = {
		osu:false,
		ote:false,
		dor:false,
		sup:false,
		ent:false,
		//kihon:false,
		opt:false
	};

	//optをいじる際に一旦optionにコピーしてから使う
	option = set_items["opt"].concat();
	//console.log(`bbb:${option}`);
//	console.log("===");
	//console.log(judge_items);
	if (set_items["osu"].length != 0){
		judge_items["osu"] = true;
	}
	let dupOsu_Opt = dupdup(set_items["osu"], option);
	//console.log(`bb :${dupOsu_Opt}`);
	rem_opt(dupOsu_Opt);
	
	for (let key in set_items){
		if (key != "osu" && key != "ote" && key != "opt"){
			if (set_items[key].length != 0){
				//console.log(`comcom :${key} :${set_items[key]}`);
				compare_pack(set_items["ote"], set_items[key], key)
			}
		}
	}
	
	for (let key2 in judge_items){
		if (judge_items[key2] == true){
			rem_opt(set_items[key2]);
		}
	}
	
	if (option.length != 0){
		judge_items["opt"] = true;
	}
	
	return option;
	
}
//リストoptionから渡されたリストの値を削除
function rem_opt(array03){
	for (let i = 0; i < array03.length; i++){
		let key1 = array03[i];
		if(option.includes(key1)){
			let index = option.indexOf(key1);
			if (index > -1){
				//console.log("okokokokoko")
				option.splice(index, 1);
			}
		}
	}
	//console.log(`oppp:${option}`);
}

//04に05が含まれればtrue,それ以外false(おてがるに他3パックが含まれるかどうか)
function compare_pack(array04, array05, nameOfarray05){
	if (array05.every(ele => array04.indexOf(ele) != -1)) {
		if (array04.length != 0){
			//おてがるパックが確定
			//おてがるが当てはまるとき，他3パックも同時に選択されている
			judge_items["ote"] = true;	
			//console.log(judge_items["ote"]);
			//console.log("a");
		}
	}//else if (array04.every(ele => array05.indexOf(ele) != -1)){
		
	//}
	else{
		//oteと何か or 何かのみ
		judge_items[nameOfarray05] = true;
	}
}

function create_div(keyname,mmm){
	let available = document.getElementById("Available-pack");
	let option_list = document.getElementById("option-list");
	let div = document.createElement("div");
	let h1 = document.createElement("h1");
	let p = document.createElement("p");
	
	let index = getIndex(mmm,ch_list,"chnum");
	let namenode = document.createTextNode(ch_list[index].chname);

	h1.classList = 'fs-5';
	div.id = keyname;
	div.classList = 'border border-3 round mt-2 ml-1 p-1 mb-2';
	if (keyname == "osu"){
		div.classList.add('border-secondary', 'bg-osu');
		let textnode = document.createTextNode('おすすめパック');
		h1.appendChild(textnode);
		div.appendChild(h1);
		available.appendChild(div);
	}
	if (keyname == "ote"){
		div.classList.add('border-secondary', 'bg-ote');
		let textnode = document.createTextNode('おてがるパック');
		h1.appendChild(textnode);
		div.appendChild(h1);
		available.appendChild(div);
	}
	if (keyname == "dor"){
		div.classList.add('border-secondary', 'bg-dor');
		let textnode = document.createTextNode('ドラマ・音楽パック');
		h1.appendChild(textnode);
		div.appendChild(h1);
		available.appendChild(div);
	}
	if (keyname == "sup"){
		div.classList.add('border-secondary', 'bg-sup');
		let textnode = document.createTextNode('スポーツ・バラエティパック');
		h1.appendChild(textnode);
		div.appendChild(h1);
		available.appendChild(div);
	}
	if (keyname == "ent"){
		div.classList.add('border-secondary', 'bg-ent');
		let textnode = document.createTextNode('エンタメパック');
		h1.appendChild(textnode);
		div.appendChild(h1);
		available.appendChild(div);
	}
	if (keyname == "opt"){
		div.classList.add('border-secondary', 'bg-opt');
		let textnode = document.createTextNode('オプションch');
		h1.appendChild(textnode);
		div.appendChild(h1);
		for (let i = 0; i < option.length; i++){
			let index = getIndex(option[i], ch_list, "chnum")
			let name = ch_list[index].chname;
//			let p = document.createElement("p");
			let chnode = document.createTextNode(name);
			let br = document.createElement("br");
			p.appendChild(chnode);
			p.appendChild(br);
			div.appendChild(p);
		}
		option_list.appendChild(div);
	}
}

function total_div(price){
	let div = document.getElementById("price");
	let p = document.createElement("p");
	let textnode = document.createTextNode(`合計 ${price} 円(税込)`);
	p.appendChild(textnode);
	div.appendChild(p);
}

function reset_button(){
	window.location.reload(true);
}

let f = function (a, b) {
    return a - b
}

function price_pack(judge_items){
	price = 0;
	let ji = judge_items;
	for (let key in ji){
		if(key != "kihon" && key != "opt" && judge_items[key] == true){
			price = price + pack_list[key].price
		}
	}
	return price;
}

function price_option(option_list){
	let price = 0;
	let opt = option_list.concat();
	opt = opt.sort(f);
//optがあれば"single"か"set"は判定
	for (let i = 0; i < opt.length; i ++){
		let index = getIndex(opt[i],ch_list,"chnum")
		if(index == -1){
			continue;
		}
		let cl = ch_list[index]
//"set"の場合、相方がいるかの確認。存在すれば相方を消してセット料金を出す。
		if (cl.chelement.option.includes("set")){
			for (let j = 0; j < ch_list[0].chelement.set.length; j ++){
				let target = cl.chelement.set[j];
				if (opt.includes(target)){
					for (let key in opt){
						if (opt.includes(target)){
							let reindex = opt.indexOf(target);
							opt.splice(reindex, 1);
						}
					}
					price = price + cl.price.set;
//"set"で相方いなくとも"single"料金が存在しなければ単体でもセット料金を出す。"
				}else{
					if (!cl.chelement.option.includes("single")){
						price = price + cl.price.set;
					}else{
						price = price + cl.price.single;
					}
				}
			}
//"setがなければ"single"料金で
		}else{
			price = price + cl.price.single;
		}
	}
	return price;
}

