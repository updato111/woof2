const url = 'https://agecoin.vpnmanager.site/api/join/';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
fetch(proxyUrl + url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

