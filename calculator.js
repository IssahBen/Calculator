const buttons = document.querySelectorAll("button")

const buttonsarr = Array.from(buttons)

const display = document.querySelector("#display")



const p = buttonsarr.map(function (button) {
    button.addEventListener("click", function (e) {
        const input = e.target.innerText
        switch (input) {
            case ("AC"):
                display.value = ""
                break;
            case ("Del"):

                display.value = display.value.slice(0, -1)
                break;
            case ("="):
                try {
                    display.value = eval(display.value)
                }
                catch {
                    display.value = "Error"
                }
                break;
            default:
                display.value += input
        }
    })
})

