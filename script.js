var search = $('#search'),
    create = $('#create'),
    fact = $('#fact'),
    facName = $('#facName'),
    addUser = $('#addUser');

search.click(function() {
    var name = search.val();
    $.get( '/read&' + name, function(data) {
        if (!data.length){
            addUser.removeClass('hidden');
            search.addClass('hidden');
        } else {
            console.log(data);
        }
    });
});

create.click(function() {
    var user = {name : search.val(), fact : fact.val()};
    $.post('/create', user, function(data) {
        console.log('User Created');
    });
});
