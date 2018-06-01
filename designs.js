// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Add grid based on user input
$('#submit').click(function makeGrid(event) {
    //Prevent the page from being refreshed
    event.preventDefault();

    //Remove the existing grid if present
    if($('#pixelCanvas>tr').length) {
        //console.log("Removing the existing canvas");
        $('#pixelCanvas>tr').remove();
    }

    //Get the input height and width
    let rows = $('#inputHeight').val();
    let columns = $('#inputWidth').val();
    let data = '';
    //console.log("Grid size: "+rows+"*"+columns);

    //Construct the table
    for (let i=0;i<rows;i++) {
        data+= '<tr>';
        for (let j=0;j<columns;j++) {
            data+= '<td></td>';
        }
        data+= '</tr>';
    }
    $('#pixelCanvas').append(data);
});

//Add color to the grid
$('#pixelCanvas').on('click', 'td', function applyColor(event) {
    $(this).css('background-color',$('#colorPicker').val());
});
