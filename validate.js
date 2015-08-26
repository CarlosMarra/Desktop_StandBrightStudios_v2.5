$(document).ready(function() {
    var iframe = document.getElementById('revealed_video');
    // $f == Froogaloop
    var player = $f(iframe);
    // bind events
    var playButton = document.getElementById("masked_image");
    playButton.addEventListener("click", function() {
        $(".masked_imaging").addClass('hide');
        $(".revealed_video").removeClass('hide');
        player.api("play");
    });
    var complete = screen.width;
    if (complete < 1024) {
        window.location.href = "http://m.standbrightstudios.com";
    }
    $.validator.addMethod("phones", function(phone_number, element) {
        phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
        return this.optional(element) || phone_number.length > 9 && (phone_number.match(
                /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/) || phone_number.match(
                /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/
            ) || phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/) ||
            phone_number.match(
                /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/));
    }, "Please specify a valid phone number");
    $.validator.addMethod("currency", function(value, element, param) {
        var isParamString = typeof param === "string",
            symbol = isParamString ? param : param[0],
            soft = isParamString ? true : param[1],
            regex;
        symbol = symbol.replace(/,/g, "");
        symbol = soft ? symbol + "]" : symbol + "]?";
        regex = "^[" + symbol +
            "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
        regex = new RegExp(regex);
        return this.optional(element) || regex.test(value);
    }, "Please specify a valid currency");
    $("#contact_submit").validate({
        rules: {
            person_name: {
                required: true,
                minlength: 2
            },
            company_name: {
                required: true,
                minlength: 2
            },
            company_number: {
                required: true,
                phones: true
            },
            company_email: {
                required: true,
                email: true
            },
            company_budget: {
                required: true,
                currency: ["$", false]
            },
            company_know: {
                required: true
            },
            company_details: {
                required: true
            }
        },
        messages: {
            person_name: "Please provide a valid name",
            company_name: "Enter a valid Company Name",
            company_number: "Valid # Required",
            company_email: "Valid Email Required",
            company_budget: "Valid Budget Required",
            company_know: "Please tell us how you know about us.",
            company_details: "Some details required. Please fill this out as much as possible."
        },
        errorPlacement: function(error, element) {
            element.attr("placeholder", error.text());
        },
    });
    $("#news_submit").validate({
        rules: {
            mail: {
                required: true,
                email: true
            },
        },
        messages: {
            mail: "Valid Email Required",
        },
        errorPlacement: function(error, element) {
            element.attr("placeholder", error.text());
        },
    });
    $('#contact_submit').ajaxForm(function() {
        $('.template_contact_menus').val("");
        $('.template_contact_text2').val("");
        alert("Thank you for contacting us. Have a great day!");
    });
    $('#news_submit').ajaxForm(function() {
        $('.template_newsletter_info_email').val("");
        alert("Thank you for subscribing. Have a nice day!");
    });
});
var template_blurb_text = parseInt($(".template_blurb_text").css("font-size").replace(/[^-\d\.]/g, ''));
var m_width = screen.width;
var m_height = screen.height;
setInterval(function() {
    var a_width = window.innerWidth;
    var a_height = document.body.clientHeight;
    var w_division = parseFloat(a_width / m_width);
    var h_division = parseFloat(a_height / m_height);
    $("html").css("min-width", a_width);
    $("html").css("min-height", m_height);
    $(".template_navbar").css("height", (a_height * .11));
    $(".template_front_rectangles").css("margin-top", (a_height * .20));
    $(".template_front_rectangles").css("height", (a_height * .8));
    $(".template_front_left").css("min-height", a_height);
    $(".template_front_divs").css("min-height", a_height);
    $(".template_front_right").css("min-height", a_height);
    $(".masked_image").css("height", (a_width * .35));
    $(".masked_image, .masked_imaging").css("width", (a_width * .35));
    $(".revealed_video").css("width", (a_width * .5));
    $(".revealed_video").css("height", (a_width * .5 * .5625));
    $(".what_we_do").css("width", (a_width));
    $(".template_icons_icons figcaption").css("margin-top", parseFloat(-40 * h_division));
    if (m_width > a_width) {
        $("html").css("overflow-x", "scroll");
    }
    if (m_width == a_width) {
        $("html").css("overflow-x", "hidden");
    }
}, 10);