function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add logic to only do this when received by the web application
chrome.runtime.sendMessage({ target: "Red" }, function (response) {
    console.log(response);
});


chrome.runtime.onMessage.addListener(request => {
    if (request.target === "setColor") {
        window.document.body.style.backgroundColor = getRandomColor();

        for (var button of window.document.getElementsByTagName("button")) {
            console.log(button);
            button.style.background = getRandomColor();
        }

        for (var div of window.document.getElementsByTagName("*")) {
            div.style.backgroundColor = getRandomColor();
        }

        return Promise.resolve({ response: "Hi from content script" });
    }
});
