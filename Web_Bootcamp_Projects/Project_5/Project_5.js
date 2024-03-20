// JavaScript code to handle adding and removing names from the detention list

// Retrieve detention list from local storage if available
let detentionList = JSON.parse(localStorage.getItem('detentionList')) || [];

// Function to render the detention list
function renderDetentionList() {
    const detentionListElement = document.getElementById('detentionList');
    detentionListElement.innerHTML = '';
    detentionList.forEach((detention, index) => {
        const remainingDays = calculateRemainingDays(detention);
        const li = document.createElement('li');
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${detention.name} (Detention: ${remainingDays} days left)`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeName(index));
        li.appendChild(nameSpan);
        li.appendChild(removeButton);
        detentionListElement.appendChild(li);
    });
}

// Function to calculate remaining detention days
function calculateRemainingDays(detention) {
    const startDate = new Date(detention.startDate);
    const currentDate = new Date();
    const elapsedDays = Math.ceil((currentDate - startDate) / (1000 * 60 * 60 * 24));
    let remainingDays = detention.days - elapsedDays;

    // Exclude weekends from the deduction process
    for (let i = 0; i < elapsedDays; i++) {
        const day = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000).getDay();
        if (day === 0 || day === 6) { // Sunday (0) or Saturday (6)
            remainingDays++;
        }
    }

    return remainingDays < 0 ? 0 : remainingDays;
}

// Function to add a name to the detention list
function addToDetentionList(name, days, parentInfo, reason) {
    const startDate = new Date().toISOString();
    detentionList.push({ name, days, parentInfo, startDate, reason });
    localStorage.setItem('detentionList', JSON.stringify(detentionList));
    renderDetentionList();
    notifyParent(name, days, parentInfo, reason); // Notify parent upon adding to detention list
}

// Function to remove a name from the detention list
function removeName(index) {
    detentionList.splice(index, 1);
    localStorage.setItem('detentionList', JSON.stringify(detentionList));
    renderDetentionList();
}

// Function to simulate sending an email notification to the parent
function notifyParent(name, days, parentInfo, reason) {
    const message = `Dear ${parentInfo},\n\nYour child ${name} has been assigned ${days} days of detention due to ${reason}.\n\nSincerely,\nEvergreen Heights Academy`;
    alert(message); // Simulate email alert
}

// Event listener for form submission
document.getElementById('detentionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.getElementById('detentionInput');
    const name = input.value.trim();
    const days = parseInt(document.getElementById('detentionDays').value.trim());
    const parentInfo = document.getElementById('parentInfo').value;
    const reasonSelect = document.getElementById('reasonSelect');
    const reason = reasonSelect.value === 'Other' ? document.getElementById('otherReason').value.trim() : reasonSelect.value;

    if (name !== '' && !isNaN(days) && days > 0 && parentInfo !== '' && reason !== '') {
        addToDetentionList(name, days, parentInfo, reason);
        input.value = '';
        document.getElementById('detentionDays').value = '';
        document.getElementById('parentInfo').value = '';
        reasonSelect.value = 'Late for class';
        document.getElementById('otherReason').value = '';
    }
});

// Show/hide other reason input based on select value
document.getElementById('reasonSelect').addEventListener('change', function () {
    const otherReasonInput = document.getElementById('otherReason');
    otherReasonInput.style.display = this.value === 'Other' ? 'block' : 'none';
});

// Initialize detention list on page load
renderDetentionList();
