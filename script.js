document.getElementById('noButton').addEventListener('click', function() {
    this.style.fontSize = parseFloat(getComputedStyle(this).fontSize) - 1 + 'px';
    document.getElementById('yesButton').style.fontSize = parseFloat(getComputedStyle(document.getElementById('yesButton')).fontSize) + 1 + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Te quiero diezh veces diezh, mi princesita';
});
