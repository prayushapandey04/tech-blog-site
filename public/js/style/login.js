const logIn = async(event) => {
    event.preventDefault();

    const username = document.querySelector.value.trim();
    const password = document.querySelector.value.trim();

    if (username && password) {
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: json.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'},
        });
    }
 }