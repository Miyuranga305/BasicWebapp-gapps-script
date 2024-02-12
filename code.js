function doGet(e){

Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("page");

}


function userClicked(userInfo){
  var Url = "";
  var ss = SpreadsheetApp.openByUrl(Url);
  var ws = ss.getSheetByName("Data");

ws.appendRow([userInfo.firstname,userInfo.lastname,userInfo.app,new Date()]);

//Logger.log(name + " Clicked the Button");

}