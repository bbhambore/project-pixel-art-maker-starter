const row_input = $('#inputHeight');
const col_input = $('#inputWidth');
const table = $('#pixelCanvas');

/**
* @description Accepts dimensions from user to create a grid box
* @param {object} event
**/
$('#submit').click(function makeGrid(event) {
    //Prevent the page from being refreshed
    event.preventDefault();

    //Remove the existing grid if present
    if($('#pixelCanvas>tr').length) {
        $('#pixelCanvas>tr').remove();
    }

    //Get the input height and width
    let rows = row_input.val();
    let columns = col_input.val();
    let data = '';

    //Construct the table
    for (let i=0;i<rows;i++) {
        data+= '<tr>';
        for (let j=0;j<columns;j++) {
            data+= '<td></td>';
        }
        data+= '</tr>';
    }
    table.append(data);
});

/**
* @description When the user clicks any of the grids, apply user selected color as its background
* @param {object} event
**/
table.on('click', 'td', function applyColor(event) {
    $(this).css('background-color',$('#colorPicker').val());
});
