let traits = document.querySelectorAll(".trait");
let dropZones = document.querySelectorAll(".tier-items, .trait-list");

traits.forEach(trait => {

    trait.addEventListener("dragstart", function(e) {
        e.dataTransfer.setData("text", e.target.id);
    });

});


dropZones.forEach(zone => {

    zone.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    zone.addEventListener("drop", function(e) {
        e.preventDefault();

        let id = e.dataTransfer.getData("text");
        let trait = document.getElementById(id);

        zone.appendChild(trait);
    });

});


function resetTiers() {

    let traitList = document.getElementById("traitList");

    traits.forEach(trait => {
        traitList.appendChild(trait);
    });

}

document.getElementById("resetButton").addEventListener("click", resetTiers);
