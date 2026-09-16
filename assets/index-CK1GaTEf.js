(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={Home:`
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
      ${t(`📚`,`Academics`,`Units, notes & past papers`,`Academics`)}
      ${t(`🗓️`,`Timetable`,`View your class schedule`,`Timetable`)}
      ${t(`📝`,`Assignments`,`Track your deadlines`,`Assignments`)}
      ${t(`📖`,`My Notes`,`Save your study notes`,`Notes`)}
      ${t(`💰`,`Budget`,`Track your money`,`Budget`)}
      ${t(`📢`,`Announcements`,`Campus updates`,`Announcements`)}
      ${t(`👥`,`Study Groups`,`Learn together`,`Groups`)}
      ${t(`🛍️`,`Marketplace`,`Buy & sell around campus`,`Marketplace`)}
    </section>

    <section class="today">
      <h2>Today's Tasks</h2>
      <div class="task">☐ Complete Programming 1 assignment</div>
      <div class="task">☐ Review today's lecture notes</div>
      <div class="task">☐ Check tomorrow's timetable</div>
    </section>
  `,Academics:`
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
  `,Timetable:`
    <h1>🗓️ Timetable</h1>
    <div class="list">
      <div class="item"><b>Monday</b><small>08:00 — Programming 1</small></div>
      <div class="item"><b>Tuesday</b><small>10:00 — Mathematics</small></div>
      <div class="item"><b>Wednesday</b><small>08:00 — Computer Systems</small></div>
      <div class="item"><b>Thursday</b><small>14:00 — Communication Skills</small></div>
      <div class="item"><b>Friday</b><small>10:00 — Mathematics</small></div>
    </div>
  `,Assignments:`
    <h1>📝 Assignments</h1>
    <p>Keep track of your academic deadlines.</p>

    <input id="assignmentInput" placeholder="Enter assignment">
    <input id="assignmentDate" type="date">
    <button class="primary" onclick="addAssignment()">Add Assignment</button>

    <div id="assignmentList" class="list"></div>
  `,Notes:`
    <h1>📖 My Notes</h1>
    <textarea id="noteText" placeholder="Write your study notes here..."></textarea>
    <button class="primary" onclick="saveNote()">Save Note</button>
    <div id="notesList" class="list"></div>
  `,Budget:`
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
  `,Announcements:`
    <h1>📢 Announcements</h1>
    <div class="item"><b>Welcome to CampusMate KE</b><small>Stay updated with important student information.</small></div>
    <div class="item"><b>Academic Reminder</b><small>Check your assignments and timetable regularly.</small></div>
  `,Groups:`
    <h1>👥 Study Groups</h1>
    <p>Find students studying similar subjects.</p>
    <div class="item"><b>Programming 1</b><small>12 members</small></div>
    <div class="item"><b>Mathematics</b><small>18 members</small></div>
    <div class="item"><b>Computer Science Freshers</b><small>25 members</small></div>
  `,Marketplace:`
    <h1>🛍️ Campus Marketplace</h1>
    <p>Student-to-student marketplace.</p>
    <div class="item"><b>📚 Used textbooks</b><small>Post or find learning materials.</small></div>
    <div class="item"><b>💻 Student electronics</b><small>Find useful devices around campus.</small></div>
    <button class="primary" onclick="alert('Listing feature coming next')">+ Create Listing</button>
  `,Profile:`
    <h1>👤 My Profile</h1>
    <div class="profile-card">
      <div class="avatar">ID</div>
      <h2>Ian Dancan</h2>
      <p>Computer Science Student</p>
      <p>CampusMate KE</p>
    </div>

    <h2>Settings</h2>
    <button class="primary" onclick="toggleTheme()">🌙 Toggle Dark Mode</button>
  `};function t(e,t,n,r){return`
    <button class="feature" onclick="showSection('${r}')">
      <span class="icon">${e}</span>
      <strong>${t}</strong>
      <small>${n}</small>
    </button>
  `}function n(){app.innerHTML=`
    <header class="topbar">
      <div>
        <div class="logo">CampusMate <span>KE</span></div>
        <p>Your student life, organized.</p>
      </div>
      <button class="profile" onclick="showSection('Profile')">👤</button>
    </header>

    <main id="content">${e.Home}</main>

    <nav class="bottom">
      <button onclick="showSection('Home')">🏠<span>Home</span></button>
      <button onclick="showSection('Academics')">📚<span>Academics</span></button>
      <button onclick="showSection('Assignments')">📝<span>Tasks</span></button>
      <button onclick="showSection('Profile')">👤<span>Profile</span></button>
    </nav>
  `}window.showSection=function(t){document.querySelector(`#content`).innerHTML=e[t]||e.Home,t===`Assignments`&&r(),t===`Notes`&&i(),t===`Budget`&&a()},window.addAssignment=function(){let e=document.querySelector(`#assignmentInput`),t=document.querySelector(`#assignmentDate`);if(!e.value)return alert(`Enter an assignment first.`);let n=JSON.parse(localStorage.getItem(`assignments`)||`[]`);n.push({name:e.value,date:t.value||`No date`}),localStorage.setItem(`assignments`,JSON.stringify(n)),e.value=``,t.value=``,r()};function r(){let e=document.querySelector(`#assignmentList`);if(!e)return;let t=JSON.parse(localStorage.getItem(`assignments`)||`[]`);e.innerHTML=t.length?t.map((e,t)=>`
      <div class="item">
        <b>📝 ${e.name}</b>
        <small>Deadline: ${e.date}</small>
        <button onclick="deleteAssignment(${t})">Delete</button>
      </div>
    `).join(``):`<p>No assignments yet.</p>`}window.deleteAssignment=function(e){let t=JSON.parse(localStorage.getItem(`assignments`)||`[]`);t.splice(e,1),localStorage.setItem(`assignments`,JSON.stringify(t)),r()},window.saveNote=function(){let e=document.querySelector(`#noteText`).value.trim();if(!e)return alert(`Write a note first.`);let t=JSON.parse(localStorage.getItem(`notes`)||`[]`);t.push(e),localStorage.setItem(`notes`,JSON.stringify(t)),document.querySelector(`#noteText`).value=``,i()};function i(){let e=document.querySelector(`#notesList`);if(!e)return;let t=JSON.parse(localStorage.getItem(`notes`)||`[]`);e.innerHTML=t.length?t.map((e,t)=>`
      <div class="item">
        <b>📖 Note ${t+1}</b>
        <small>${e}</small>
      </div>
    `).join(``):`<p>No saved notes yet.</p>`}window.addExpense=function(){let e=document.querySelector(`#expenseName`).value.trim(),t=Number(document.querySelector(`#expenseAmount`).value);if(!e||!t)return alert(`Enter the expense and amount.`);let n=JSON.parse(localStorage.getItem(`expenses`)||`[]`);n.push({name:e,amount:t}),localStorage.setItem(`expenses`,JSON.stringify(n)),document.querySelector(`#expenseName`).value=``,document.querySelector(`#expenseAmount`).value=``,a()};function a(){let e=document.querySelector(`#expenseList`),t=document.querySelector(`#totalExpenses`);if(!e||!t)return;let n=JSON.parse(localStorage.getItem(`expenses`)||`[]`);t.textContent=`KSh ${n.reduce((e,t)=>e+t.amount,0).toLocaleString()}`,e.innerHTML=n.length?n.map(e=>`
      <div class="item">
        <b>${e.name}</b>
        <small>KSh ${e.amount.toLocaleString()}</small>
      </div>
    `).join(``):`<p>No expenses recorded.</p>`}window.toggleTheme=function(){document.body.classList.toggle(`dark`)},n();