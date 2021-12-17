const h = document.querySelector('header');
const bn = document.getElementById('bn');
var n_ = document.querySelector('nav.pt');
function wos() {
    cn();
}
function dn(n) {
    if (n === 'bn' && n_.style.display === 'flex') {
        cn();
    } else {
        n_.style.height = 1 + window.innerHeight - h.offsetHeight - (parseInt(window.getComputedStyle(h).marginBottom, 10) * 2) + 'px';
        n_.style.marginTop = h.offsetHeight + parseInt(window.getComputedStyle(h).marginBottom, 10) + 'px';
        n_.style.display = 'flex';
    }
    window.addEventListener('scroll', wos, true);
}
function cn() {
    n_.style.display = 'none';
    window.removeEventListener('scroll', wos, true);
}
const m_ = document.querySelector('main');
for (i = 0; i < m_.getElementsByTagName('img').length; i++) {
    if (m_.getElementsByTagName('img')[i].src.substr(-4) !== '.svg') {
        m_.getElementsByTagName('img')[i].addEventListener('click', function() {
            dm(this);
        });
    }
}
var dmp = {};
const m = document.getElementById('m');
function wokd(nt) {
    if (nt.keyCode === 27) {
        cm();
    }
}
const mg = document.getElementById('mg');
const md = document.getElementById('md');
const mx = document.getElementById('mx');
mx.addEventListener('click', mxoc, true);
function mxoc() {
    cm();
}
const ic = document.getElementsByClassName('ic');
for (i = 0; i < ic.length; i++) {
    ic[i].addEventListener('click', function() {
        dm(this);
    });
}
const iis = document.getElementsByClassName('iis');
for (i = 0; i < iis.length; i++) {
    iis[i].addEventListener('click', function() {
        dm(this);
    });
}
const mnol = document.getElementsByClassName('mnol')[0];
function dm(n) {
    let mc,mi;
    dmp.sX = window.pageXOffset;
    dmp.sY = window.pageYOffset;
    if (n_ != null) {
        md.style.height = window.innerHeight - parseInt(window.getComputedStyle(mx).height, 10) - (parseInt(window.getComputedStyle(mx).marginTop, 10) * 3) + 'px';
        md.style.marginTop = parseInt(window.getComputedStyle(mx).marginTop, 10) + 'px';
    }
    switch (true) {
    case n.classList.contains('ic'):
        mc = 'm' + n.classList[0].slice(-1);
        mc = document.getElementById(mc);
        mc.style.display = 'flex';
        m.style.display = 'flex';
        dmp.mc = mc;
        dmp.oce = n;
        break;
    case n.classList.contains('iis'):
        mi = 'm' + n.dataset.ii;
        mi = document.getElementById(mi);
        mi.style.display = 'flex';
        m.style.display = 'flex';
        dmp.mi = mi;
        dmp.oce = n;
        break;
    case n.classList.contains('hi') || n.classList.contains('hil') || n.classList.contains('vi') || n.classList.contains('vil') || n.classList.contains('si'):
        mg.setAttribute('src', n.src);
        mg.style.display = 'inline-block';
        m.style.display = 'flex';
        dmp.mg = true;
        break;
    case n.classList.contains('mnol'):
        m.style.opacity = '0';
        m.style.transition = '1.5s opacity';
        mnol.style.display = 'flex';
        m.style.display = 'flex';
        setTimeout(function() {
            m.style.opacity = '1';
            m.ontransitionend = function() {
                m.style.transition = '.75s opacity';
                m.ontransitionend = null;
            }
            ;
        }, 750);
        dmp.id = "mnol";
        break;
    }
    window.addEventListener('keydown', wokd, true);
}
function cm() {
    window.scrollTo(dmp.sX, dmp.sY);
    switch (true) {
    case 'mc' in dmp:
        m.style.display = 'none';
        dmp.mc.style.display = 'none';
        break;
    case 'mi' in dmp:
        m.style.display = 'none';
        dmp.mi.style.display = 'none';
        break;
    case 'mg' in dmp:
        m.style.display = 'none';
        mg.style.display = 'none';
        mg.removeAttribute('src');
        break;
    case 'mnol' in dmp:
        m.style.opacity = '0';
        m.ontransitionend = function() {
            m.style.display = 'none';
        }
        ;
        mnol.style.display = 'flex';
        dmp.id = "mnol";
        break;
    }
    window.removeEventListener('keydown', wokd, true);
    dmp = {};
    x = null;
}
const io = document.querySelectorAll('[data-io]');
function rio() {
    if (ww <= 425 && p === false && lf === false) {
        for (i = 0; i < io.length; i++) {
            if (io[i].dataset.io === 'if' || io[i].dataset.io === 'is') {
                io[i].nextElementSibling.insertBefore(io[i], io[i].nextElementSibling.firstElementChild);
            } else if (io[i].dataset.io === 'o') {
                io[i].parentNode.parentNode.appendChild(io[i]);
            }
        }
    } else if (ww > 425 && ww <= 768 && t === false && d === true) {
        for (i = 0; i < io.length; i++) {
            if (io[i].dataset.io === 'if' || io[i].dataset.io === 'is') {
                io[i].nextElementSibling.insertBefore(io[i], io[i].nextElementSibling.firstElementChild);
            } else if (io[i].dataset.io === 'o') {
                io[i].parentNode.parentNode.appendChild(io[i]);
            }
        }
    } else if (ww > 768 && d === false) {
        for (i = 0; i < io.length; i++) {
            if (io[i].dataset.io === 'o') {
                io[i].parentNode.querySelector('[data-io="d"]').appendChild(io[i]);
            } else if (io[i].dataset.io === 'if') {
                io[i].parentNode.parentNode.insertBefore(io[i], io[i].parentNode.parentNode.firstElementChild);
            } else if (io[i].dataset.io === 'is') {
                io[i].parentNode.parentNode.insertBefore(io[i], io[i].parentNode.parentNode.firstElementChild.nextElementSibling);
            }
        }
    }
}
if (document.getElementById('sh')){shli=document.getElementById('sh').getElementsByTagName('li');}
function rsh() {
    if (ww <= 425 && p === false) {
        shli[0].innerText = shli[0].innerText.replace('Mon', 'Monday');
        shli[1].innerText = shli[1].innerText.replace('Tue', 'Tuesday');
        shli[2].innerText = shli[2].innerText.replace('Wed', 'Wednesday');
        shli[3].innerText = shli[3].innerText.replace('Thu', 'Thursday');
        shli[4].innerText = shli[4].innerText.replace('Fri', 'Friday');
        shli[5].innerText = shli[5].innerText.replace('Sat', 'Saturday');
        shli[6].innerText = shli[6].innerText.replace('Sun', 'Sunday');
    } else if (ww > 425 && ww <= 768 && t === false && p === true) {
        shli[0].innerText = shli[0].innerText.replace('Monday', 'Mon');
        shli[1].innerText = shli[1].innerText.replace('Tuesday', 'Tue');
        shli[2].innerText = shli[2].innerText.replace('Wednesday', 'Wed');
        shli[3].innerText = shli[3].innerText.replace('Thursday', 'Thu');
        shli[4].innerText = shli[4].innerText.replace('Friday', 'Fri');
        shli[5].innerText = shli[5].innerText.replace('Saturday', 'Sat');
        shli[6].innerText = shli[6].innerText.replace('Sunday', 'Sun');
    }
}
const cf = document.querySelectorAll('[data-c]');
setInterval(function() {
    for (i = 0; i < cf.length; i++) {
        let c = cf[i].dataset.c;
        if (cf[i].style.color === c) {
            cf[i].style.color = '';
        } else {
            for (i = 0; i < cf.length; i++) {
                cf[i].style.color = c;
            }
        }
    }
}, 1500);
var ww, d = true;
var lf = p = t = false;
function r() {
    ww = window.innerWidth;
    if (ww <= 425 && p === false) {
        rsh();
        if (lf === false) {
            rio();
        }
        p = true;
        t = d = false;
    } else if (ww > 425 && ww <= 768 && t === false) {
        if (p === true) {
            rsh();
        }
        if (d === true) {
            rio();
        }
        t = true;
        p = d = false;
    } else if (ww > 768 && d === false) {
        rio();
        d = true;
        p = t = false;
    }
    if (n_ != null) {
        if (n_.style.display === 'flex') {
            dn('r');
        }
    }
    if (lf === false) {
        lf = true;
    }
}
['DOMContentLoaded', 'load', 'resize'].forEach(function(nt) {
    window.addEventListener(nt, function() {
        r();
    }, true);
});