const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});







window.alertComponent = function () {
  return {
    openAlertBox: false,
    alertBackgroundColor: '',
    alertMessage: '',
    showAlert(type) {
      this.openAlertBox = true
      switch (type) {
        case 'success':
          this.alertBackgroundColor = 'bg-green-500'
          this.alertMessage = `${this.successIcon} ${this.defaultSuccessMessage}`
          break
        case 'info':
          this.alertBackgroundColor = 'bg-blue-500'
          this.alertMessage = `${this.infoIcon} ${this.defaultInfoMessage}`
          break
        case 'warning':
          this.alertBackgroundColor = 'bg-yellow-500'
          this.alertMessage = `${this.warningIcon} ${this.defaultWarningMessage}`
          break
        case 'danger':
          this.alertBackgroundColor = 'bg-red-500'
          this.alertMessage = `${this.dangerIcon} ${this.defaultDangerMessage}`
          break
      }
      this.openAlertBox = true
    },
    successIcon: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2 text-white"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    infoIcon: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2 text-white"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    warningIcon: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2 text-white"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    dangerIcon: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2 text-white"><path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>`,
    defaultInfoMessage: `This alert contains info message.`,
    defaultSuccessMessage: `This alert contains success message.`,
    defaultWarningMessage: `This alert contains warning message.`,
    defaultDangerMessage: `This alert contains danger message.`,
  }
}







const validCredentials = [
  { username: "admin", password: "panyako", name: "Md Evelyn Panyako Atieno", subjects: ["Head Of Institution"] },
  { username: "mwalimu@kanyadetschool", password: "33782", name: "Mr Fredrick Ghana Obure", subjects: ["Acting Deputy HeadTeacher"] },


];
const loginForm = document.querySelector(".sign-in-form");
const usernameInput = loginForm.querySelector("input[type='text']");
const passwordInput = loginForm.querySelector("input[type='password']");

const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupClose = document.getElementById("popup-close");
const successSound = document.getElementById("successSound");
const errorSound = document.getElementById("errorSound");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const isValidCredential = validCredentials.find(
    (credential) => credential.username === username && credential.password === password
  );

  if (isValidCredential) {
    const name = isValidCredential.name;
    const subjects = isValidCredential.subjects.join(", ");
    const greeting = `🧑‍⚕️ Welcome ${name} ${subjects}. `;
    
    // Play the success sound
    successSound.play();
    
    // Show the success message
    showMessage(greeting, "success");
    // Redirect to www.google.com after 3 seconds
    setTimeout(() => {
      window.location.href = "./1.HOI Landing/HOI Landing.html";
    }, 8000); // 3000 milliseconds = 3 seconds
  } else {
    // Play the error sound
    errorSound.play();
    
    showMessage("🎯 Access denied! You are trying to use unauthorized credentials. Please check and try again.", "access-denied");
  }

  // Automatically hide the popup after 3 seconds
  setTimeout(() => {
    hideMessage();
  }, 7000); // 3000 milliseconds = 3 seconds
});

popupClose.addEventListener("click", () => {
    hideMessage();
});

function showMessage(message, messageType) {
    popupMessage.textContent = message;
    popup.className = "popup " + messageType;
    popup.style.display = "block";
}

function hideMessage() {
    popup.style.display = "none";
}





