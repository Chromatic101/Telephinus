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
    const monthPicker = document.getElementById('month-picker');
    const viewCalendarBtn = document.getElementById('view-calendar');
    const calendarTitle = document.getElementById('calendar-title');
    const datesContainer = document.getElementById('dates');

    const notificationList = document.getElementById('notification-list');
    const announcementsList = document.getElementById('announcements-list');
    const pendingActivitiesList = document.getElementById('pending-activities-list');
    const profileInfo = document.getElementById('profile-info');

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    // Role Selection
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

    // Auth Navigation
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

    // Signup and Login Logic
    document.getElementById('signup').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Signup successful!');
        signupForm.style.display = 'none';
        mainContent.style.display = 'block';
        loadMainContent();
    });

    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login successful!');
        loginForm.style.display = 'none';
        mainContent.style.display = 'block';
        loadMainContent();
    });

    // Load Main Content
    function loadMainContent() {
        populateYearPicker();
        populateMonthPicker();
        renderCalendar(currentYear, currentMonth);
        loadNotifications();
        loadAnnouncements();
        loadPendingActivities();
        loadProfile();
    }

    // Populate Year Picker
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

    // Populate Month Picker
    function populateMonthPicker() {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        months.forEach((month, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = month;
            if (index === currentMonth) {
                option.selected = true;
            }
            monthPicker.appendChild(option);
        });
    }

    // Render Calendar
    function renderCalendar(year, month) {
        calendarTitle.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
        datesContainer.innerHTML = '';

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        for (let i = 0; i < firstDay.getDay(); i++) {
            datesContainer.appendChild(document.createElement('div'));
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = document.createElement('div');
            date.className = 'date';
            date.textContent = i;
            datesContainer.appendChild(date);
        }
    }

    // Load Notifications
    function loadNotifications() {
        const notifications = [
            '2025-02-28: Name of Event - Location: TBD'
        ];
        notifications.forEach(notification => {
            const li = document.createElement('li');
            li.textContent = notification;
            notificationList.appendChild(li);
        });
    }

    // Load Announcements
    function loadAnnouncements() {
        const announcements = [
            '2025-02-15: Typhoon - NO CLASSES DUE TO STRONG TYPHOON. ALL PEOPLE INSIDE THE CAMPUS ARE ISSUED TO GO HOME.'
        ];
        announcements.forEach(announcement => {
            const div = document.createElement('div');
            div.textContent = announcement;
            announcementsList.appendChild(div);
        });
    }

    // Load Pending Activities
    function loadPendingActivities() {
        const activities = [
            'Narrative Report – Feb 6 (Thu) (WI)',
            'Worksheet(Week 4) – Feb 6 (Thu) (21st Century Literacy)',
            'P’T1 Mind Mapping – Mar 14 (Mon) (Personal Development)'
        ];
        activities.forEach(activity => {
            const li = document.createElement('li');
            li.textContent = activity;
            pendingActivitiesList.appendChild(li);
        });
    }

    // Load Profile
    function loadProfile() {
        const profileData = {
            name: 'Ashtoinne Turingan',
            email: 'akmturingan@pcu.edu.ph',
            gradeSection: 'Grade 12 E-SHILOH',
            strand: 'TVL-ICT-CP',
            gender: 'Male',
            birthday: 'November 24, 2006'
        };
        profileInfo.innerHTML = `
            <p><strong>Name:</strong> ${profileData.name}</p>
            <p><strong>Email:</strong> ${profileData.email}</p>
            <p><strong>Grade/Section:</strong> ${profileData.gradeSection}</p>
            <p><strong>Strand:</strong> ${profileData.strand}</p>
            <p><strong>Gender:</strong> ${profileData.gender}</p>
            <p><strong>Birthday:</strong> ${profileData.birthday}</p>
        `;
    }

    // View Calendar Button
    viewCalendarBtn.addEventListener('click', function() {
        currentYear = parseInt(yearPicker.value);
        currentMonth = parseInt(monthPicker.value);
        renderCalendar(currentYear, currentMonth);
    });
});
