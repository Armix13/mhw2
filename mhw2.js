


/*--------FUNCTIONS--------*/

/*MOSTRA COLLEZIONE UOMO*/
function onclickcover() {
    const principal_cover = document.querySelector('.cover_image');
    principal_cover.classList.add('display_no');
    const secondary_cover = document.querySelector('.cover_2');
    secondary_cover.classList.remove("display_no");
    elem.removeEventListener('click', onclickcover);
}



/*COLLEZIONI DONNA NON DISPONIBILI*/
function onClickWoman(event) {
    for(const elem of womanCollectionDiv){
        elem.removeEventListener('click',onClickWoman);
    }
    const womanCollection = document.querySelector('.woman-collection');
    const newh1 = document.createElement('h1');
    newh1.classList.add('text_center');
    newh1.textContent = 'Le collezioni donna non sono al momento disponibili';
    womanCollection.innerHTML = '';
    womanCollection.appendChild(newh1);
}



/*COLLEZIONE NAUTICAL*/
function onOverNautical(event) {
    const nauticalDiv = event.currentTarget;
    nauticalDiv.innerHTML = '';
    nauticalDiv.classList.remove("nautical_collection");
    nauticalDiv.classList.add("div_collection");
    const image = document.createElement('img');
    image.src = "nautical.jpg";
    image.classList.add("img_cover");
    nauticalDiv.appendChild(image);
    event.currentTarget.removeEventListener('mouseover', onOverNautical);
}




/*------MENU' FOOTER SMALL DISPLAY------*/
function onClickFooter (event) {
    closeAll();
    const classe = event.currentTarget.dataset.class;
    const divSelected = document.querySelector(classe);
    divSelected.classList.remove("display_no");
}

function closeAll() {
    for(let i = 0; i < footerPhone.length; i++){
        const removeDiv = document.querySelector(footerPhoneRow[i]);
        removeDiv.classList.add("display_no");
    }
}




/*----------MAIN----------*/

/*EVENT LISTENER COLLEZIONE UOMO COVER PRINCIPALE*/
const elem = document.querySelector('#button_cover');
elem.addEventListener('click', onclickcover);



/*EVENT LISTENER cOLLEZIONE DONNA*/
const womanCollectionDiv = document.querySelectorAll('.woman-collection div');
for (const collection of womanCollectionDiv) {
    collection.addEventListener('click', onClickWoman);
}


/*EVENT LISTENER COLLEZIONE NAUTICAL*/
const nauticalCollection = document.querySelector('.nautical_collection');
nauticalCollection.addEventListener('mouseover', onOverNautical);



/*EVENT LISTENER FOOTER PHONE*/
const footerPhone = document.querySelectorAll(".footer_phone__content .row");
const footerPhoneRow = {};

for (const row of footerPhone) {
    row.addEventListener('click', onClickFooter);
    const index = parseInt(row.dataset.row);
    footerPhoneRow[index] = row.dataset.class;
}

