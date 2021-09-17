//cssは基本的にbootstrapを使用してます。classで指定

let pool_ch = [];

let set_items = {
	osu:[],
	ote:[],
	dor:[],
	sup:[],
	ent:[],
	opt:[]
};

let judge_items = {
	osu:false,
	ote:false,
	dor:false,
	sup:false,
	ent:false,
	opt:false
};

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
	tr.onclick = test;
	//tr.onclick = func(arguments[0]);
	tableEle.appendChild(tr);


	let th = document.createElement('th');
	let td = document.createElement("td");

	th.scope = "row";
	if (ch_list[i].chnum < 100){
		console.log("aaa");
		th.innerHTML = `0${ch_list[i].chnum}`;
	}else{
		console.log("bbb");
		th.innerHTML = ch_list[i].chnum;	
	}
	
	td.innerHTML = ch_list[i].chname;

	tr.appendChild(th);
	tr.appendChild(td);
	
}

function test(e){
	
	packDiv.innerHTML = "";
	optDiv.innerHTML = "";
	psDiv.innerHTML = "";
	priceDiv.innerHTML = "";
	//console.log(`aaa:${option}`)
	console.log(e.path[1].id);

	let selectID = e.path[1].id;
	let ele = document.getElementById(selectID);
	//選択した行を色変更class追加・削除
	ele.classList.toggle('active');

	let mmm = parseInt(ele.firstElementChild.innerHTML);
	console.log("-------");
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
	console.log(`selected_chList :${pool_ch}`);
	
	
	//各パックごとのoptionCHリストを作成✓
	//CH_list.jsの情報にoptionとその値段追加✓
	//合計値を出す
	
	option = judge();
	
	for (let keyname in set_items){
		if (keyname != 'opt' && judge_items[keyname] == true){
			create_div(keyname);
		}else if (keyname == 'opt' && judge_items[keyname] == true){
			create_div(keyname);
		}
	}
	
	let total = price_pack(judge_items) + price_option(option);
	total = total + (total * 0.1);
	total = Math.ceil(total);
	total_div(total);
	//console.log(total);
	
	console.log(option);
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
		if (key == "option"){
			set_items["opt"].push(mmm);
		}
		console.log(`func_add-${key} :${set_items[key]}`);
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
		opt:false
	};

	//optをいじる際に一旦optionにコピーしてから使う
	option = set_items["opt"].concat();
	//console.log(`bbb:${option}`);
	console.log("===");
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

function create_div(keyname){
	let available = document.getElementById("Available-pack");
	let option_list = document.getElementById("option-list");
	let div = document.createElement("div");
	let h1 = document.createElement("h1");
	h1.classList = 'fs-5'
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
			let p = document.createElement("p");
			let chnode = document.createTextNode(name);
			p.appendChild(chnode);
			div.appendChild(p);
		}
		option_list.appendChild(div);
	}
}

function total_div(price){
	let div = document.getElementById("price");
	let p = document.createElement("p");
	let textnode = document.createTextNode(`合計 ${price}`);
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
		if(key != "opt" && judge_items[key] == true){
			price = price + pack_list[key].price
		}
	}
	return price;
}

function price_option(option_list){
	let price = 0;
	let opt = option_list.concat();
	console.log(`before:${opt}`);
	opt = opt.sort(f);
	console.log(`after;${opt}`);
	for (let i = 0; i < opt.length; i ++){
		console.log(`a:${i}`);
		let index = getIndex(opt[i],ch_list,"chnum")
		if(index == -1){
			console.log(`Error:${opt[i]}`);
			continue;
		}
		let cl = ch_list[index]
		if (cl.chelement.option.includes("set")){
			console.log(`b;${opt[i]}`);
			let target = cl.chelement.set;
			console.log(`target:${target}`);
			if (opt.includes(target)){
				for (let key in opt){
					if (opt.includes(target)){
						let reindex = opt.indexOf(target);
						
						opt.splice(reindex, 1);
					}
				}
				price = price + cl.price.set;
			}else{
				console.log("d");
				if (!cl.chelement.option.includes("single")){
					price = price + cl.price.set;
				}else{
					price = price + cl.price.single;
				}
				console.log(`d:${price}`);
			}
		}else{
			console.log("c");
			price = price + cl.price.single;
		}
	}
	return price;
}

