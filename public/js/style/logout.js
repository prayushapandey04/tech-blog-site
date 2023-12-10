const logout = async function() {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    });
}

if (response.ok) {
    document.replace('/');
} else {
    alert('Error with logging out')
};

document.querySelector('#logout').addEventListener('click', logout);