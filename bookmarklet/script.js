/**
 * UIMS Auto Feedback
 * Created by NamVr | Naman Vrati
 */

(function() {
    // Check if the overall feedback form is present
    let feedbackForm = document.getElementById("divSubjectFeedback");
    if (!feedbackForm) {
        console.log("Feedback form is not present on this page.");
        return;
    }
    
    // Get the accordion container that holds today's subjects
    let accordion = document.getElementById("accordionCourses");
    if (!accordion) {
        console.log("Accordion for courses not found.");
        return;
    }
    
    // In a typical jQuery UI Accordion, each subject has a header followed by a content panel.
    // We'll assume headers have the class 'ui-accordion-header'
    let subjectHeaders = accordion.querySelectorAll(".ui-accordion-header");
    if (!subjectHeaders.length) {
        console.log("No subject headers found.");
        return;
    }
    
    console.log("Found", subjectHeaders.length, "subject(s).");
    
    // Iterate over each subject
    subjectHeaders.forEach((header, idx) => {
        // Get the content panel (assumed to be the next sibling)
        let panel = header.nextElementSibling;
        if (!panel) {
            console.log("No panel found for subject header:", header.innerText.trim());
            return;
        }
        
        console.log("Processing subject:", header.innerText.trim());
        
        // Within this subject panel, find all question blocks
        let questionDivs = panel.querySelectorAll("div[id^='divQuestion_']");

		// Handling something that should never happen, but just in case :D
        if (!questionDivs.length) {
            console.log("No questions found for subject:", header.innerText.trim());
        } else {
            questionDivs.forEach(qDiv => {

                // For each question, look for radio inputs
                let radios = qDiv.querySelectorAll("input[type='radio']");

                radios.forEach(radio => {
                    // Get the associated label using the 'for' attribute
                    let label = qDiv.querySelector("label[for='" + radio.id + "']");

					// Fill the option with "Neutral" rating. (By default)
					// Unfortunately, not all options are supported, since only the "Neutral" option is common in all questions.

                    if (label && label.innerText.trim() === "Neutral") {

                        // Select this radio option
                        radio.checked = true;

                        // Dispatch a click event in case the UI requires it
                        radio.dispatchEvent(new Event('click', { bubbles: true }));
                        console.log("Selected Neutral for question:", radio.id);
                    }
                });
            });
        }
        
        // Finally, find the submit button in the current subject panel
        let submitBtn = panel.querySelector("input[type='submit']");

        if (submitBtn) {

            // Optionally, add a small delay between submissions if needed (I don't trust UIMS Server :D)
            setTimeout(() => {
                submitBtn.click();
                console.log("Submitted feedback for subject:", header.innerText.trim());
            }, 500 * idx); // delay based on subject index (adjust as necessary)
			
        } else {
            console.log("No submit button found for subject:", header.innerText.trim());
        }
    });
    
    console.log("Feedback automation script executed successfully. Thank me later :)");
	console.log("Star our repository: https://github.com/NamVr/uims-auto-feedback");
})();
