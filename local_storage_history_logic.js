function printLocalStorage() {
    const outputDiv = document.getElementById('localhistory');
    outputDiv.innerHTML = '<hr>';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const pElement = document.createElement('p');
        pElement.textContent = `|${key}| ${value}`;

        outputDiv.appendChild(pElement);
    }
}
// call
printLocalStorage();
// Remove Button
function removeHistory() {
    localStorage.clear();
}
// inform
function informto(){
    const informData = document.getElementById('information');
    informData.innerHTML = 'If you clicked on remove button, then please wait:another refress;| automatic refress working 5000';
}
// noData
if (localStorage.length === 0) {
    const dataError = document.getElementById('noData');
    dataError.innerHTML = 'No data';
}
// Automatic Refress
function refressPage() {
    location.reload();
}
setInterval(refressPage, 5000);