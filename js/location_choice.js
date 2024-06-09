const locationSelector1 = document.querySelector("#location_tab_b1");
const locationSelector2 = document.querySelector("#location_tab_b2");
const locationSelector3 = document.querySelector("#location_tab_b3");

const location1 = document.querySelector("#location_1");
const location2 = document.querySelector("#location_2");
const location3 = document.querySelector("#location_3");

const intialLocation = location1;
const intialSelection = locationSelector1;

changeMap(intialLocation, intialSelection)

function changeMap(activeLocation, activeSelection) {
    let allLocations = document.querySelectorAll(".branch_container");
    let allSelections = document.querySelectorAll(".location_option");

    for(const a of allLocations){
       if(a !== activeLocation){
           a.classList.remove("active");
        }else{
            a.classList.add("active");
        }
    }

    for(const a of allSelections){
        if(a !== activeSelection){
            a.classList.remove("active");
        }else{
            a.classList.add("active");
        }
    }
}

locationSelector1.addEventListener("click", () => {
    changeMap(location1, locationSelector1);
});

locationSelector2.addEventListener("click", () => {
    changeMap(location2, locationSelector2);
});

locationSelector3.addEventListener("click", () => {
    changeMap(location3, locationSelector3);
});