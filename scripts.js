const modal = document.getElementById('modal');
const signinBtn = document.getElementById('signinBtn');
const closeBtn = document.querySelector('.close');
const showSignupBtn = document.getElementById('showSignup');
const formTitle = document.getElementById('formTitle');
const authForm = document.getElementById('authForm');

const contactModal = document.getElementById('contactModal');
const contactLink = document.getElementById('contactLink');
const closeContactBtn = document.querySelector('.close-contact');

signinBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    formTitle.textContent = 'Login';
    authForm.reset();
    toggleSignupForm(false);
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



showSignupBtn.addEventListener('click', () => {
    formTitle.textContent = 'Sign Up';
    toggleSignupForm(true);
});

function toggleSignupForm(isSignup) {
    const signupFields = `
        <div class="form-control">
            <input type="text" required id="signupFullname">
            <label>Full Name</label>
        </div>
        <div class="form-control">
            <input type="text" required id="signupUsername">
            <label>Username</label>
        </div>
        <div class="form-control">
            <input type="text" required id="signupAadhar">
            <label>Aadhar/PAN Number</label>
        </div>
        <div class="form-control">
            <input type="email" required id="signupEmail">
            <label>Email</label>
        </div>
        <div class="form-control">
            <input type="password" required id="signupPassword">
            <label>Password</label>
            <span class="eye-icon" id="toggleSignupPassword">👁️</span>
        </div>
        <div class="form-control">
            <input type="password" required id="confirmPassword">
            <label>Confirm Password</label>
            <span class="eye-icon" id="toggleConfirmPassword">👁️</span>
        </div>
    `;
    
    if (isSignup) {
        authForm.innerHTML = signupFields + `<button type="button" onclick="signup()">Sign Up</button>`;
        showSignupBtn.style.display = 'none';
    } else {
        authForm.innerHTML = `
            <div class="form-control">
                <input type="text" required id="loginUsernameEmail">
                <label>Username or Email</label>
            </div>
            <div class="form-control">
                <input type="password" required id="loginPassword">
                <label>Password</label>
                <span class="eye-icon" id="toggleLoginPassword">👁️</span>
            </div>
            <button type="button" onclick="redirectToInvestment()">Sign In</button>
        `;
        showSignupBtn.style.display = 'block';
    }
}

async function signup() {
    const Fullname = document.getElementById('signupFullname').value;
    const Username = document.getElementById('signupUsername').value;
    const Aadhar = document.getElementById('signupAadhar').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const data = { Fullname, Username, Aadhar, email, password, confirmPassword };

    try {
        const response = await fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);
        if (response.status === 201) {
            window.location.href='Investment.html';
            toggleSignupForm(false);
        }
      
    } catch (error) {
        console.error(error);
        alert('Error creating account');
    }
}

// async function login() {
//     const username = document.getElementById('loginUsernameEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     const data = { username, password };

//     try {
//         const response = await fetch('http://localhost:3000/user/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });

//         const result = await response.json();
//         alert(result.message);
//         window.location.href="Investment.html";
//     } catch (error) {
//         console.error(error);
//         alert('Error logging in');
//     }
   
// }
function redirectToInvestment() {
    window.location.href = "Investment.html";
}



document.addEventListener('click', function(e) {
    if (e.target.id === 'toggleLoginPassword') {
        const passwordField = document.getElementById('loginPassword');
        passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
    }
    
    if (e.target.id === 'toggleSignupPassword') {
        const signupPasswordField = document.getElementById('signupPassword');
        signupPasswordField.type = signupPasswordField.type === 'password' ? 'text' : 'password';
    }

    if (e.target.id === 'toggleConfirmPassword') {
        const confirmPasswordField = document.getElementById('confirmPassword');
        confirmPasswordField.type = confirmPasswordField.type === 'password' ? 'text' : 'password';
    }
});

const aboutModal = document.getElementById('aboutModal');
const aboutLink = document.getElementById('aboutLink');
const closeAboutBtn = document.querySelector('.close-about');

aboutLink.addEventListener('click', () => {
    aboutModal.style.display = 'flex';
});

closeAboutBtn.addEventListener('click', () => {
    aboutModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
});

contactLink.addEventListener('click', () => {
    contactModal.style.display = 'flex';
});

closeContactBtn.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});
