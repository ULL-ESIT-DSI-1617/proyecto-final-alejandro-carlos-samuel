(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
        $('.modal').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '20%', // Starting top style attribute
            endingTop: '10%', // Ending top style attribute
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space