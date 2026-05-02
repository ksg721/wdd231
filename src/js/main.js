function updateParkInformation(){
    document.getElementById("parkName").textContent = "Yellowstone"
    document.querySelector("#parkType").textContent = "National Park"
    document.querySelector("#parkStates").textContent = "ID, WY, MT"
    document.getElementById("heroImage").src = "images/yellowstone.jpg"
}

function addEventListeners() {
    const menuTrigger = document.querySelector("#header-menu-trigger")
    const menuOptions = document.querySelector("#header-menu-options")
    const parkInfo = document.querySelector("#parkInfo")

    if (menuTrigger && menuOptions) {
        menuTrigger.addEventListener("click", () => {
            menuOptions.classList.toggle("is-hidden")
        })

        menuOptions.addEventListener("click", (event) => {
            const itemName = event.target.textContent
            console.log(itemName)
        })
    }

    if (parkInfo) {
        parkInfo.addEventListener("mouseenter", () => {
            parkInfo.classList.add("overlay-hover")
        })

        parkInfo.addEventListener("mouseleave", () => {
            parkInfo.classList.remove("overlay-hover")
        })
    }
}

updateParkInformation()
addEventListeners()
