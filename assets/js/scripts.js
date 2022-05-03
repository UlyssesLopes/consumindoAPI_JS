const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

// função assincrona para pegar consumir a API e pegar as fotos em formato json
const getCats = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

// função assincrona para mostrar na tela a foto consumida pela função getCats()
const loadImg = async() => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

// carrega a função loadImg no click do botao
catBtn.addEventListener('click', loadImg);

//executa
loadImg();