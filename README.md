
# UIMS Auto Feedback

Automatic Feedback Completion Script for CUIMS - Chandigarh University students.

This tool automatically fills and submits Chandigarh University’s daily feedback form with a **neutral rating for all subjects**. 🚀

## Why?

Daily forced feedback forms are annoying, especially when you're just trying to check your updated marks or apply for leave. All your UIMS access is locked until you fill out the daily questionnaire for every single subject that day. Even their buttons are broken—you have to click exactly on the radio button to select an option.

There are methods you can use to avoid this form, such as simply changing the URL to any other page, but let's be honest—that is a lot of work and annoying. I made this: a one-click solution to get feedback done once and for all.

### Getting Started

The script should work out of the blue in all browsers. If it doesn't, feel free to make an issue! There are several methods of installation and implementation of this script:

1. **Bookmarklet (Highly Recommended)** – Simply create a JavaScript-based bookmark in your browser, a one-click solution!

2. **Console Copy-Paste** – You can copy our script and paste it into your console from [script.js](/bookmarklet/script.js). `(Ctrl + Shift + I / Inspect Element -> Console)`

3. **Chrome/Firefox Extensions** – Coming soon!

## Installation (Bookmarklet)

✅ To install our bookmarklet (One-Click & Recommended Solution):

1. **Create a bookmark** in Chrome/Firefox.
2. Edit the URL and paste the following code:

```js
javascript:(()=>{!function(){if(!document.getElementById("divSubjectFeedback"))return void console.log("Feedback form is not present on this page.");let e=document.getElementById("accordionCourses");if(!e)return void console.log("Accordion for courses not found.");let t=e.querySelectorAll(".ui-accordion-header");t.length?(console.log("Found",t.length,"subject(s)."),t.forEach(((e,t)=>{let o=e.nextElementSibling;if(!o)return void console.log("No panel found for subject header:",e.innerText.trim());console.log("Processing subject:",e.innerText.trim());let n=o.querySelectorAll("div[id^='divQuestion_']");n.length?n.forEach((e=>{e.querySelectorAll("input[type='radio']").forEach((t=>{let o=e.querySelector("label[for='"+t.id+"']");o&&"Neutral"===o.innerText.trim()&&(t.checked=!0,t.dispatchEvent(new Event("click",{bubbles:!0})),console.log("Selected Neutral for question:",t.id))}))})):console.log("No questions found for subject:",e.innerText.trim());let r=o.querySelector("input[type='submit']");r?setTimeout((()=>{r.click(),console.log("Submitted feedback for subject:",e.innerText.trim())}),500*t):console.log("No submit button found for subject:",e.innerText.trim())})),console.log("Feedback automation script executed successfully.")):console.log("No subject headers found.")}();})();
```

> Alternatively, you can copy the URL script from the [raw text file](/bookmarklet/copy_this.txt).

3. Give it a name (eg: UIMS Auto Feedback) and **Save**.

4. **Use It:** Whenever you're on the feedback form page, click the bookmark. Watch the magic :D

### Installation (Extension)

Extension installation for both Chrome and Firefox will come soon (although the bookmarket method is quite good itself).

## Contributing

Feel free to create Issue / PR to contribute. While you're here, make sure to ⭐ **Star the Repository**, because it motivates me a lot!

## License

This project is open-source under the [MIT License](LICENSE).
