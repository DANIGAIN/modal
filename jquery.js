$(()=>{
    $('#btn').on('click', function(e){
        $(this).hide();
        $('.modal').show('2s');
    });
});


$('.close').on('click', ()=>{

    $('.modal').hide('2s');
    $('#btn').show();
});

$(document).on('click',function(e){

    if(!e.target.closest('.modal') && !e.target.closest('#btn'))
    {
        $('.modal').hide('2s');
        $('#btn').show();
    }
});

