// SELECTS
$(InitSelects);
$(document).on("reload", InitSelects);
function InitSelects() {
	if (typeof $.fn.selectric == "function") {
		var $customSelects = $('select.form-control:not(.no-js):not(.js-select-initialized)');
		if ($customSelects.length > 0) {
			$customSelects.selectric({
				disableOnMobile: true,
				nativeOnMobile: true,
				onInit: function(elem) {
					DefinePlaceholder(elem);
				},
				onChange: function(elem) {
					$(elem).trigger("change");
					ValidateSelectric($(elem));
					DefinePlaceholder(elem);
				}
			});
			$customSelects.on('validate', function() {
				ValidateSelectric($(this))
			});
			$customSelects.addClass('js-select-initialized');
		}
		
		var $nativeSelects = $('select.form-control.no-js:not(.js-select-initialized)');
		if ($nativeSelects.length > 0) {
			$nativeSelects.each(function () {
				var $cSelect = $(this);
				DefinePlaceholder(this);
				$cSelect.on('change', function () {
					DefinePlaceholder(this);
				});
				$cSelect.addClass('js-select-initialized');
			});
		}
	}
	else {
		var $selects = $('select.form-control:not(.js-select-initialized)');
		if ($selects.length > 0) {
			$selects.each(function () {
				var $cSelect = $(this);
				DefinePlaceholder(this);
				$cSelect.on('change', function () {
					DefinePlaceholder(this);
				});
				$cSelect.addClass('js-select-initialized');
			});
		}
	}
}
function DefinePlaceholder(selectElement) {
	var $select = $(selectElement);
	var $selectricLabel = $select.closest(".selectric-wrapper").find(".selectric > .label");
	var $placeholderOption = $select.find("option.placeholder-option");
	if ($placeholderOption.length == 1 &&
		($select.find("option:selected").length < 1 ||
			($placeholderOption.is(":selected") && $select.find("option:selected").length == 1))
	) {
		$selectricLabel.addClass("placeholder-active");
		$(selectElement).addClass('placeholder-active');
	}
	else {
		$selectricLabel.removeClass("placeholder-active");
		$(selectElement).removeClass('placeholder-active')
	}
}
function ValidateSelectric($select) {
	if (typeof $select.valid == "function") {
		$select.valid();
		if ($select.is('.error')) $select.closest('.selectric-wrapper').addClass('selectric--error');
		else $select.closest('.selectric-wrapper').removeClass('selectric--error');
	}
}

// INIT MASKS
if (typeof $.fn.inputmask == "function") {
	$(InitInputMasks);
	$(document).on("reload", InitInputMasks);
	function InitInputMasks() {
		var $inputs = $('input[data-mask]:not(.js-mask-initialized)');
		if ($inputs.length > 0) {
			
			$inputs.each(function () {
				var $input = $(this);
				var mask = $input.data('mask');
				var maskOpts = {
					showMaskOnFocus: true,
					showMaskOnHover: false,
					definitions: {
						'9': {
							validator: "[0-9]"
						},
						'a': {
							validator: "[A-Za-zА-Яа-я]"
						},
						'?': {
							validator: "[!#$%&'*+/=?^_`{|}~-]"
						},
						'*': {
							validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]"
						}
					}
				};
				
				switch (mask) {
					case('phone'):
						mask = '+7 (999) 999-99-99';
						break;
					case('email'):
						mask = '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]';
						break;
					default:
						mask = mask;
						break;
				}
				
				$input.inputmask(mask, maskOpts);
				$input.addClass('js-mask-initialized');
			});
		}
	}
}

// VALIDATE FORMS
if (typeof $.validator == "function") {
	// SET DEFAULTS VALIDATION FORMS
	$(SetDefaultsValidationOptions);
	function SetDefaultsValidationOptions() {
		$.validator.setDefaults({
			onsubmit: true,
			debug: false,
			errorClass: "error",
			errorElement: 'label',
			ignore: [],
			errorPlacement: function ($error, $element) {
				$element.closest('.form-group').append($error);
			}
		});
		$.validator.addMethod(
			"pattern",
			function (value, element, regexp) {
				switch (regexp) {
					case('phone'):
						regexp = '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$';
						break;
					case('email'):
						regexp = '^([a-zA-Z0-9_-]+\\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)*\\.[a-zA-Z]{2,6}$';
						break;
					default:
						regexp = regexp;
						break;
				}
				var re = new RegExp(regexp);
				return this.optional(element) || re.test(value);
			},
			"Поле заполнено некорректно"
		);
		$.validator.addMethod(
			"min",
			function (value, element, minValue) {
				return StringToNumber(value) >= minValue;
			},
			"Поле заполнено некорректно"
		);
		$.validator.addMethod(
			"max",
			function (value, element, maxValue) {
				return StringToNumber(value) <= maxValue;
			},
			"Поле заполнено некорректно"
		);
		$.validator.addMethod(
			"requiredSelect",
			function (value, select, a) {
				return ($(select).find(':not(.placeholder-option):selected').length > 0);
			},
			"Не выбран ни один из вариантов"
		);
	}
	
	// INIT VALIDATION FORMS
	$(InitValidationForms);
	$(document).on("reload", InitValidationForms);
	function InitValidationForms() {
		if (typeof $.validator == "function") {
			var $forms = $('form.js-validate:not(.js-validation-initialized)');
			if ($forms.length > 0) {
				$forms.each(function() {
					var $form = $(this);
					var validationOptions = {
						"rules": {},
						"messages": {},
						submitHandler: function(f, e) {
							OnValidFomSubmit(f, e);
						}
					};
					
					$form.find('input,textarea,select').each(function() {
						var $cField = $(this);
						var cFieldKey = $cField.attr('name');
						
						validationOptions.rules[cFieldKey] = {
							requiredSelect: ($(this).is('select') && this.hasAttribute('required')) || false,
							required: (!$(this).is('select') && this.hasAttribute('required')) || false,
							pattern: $cField.attr('pattern') || false,
							minlength: $cField.attr('minlength') || false,
							min: $cField.attr('data-min') || false,
							max: $cField.attr('data-max') || false,
						};
						
						validationOptions.messages[cFieldKey] = {
							required: $cField.attr('data-message-required') || 'Поле не заполнено',
							pattern: $cField.attr('data-message-pattern') || 'Поле заполнено некорректно',
							minlength: $cField.attr('data-message-minlength') || "Минимум " + $cField.attr('minlength') + " символов",
							maxlength: $cField.attr('data-message-maxlength') || "Максимум " + $cField.attr('maxlength') + " символов",
							min: $cField.attr('data-message-min') || "Минимально допустимое значение: " + $cField.attr('data-min'),
							max: $cField.attr('data-message-max') || "Максимально допустимое значение: " + $cField.attr('data-max'),
						};
					});
					$form.validate(validationOptions);
					
					$form.addClass('js-validation-initialized');
				});
			}
		}
	}

	// SUBMIT FORM
	$(document).on('click', 'form.js-validate [type="submit"]', function (evt) {
		ManualValidate($(this).closest('form'))
	});
	$(document).on('keydown touchstart', 'form.js-validate input, form.js-validate textarea', function (evt) {
		if (evt.keyCode === 13) ManualValidate($(this).closest('form'))
	});
	function ManualValidate($form) {
		$form.valid();
		$form.find('input,textarea,select').trigger('validate');
	}
	function OnValidFomSubmit(formElement, event) {
		if ($(formElement).is('#feedback_form') || $(formElement).closest('#feedback_form').length > 0) {
			$(formElement).validate().settings.ignore = "*";
			$(formElement).submit();
		}
	}
}
