    const nameField = document.getElementById("form-name");
    const emailField = document.getElementById("form-email");
    const phoneField = document.getElementById("form-phone");
    document.getElementById("send").addEventListener('click', () => {
        const data = {
            name: nameField.value,
            email: emailField.value,
            phone: phoneField.value,
        }
        fetch("/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then( async (res) => {
            const response = await res.json();
            console.log(response);
        });
    })
