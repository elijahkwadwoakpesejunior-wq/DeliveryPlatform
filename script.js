
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for links pointing to sections
    document.querySelectorAll('a[href*="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const url = new URL(link.href, window.location.href);

            if (url.pathname === window.location.pathname && url.hash) {
                const target = document.querySelector(url.hash);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    // Read the selected enquiry from the URL
    const params = new URLSearchParams(window.location.search);
    const selectedTopic = params.get("topic");
    const topicField = document.getElementById("topic");

    if (topicField && selectedTopic) {
        const validTopics = [
            "food", "parcel", "groceries", "partnership", "other"
        ];

        if (validTopics.includes(selectedTopic)) {
            topicField.value = selectedTopic;
        }
    }


    // Contact form demonstration
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            formMessage.textContent =
                "Thank you! Your message has been prepared. Message submission will be connected to our server in the next development stage.";

            contactForm.reset();
        });
    }


    // Display the delivery location selected on the homepage
    const searchParams = new URLSearchParams(window.location.search);
    const location = searchParams.get("location");

    if (location && window.location.pathname.endsWith("services.html")) {
        const heading = document.querySelector(".section-heading");

        if (heading) {
            const notice = document.createElement("p");
            notice.textContent = "Your selected delivery location: " + location;
            heading.appendChild(notice);
        }
    }

});
