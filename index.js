
//red panda 
const rp_btn = document.getElementById('rp_btn');
const panda_btn = document.getElementById('panda_btn');

//panda
const rp_result = document.getElementById('rp_result');
const panda_result = document.getElementById('panda_result');

//panda light
const bid = document.getElementById('bid');
const change = document.getElementById('change');
const colors = ['red', 'blue', 'yellow', 'white', 'orange', 'green','pink',];

//event listeners
rp_btn.addEventListener('click', getRandomRedPanda);
panda_btn.addEventListener('click', getRandomPanda);
change.addEventListener('click',  bGroundChange);

//red panda function
function getRandomRedPanda() {
	fetch('https://some-random-api.ml/img/red_panda')
		.then(res => res.json())
		.then(data => {
			rp_result.innerHTML = `<img src=${data.link} />`
		});
}

//panda function
function getRandomPanda() {
	fetch('https://some-random-api.ml/img/panda')
		.then(res => res.json())
		.then(data => {
			panda_result.innerHTML = `<img src=${data.link} />`
		});
}

//panda nightclub
function bGroundChange(){
    var randomColors = colors[Math.floor(Math.random() * colors.length)]

    bid.style.background = randomColors;
};

