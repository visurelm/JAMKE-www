$(document).ready(function(){

    var items = getFromLocal('memos');
    var index;
    loadList(items);

    $('button').prop('disabled', true);
    $('input').keyup(function(){
        if($(this).val().length !== 0) {
            $('button').prop('disabled', false);
        } else {
            $('button').prop('disabled', true);
        }
    });
    // Enter näpytin
    $('#main-input').keypress(function(e){
        if(e.which === 13) {
            if ($('#main-input').val().length !== 0)
                $('#main-button').click();
        }
    });
    $('#main-button').click(function(){
        var value = $('#main-input').val();
        items.push(value);
        //console.log(items[0]);
        $('#main-input').val('');
        loadList(items);
        storeToLocal('memos', items);
        $('button').prop('disabled', true);
    });
    // Poista listalta
    $('ul').delegate("span", "click", function(event){
        event.stopPropagation();
        index = $('span').index(this);
        $('li').eq(index).remove();
        items.splice(index, 1);
        storeToLocal('memos', items);

    });

    // Muokkaus
    $('ul').delegate('li', 'click', function(){
        index = $('li').index(this);
        var content = items[index];
        console.log(content);
        $('#edit-input').val(content );
    });

    $('#edit-button').click(function(){
        items[index] = $('#edit-input').val();
        loadList(items);
        storeToLocal("memos", items);
    });

    //Hae lista
    function loadList(items){
        $('li').remove();
        if(items.length > 0) {
            for(var i = 0; i < items.length; i++) {
                $('ul').append('<li class= "list-group-item" data-toggle="modal" data-target="#editModal" title="Muokkaa">' + items[i] + '<span class="glyphicon glyphicon-remove" title="Poista"></span</li>');
            }
        }
    };

    function storeToLocal(key, items){
        localStorage[key] = JSON.stringify(items);
    }

    function getFromLocal(key){
        if(localStorage[key])
            return JSON.parse(localStorage[key]);
        else
            return [];
    }

});
