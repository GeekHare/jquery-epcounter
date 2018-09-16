;(function($){

    // Default options
    var defaultOptions = {
        "amountPromotionDays": 15,

        "startDay": 1,
        "startMonth": new Date().getMonth(),
        "startYear": new Date().getFullYear(),

        "idExpireMonth": "expireMount",
        "idExpireDays": "expireDays",
        "idDaysLeft": "daysLeft",

        "monthsList": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],

        "debug": false
    };

    // Constructor
    function Epcounter(element, options){

        // Extending default options object
        this.config = $.extend({}, defaultOptions, options);
        this.pElement = element;
        this.init();
    }

    // Initialize
    Epcounter.prototype.init = function () {

        var spanExpiryMount = $('#' + this.config.idExpireMonth);
        var spanExpiryDays  = $('#' + this.config.idExpireDays);
        var spanDaysLeft    = $('#' + this.config.idDaysLeft);

        // Calculate
        var currentDate = new Date();
        var startDate = new Date(this.config.startYear, this.config.startMonth - 1, this.config.startDay);

        var passedDays = getPassedDays();
        var numberDaysLeft = getDaysLetf(passedDays, this.config.amountPromotionDays);

        var expiryDate = new Date(currentDate.getTime() + (numberDaysLeft * (1000 * 3600 * 24)));

        function getPassedDays() {
            var timeDiff = Math.abs(startDate.getTime() - currentDate.getTime());
            return Math.ceil(timeDiff / (1000 * 3600 * 24));
        }

        function getDaysLetf(passedDays, amountPromotionDays) {
            return Math.abs(Math.round(amountPromotionDays - (amountPromotionDays * ((passedDays / amountPromotionDays) - Math.floor((passedDays / amountPromotionDays))))));
        }

        $(spanExpiryMount).html(this.config.monthsList[expiryDate.getMonth()]);
        $(spanExpiryDays).html(expiryDate.getDate());
        $(spanDaysLeft).html(numberDaysLeft);

        // Print log
        if (this.config.debug)
        {
            console.log("---------------[ jquery.epcounter.js ]---------------");
            console.log("Start date: " + startDate);
            console.log("Current date: " + currentDate);
            console.log("Expire date: " + expiryDate);
            console.log("Passed days: " + passedDays);
            console.log("Days left: " + numberDaysLeft);
            console.log("-----------------------------------------------------");
        }

    };

    // Plugin
    $.fn.epcounter = function(options){

        new Epcounter(this.first(), options);
        // return this.pElement;
    };

})(jQuery);