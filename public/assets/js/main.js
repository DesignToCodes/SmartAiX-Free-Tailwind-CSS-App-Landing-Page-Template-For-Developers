// // Preloader Js
$(".preloader").css("opacity", 1);

// Delay execution for 2 seconds
setTimeout(function() {
    // Set opacity to 0
    $(".preloader").css("opacity", 0);
    // After a short delay (for the fade-out effect to complete), set display to none
    setTimeout(function() {
        $(".preloader").css("display", "none");
    }, 400); // Adjust the delay to match the fade-out duration
}, 400);


document.addEventListener("DOMContentLoaded", function () {

	// Form Validation
	const forms = document.querySelectorAll(".validation");

	forms.forEach((form) => {
		const inputFuild = form.querySelectorAll(
			"input[required], select[required], textarea[required]"
		);

		inputFuild.forEach((input) => {
			input.addEventListener("focus", () => {
				removeError(input);
			});
			input.addEventListener("blur", () => {
				validateInput(input);
			});
		});

		form.addEventListener("submit", function (event) {
			event.preventDefault();

			let isValid = true;

			inputFuild.forEach((input) => {
				if (!validateInput(input)) {
					isValid = false;
					input.classList.add("invalid");
				} else {
					input.classList.remove("invalid");
				}
			});

			if (isValid) {
				form.submit();
			}
		});
	});

	// Validation function
	function validateInput(input) {
		const value = input.value.trim();
		const type = input.getAttribute("type");

		if (value === "") {
			setError(input, "Please enter a value");
			return false;
		}

		if (type === "") {
			setError(input, "Please set input");
			return false;
		}

		if (type === "text") {
			if (value.length < 0) {
				setError(input, "Please enter a value");
				return false;
			}
		}

		if (type === "email") {
			const emailPattern =
				/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (!emailPattern.test(value)) {
				setError(input, "Please enter a valid email address.");
				return false;
			}
		}

		if (type === "password") {
			if (value.length < 6) {
				setError(input, "Password must be at least 6 characters.");
				return false;
			}
		}

		removeError(input);
		return true;
	}

	function setError(input, errorMessage) {
		input.classList.add("invalid-input");
		const errorElement = document.getElementById(`${input.id}-error`);
	}

	function removeError(input) {
		input.classList.remove("invalid-input");
		const errorElement = document.getElementById(`${input.id}-error`);
		if (errorElement) {
			errorElement.textContent = "";
		}
	}
});


