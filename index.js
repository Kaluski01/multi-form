// Insert the HTML content first
let sideBar = document.getElementsByClassName('sideBar')[0];
sideBar.innerHTML = `
<div class="d-lg-flex col-lg-12">
    <div class="position-relative col-lg-5">
        <img src="assets/images/bg-sidebar-desktop.svg" alt="Sidebar Image" class="sidebar-img desktop-img d-none d-lg-block">
        <img src="assets/images/bg-sidebar-mobile.svg" alt="Sidebar Image" class="sidebar-img mobile-img d-block d-lg-none">
        <div class="overlay text-white p-4 position-absolute">
            <div class="steps d-flex align-items-start flex-lg-column flex-row col-lg-12">
                <div class="steps step-indicator  active d-flex mb-3" id="step-1">
                    <span class="me-2">1</span>
                    <div class="d-lg-block d-none">
                        <p class="mb-0">STEP 1</p>
                        <h6 class="mb-0">Your Info</h6>
                    </div>
                </div>
                <div class="steps step-indicator d-flex align-items-center mb-3" id="step-2">
                    <span class="me-2">2</span>
                    <div class="d-lg-block d-none">
                        <p class="mb-0">STEP 2</p>
                        <h6 class="mb-0">Select Plan</h6>
                    </div>
                </div>
                <div class="steps  step-indicator d-flex align-items-center mb-3" id="step-3">
                    <span class="me-2">3</span>
                    <div class="d-lg-block d-none">
                        <p class="mb-0">STEP 3</p>
                        <h6 class="mb-0">Add-Ons</h6>
                    </div>
                </div>
                <div class="steps step-indicator  d-flex align-items-center mb-3" id="step-4">
                    <span class="me-2">4</span>
                    <div class="d-lg-block d-none">
                        <p class="mb-0">STEP 4</p>
                        <h6 class="mb-0">Summary</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="step-1-content" class="step mt-5 cons">
        <h1>Personal info</h1>
        <p>Please provide your name, email, and phone number.</p>

        <div class="col-lg-8 col-8 mb-3">
            <form id="personalInfoForm">
                <label class="mb-3" for="name"> 
                    <span>Name:</span>
                    <input type="text" id="name" name="name" placeholder="e.g Nze Divine" required>
                </label>
                <label class="mb-3" for="email"> 
                    <span>Email Address:</span>
                    <input type="email" id="email" name="email" placeholder="e.g nzedivine@lorem.com" required>
                </label>
                <label class="mb-3" for="phone"> 
                    <span>Phone Number:</span>
                    <input type="tel" id="phone" name="phone" placeholder="e.g +2349019755712" required pattern="\\+?[0-9\\s]+">
                </label>
            </form>
            <div class="d-flex justify-content-end mt-3">
                <button type="button" onclick="goToNextStep(1)" class="btns" id="nextStep1">Next Step</button>
            </div>
        </div>
    </div>
            <div id="step-2-content" class="cons container-fluid mt-3 col-lg-7" style="display: none;">
            <div>
                <h1>Select your plan</h1>
                <p class="bill">You have the option of monthly or yearly billing</p>
            </div>
                <div class="d-flex flex-wrap w-100 col-lg-12 col-12 justify-content-around align-items-start mb-5">
                    <div class="card cards col-lg-3 col-12" style="border:#5E589B solid;">
                        <div class="card-body d-flex flex-row align-items-center flex-lg-column ">
                            <div class="mb-3">
                                <img src="assets/images/icon-arcade.svg" alt=""/>
                            </div>
                            <div class="text m-2">
                                <h5>Arcade</h5>
                                <p>$9/mo</p>
                            </div>
                        </div>
                    </div>
                    <div class="card cards col-lg-3 col-12" style="border:#5E589B solid;">
                        <div class="card-body d-flex flex-row flex-lg-column align-items-center">
                            <div class="mb-3">
                                <img src="assets/images/icon-advanced.svg" alt=""/>
                            </div>
                            <div class="text m-2">
                                <h5>Advanced</h5>
                                <p>$12/mo</p>
                            </div>
                        </div>
                    </div> 
                    <div class="card cards col-lg-3 col-12">
                        <div class="card-body d-flex flex-row flex-lg-column align-items-center">
                            <div class="mb-3 gap-4">
                                <img src="assets/images/icon-pro.svg" alt=""/>
                            </div>
                            <div class="text m-2">
                                <h5>Pro</h5>
                                <p>$15/mo</p>
                            </div>
                        </div>
                    </div>
                </div>     
                <div class="toggle-container col-lg-8 col-12 mb-5">
                    <span id="monthly">Monthly</span>
                    <label class="switch">
                        <input type="checkbox" id="toggleSwitch">
                        <span class="slider"></span>
                    </label>
                    <span id="yearly">Yearly</span>
    </div>
            <div class="d-flex justify-content-around mt-3">
                <button type="button" onclick="goToPreviousStep(2)" class="btens" id="prevStep2">Go back</button>
                <button type="button" onclick="goToNextStep(2)" class="btns" id="nextStep2">Next Step</button>
            </div>
</div>
<div id="step-3-content" class="cons container-fluid mt-1 col-lg-7" style="display: none; min-height: 80vh;">
    <div>
        <h1>Pick add-ons</h1>
        <p class="bill">Add-ons help enhance your gaming experience</p>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center col-lg-10 col-12">
        <div class="card col-12 mb-4" style="border:#5E589B solid; height:120px;">
            <div class="card-body d-flex flex-row align-items-center">
                <div class="align-content-center">
                    <input class="in" type="checkbox">
                </div>
                <div class="text m-3 align-items-center">
                    <h5>Online service</h5>
                    <p>Access to multiplayer games</p>
                </div>
                <span class="ml-auto"> +$1/mo </span>
            </div>
        </div>
        <div class="card col-12 mb-4" style="border:#5E589B solid; height:120px;">
            <div class="card-body d-flex flex-row align-items-center">
                <div class="align-content-center">
                    <input class="in" type="checkbox">
                </div>
                <div class="text m-3 align-items-center">
                    <h5>Larger Storage</h5>
                    <p>Extra 1TB of cloud storage</p>
                </div>
                <span class="ml-auto"> +$2/mo </span>
            </div>
        </div>
        <div class="card col-12 mb-4" style="height:120px;">
            <div class="card-body d-flex flex-row align-items-center">
                <div class="align-content-center">
                    <input class="in" type="checkbox">
                </div>
                <div class="text m-3 align-items-center">
                    <h5>Customizable profile</h5>
                    <p>Custom theme on your profile</p>
                </div>
                <span class="ml-auto"> +$2/mo </span>
            </div>
        </div>
    </div>  
    <div class="d-flex justify-content-between mt-3">
        <button type="button" onclick="goToPreviousStep(3)" class="btens" id="prevStep2">Go back</button>
        <button type="button" onclick="goToNextStep(3)" class="btns" id="nextStep3">Next Step</button>
    </div>
</div>

`;

// Function to go to the next step
// Function to go to the next step
const toggleSwitch = document.getElementById('toggleSwitch');
const monthlyLabel = document.getElementById('monthly');
const yearlyLabel = document.getElementById('yearly');

toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        yearlyLabel.classList.add('active');
        monthlyLabel.classList.remove('active');
    } else {
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');
    }
});

// Initialize the correct label as active
monthlyLabel.classList.add('active');

function goToNextStep(currentStep) {
        // Select the current step and the next step
        let currentStepDiv = document.getElementById('step-' + currentStep + '-content');
        let nextStepDiv = document.getElementById('step-' + (currentStep + 1) + '-content');
    
        // Validation: Check if the form in the current step is valid
        if (currentStepDiv.querySelector('form') && !currentStepDiv.querySelector('form').checkValidity()) {
            // If the form is invalid, display the validation messages
            currentStepDiv.querySelector('form').reportValidity();
            return; // Stop the function here if the form is not valid
        }
    
        // Hide the current step
        currentStepDiv.style.display = 'none';
        // Show the next step
        nextStepDiv.style.display = 'block';
    
        // Update the sidebar step indicator
        setActiveStep(currentStep + 1);
    }
    
    
    function goToPreviousStep(currentStep) {
        // Select the current step and the previous step
        let currentStepDiv = document.getElementById('step-' + currentStep + '-content');
        let previousStepDiv = document.getElementById('step-' + (currentStep - 1) + '-content');
    
        // Hide the current step
        currentStepDiv.style.display = 'none';
        // Show the previous step
        previousStepDiv.style.display = 'block';
    
        // Update the sidebar step indicator
        setActiveStep(currentStep - 1);
    }
    
    function setActiveStep(stepNumber) {
        const steps = document.querySelectorAll('.steps');
        steps.forEach((step, index) => {
            if (index === stepNumber - 1) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
    
    // Event listener for the "Next Step" button
    document.getElementById('nextStep1').addEventListener('click', function() {
        const form = document.getElementById('personalInfoForm');
        if (form.checkValidity()) {
            goToNextStep(1);
        } else {
            form.reportValidity();
        }
    });
    
    // Event listener for the "Previous Step" button
    document.getElementById('prevStep2').addEventListener('click', function() {
        goToPreviousStep(2);
    });
    
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the page from refreshing
    });
    
    // Function to update the active step indicator in the sidebar
    function setActiveStep(stepNumber) {
        const steps = document.querySelectorAll('.steps');
        steps.forEach((step, index) => {
            if (index === stepNumber - 1) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
    
    // Event listener for the "Next Step" button
    document.getElementById('nextStep1').addEventListener('click', function() {
        const form = document.getElementById('personalInfoForm');
        if (form.checkValidity()) {
            // Proceed to the next step only if the form is valid
            goToNextStep(1);
        } else {
            // If the form is invalid, display the built-in validation messages
            form.reportValidity();
        }
    });
    
    
// Adjust the position of the overlay
let overlayElement = document.querySelector('.overlay');
overlayElement.style.top = '0';
