// pop up kopi
const popupKopiSection = document.querySelector('#popup-kopi')
const viewMoreButtonKopi = document.querySelectorAll('#kopi-btn')

viewMoreButtonKopi.forEach((btn) => {
    btn.onclick = (e) => {
        popupKopiSection.style.display = 'flex'
        e.preventDefault()
    }
});

document.querySelector('.popup-kopi .popup-card .close').onclick = (e) => {
    popupKopiSection.style.display = 'none'
    e.preventDefault()
}


// pop up soto
const popupSotoSection = document.querySelector('#popup-soto')
const viewMoreButtonSoto = document.querySelectorAll('#soto-btn')

viewMoreButtonSoto.forEach((btn) => {
    btn.onclick = (e) => {
        popupSotoSection.style.display = 'flex'
        e.preventDefault()
    }
});

document.querySelector('.popup-soto .popup-card .close').onclick = (e) => {
    popupSotoSection.style.display = 'none'
    e.preventDefault()
}


// pop up gudeg
const popupGudegSection = document.querySelector('#popup-gudeg')
const viewMoreButtonGudeg = document.querySelectorAll('#gudeg-btn')

viewMoreButtonGudeg.forEach((btn) => {
    btn.onclick = (e) => {
        popupGudegSection.style.display = 'flex'
        e.preventDefault()
    }
});

document.querySelector('.popup-gudeg .popup-card .close').onclick = (e) => {
    popupGudegSection.style.display = 'none'
    e.preventDefault()
}


// pop up tongseng
const popupTongsengSection = document.querySelector('#popup-tongseng')
const viewMoreButtonTongseng = document.querySelectorAll('#tongseng-btn')

viewMoreButtonTongseng.forEach((btn) => {
    btn.onclick = (e) => {
        popupTongsengSection.style.display = 'flex'
        e.preventDefault()
    }
});

document.querySelector('.popup-tongseng .popup-card .close').onclick = (e) => {
    popupTongsengSection.style.display = 'none'
    e.preventDefault()
}