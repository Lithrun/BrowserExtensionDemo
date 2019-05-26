"use strict";

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.target === "Red") {
            chrome.tabs.query({}, //{  currentWindow: true},
                function (tabs) {
                    for (let tab of tabs) {
                        chrome.tabs.sendMessage(tab.id, { target: "setColor" });
                    }
                });
        }
        sendResponse("Enjoy colors <3");
    });