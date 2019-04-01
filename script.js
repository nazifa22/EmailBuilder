function getContent(id)
{
  let elementId = id.getAttribute('data-id');
  if(elementId == 'CTA')
  {
    document.getElementById('heading').innerHTML = elementId;
  }
  else if(elementId == 'oneTwoOne')
  {
    document.getElementById('heading').innerHTML = '121';
  }
  else {
    document.getElementById('heading').innerHTML = elementId.split(/(?=[A-Z])/).join(" ");
  }
  
  let output;

  if(elementId == 'customLayout')
  {
      var row = prompt('Enter the number of rows');
      var col = prompt('Enter the number of cols');
      var table = `cellpadding="0" cellpaddin="0" border="0" width="100%"`,
        tableData = `-moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; border-collapse: collapse; color: #717171; font-family: 'Verdana', 'Arial', 'Helvetica', sans-serif; font-size: 12px; font-smoothing: antialiased; font-weight: normal; line-height: 20px;`;

      if(row == ' ' || row == null)
      {
        row = 1;
      }
      
      if(col == ' ' || col == null)
      {
        col = 1;
      }
      
      var j = 1;

      output = `<xmp><table ${table}></xmp>`;

      for(var i=1; i<=row; i++)
        {
            output = output + '<xmp>  <tr></xmp>'
            while(j<=col)
              {
                  output = output + `<xmp>    <td align="left" style="${tableData}"></td></xmp>`;
                  j = j+1;
              }
            j = 1;
            output = output + `<xmp>  </tr></xmp>`;
        }
        output = output + `<xmp></table></xmp>`;

        output = document.getElementById('content').innerHTML = output;

        // $(document).ready(function(){
        //   output = document.getElementById('content').innerHTML = output;
        // });
  }

  else {
    // Fetching elements by ID
    let contents = document.getElementById(elementId);

    // Placing on the empty div
    output = document.getElementById('content');
      output = output.innerHTML = contents.innerHTML;
  }
} 

function copyDivToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementById("content"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  alert('Copied to clipboard');
}