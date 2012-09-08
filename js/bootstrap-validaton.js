/* ===========================================================
* bootstrap-validation.js v1.0.0
* https://github.com/MikeOsborn/bootstrap-validation.git
* ===========================================================
* Copyright 2012 Mike Osborn
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =========================================================== */
!function ($) {

    "use strict"; // jshint ;_;



    /* VALIDATION PUBLIC CLASS DEFINITION
    * =============================== */

    var Validation = function (element, options) {
        this.init('validation', element, options)
    }

    Validation.prototype = {

        constructor: Validation

        ,
        init: function (type, element, options) {
            var $this = this;
            $this.type = type;
            $this.$element = $(element);
            $this.options = $this.getOptions(options);
            var validator = $this.$element.data("validator");
            validator.settings.errorPlacement = $.proxy($this.error, $this);
            validator.settings.success = $.proxy($this.success, $this);

            $("span[data-valmsg-for]").each(function () {
                var error = $(this);
                error.remove();
                var input = $("#" + error.attr("data-valmsg-for"));
                $this.error(error, input);
            });

        },
        getOptions: function (options) {
            options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

            if (options.delay && typeof options.delay == 'number') {
                options.delay = {
                    show: options.delay,
                    hide: options.delay
                }
            }

            return options
        },
        error: function (error, element) {
            var errorMessage = error.text();
            if (errorMessage != "") {
                element.closest(".control-group").addClass("error");
                var popover = element.data("popover");
                if (popover == null || popover.options.content != errorMessage) {
                    element.popover("destroy");
                    var options = $.extend({}, this.options, element.data(), {
                        trigger: "manual",
                        content: errorMessage
                    });
                    element.popover(options);
                    if (element.is(":focus")) {
                        element.popover("show");
                    }
                }

                element.focus(function () {
                    if (element.data("popover") != null) {
                        element.popover("show");
                    }
                });

                element.focusout(function () {
                    if (element.data("popover") != null) {
                        element.popover("hide");
                    }
                });
            }
        },
        success: function (errorElement) {
            var element = $("#" + errorElement.attr("for"));

            var controlGroup = element.closest(".control-group");
            var errorElements = controlGroup.children(".input-validation-error");
            if (errorElements.length == 1 && errorElements[0] == element[0]) {
                controlGroup.removeClass("error");
            }


            if (element.data("popover") != null) {
                element.popover("destroy");
            }
        }
    }

    /* VALIDATION PLUGIN DEFINITION
    * ========================= */

    $.fn.validation = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('validation'),
                options = typeof option == 'object' && option
            if (!data) $this.data('validation', (data = new Validation(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.validation.Constructor = Validation

    $.fn.validation.defaults = {
        title: "Validation Error",
        template: '<div class="popover validation"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    }

} (window.jQuery);