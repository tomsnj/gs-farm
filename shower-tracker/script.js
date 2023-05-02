$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        var selectedValue = $("#shower-select").val();
        // Get the current date
        var today = new Date();

        // Get the month (0-based, so 0 is January)
        var month = today.getMonth();

        // Get the day of the month (1-31)
        var day = today.getDate();

        // Get the full year (4-digit)
        var year = today.getFullYear();

        // Format the date as "MM/DD/YYYY"
        var dateString = (month + 1) + "/" + day + "/" + year;

        var value = `${dateString}:  ${selectedValue}`

        // Save the selected name and date string to local storage as key-value pair
        localStorage.setItem("Shower", value);
    });
});

$('#tommorowDisplayButton').click(function () {
    if (localStorage.getItem('Shower').includes('Calvin')) {
        alert("Tommorow will be Maxwell's shower");
    };
    if (localStorage.getItem('Shower').includes('Maxwell')) {
        alert("Tommorow will be Calvin's shower");
    }
});