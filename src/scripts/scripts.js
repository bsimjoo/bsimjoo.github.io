var load_done = false;

function theme(scheme) {
    document.body.classList = [scheme];
    localStorage.setItem("scheme", scheme);
}

function hide(s) {
    e = document.querySelectorAll(s);
    for (i = 0; i < e.length; i++)
        e[i].classList.add('hide');
}

function show(e) {
    e = document.querySelectorAll(s);
    for (i = 0; i < e.length; i++) {
        if (e[i].classList.contains('hide'))
            e[i].classList.remove('hide');
        if (e[i].style.display === 'none')
            e[i].style.display = 'unset';
    }
}

function lang_select(lang = null) {
    lang = lang ? lang : window.location.hash.substring(1);
    if (lang === 'en-us' || lang === 'fa') {
        document.body.setAttribute('lang', lang);
        localStorage.setItem('language', lang);
        hide('#choose-language');
    }
}

/*window.onload = function() {
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    hide('#no-script');
    if (localStorage.getItem("scheme"))
        theme(localStorage.getItem("scheme"));
    else
        theme(userPrefersLight ? 'light' : 'dark')

    if (window.location.hash)
        lang_select();
}*/