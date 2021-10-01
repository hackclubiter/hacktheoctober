//User Data Display
function projectData(user) {
    return `
    <div class="project-container">
    <div class="project-wrapper">
        <a href="#">
            <img src="${user.userImage}" alt="${user.userName}" width="150">
        </a>
        <div class="project-title">
        ${user.projectName}
        </div>
        <div class="project-place">
        ${user.userName}
        </div>
    </div>
    <div class="project-icons">
        <li><a href="https://github.com/${user.projectRepo}" target="blank">Click Here <span class="fas fa-paper-plane"></span></a></li>
        </li>
    </div>
</div>
  `;
  }
  
  document.getElementsByClassName('projects')[0].innerHTML = `
  ${userData.map(projectData).join("")}
  `;
