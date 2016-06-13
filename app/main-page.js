"use strict";
var main_view_model_1 = require("./main-view-model");
var appModule = require("application");
var file_system_1 = require("file-system");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function onTap(args) {
    //console.log(android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DCIM).toString());
    // console.log(appModule.android.os.Environment.getExternalStorageDirectory().getAbsolutePath());
    //var tempFilePath2 = path.join(appModule.android.currentContext.getExternalFilesDir(null).getAbsolutePath(),"sdcard/Download");
    //console.log(tempFilePath2);
    var tempFilePath = file_system_1.path.join(android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).toString());
    var folder = file_system_1.Folder.fromPath(tempFilePath);
    var testFile = folder.getFile("text.txt");
    testFile.writeText("Something")
        .then(function () {
        testFile.readText()
            .then(function (content) {
            console.log(content);
        }, function (error) {
            console.log("Error " + error);
        });
    }, function (error) {
        console.log("Error " + error);
    });
    folder.getEntities()
        .then(function (entities) {
        entities.forEach(function (entity) {
            console.log(entity.name);
        });
    }, function (error) {
        console.log("error " + error);
    });
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map