$(document).ready(function () {

    // календарь JQuery UI 
    $.datepicker.setDefaults({
        dateFormat: "dd.mm.yy",
        changeMonth: true,
        changeYear: true,
        showOn: "button",
        buttonImage: "sources/images/calendar.png",
        buttonImageOnly: true,
        yearRange: "1900:2099"
    });

    $(".date-picker").datepicker();
    $(".date-picker").datepicker("option", $.datepicker.regional["ru"]);

    // маска
    $(".date-picker").inputmask("dd.mm.yyyy", {yearrange: {minyear: 1900, maxyear: (new Date()).getFullYear()},
        "placeholder": "_",
        alias: "date",
        "clearIncomplete": true,
        "clearMaskOnLostFocus": true});
        
    $("body").delegate('.bith_calendar', 'click', function () {
        $(this).parent().find(".ui-datepicker-trigger").click();
    });
});

