document.addEventListener('DOMContentLoaded', function() {
    const roleSelection = document.getElementById('role-selection');
    const authOptions = document.getElementById('auth-options');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const mainContent = document.getElementById('main-content');
    const roleSpan = document.getElementById('role');

    const studentBtn = document.getElementById('student-btn');
    const teacherBtn = document.getElementById('teacher-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const backToAuth = document.getElementById('back-to-auth');
    const backToAuthLogin = document.getElementById('back-to-auth-login');

    const yearPicker = document.getElementById('year-picker');
    const prevYearBtn = document.getElementById('prev-year');
    const nextYearBtn = document.getElementById('next-year');
    const calendarContainer = document.querySelector('.calendar-container');

    let currentYear = new Date().getFullYear();

    studentBtn.addEventListener('click', function() {
        roleSelection.style.display = 'none';
        authOptions.style.display = 'block';
        roleSpan.textContent = 'Student';
    });

    teacherBtn.addEventListener('click', function() {
        roleSelection.style.display = 'none';
        authOptions.style.display = 'block';
        roleSpan.textContent = 'Teacher';
    });

    signupBtn.addEventListener('click', function() {
        authOptions.style.display = 'none';
        signupForm.style.display = 'block';
    });

    loginBtn.addEventListener('click', function() {
        authOptions.style.display = 'none';
        loginForm.style.display = 'block';
    });

    backToAuth.addEventListener('click', function() {
        signupForm.style.display = 'none';
        authOptions.style.display = 'block';
    });

    backToAuthLogin.addEventListener('click', function() {
        loginForm.style.display = 'none';
        authOptions.style.display = 'block';
    });

    document.getElementById('signup').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle signup logic here
        alert('Signup successful!');
        signupForm.style.display = 'none';
        mainContent.style.display = 'block';
        loadMainContent();
    });

    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle login logic here
        alert('Login successful!');
        loginForm.style.display = 'none';
        mainContent.style.display = 'block';
        loadMainContent();
    });

    function loadMainContent() {
        populateYearPicker();
        renderCalendar(currentYear);
    }

    function populateYearPicker() {
        const startYear = 2000;
        const endYear = 2030;
        for (let year = startYear; year <= endYear; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            if (year === currentYear) {
                option.selected = true;
            }
            yearPicker.appendChild(option);
        }
    }

    yearPicker.addEventListener('change', function() {
        currentYear = parseInt(yearPicker.value);
        renderCalendar(currentYear);
    });

    prevYearBtn.addEventListener('click', function() {
        currentYear--;
        yearPicker.value = currentYear;
        renderCalendar(currentYear);
    });

    nextYearBtn.addEventListener('click', function() {
        currentYear++;
        yearPicker.value = currentYear;
        renderCalendar(currentYear);
    });

    function renderCalendar(year) {
        calendarContainer.innerHTML = '';
        for (let month = 0; month < 12; month++) {
            const calendar = document.createElement('div');
            calendar.className = 'calendar';
            calendar.innerHTML = `<h2>${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}</h2>`;
            const days = document.createElement('div');
            days.className = 'days';
            days.innerHTML = '<div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>';
            calendar.appendChild(days);
            const dates = document.createElement('div');
            dates.className = 'dates';
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            for (let i = 0; i < firstDay.getDay(); i++) {
                dates.appendChild(document.createElement('div'));
            }
            for (let i = 1; i <= lastDay.getDate(); i++) {
                const date = document.createElement('div');
                date.className = 'date';
                date.textContent = i;
                dates.appendChild(date);
            }
            calendar.appendChild(dates);
            calendarContainer.appendChild(calendar);
        }
    }
});