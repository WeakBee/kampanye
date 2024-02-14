$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        $($(this).attr('href')).get(0).scrollIntoView({
            behavior: 'smooth'
        });
    });

    let defaultTransform = 0;
    const slider = $("#slider");
    const sliderItemWidth = $(".slider-item").outerWidth(true) + 24;

    $("#next").on("click", function () {
        defaultTransform -= sliderItemWidth;
        if (Math.abs(defaultTransform) >= slider.get(0).scrollWidth/1.5) defaultTransform = 0;
        slider.css('transform', `translateX(${defaultTransform}px)`);
    });

    $("#prev").on("click", function () {
        if (defaultTransform <= 0) defaultTransform = 0;
        else defaultTransform += sliderItemWidth;
        slider.css('transform', `translateX(${defaultTransform}px)`);
    });
});


$(document).ready(function(){
    $(".grid img").click(function(){
        var imgSrc = $(this).attr("src");
        $("#modalImg").attr("src", imgSrc);
        $("#myModal").css("display", "block");
    });

    $(".close").click(function(){
        $("#myModal").css("display", "none");
    });
});

$(document).ready(function(){
    $('#lainnya').hide(); // Sembunyikan input lainnya saat halaman dimuat

    $('#jabatan').change(function(){
        if($(this).val() == 'Others'){
            $('#lainnya').show().prop('required', true); // Tampilkan input lainnya dan buat required jika opsi "Lainnya" dipilih
        } else {
            $('#lainnya').hide().prop('required', false); // Sembunyikan input lainnya dan hapus required jika opsi lain dipilih
        }
    });
});

$(document).ready(function(){
    $('#filter-btn').on('click', function(){
        var startDate = new Date($('#start-date').val());
        var endDate = new Date($('#end-date').val());

        $('.card').each(function(){
            var cardDate = new Date($(this).data('date'));
            if (cardDate >= startDate && cardDate <= endDate) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});


