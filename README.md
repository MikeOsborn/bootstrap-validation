[Bootstrap-Validation](http://github.com/MikeOsborn/bootstrap-validation)
=================

Bootstrap-Validation converts MVC input validation messages into Bootstap popovers.



Quick start
-----------

The following application settings must be set in your web.config:

	<appSettings>
		<add key="ClientValidationEnabled" value="true" />
		<add key="UnobtrusiveJavaScriptEnabled" value="true" />
	</appSettings>

Wire up the client side validation on your page: 

	$(document).ready(function() {
		$("form").validation();
	});



Dependencies
------------

* jquery-1.7.2.js
* jquery.validate.js
* jquery.unobtrusive-ajax.js
* bootstrap-tooltip.js
* bootstrap-popover.js



Bug tracker
-----------

Have a bug? Please create an issue here on GitHub that conforms with [necolas's guidelines](https://github.com/necolas/issue-guidelines).

https://github.com/MikeOsborn/bootstrap-validation/issues



Copyright and license
---------------------

Copyright 2012 Mike Osborn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.