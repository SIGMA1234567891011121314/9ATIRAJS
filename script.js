const projects = [
  { title: "Projeto 1", description: "Descrição detalhada do Projeto 1." },
  { title: "Projeto 2", description: "Descrição detalhada do Projeto 2." },
  { title: "Projeto 3", description: "Descrição detalhada do Projeto 3." },
  { title: "Projeto 4", description: "Descrição detalhada do Projeto 4." },
  { title: "Projeto 5", description: "Descrição detalhada do Projeto 5." },
  { title: "Projeto 6", description: "Descrição detalhada do Projeto 6." },
  { title: "Projeto 7", description: "Descrição detalhada do Projeto 7." },
  { title: "Projeto 8", description: "Descrição detalhada do Projeto 8." },
  { title: "Projeto 9", description: "Descrição detalhada do Projeto 9." },
];

function showProjectDetails(projectIndex) {
  const project = projects[projectIndex - 1];
  const projectInfo = document.getElementById('project-info');
  projectInfo.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
  `;
  document.getElementById('project-detail').style.display = 'block';
}

function closeDetails() {
  document.getElementById('project-detail').style.display = 'none';
}
