const container = document.querySelectorAll('.fade');

window.addEventListener('scroll',containerScroll);

containerScroll();

function containerScroll() {
    const trigger = window.innerHeight / 5 * 4 ;
    container.forEach((container,idx) => {
        const content = container.getBoundingClientRect().top;
        if(content < trigger) {
            container.classList.add('show');
        } else {
            container.classList.remove('show')
        }
    })
}