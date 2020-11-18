window.addEventListener('DOMContentLoaded', (event) => {
    // The following adapted from:
    // https://bl.ocks.org/mpetroff/4666657beeb85754611f

    // Navbar and dropdowns
    const navbarToggle = document.getElementsByClassName('navbar-toggle')[0],
          navbarCollapse = document.getElementsByClassName('navbar-collapse')[0]
          sidebarCollapse = document.getElementById('sidebarCollapse')
          sidebarToggle = document.getElementsByClassName('sidebar-toggle')[0];

    // Toggle if navbar menu is open or closed
    const toggleNavbar = ele => () => {
        ele.classList.toggle('collapse');
    }

    const toggleSidebar = ele => () => {
        if (ele.classList.contains('d-none')) {
            ele.classList.remove('d-none', 'd-sm-block');
        } else {
            ele.classList.toggle('collapse');
        }
    }

    // Event listeners
    navbarToggle.addEventListener('click', toggleNavbar(navbarCollapse), false);
    sidebarToggle.addEventListener('click', toggleSidebar(sidebarCollapse), false);
});
