# jQuery endless promotion counter
A jQuery plugin for make endless promotion counter

## Demo
http://labs.geekhare.me/jquery-epcounter/

## Getting started

### How to install

Install via NPM:

```shell
npm install jquery-epcounter
```
Install via Bower:

```shell
bower install jquery-epcounter
```
Include files:

```html
<script src="../jquery.js"></script><!-- jQuery is required -->
<script src="../dist/jquery.epcounter.min.js"></script>
```

### How to use

Base HTML code:

```html
<div id="epcounter">
    <div>An expire: <span id="expireMount"></span> <span id="expireDays"></span></div>
    <div>A days left: <span id="daysLeft"></span></div>
</div>
```

Base initializing

```javascript
$("#epcounter").epcounter({
    "idExpireMonth": "expireMount",
    "idExpireDays": "expireDays",
    "idDaysLeft": "daysLeft"
});
```

Set a start date and amount promotion days

```javascript
$("#epcounter").epcounter({
    "amountPromotionDays": 15,

    "startDay": 1,       // Day of month 1 - 31
    "startMonth": 8,     // Month 1 - 12,
    "startYear": 2018,   // Year,

    "idExpireMonth": "expireMount",
    "idExpireDays": "expireDays",
    "idDaysLeft": "daysLeft"
});
```

Full config with localization

```javascript
$("#epcounter").epcounter({
    "amountPromotionDays": 15,

    "startDay": 1,       // Day of month 1 - 31
    "startMonth": 8,     // Month 1 - 12,
    "startYear": 2018,   // Year,

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
    ]
});
```

Debug (print to console)

```javascript
$("#epcounter").epcounter({
    "printLog": true    // Default: false
});
```

Debug result

```
---------------[ jquery.epcounter.js ]---------------
Start date: Wed Aug 01 2018 00:00:00 GMT+0300 (Moscow Standard Time)
Current date: Fri Sep 14 2018 02:59:19 GMT+0300 (Moscow Standard Time)
Expire date: Sat Sep 29 2018 02:59:19 GMT+0300 (Moscow Standard Time)
Passed days: 45
Days left: 15
-----------------------------------------------------
```

## License

[MIT](https://opensource.org/licenses/MIT) © [GeekHare](https://geekhare.me)