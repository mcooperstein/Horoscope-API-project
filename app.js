var astrology = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Saggitarius", "Capricorn"];
var sign;

$(document).ready(function () {
    $("p").hide();
    $("button").click(function () {
        function findSign() {
            if (month == "January" && date >= 20) {
                sign = astrology[0];
            }
            if (month == "February" && date <= 18) {
                sign = astrology[0];
            }
            if (month == "February" && date >= 19) {
                sign = astrology[1];
            }
            if (month == "March" && date <= 20) {
                sign = astrology[1];
            }
            if (month == "March" && date >= 21) {
                sign = astrology[2];
            }
            if (month == "April" && date <= 19) {
                sign = astrology[2];
            }
            if (month == "April" && date >= 20) {
                sign = astrology[3];
            }
            if (month == "May" && date <= 20) {
                sign = astrology[3];
            }
            if (month == "May" && date >= 21) {
                sign = astrology[4];
            }
            if (month == "June" && date <= 20) {
                sign = astrology[4];
            }
            if (month == "June" && date >= 21) {
                sign = astrology[5];
            }
            if (month == "July" && date <= 22) {
                sign = astrology[5];
            }
            if (month == "July" && date >= 23) {
                sign = astrology[6];
            }
            if (month == "August" && date <= 22) {
                sign = astrology[6];
            }
            if (month == "August" && date >= 23) {
                sign = astrology[7];
            }
            if (month == "September" && date <= 22) {
                sign = astrology[7];
            }
            if (month == "September" && date >= 23) {
                sign = astrology[8];
            }
            if (month == "October" && date <= 22) {
                sign = astrology[8];
            }
            if (month == "October" && date >= 23) {
                sign = astrology[9];
            }
            if (month == "November" && date <= 21) {
                sign = astrology[9];
            }
            if (month == "November" && date >= 22) {
                sign = astrology[10];
            }
            if (month == "December" && date <= 21) {
                sign = astrology[10];
            }
            if (month == "December" && date >= 22) {
                sign = astrology[11];
            }
            if (month == "January" && date <= 19) {
                sign = astrology[11];
            }
            return sign;
        }
        var month = $("#month").val();
        var date = $("#date").val();
        findSign();
        $("p").show().text("Your sign is: " + sign);
    });
});
