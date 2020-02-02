const Unsplash = require("unsplash-js").default;
const { accessKey } = require("./config.json");

const unsplash = new Unsplash({ accessKey: accessKey });

// Set title
document.title = chrome.i18n.getMessage("tabTitle");

// Set favicon
function updateFavicon(e) {
    const type = e.matches ? "light" : "dark";
    document.querySelector("link[rel=\"shortcut icon\"]").href = `icons/tab-${type}-32.png`;
    chrome.runtime.sendMessage({ type: "update-icon" }); // Only works if this page is open, but still, better than nothing.
}
const mql = window.matchMedia("(prefers-color-scheme: dark)");
mql.onchange = updateFavicon;
updateFavicon(mql);
