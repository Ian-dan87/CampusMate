import './style.css'

const sections = {
  Home: `
    <section class="welcome">
      <p>Welcome back 👋</p>
      <h1>Ian Dancan</h1>
      <small>Student Dashboard</small>
    </section>

    <section class="quick">
      <div class="card"><b>8</b><span>Units</span></div>
      <div class="card"><b>3</b><span>Assignments</span></div>
      <div class="card"><b>2</b><span>Events</span></div>
    </section>

    <h2>Student Services</h2>
    <section class="grid">
      ${feature('📚','Academics','Units, notes & past papers','Academics')}
      ${feature('🗓️','Timetable','View your class schedule','Timetable')}
      ${feature('📝','Assignments','Track your deadlines','Assignments')}
      ${feature('📖','My Notes','Save your study notes','Notes')}
      ${feature('💰','Budget','Track your money','Budget')}
      ${feature('📢','Announcements','Campus updates','Announcements')}
      ${feature('👥','Study Groups','Learn together','Groups')}
      ${feature('🛍️','Marketplace','Buy & sell around campus','Marketplace')}
    </section>

    <section class="today">
      <h2>Today's Tasks</h2>
      <div class="task">☐ Complete Programming 1 assignment</div>
      <div class="task">☐ Review today's lecture notes</div>
      <div class="task">☐ Check tomorrow's timetable</div>
    </section>
  `,

  Academics: `
    <h1>📚 Academics</h1>
    <p>Manage your university learning.</p>

    <div class="list">
      <div class="item"><b>CSC1110</b><small>Programming 1</small></div>
      <div class="item"><b>MAT1110</b><small>Mathematics</small></div>
      <div class="item"><b>COM1110</b><small>Communication Skills</small></div>
      <div class="item"><b>CSC1120</b><small>Computer Systems</small></div>
    </div>

    <button class="primary" onclick="alert('Past Papers section coming next')">📄 Past Papers</button>
    <button class="primary" onclick="alert('Study materials section coming next')">📚 Study Materials</button>
  `,

  Timetable: `
    <h1>🗓️ Timetable</h1>
    <div class="list">
      <div class="item"><b>Monday</b><small>08:00 — Programming 1</small></div>
      <div class="item"><b>Tuesday</b><small>10:00 — Mathematics</small></div>
      <div class="item"><b>Wednesday</b><small>08:00 — Computer Systems</small></div>
      <div class="item"><b>Thursday</b><small>14:00 — Communication Skills</small></div>
      <div class="item"><b>Friday</b><small>10:00 — Mathematics</small></div>
    </div>
  `,

  Assignments: `
    <h1>📝 Assignments</h1>
    <p>Keep track of your academic deadlines.</p>

    <input id="assignmentInput" placeholder="Enter assignment">
    <input id="assignmentDate" type="date">
    <button class="primary" onclick="addAssignment()">Add Assignment</button>

    <div id="assignmentList" class="list"></div>
  `,

  Notes: `
    <h1>📖 My Notes</h1>
    <textarea id="noteText" placeholder="Write your study notes here..."></textarea>
    <button class="primary" onclick="saveNote()">Save Note</button>
    <div id="notesList" class="list"></div>
  `,

  Budget: `
    <h1>💰 Student Budget</h1>
    <p>Track your income and expenses.</p>

    <input id="expenseName" placeholder="Expense name">
    <input id="expenseAmount" type="number" placeholder="Amount (KSh)">
    <button class="primary" onclick="addExpense()">Add Expense</button>

    <div class="budget-box">
      <b>Total Expenses</b>
      <strong id="totalExpenses">KSh 0</strong>
    </div>

    <div id="expenseList" class="list"></div>
  `,

  Announcements: `
    <h1>📢 Announcements</h1>
    <div class="item"><b>Welcome to CampusMate KE</b><small>Stay updated with important student information.</small></div>
    <div class="item"><b>Academic Reminder</b><small>Check your assignments and timetable regularly.</small></div>
  `,

  Groups: `
    <h1>👥 Study Groups</h1>
    <p>Find students studying similar subjects.</p>
    <div class="item"><b>Programming 1</b><small>12 members</small></div>
    <div class="item"><b>Mathematics</b><small>18 members</small></div>
    <div class="item"><b>Computer Science Freshers</b><small>25 members</small></div>
  `,

  Marketplace: `
    <h1>🛍️ Campus Marketplace</h1>
    <p>Student-to-student marketplace.</p>
    <div class="item"><b>📚 Used textbooks</b><small>Post or find learning materials.</small></div>
    <div class="item"><b>💻 Student electronics</b><small>Find useful devices around campus.</small></div>
    <button class="primary" onclick="alert('Listing feature coming next')">+ Create Listing</button>
  `,

  Profile: `
    <h1>👤 My Profile</h1>
    <div class="profile-card">
      <div class="avatar">ID</div>
      <h2>Ian Dancan</h2>
      <p>Computer Science Student</p>
      <p>CampusMate KE</p>
    </div>

    <h2>Settings</h2>
    <button class="primary" onclick="toggleTheme()">🌙 Toggle Dark Mode</button>
  `
}

function feature(icon, title, description, section) {
  return `
    <button class="feature" onclick="showSection('${section}')">
      <span class="icon">${icon}</span>
      <strong>${title}</strong>
      <small>${description}</small>
    </button>
  `
}

function render() {
  app.innerHTML = `
    <header class="topbar">
      <div>
        <div class="logo">CampusMate <span>KE</span></div>
        <p>Your student life, organized.</p>
      </div>
      <button class="profile" onclick="showSection('Profile')">👤</button>
    </header>

    <main id="content">${sections.Home}</main>

    <nav class="bottom">
      <button onclick="showSection('Home')">🏠<span>Home</span></button>
      <button onclick="showSection('Academics')">📚<span>Academics</span></button>
      <button onclick="showSection('Assignments')">📝<span>Tasks</span></button>
      <button onclick="showSection('Profile')">👤<span>Profile</span></button>
    </nav>
  `
}

window.showSection = function(name) {
  document.querySelector('#content').innerHTML =
    sections[name] || sections.Home

  if (name === 'Assignments') loadAssignments()
  if (name === 'Notes') loadNotes()
  if (name === 'Budget') loadExpenses()
}

window.addAssignment = function() {
  const input = document.querySelector('#assignmentInput')
  const date = document.querySelector('#assignmentDate')

  if (!input.value) return alert('Enter an assignment first.')

  const assignments =
    JSON.parse(localStorage.getItem('assignments') || '[]')

  assignments.push({
    name: input.value,
    date: date.value || 'No date'
  })

  localStorage.setItem('assignments', JSON.stringify(assignments))

  input.value = ''
  date.value = ''

  loadAssignments()
}

function loadAssignments() {
  const list = document.querySelector('#assignmentList')
  if (!list) return

  const assignments =
    JSON.parse(localStorage.getItem('assignments') || '[]')

  list.innerHTML = assignments.length
    ? assignments.map((a, i) => `
      <div class="item">
        <b>📝 ${a.name}</b>
        <small>Deadline: ${a.date}</small>
        <button onclick="deleteAssignment(${i})">Delete</button>
      </div>
    `).join('')
    : '<p>No assignments yet.</p>'
}

window.deleteAssignment = function(index) {
  const assignments =
    JSON.parse(localStorage.getItem('assignments') || '[]')

  assignments.splice(index, 1)

  localStorage.setItem('assignments', JSON.stringify(assignments))
  loadAssignments()
}

window.saveNote = function() {
  const text = document.querySelector('#noteText').value.trim()

  if (!text) return alert('Write a note first.')

  const notes =
    JSON.parse(localStorage.getItem('notes') || '[]')

  notes.push(text)

  localStorage.setItem('notes', JSON.stringify(notes))

  document.querySelector('#noteText').value = ''

  loadNotes()
}

function loadNotes() {
  const list = document.querySelector('#notesList')
  if (!list) return

  const notes =
    JSON.parse(localStorage.getItem('notes') || '[]')

  list.innerHTML = notes.length
    ? notes.map((note, i) => `
      <div class="item">
        <b>📖 Note ${i + 1}</b>
        <small>${note}</small>
      </div>
    `).join('')
    : '<p>No saved notes yet.</p>'
}

window.addExpense = function() {
  const name = document.querySelector('#expenseName').value.trim()
  const amount = Number(document.querySelector('#expenseAmount').value)

  if (!name || !amount) return alert('Enter the expense and amount.')

  const expenses =
    JSON.parse(localStorage.getItem('expenses') || '[]')

  expenses.push({ name, amount })

  localStorage.setItem('expenses', JSON.stringify(expenses))

  document.querySelector('#expenseName').value = ''
  document.querySelector('#expenseAmount').value = ''

  loadExpenses()
}

function loadExpenses() {
  const list = document.querySelector('#expenseList')
  const total = document.querySelector('#totalExpenses')

  if (!list || !total) return

  const expenses =
    JSON.parse(localStorage.getItem('expenses') || '[]')

  const sum = expenses.reduce((x, e) => x + e.amount, 0)

  total.textContent = `KSh ${sum.toLocaleString()}`

  list.innerHTML = expenses.length
    ? expenses.map(e => `
      <div class="item">
        <b>${e.name}</b>
        <small>KSh ${e.amount.toLocaleString()}</small>
      </div>
    `).join('')
    : '<p>No expenses recorded.</p>'
}

window.toggleTheme = function() {
  document.body.classList.toggle('dark')
}

render()
