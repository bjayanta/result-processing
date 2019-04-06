(function($) {

    $.fn.result = function(options) {
        var settings = $.extend({
            passmarks: 33,
        }, options);

        return this.each(function() {
            var $this = $(this);
            var mark = $this.data('mark'),
                grade = '',
                point = 0.00;

            if(mark >= 80) {
                grade = 'A+';
                point = 5.00;
            } else if(mark >= 70) {
                grade = 'A';
                point = 4.00;
            } else if(mark >= 60) {
                grade = 'A-';
                point = 3.50;
            } else if(mark >= 50) {
                grade = 'B';
                point = 3.00;
            } else if(mark >= 40) {
                grade = 'C';
                point = 2.00;
            } else if(mark >= 33) {
                grade = 'D';
                point = 1.00;
            } else {
                grade = 'F';
                point = 0.00;
            }

            $this.text("Mark: " + mark + ", Grade: " + grade + ", Point: " + point);
        });
    }

}(jQuery));