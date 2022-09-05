chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({counter: 0}, function() {
        console.log('counter initialized');
    })
});


