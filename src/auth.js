export function getAuthForm() {
    return `
        <form class="mui-form" id="authForm">
            <div class="mui-textfield mui-textfield--float-label">
                <input type="email" id="email" required>
                <label for="email">Е-мэйл</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="password" id="password" required>
                <label for="password">Пароль</label>
            </div>
            <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Войти</button>
        </form>
    `;
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = "AIzaSyC-Vm3dP9bRO1nhVto-R6be7zTk6jjy3CE";
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => data.idToken);
}