async function sendFeedback() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("https://8k026aadvh.execute-api.eu-north-1.amazonaws.com/default/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    });

    const data = await response.json();
    document.getElementById("output").innerText = data.message;
}
