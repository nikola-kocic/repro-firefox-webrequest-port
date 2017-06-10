const URL_WITH_PORT = "http://127.0.0.1:8000/styles.css";
const URL_WITHOUT_PORT = "http://127.0.0.1/styles.css";

var browser = browser || chrome;

browser.webRequest.onBeforeRequest.addListener(
  (requestDetails) => {
    console.log("Loading (all_urls): " + requestDetails.url);
    if (requestDetails.url === URL_WITH_PORT) {
      console.log("Found URL_WITH_PORT in all_urls");
    }
  },
  {urls: ["<all_urls>"]}
);

browser.webRequest.onBeforeRequest.addListener(
  (requestDetails) => { console.log("Loading (with port): " + requestDetails.url); },
  {urls: [URL_WITH_PORT]}
);

browser.webRequest.onBeforeRequest.addListener(
  (requestDetails) => { console.log("Loading (without port): " + requestDetails.url); },
  {urls: [URL_WITHOUT_PORT]}
);
