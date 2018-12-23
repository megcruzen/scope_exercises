/*
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    const HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        const HTMLRepresentation += `<div>${member}</div>`
    })
}

document.querySelector(".show-info").innerHTML = HTMLRepresentation
*/


{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        },
    }
    // console.log("ModSquad Members:", ModSquad.members);
    let infoContainer = document.querySelector(".show-info");
    let HTMLTitle = `<h1>The Mod Squad</h1>`;
    infoContainer.innerHTML = HTMLTitle;
    ModSquad.members.forEach(member => {
        let HTMLRepresentation = `<div>${member}</div>`
        infoContainer.innerHTML += HTMLRepresentation;
    });
}