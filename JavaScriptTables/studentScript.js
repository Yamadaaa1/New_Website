fetch('cuhh.json')
.then(function(response) {
    return response.json();
})
.then(function(cuhh) {
    let placeholder = document.querySelector("#output");
    let displayData = "";
    for(let student of cuhh){
        displayData += `
        <tr>
        <td>${student.lrn}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.section}</td>
        <td><img src='${student.image}'></td>
        </tr>
        `;
    }
    placeholder.innerHTML = displayData;
});