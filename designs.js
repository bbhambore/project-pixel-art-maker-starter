// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#submit').click(function makeGrid(event) {
    event.preventDefault();

    if($('#pixelCanvas>tr').length) {
        console.log("Removing the existing canvas");
        $('#pixelCanvas>tr').remove();
    }

    let rows = $('#inputHeight').val();
    let columns = $('#inputWidth').val();
    let data = '';
    console.log("Grid size: "+rows+"*"+columns);

    for (let i=0;i<rows;i++) {
        data+= '<tr>';
        for (let j=0;j<columns;j++) {
            data+= '<td></td>';
        }
        data+= '</tr>';
    }
    $('#pixelCanvas').append(data);
});
