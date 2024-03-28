//fang LIs i header og andre relevante elementer
let headerEl = document.querySelectorAll('.dropdown');
let hiddenEl = document.querySelectorAll('.hidden');

//tilføj eventlistenter, hover/mouseOver/mouseEnter? med forEach
//classListAdd eller toggle som tildeler .active og noget med position? relative/absolute og Z-index, så det bliver vist over andre elementer. 
headerEl.forEach(headerLi => {
    headerLi.addEventListener('mouseover', () => {
        hiddenEl.forEach(hidden => {
        hidden.classList.toggle('active');
        });
    });
    headerLi.addEventListener('mouseleave', () => {
        hiddenEl.classList.remove('')
    })
});



