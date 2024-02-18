tailwind.config = {
    theme: {
        extend: {
            colors: {
            primarycolor1: '#5C1647',
            primarycolor2: '#F94546',
            primarycolor3: '#201658',
            primarycolor4: '#12372A',
            primarycolor5: '#561C24',
            primarycolor6: '#030637',
            primarycolor7: '#7a287c',
            primarycolor8: '#505b55',
            primarycolor9: '#c87500',
            primarycolor10: '#110a00',
            primarytext1: '#5C1647',
            primarytext2: '#F94546',
            primarytext3: '#201658',
            primarytext4: '#12372A',
            primarytext5: '#561C24',
            primarytext6: '#030637',
            primarytext7: '#7a287c',
            primarytext8: '#505b55',
            primarytext9: '#c87500',
            primarytext10: '#110a00',
            }
        }
    }
}

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
    $(".foto-grid").click(function(){
        var imgSrc = $(this).find("img").attr("src");
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

$(document).ready(function() {
    $("#button-nav-responsive").click(function() {
        $("#sidebar-responsive").toggleClass("translate-x-full");
    });

    $("#close-sidebar-responsive").click(function() {
        $("#sidebar-responsive").toggleClass("translate-x-full");
    });
});

$(document).ready(function () {
    let cardWidth = $('.carousel-item').outerWidth(true);
    let totalCards = $('.carousel-item').length;
    let visibleCards = Math.floor($('.carousel-container').width() / cardWidth);
    let currentPosition = 0;

    // Function to handle carousel movement
    function moveCarousel(direction) {
        let newPosition;
    
        if (direction === "next") {
            newPosition = Math.min(currentPosition + 1, totalCards - visibleCards -1);
            if (newPosition === currentPosition) {
                newPosition = 0; // Kembali ke awal jika mencapai batas akhir
            }
        } else {
            newPosition = Math.max(currentPosition - 1, 0);
        }
    
        $('.carousel-track').css('transform', 'translateX(' + -1 * newPosition * cardWidth + 'px)');
        currentPosition = newPosition;
    }

    // Recalculate carousel on window resize
    $(window).resize(function () {
        cardWidth = $('.carousel-item').outerWidth(true);
        totalCards = $('.carousel-item').length;
        visibleCards = Math.floor($('.carousel-container').width() / cardWidth);
        moveCarousel();
    });

    // Navigation controls
    $('#carouselNext').click(function () {
        moveCarousel("next");
    });

    $('#carouselPrev').click(function () {
        moveCarousel("prev");
    });

     // Set interval to move carousel every half second
    setInterval(function() {
        moveCarousel("next");
    }, 4000);
});

$(document).ready(function(){
    $("#searchInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".berkas-judul").filter(function() {
        $(this).parents(".bg-white")[0].style.display = $(this).text().toLowerCase().indexOf(value) > -1 ? "" : "none";
      });
    });
  });