import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
var appModule = require("application");
import {File, Folder, path} from "file-system";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onTap(args: EventData){
    //console.log(android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DCIM).toString());
   // console.log(appModule.android.os.Environment.getExternalStorageDirectory().getAbsolutePath());
  //var tempFilePath2 = path.join(appModule.android.currentContext.getExternalFilesDir(null).getAbsolutePath(),"sdcard/Download");
 //console.log(tempFilePath2);
 
 
var tempFilePath = path.join(android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).toString());

var folder:Folder = Folder.fromPath(tempFilePath);

var testFile:File = folder.getFile("text.txt");


testFile.writeText("Something")
    .then(function () {
        testFile.readText()
            .then(function (content) {
                console.log(content);
            }, function (error) {
                console.log("Error "+error);
            });
    }, function (error) {
      console.log("Error "+error);
    });


folder.getEntities()
     .then(function (entities) {
         entities.forEach(function (entity) {
             console.log(entity.name);
         });
     }, function (error) {

         console.log("error "+error);
     });
}