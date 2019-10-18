Loadgo.init(document.getElementById('html5'));
{ direction: 'bt' });
Loadgo.setprogress(document.getElementById('html5'), 70);
Loadgo.resetprogress(document.getElementById('html5'));
Loadgo.getprogress(document.getElementById('html5'));
Loadgo.loop(document.getElementById('html5'), 10);

Loadgo.init(document.getElementById('css3'));
{ direction: 'bt' });
Loadgo.setprogress(document.getElementById('css3',85);
Loadgo.resetprogress(document.getElementById('css3'));
Loadgo.getprogress(document.getElementById('css3');
Loadgo.loop(document.getElementById('css3'), 10);

Loadgo.init(document.getElementById('js'));
{ direction: 'bt' });
Loadgo.setprogress(document.getElementById('ljs'), 75);
Loadgo.resetprogress(document.getElementById('js'));
Loadgo.getprogress(document.getElementById('js'));
Loadgo.loop(document.getElementById('js'), 10);

Loadgo.init(document.getElementById('bs'));
{ direction: 'bt' });
Loadgo.setprogress(document.getElementById('bs'), 65);
Loadgo.resetprogress(document.getElementById('bs'));
Loadgo.getprogress(document.getElementById('bs'));
Loadgo.loop(document.getElementById('bs'), 10);

Loadgo.init(document.getElementById('wp'));
{ direction: 'bt' });
Loadgo.setprogress(document.getElementById('wp'), 50);
Loadgo.resetprogress(document.getElementById('wp'));
Loadgo.getprogress(document.getElementById('wp'));
Loadgo.loop(document.getElementById('wp'), 10);

$(document).ready(function () {
    $('#html5').loadgo();
});

// We create an interval which will be removed when progress completes
var html5Interval;
function mainDemo() {
    var p = 0;
    $('#html5').loadgo('resetprogress');   // reset progress to start again
    html5Interval = window.setInterval(function () {
        if ($('#html5').loadgo('getprogress') == 100) {
            // When progress completes, we have to clear the interval
            window.clearInterval(html5Interval);
        }
        else {
            var prog = p * 10;
            $('#html5').loadgo('setprogress', prog);
            p++;
        }
    }, 150);
};
$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.home, .about, .work, .education, .skills, .contact').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();

var mainProgress = document.querySelector(".text-progress .overlay"); //get the overlayed element
function changeProgress(to, time = 0.5) {
    //defaut transition duration is 0.5 second
    var currentWidth = parseInt(mainProgress.style.width); //get the current width of overlayed element
    if (!currentWidth)
        //in case width is null
        currentWidth = 0;

    mainProgress.style.transition =
        Math.abs(time * (to - currentWidth) / 100) + "s linear";
    mainProgress.style.width = to + "100%";
}
