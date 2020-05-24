window.addEventListener('DOMContentLoaded', (event) => {
    // The following adapted from:
    // https://bl.ocks.org/mpetroff/4666657beeb85754611f

    // Navbar and dropdowns
    const toggle = document.getElementsByClassName('navbar-toggle')[0],
          collapse = document.getElementsByClassName('navbar-collapse')[0];

    // Toggle if navbar menu is open or closed
    function toggleMenu() {
        collapse.classList.toggle('collapse');
    }

    // Event listeners
    toggle.addEventListener('click', toggleMenu, false);
});
