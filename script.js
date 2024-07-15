// document.addEventListener('DOMContentLoaded', () => {
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');
const leavePlanBtn = document.getElementById('leave-plan-btn');
const leavePlanDropdown = document.getElementById('leave-plan-dropdown');
const applyLeaveBtn = document.getElementById('apply-leave-btn');
const leaveCalendar = document.getElementById('leave-calendar');
const calendarElement = document.getElementById('calendar');
const currentMonthYearElement = document.getElementById('current-month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const leaveForm = document.getElementById('leave-form');
const leaveApplicationForm = document.getElementById('leave-application-form');
const profileBtn = document.getElementById('profile-btn');
const profileSection = document.getElementById('profile-section');
const notificationsSection = document.getElementById('notifications-section');
const dailyTasksBtn = document.getElementById('daily-tasks-btn');
const dailyTasksSection = document.getElementById('daily-tasks-section');
const dashboardBtn = document.getElementById('dashboard-btn');
const emailBtn = document.getElementById('e-mail-btn');
const emailsSection = document.getElementById('emails-section');
const phoneNumberBtn = document.getElementById('phone-number-btn');
const phoneNumbersSection = document.getElementById('phone-numbers-section');
const creditCardBtn = document.getElementById('credit-card-btn');
const creditCardSection = document.getElementById('credit-card-section');
const assetsBtn = document.getElementById('assets-btn');
const assetsSection = document.getElementById('assets-section');
const loginCredentialBtn = document.getElementById('login-credential-btn');
const loginCredentialSection = document.getElementById('login-credential-section');
const reportBtn = document.getElementById('report-btn');
const reportsSection = document.getElementById('reports-section');
const weekdaysElement = document.getElementById('weekdays');
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


let currentDate = new Date();

function closeAllSidebarSections() {
    dailyTasksSection.classList.remove('active');
    profileSection.classList.remove('active');
    notificationsSection.classList.remove('active');
    emailsSection.classList.remove('active');
    phoneNumbersSection.classList.remove('active');
    creditCardSection.classList.remove('active')
    assetsSection.classList.remove('active');
    loginCredentialSection.classList.remove('active');
    reportsSection.classList.remove('active');
    // leavePlanDropdown.style.display = 'none';
    leaveCalendar.style.display = 'none';
    leaveForm.style.display = 'none';
    // Add any other sidebar sections here
}

reportBtn.addEventListener('click', () => {
    closeAllSidebarSections();
    reportsSection.classList.add('active');
});

dashboardBtn.addEventListener('click', () => {
    closeAllSidebarSections();
    // Add code to show dashboard content if needed
});

leavePlanBtn.addEventListener('click', () => {
    if (leavePlanDropdown.style.display === 'none' || leavePlanDropdown.style.display === '') {
        leavePlanDropdown.style.display = 'block';
    } else {
        leavePlanDropdown.style.display = 'none';
    }
});

dailyTasksBtn.addEventListener('click', () => {
    closeAllSidebarSections();
    dailyTasksSection.classList.add('active');
});

profileBtn.addEventListener('click', () => {
    closeAllSidebarSections();
    profileSection.classList.add('active');
    notificationsSection.classList.add('active');
});

emailBtn.addEventListener('click', () => {
    closeAllSidebarSections();
    emailsSection.classList.add('active');
    renderEmailsTable();
});

phoneNumberBtn.addEventListener('click', () => {
    closeAllSidebarSections();
    phoneNumbersSection.classList.add('active');
    renderPhoneNumbersTable();
});

creditCardBtn.addEventListener('click', () => {
    closeAllSidebarSections();
    creditCardSection.classList.add('active');
    renderCreditCardTable();
});

assetsBtn.addEventListener('click', () => {
    closeAllSidebarSections();
    assetsSection.classList.add('active');
    renderAssetsTable();
});

loginCredentialBtn.addEventListener('click', () => {
    closeAllSidebarSections();
    loginCredentialSection.classList.add('active');
    renderLoginCredentialTable();
});

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

function renderWeekdays() {
    weekdaysElement.innerHTML = '';
    weekdays.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('weekday');
        dayElement.textContent = day;
        weekdaysElement.appendChild(dayElement);
    });
}

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    currentMonthYearElement.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    calendarElement.innerHTML = '';

    renderWeekdays();

    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('calendar-day', 'empty');
        calendarElement.appendChild(emptyDay);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');

        dayElement.textContent = i;
        dayElement.addEventListener('click', () => showLeaveForm(new Date(year, month, i)));
        calendarElement.appendChild(dayElement);
    }
}

function showLeaveForm(date) {
    leaveForm.style.display = 'block';
    document.getElementById('leave-start').value = date.toISOString().split('T')[0];
}

leaveApplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Leave application submitted!');
    closeAllSidebarSections();
});

menuBtn.addEventListener('click', (event) => {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('active');
    event.stopPropagation();
});

const setCurrentDateTime = () => {
    const now = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    currentDateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
    currentTimeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
};

setCurrentDateTime();
setInterval(setCurrentDateTime, 1000);

const projectSelect = document.getElementById('project');
const subProjectSelect = document.getElementById('sub-project');

const subProjectOptions = {
    anti_Money_Laundering: [
        { value: 'select', text: 'select' },
        { value: 'insertion', text: 'Insertion' },
        { value: 'quality_check', text: 'Quality Check' },
        { value: 'website_monitoring', text: 'Website Monitoring' },
        { value: 'social_media_scrawling', text: 'Social Media Scrawling' },
        { value: 'training_support', text: 'Training/Support' }
    ],
    media_Monitoring: [
        { value: 'select', text: 'select' },
        { value: 'youtube', text: 'YouTube' },
        { value: 'ott', text: 'OTT' },
        { value: 'facebook', text: 'Facebook' },
        { value: 'sharechat', text: 'Sharechat' },
        { value: 'web_review', text: 'Web Review' },
        { value: 'training_support', text: 'Training/Support' }
    ],
    influencer_Monitoring: [
        { value: 'select', text: 'select' },
        { value: 'influencer_Monitoring', text: 'Influencer Monitoring' },
        { value: 'training_support', text: 'Training/Support' }
    ]
};

projectSelect.addEventListener('change', () => {
    const selectedProject = projectSelect.value;
    subProjectSelect.innerHTML = '';

    if (selectedProject && subProjectOptions[selectedProject]) {
        subProjectOptions[selectedProject].forEach(subProject => {
            const option = document.createElement('option');
            option.value = subProject.value;
            option.textContent = subProject.text;
            subProjectSelect.appendChild(option);
        });
    }
});

subProjectSelect.addEventListener('change', () => {
    const selectedProject = projectSelect.value;
    const selectedSubProject = subProjectSelect.value;

    const tables = document.querySelectorAll('.data-table');
    tables.forEach(table => {
        table.style.display = 'none';
    });

    const selectedTableId = `${selectedProject}-${selectedSubProject}`;
    const selectedTable = document.getElementById(selectedTableId);
    if (selectedTable) {
        selectedTable.style.display = 'table';
    }
});

renderWeekdays();
renderCalendar(currentDate);


function renderEmailsTable() {
    const emailsTableBody = document.querySelector('#emails-table tbody');
    emailsTableBody.innerHTML = ''; // Clear previous rows

    // Generate 20 rows with 20 columns
    for (let i = 1; i <= 11; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 20; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row ${i}, Column ${j}`;
            row.appendChild(cell);
        }
        emailsTableBody.appendChild(row);
    }
}
function renderPhoneNumbersTable() {
    const phoneNumbersTableBody = document.querySelector('#phone-numbers-table tbody');
    phoneNumbersTableBody.innerHTML = ''; // Clear previous rows

    // Generate 20 rows with 20 columns
    for (let i = 1; i <= 20; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 20; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row ${i}, Column ${j}`;
            row.appendChild(cell);
        }
        phoneNumbersTableBody.appendChild(row);
    }
}
function renderCreditCardTable() {
    const creditCardTableBody = document.querySelector('#credit-card-table tbody');
    creditCardTableBody.innerHTML = ''; // Clear previous rows

    // Generate 20 rows with 20 columns
    for (let i = 1; i <= 20; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 20; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row ${i}, Column ${j}`;
            row.appendChild(cell);
        }
        creditCardTableBody.appendChild(row);
    }
}
function renderAssetsTable() {
    const assetsTableBody = document.querySelector('#assets-table tbody');
    assetsTableBody.innerHTML = ''; // Clear previous rows

    // Generate 20 rows with 20 columns
    for (let i = 1; i <= 20; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 20; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row ${i}, Column ${j}`;
            row.appendChild(cell);
        }
        assetsTableBody.appendChild(row);
    }
}
function renderLoginCredentialTable() {
    const loginCredentialTableBody = document.querySelector('#login-credential-table tbody');
    loginCredentialTableBody.innerHTML = ''; // Clear previous rows

    // Generate 20 rows with 20 columns
    for (let i = 1; i <= 20; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 20; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row ${i}, Column ${j}`;
            row.appendChild(cell);
        }
        loginCredentialTableBody.appendChild(row);
    }
}

function showLeaveForm(date) {
    const leaveForm = document.getElementById('leave-form');
    const leaveStart = document.getElementById('leave-start');

    // Adjust the date to account for the local time zone
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

    leaveStart.value = localDate.toISOString().split('T')[0];
    leaveForm.style.display = 'block';
}


// Add this to close the modal when clicking outside of it
window.onclick = function (event) {
    const leaveForm = document.getElementById('leave-form');
    if (event.target == leaveForm) {
        leaveForm.style.display = "none";
    }
}

// Modify the existing event listener for form submission
leaveApplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Leave application submitted!');
    document.getElementById('leave-form').style.display = 'none';
    closeAllSidebarSections();
});
// List of columns to include in the vertical table
// You can edit this list to include only the columns you want
const columnsToInclude = [
    { originalName: "Daily Cases", newName: "Daily Cases" },
    { originalName: "Hourly Count", newName: "Hourly Count" },
    { originalName: "Multiple Cases", newName: "Multiple Cases" },
    // Add or remove columns as needed
];

function createVerticalTable(horizontalTableId) {
    const horizontalTable = document.getElementById(horizontalTableId);
    const verticalTable = document.getElementById(horizontalTableId + '-vertical');

    if (!horizontalTable || !verticalTable) return;

    // Clear the vertical table
    verticalTable.innerHTML = '';

    // Get headers from horizontal table
    const headers = Array.from(horizontalTable.querySelectorAll('th')).map(th => th.textContent);

    // Create rows for vertical table
    columnsToInclude.forEach(column => {
        const columnIndex = headers.indexOf(column.originalName);
        if (columnIndex !== -1) {
            const row = document.createElement('tr');
            const th = document.createElement('th');
            th.textContent = column.newName;
            row.appendChild(th);

            // Get all cells from this column in the horizontal table
            const cells = Array.from(horizontalTable.querySelectorAll(`td:nth-child(${columnIndex + 1})`));
            cells.forEach(cell => {
                const td = document.createElement('td');
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'editable-input';

                // If the horizontal cell has an input, use its value
                if (cell.querySelector('input')) {
                    input.value = cell.querySelector('input').value;
                } else {
                    input.value = cell.textContent;
                }

                // Add event listener to update horizontal table when vertical input changes
                input.addEventListener('input', (event) => {
                    const cellIndex = Array.from(td.parentNode.children).indexOf(td) - 1;
                    const horizontalCell = horizontalTable.rows[cellIndex].cells[columnIndex];
                    if (horizontalCell.querySelector('input')) {
                        horizontalCell.querySelector('input').value = event.target.value;
                    } else {
                        horizontalCell.textContent = event.target.value;
                    }
                });

                td.appendChild(input);
                row.appendChild(td);
            });

            verticalTable.appendChild(row);
        }
    });

    // Show the vertical table
    verticalTable.style.display = 'table';
}

// Modify your existing event listener for sub-project selection
subProjectSelect.addEventListener('change', () => {
    const selectedProject = projectSelect.value;
    const selectedSubProject = subProjectSelect.value;

    const tables = document.querySelectorAll('.data-table');
    tables.forEach(table => {
        table.style.display = 'none';
    });

    const selectedTableId = `${selectedProject}-${selectedSubProject}`;
    const selectedTable = document.getElementById(selectedTableId);
    if (selectedTable) {
        selectedTable.style.display = 'table';
        createVerticalTable(selectedTableId);
    }
});
// });