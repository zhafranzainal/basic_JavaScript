(async () => {

    // Set to store unique course names
    const courseList = new Set();

    for (let i = 29000; i < 30000; i++) {

        let res = await fetch(`/teacher/class/${i}/course`);

        if (res.ok) {

            let text = "N/A";

            // Parse the response if it contains HTML
            let html = await res.text();
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");
            let meetingListElement = doc.querySelector("meeting-list");

            if (meetingListElement) {

                let subSectionsJson = meetingListElement.getAttribute(':sub-sections');

                if (subSectionsJson) {

                    // Decode the HTML entities and parse the JSON
                    let parsedData = JSON.parse(decodeURIComponent(subSectionsJson.replace(/&quot;/g, '"')));

                    // Extract the name of the first sub-section, or handle it accordingly
                    if (parsedData && parsedData[0] && parsedData[0].name) {
                        text = parsedData[0].name;
                    }

                }

            }

            // Only print the course name if it hasn't been printed yet
            if (text !== "N/A" && !courseList.has(text)) {

                console.log(`Valid ID: ${i} | Course: ${text}`);

                // Add the course name to the set
                courseList.add(text);

            }

        }

        // Wait 1 second per request
        await new Promise(r => setTimeout(r, 1000));

    }

})();

// fetch = () => Promise.reject("");
