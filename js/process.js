(function($) {
    /**
     * define plugin name
     * set default options and set rules
     * catch mark from element data attribute 
     * initialize the result object
     * 
     * check the given mark is 'greater then or equal' from passmark
     * match the mark to the given settings
     * 
     * set the result into dom
     * set the success method and send the result object as param
     */

    // define plugin name
    $.fn.calculateResult = function(options) {
        // set default options and set rules
        var settings = $.extend({
            marks: [80, 70, 60, 50, 40, 33],
            grades: ['A+', 'A', 'A-', 'B', 'C', 'D'],
            points: [5.00, 4.00, 3.50, 3.00, 2.00, 1.00, 0.00],
            passmarks: 33,
            success: null
        }, options);

        // return this for method chaining 
        return this.each(function() {
            var $this = $(this);

            // get mark and set default result object 
            var mark = $this.data('mark'),
                result = {
                    grade: '',
                    point: 0.00,
                    mark: 0.00
                };
            
            // check the mark 'greater then or equal' from passmark 
            if(mark >= settings.passmarks) {
                // make a itaration for every rules
                for(i in settings.marks) {
                    // find the grade and point using rules
                    if(mark >= settings.marks[i]) {
                        // assign result object 
                        result.grade = settings.grades[i];
                        result.point = settings.points[i];
                        result.mark = mark;

                        // if match brak the itaration 
                        break;
                    }
                }
            } else { // set result for lowest mark
                result.grade = 'F';
                result.point = 0.00;
                result.mark = mark;
            }

            // set dom 
            $this.text("Mark: " + result.mark + ", Grade: " + result.grade + ", Point: " + result.point);

            // call the success method
            if($.isFunction(settings.success)) {
                settings.success.call(this, result);
            }
        });
    }

}(jQuery));