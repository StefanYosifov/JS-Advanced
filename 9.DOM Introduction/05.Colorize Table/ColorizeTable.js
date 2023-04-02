function colorize() {
    let tableElements = Array.from(document.getElementsByTagName("tr"))

    tableElements = tableElements.map((el,index) => {
        if (index % 2 !== 0) {
            el.style.backgroundColor = "teal";
        }
        return el
    })
}