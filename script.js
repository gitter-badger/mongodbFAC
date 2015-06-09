var search = $('#search'),
    facName = $('facName');

search.click(function() {
    var name = search.val();
        $.get( '/', name, function(data) {
        console.log(data);
    });
});
