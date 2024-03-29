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


//fang navigationen, class list add en toggle class, så den flyver ind fra højre. Sæt class i CSS til at have height og width 0. Tjek eventuelt popup fra tidligere opgave omkring notifikation

//fang burger menu 
let burgerEl = document.querySelector('.burger img');
let toggleEl = document.querySelector('.toggle');

// Add click event listener
burgerEl.addEventListener('click', () => {
    toggleEl.classList.toggle('toggle');
    toggleEl.classList.toggle('burgerMenuItems');

});

//classlist toggle mellem toggle og burgerMenuItems


