// Google Apps Script code for Google Sheets integration
// Paste this code into Extensions -> Apps Script inside your Google Sheet

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 1. If the sheet is empty, create styled headers automatically
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Время", 
        "Имя и фамилия", 
        "Телефон", 
        "Telegram", 
        "Возраст и проекты", 
        "Мотивация", 
        "Предыдущие курсы", 
        "Доход", 
        "Готовность к обучению"
      ];
      sheet.appendRow(headers);
      
      // Style headers: Bold, Background: Nigina's Rose Gold (#E5BABA)
      var range = sheet.getRange(1, 1, 1, headers.length);
      range.setFontWeight("bold");
      range.setBackground("#E5BABA");
      range.setFontColor("#050505");
      range.setHorizontalAlignment("center");
      sheet.setRowHeight(1, 30);
    }
    
    var data = JSON.parse(e.postData.contents);
    
    // 2. Format values with a leading single quote (')
    // This tells Google Sheets to treat the value as plain text
    // and prevents formula parsing errors like "#ERROR!" for phones starting with "+"
    var row = [
      new Date(), // Date/Time of submission
      data.name ? "'" + data.name : "",
      data.phone ? "'" + data.phone : "",
      data.telegram ? "'" + data.telegram : (data.instagram ? "'" + data.instagram : ""),
      data.profile ? "'" + data.profile : "",
      data.motivation ? "'" + data.motivation : "",
      data.courses ? "'" + data.courses : "",
      data.income ? "'" + data.income : "",
      data.readiness ? "'" + data.readiness : ""
    ];
    
    // Append the row
    sheet.appendRow(row);
    
    // 3. Auto-resize columns to fit content so it is instantly readable
    for (var col = 1; col <= row.length; col++) {
      sheet.autoResizeColumn(col);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data successfully written to Google Sheet"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
