fetch('cuh.json')
.then(function(response) {
    return response.json();
})
.then(function(cuh) {
    let placeholder = document.querySelector("#output");
    let displayData = "";
    for(let tripleS of cuh){
        displayData += `
        <tr>
        <td>${tripleS.name}</td>
        <td>${tripleS.age}</td>
        <td>${tripleS.role}</td>
        <td>${tripleS.Snumber}</td>
        <td><img src='${tripleS.image}'></td>
        </tr>
        `;
    }
    placeholder.innerHTML = displayData;
});