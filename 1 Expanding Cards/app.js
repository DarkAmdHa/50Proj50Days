const cards = document.querySelectorAll('.card');
console.log(cards);
const expandCard = e => {
    e.preventDefault();
    console.log(e.target);
    if(!e.target.classList.contains('expanded')){
        for(i=0;i<cards.length;i++){
            const card = cards[i];
            if(card.classList.contains('expanded')){
                card.classList.remove('expanded');
            }
        }
        e.target.classList.add('expanded');
    }
    else{
        e.target.classList.remove('expanded');
    }
}



for(let i=0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener('click', expandCard);
}