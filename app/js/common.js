$(function () {

    $("html").niceScroll();

    //E-mail Ajax Send
    $('form').submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php', //Change
            data: th.serialize()
        }).done(function () {
            $('.form-callback .success').addClass('active');
            setTimeout(function () {
                // Done Functions
                $('.form-callback .success').removeClass('active');
                th.trigger('reset');
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });

    $('.s-adv').parallax();
    $('.s-adv-text').height('auto').equalHeight();

    //Magnific Popup
    var callBack = $('a[href="#callback"]');
    callBack.magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });
    callBack.on('click', function () {
        var dataForm = $(this).data('form');
        var dataText = $(this).data('text');
        $('.form-callback h4').text(dataText);
        $('.form-callback [name=admin-data]').val(dataForm);
    });

    var offerItem = $('.offer-item');
    offerItem.each(function (e) {
        var th = $(this);
        th.attr('href', '#offer-' + e)
            .find('.offer-popup')
            .attr('id', 'offer-' + e);
    });
    offerItem.magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });

    $('.s-adv-item').equalHeight();

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        itemClass: "owl-item"
    });

});
