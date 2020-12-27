function muzikt() {
    document.getElementById('muziksler').classList.toggle('aktif')
    document.getElementById('genelsler').classList.remove('aktif')
    document.getElementById('egelencesler').classList.remove('aktif')
}

function genelt() {
    document.getElementById('genelsler').classList.toggle('aktif')
    document.getElementById('muziksler').classList.remove('aktif')
    document.getElementById('egelencesler').classList.remove('aktif')
}

function egelencet() {
    document.getElementById('egelencesler').classList.toggle('aktif')
    document.getElementById('genelsler').classList.remove('aktif')
    document.getElementById('muziksler').classList.remove('aktif')
}

