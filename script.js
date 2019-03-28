function getContent(id)
{
  let elementId = id.getAttribute('data-id');
  document.getElementById('heading').innerHTML = elementId;

  // Fetching elements by ID
  let contents = document.getElementById(elementId);

  // Placing on the empty div
  let output = document.getElementById('content');
      output = output.innerHTML = contents.innerHTML;
} 

function copyDivToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementById("show"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  alert('Copied to clipboard');
}

function output(row,col)
{
  var row = prompt('Please enter the number of rows for custom table or you can skip!');
  var col = prompt('Please enter the number of cols for custom table or you can skip!');
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

  var result = result + `<xmp><table ${table}></xmp>`;

  for(var i=1; i<=row; i++)
    {
        result = result + '<xmp>  <tr></xmp>'
        while(j<=col)
          {
              result = result + `<xmp>    <td align="left" style="${tableData}"></td></xmp>`;
              j = j+1;
          }
        j = 1;
        result = result + `<xmp>  </tr></xmp>`;
    }
  result = result + `<xmp></table></xmp>`;
  // document.write(`<div> ${result}  </div>`);

  result = document.getElementById('show').innerHTML = result;
};