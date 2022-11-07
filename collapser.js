// опишите класс Collapser
class Collapser {
    constructor(classCollapser) {
        this.classCollapser = classCollapser;
        const btns = document.querySelectorAll(`.${this.classCollapser}`);
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                btn.classList.contains('active') ? btn.nextElementSibling.style.display = 'block' : btn.nextElementSibling.style.display = '';
            })
        })
    }
}