function onOpen() {
    SpreadsheetApp.getUi()
    .createMenu('formatOptions')
    .addSubMenu(SpreadsheetApp.getUi().createMenu('Wix Fixer')
                .addItem('Format 1', 'colAligner')
                .addItem('Format 2', 'anotherScript')
                )
                .addToUi()
};


function colAligner() {
  
  let ss = SpreadsheetApp.getActiveSpreadsheet(); 
  let impSheet = ss.getSheets()[1];
  let ll= Logger.log
  
  let start = Browser.inputBox("Enter Starting Row Here")
  start = start
  ll(start)
  let colCells = impSheet.getRange(start,5, 1500, impSheet.getMaxColumns()).getValues(); 
   
  
  // ll(colCells)
   let x; for(x=0;x < colCells.length; x++) {
    var i;for(i=0; i < colCells[x].length; i++){ 
     let dropCell= colCells.indexOf("DROP_DOWN")
      let num = 5
      if (colCells[x][i]== "DROP_DOWN") {
         break
      } else if (colCells[x][i+1]== "DROP_DOWN") {
      } else if (colCells.indexOf(colCells[x][i]) > dropCell) {
          
      } else if (colCells[x][i]!== "DROP DOWN" && typeof colCells[x][i]!== "number") {
         colCells[x][i] = ""}
      
      
    } 

     colCells = colCells   
    // ll(colCells)
  }
 impSheet.getRange(start,5,1500, impSheet.getMaxColumns()).setValues(colCells)
 
}



function anotherScript() {
let ss = SpreadsheetApp.getActiveSpreadsheet(); 
  let impSheet = ss.getSheets()[1];
  let ll= Logger.log
 
  
  let start =  Browser.inputBox("Enter Starting Row Here")
  let flagMark = Browser.inputBox("Type Brand Marker")

  let colCells = impSheet.getRange(start,5, 1500, impSheet.getMaxColumns()).getValues(); 
       
      let x; for(x=0;x < colCells.length; x++) {
       var i;for(i=0; i < colCells[x].length; i++){ 
        if (colCells[x][i] === flagMark) { 
          ll(colCells[x].length) 
          ll(i)
          ll(colCells[x] - i)
          let z;for(z=i+1; z < colCells[x].length; z++) {
             colCells[x][z]= ""}
         }
        else{
        }
     }
    }
 
 impSheet.getRange(start,5, 1500, impSheet.getMaxColumns()).setValues(colCells)
}