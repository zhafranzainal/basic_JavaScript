(async () => {

    for (let i = 29000; i < 30000; i++) {

        let res = await fetch(`/teacher/class/${i}/course`);

        if (res.ok) {
            console.log(`Valid ID: ${i}`);
        }

        // Wait 1 second per request
        await new Promise(r => setTimeout(r, 1000));

    }

})();

// fetch = () => Promise.reject("");
