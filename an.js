nj();

let nmmx ='';
let sctnm = '';
var tntvs = 1;

function nmmxx(){
	nmmx = document.querySelector('input').value;
	sctnm = nvnm();
	mn('Anon Num', `Escolha um numero de 1 a ${nmmx}`);
	lmpcmp();
	document.getElementById('in').innerHTML =('<button id="in" onclick="vrct()">CHUTAR</button>');
}




function mn(ht, pt, hid){
	extxt('h1', ht,hid);
	extxt('p', pt);
}

function extxt(tag, txt, nid){
	let cmp = document.querySelector(tag);
	cmp.innerHTML = txt;
	cmp.setAttribute('id', nid);
}



function vrct() {
	let nmct = document.querySelector('input').value;
	if(nmct == sctnm){
		mn('Correto!', `O número era ${sctnm} acertou na ${tntvs}ª tentativa`,'vdd');
		document.getElementById('cmp').setAttribute('hidden', 'true');
		document.getElementById('in').innerHTML =('<button onclick="nj()" id="nj">Novo Jogo</button>');
		lmpcmp();

	}else{
		if(nmct > sctnm){
		mn('É menor', `Escolha um numero de 1 a ${nmmx}`, 'fls');
	}else{
		mn('É maior', `Escolha um numero de 1 a ${nmmx}`, 'fls');
}

tntvs++
lmpcmp();
	}
}
function nvnm(){
	return parseInt(Math.random() * nmmx + 1);
}

function lmpcmp(){
	nmct = document.querySelector('input');
	nmct.value ='';
	
}
function nj(){
	mn('Anon Num', 'Escolha o número limite');
	document.getElementById('cmp').removeAttribute('hidden');
	document.getElementById('in').removeAttribute('hidden');
	document.getElementById('in').innerHTML =('<button  onclick="nmmxx()">INICIAR</button>');
	return tntvs = 1;
	lmpcmp();

}
