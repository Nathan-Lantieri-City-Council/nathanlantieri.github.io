function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(go);

function go() {
    var menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.classList.contains('open')) {
            document.getElementById('nav-primary').classList.remove('open');
            this.setAttribute('aria-expanded', 'false');
            this.classList.remove('open');
            document.body.classList.remove('nav-open');
        }
        else {
            document.getElementById('nav-primary').classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            this.classList.add('open');
            document.body.classList.add('nav-open');
        }
    });
}