document.getElementById('save').addEventListener('click', function save() {
    var saveButton = document.getElementById('save');
    chrome.tabs.query({}, function(result) {
        let workspace = {
            name: "workspace",
            tabs: result,
        };
        chrome.storage.sync.get(['counter'], (result) => {
                workspace.name = "Workspace" + result.toString();
        })
        let key = workspace.name;
        chrome.storage.sync.set({key: workspace}, function() {
            console.log(workspace.name + ' is saved');
          });
        saveButton.innerText = "saved";  
})
}, false);



