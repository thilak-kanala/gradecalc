// Details of all branches
const branches = {
  "Computer Science": {
    theory: [
      { name: "Database Systems", grade: ["-", -1, -1], credits: 3 },
      {
        name: "Design and Analysis of Algorithms",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Embedded Systems", grade: ["-", -1, -1], credits: 4 },
      {
        name: "Formal Languages and Automata Theory",
        grade: ["-", -1, -1],
        credits: 3,
      },
      { name: "MATH - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      { name: "Algorithms Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "Database Systems Lab", grade: ["-", -1, -1], credits: 2 },
      { name: "Embedded Systems Lab", grade: ["-", -1, -1], credits: 1 },
    ],

    total_credits: 21,
  },

  "Electronics & Communication": {
    theory: [
      { name: "Electromagnetic Waves", grade: ["-", -1, -1], credits: 4 },
      { name: "Linear Integrated Circuits", grade: ["-", -1, -1], credits: 4 },
      { name: "VLSI Design", grade: ["-", -1, -1], credits: 4 },
      { name: "Digital Signal Processing", grade: ["-", -1, -1], credits: 3 },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      { name: "VLSI Lab", grade: ["-", -1, -1], credits: 1 },
      {
        name: "Electronic Circuit Design Lab",
        grade: ["-", -1, -1],
        credits: 2,
      },
    ],

    total_credits: 21,
  },

  "Computer & Communication": {
    theory: [
      {
        name: "Design and Analysis of Algorithms",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Operating Systems", grade: ["-", -1, -1], credits: 4 },
      { name: "Database Systems", grade: ["-", -1, -1], credits: 3 },
      { name: "Computer Network Protocols", grade: ["-", -1, -1], credits: 4 },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      { name: "Algorithms Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "Operating Systems Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "Database Systems Lab", grade: ["-", -1, -1], credits: 1 },
    ],

    total_credits: 21,
  },

  "Information Technology": {
    theory: [
      { name: "Computer Network Protocols", grade: ["-", -1, -1], credits: 4 },
      { name: "Operating Systems", grade: ["-", -1, -1], credits: 4 },
      {
        name: "Design and Analysis of Algorithms",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Computer Organization & Microprocessor Systems",
        grade: ["-", -1, -1],
        credits: 3,
      },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],
    labs: [
      { name: "Operating Systems Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "Microprocessor Systems Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "Algorithms Lab", grade: ["-", -1, -1], credits: 1 },
    ],

    total_credits: 21,
  },

  "Aeronautical Engineering": {
    theory: [
      { name: "Aerodynamics", grade: ["-", -1, -1], credits: 4 },
      { name: "Aircraft Propulsion", grade: ["-", -1, -1], credits: 4 },
      { name: "Flight Mechanics", grade: ["-", -1, -1], credits: 3 },
      { name: "Linear Control Theory", grade: ["-", -1, -1], credits: 4 },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Aerodynamics & Propulsion Lab",
        grade: ["-", -1, -1],
        credits: 2,
      },
      {
        name: "Numerical Computation Lab - I",
        grade: ["-", -1, -1],
        credits: 1,
      },
    ],

    total_credits: 21,
  },

  "Electrical & Electronics": {
    theory: [
      {
        name: "Electrical Machinery - II",
        grade: ["-", -1, -1],
        credits: 3,
      },
      {
        name: "Generation Transmission & Distribution",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Linear Control Theory",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Microcontrollers",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Electrical Machinery Lab",
        grade: ["-", -1, -1],
        credits: 2,
      },
      {
        name: "Microcontroller Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
    ],

    total_credits: 21,
  },

  "Electronics & Instrumentation": {
    theory: [
      { name: "Digital System Design", grade: ["-", -1, -1], credits: 3 },
      { name: "Industrial Instrumentation", grade: ["-", -1, -1], credits: 3 },
      { name: "Linear Control Theory", grade: ["-", -1, -1], credits: 4 },
      { name: "Linear Integrated Circuits", grade: ["-", -1, -1], credits: 4 },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Analog Circuits Lab",
        grade: ["-", -1, -1],
        credits: 2,
      },
      {
        name: "Circuit Simulation & HDL Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Instrumentation Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
    ],

    total_credits: 21,
  },

  "Mechanical Engineering": {
    theory: [
      { name: "Dynamics of Machinery", grade: ["-", -1, -1], credits: 4 },
      { name: "Fluid Mechanics", grade: ["-", -1, -1], credits: 4 },
      { name: "Metrology & Measurements", grade: ["-", -1, -1], credits: 4 },
      { name: "Thermodynamics - II", grade: ["-", -1, -1], credits: 3 },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Strength of Materials Lab",
        grade: ["-", -1, -1],
        credits: 2,
      },
      {
        name: "Workshop Practice - II",
        grade: ["-", -1, -1],
        credits: 1,
      },
    ],

    total_credits: 21,
  },

  "Industrial & Production": {
    theory: [
      { name: "Fluid Mechanics & Machinery", grade: ["-", -1, -1], credits: 4 },
      {
        name: "Manufacturing Automation Engineering",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Theory of Machines", grade: ["-", -1, -1], credits: 4 },
      { name: "Work Systems Engineering", grade: ["-", -1, -1], credits: 3 },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Metrology Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Thermo-fluid Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Workshop Practice - II",
        grade: ["-", -1, -1],
        credits: 1,
      },
    ],

    total_credits: 21,
  },

  Mechatronics: {
    theory: [
      {
        name: "Automated Manufacturing Systems",
        grade: ["-", -1, -1],
        credits: 3,
      },
      {
        name: "Design of Machine Elements",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Linear Control Theory", grade: ["-", -1, -1], credits: 4 },
      {
        name: "Linear Integrated Circuits & Applications",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "CAD & Kinematics Simulation Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Integrated Electronics Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Manufacturing Processing Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
    ],

    total_credits: 21,
  },

  "Media Technology": {
    theory: [
      { name: "Animation Technology", grade: ["-", -1, -1], credits: 4 },
      {
        name: "Digital Photography",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Digital Print Systems", grade: ["-", -1, -1], credits: 3 },
      {
        name: "Flexography, Gravure & Screen Printing",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Digital Photography",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Machine Lab",
        grade: ["-", -1, -1],
        credits: 2,
      },
    ],

    total_credits: 21,
  },

  "Automobile Engineering": {
    theory: [
      {
        name: "Automotive transmission systems",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Linear Control Theory",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Manufacturing Engineering & Technology",
        grade: ["-", -1, -1],
        credits: 3,
      },
      {
        name: "Theory of Machines",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Automobile Lab - II",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Materials testing Lab",
        grade: ["-", -1, -1],
        credits: 2,
      },
    ],

    total_credits: 21,
  },

  Biomedical: {
    theory: [
      {
        name: "Biomechanics",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Biomedical Instrumentation - I",
        grade: ["-", -1, -1],
        credits: 3,
      },
      {
        name: "Digital System Design",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Integrated Circuit Systems",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "IC Systems Lab",
        grade: ["-", -1, -1],
        credits: 2,
      },
      {
        name: "Matlab & Simulink",
        grade: ["-", -1, -1],
        credits: 1,
      },
    ],

    total_credits: 21,
  },

  Biotechnology: {
    theory: [
      {
        name: "Clinical & Biochemical Engineering Thermodynamics",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Downstream Processes",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Molecular Biology & Genetic Engineering",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Principles of Heat & Mass transfer operations",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Molecular Biology & Genetic Engineering Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Unit Operations Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
    ],

    total_credits: 21,
  },

  Chemical: {
    theory: [
      {
        name: "Chemical Engineering Thermodynamics - II",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Chemical Process Industries",
        grade: ["-", -1, -1],
        credits: 3,
      },
      {
        name: "Heat Transfer Operations",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Mass Transfer - I",
        grade: ["-", -1, -1],
        credits: 4,
      },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Momentum Transfer & Particle Technology Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Numerical Methods for Chemical Engineers Lab",
        grade: ["-", -1, -1],
        credits: 2,
      },
    ],

    total_credits: 21,
  },

  Civil: {
    theory: [
      {
        name: "Basic Reinforced Concrete Design",
        grade: ["-", -1, -1],
        credits: 4,
      },
      {
        name: "Building Material Technology",
        grade: ["-", -1, -1],
        credits: 3,
      },
      {
        name: "Engineering Geology",
        grade: ["-", -1, -1],
        credits: 3,
      },
      {
        name: "Waste Water Management",
        grade: ["-", -1, -1],
        credits: 3,
      },
      {
        name: "Water Resource Engineering",
        grade: ["-", -1, -1],
        credits: 3,
      },
      { name: "Math - IV", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      {
        name: "Building Design & Drawing",
        grade: ["-", -1, -1],
        credits: 1,
      },
      {
        name: "Fluid Mechanics Lab",
        grade: ["-", -1, -1],
        credits: 1,
      },
    ],

    total_credits: 21,
  },
};

get_letter_grade = (total) => {
  total = Math.round(total);
  if (total >= 90) {
    return ["A+", 10, total];
  } else if (total >= 80) {
    return ["A", 9, total];
  } else if (total >= 70) {
    return ["B", 8, total];
  } else if (total >= 60) {
    return ["C", 7, total];
  } else if (total >= 50) {
    return ["D", 6, total];
  } else if (total >= 40) {
    return ["E", 5, total];
  } else {
    return ["F", 4, total];
  }
};

get_theory_input_template = (subject_name) => {
  return `
    <div
    class="col-sm-12 col-md-4 col-lg shadow-lg p-2 m-3 border border-secondary rounded form-group"
    >
    <div class="card-body">
      <h5 class="card-title text-center">${subject_name}</h5>
      <hr class="bg-dark" />
      <label for="${subject_name + "-sessional"}">Sessional</label><br />
      <input
        step="any"
        type="number"
        class="form-control bg-dark border border-dark text-white"
        id="${subject_name + "-sessional"}"
        name="${subject_name + "-sessional"}"
      />
      <br />
      <label for="${subject_name + "-assignment"}">Assignment</label><br />
      <input
        step="any"
        type="number"
        class="form-control bg-dark border border-dark text-white"
        id="${subject_name + "-assignment"}"
        name="${subject_name + "-assignment"}"
      />
    </div>
    </div>`;
};

get_lab_input_template = (subject_name) => {
  return `<div
    class="col-sm-12 col-md-4 col-lg shadow-lg p-2 m-3 border border-secondary rounded form-group"
    >
    <div class="card-body">
      <h5 class="card-title text-center">${subject_name}</h5>
      <hr class="bg-dark" />
      <label for="${subject_name + "-total"}">Total</label><br />
      <input
        step="any"
        type="number"
        class="form-control bg-dark border border-dark text-white"
        id="${subject_name + "-total"}"
        name="${subject_name + "-total"}"
      />
    </div>
    </div>`;
};

get_result_template = (subjects, final_grade) => {
  let content_template = "";
  content_template += `<div class="h2 mx-auto my-3 p-2 shadow-lg bg-success rounded-lg" 
  style="width: max-content; background-image: url({{ '/assets/images/bg-4.jpg' | relative_url }})">
    GPA : ${final_grade.toFixed(2)}
  </div>
  <table class="table table-striped table-borderless text-light">
  <thead>
  <tr>
    <th scope="col text-right"><u>Subject</u></th>
    <th scope="col"><u>Grade</u></th>
    <th scope="col"><u>Total</u></th>
  </tr>
  </thead>
  <tbody>`;

  // theory
  for (let x = 0; x < subjects["theory"].length; x += 1) {
    content_template += `
    <tr>
    <th scope="row">${subjects["theory"][x]["name"]}</th>
    <td>${subjects["theory"][x]["grade"][0]}</td>
    <td>${subjects["theory"][x]["grade"][2]}</td>
    </tr>`;
  }

  // lab
  for (let x = 0; x < subjects["labs"].length; x += 1) {
    content_template += `
    <tr>
    <th scope="row">${subjects["labs"][x]["name"]}</th>
    <td>${subjects["labs"][x]["grade"][0]}</td>
    <td>${subjects["labs"][x]["grade"][2]}</td>
    </tr>`;
  }

  // end
  content_template += "</tbody></table>";

  return content_template;
};

get_dropdown_branch_link = (branch) => {
  return `
    <button class="dropdown-item" onclick="generate('${branch}')">
    ${branch}
    </button>
    <div class="dropdown-divider"></div>`;
};

generate = (branch) => {
  let content_div = document.getElementById("content");
  let subjects = branches[branch];
  let theory_len = subjects["theory"].length;
  let labs_len = subjects["labs"].length;
  let content_template = "";

  // display branch name in the brach selector in header
  document.getElementById("branch-name").innerHTML = branch;

  // clear result section
  document.getElementById("result").innerHTML = "";

  // generate html for theory input section
  content_template = "";
  for (let x = 0; x < theory_len; x++) {
    content_template += get_theory_input_template(
      subjects["theory"][x]["name"]
    );
  }
  // end theory input section
  content_template += "</div>";

  // update frontend
  document.getElementById("theory-input-section").innerHTML = content_template;

  // generate html for lab input section
  content_template = "";
  for (let x = 0; x < labs_len; x++) {
    content_template += get_lab_input_template(subjects["labs"][x]["name"]);
  }

  // end lab input section
  content_template += "</div>";

  // update frontend
  document.getElementById("labs-input-section").innerHTML = content_template;

  // change onclick of result button to call grade function with appropriate branch
  let result_btn = document.getElementById("result-btn");
  // result_btn.removeAttribute("onclick");
  result_btn.setAttribute("onclick", `grade('${branch}')`);
};

grade = (branch) => {
  let result_div = document.getElementById("result");
  let form_inputs = document.forms["marks"].getElementsByTagName("input");

  // clear result field
  result_div.innerHTML = "";

  let subjects = branches[branch];
  let theory_len = subjects["theory"].length;
  let labs_len = subjects["labs"].length;
  let result_div_template = "";

  let prev_gpa = parseFloat(form_inputs[2 * theory_len + labs_len].value);
  prev_gpa = isNaN(prev_gpa) ? 0 : prev_gpa;

  // calculate theory grades
  let theory_index = -1;
  for (let x = 0; x < 2 * theory_len; x += 2) {
    sessional_score = parseFloat(form_inputs[x].value);
    assignment_score = parseFloat(form_inputs[x + 1].value);

    sessional_score = isNaN(sessional_score) ? 0 : sessional_score;
    assignment_score = isNaN(assignment_score) ? 0 : assignment_score;

    let IA = parseFloat(sessional_score + assignment_score); // max value 50
    let ES = parseFloat(0.5 * IA + 2.5 * prev_gpa); // max value 50
    let total = parseFloat(IA + ES); // max value 100

    theory_index++;
    subjects["theory"][theory_index]["grade"] = get_letter_grade(total);
  }

  // calculate lab grades
  let lab_index = -1;
  for (let x = 2 * theory_len; x < 2 * theory_len + labs_len; x += 1) {
    total = parseFloat(form_inputs[x].value);
    total = isNaN(total) ? 0 : total;

    lab_index++;
    subjects["labs"][lab_index]["grade"] = get_letter_grade(total);
  }

  // update total in page
  let final_grade = 0;
  let total_credits = subjects["total_credits"];

  // theory
  for (let x = 0; x < theory_len; x += 1) {
    final_grade +=
      parseFloat(subjects["theory"][x]["grade"][1]) *
      subjects["theory"][x]["credits"];
  }
  // lab
  for (let x = 0; x < labs_len; x += 1) {
    final_grade +=
      parseFloat(subjects["labs"][x]["grade"][1]) *
      subjects["labs"][x]["credits"];
  }
  final_grade /= total_credits;

  result_div.innerHTML += get_result_template(subjects, final_grade);
};

// initial front end
window.onload = () => {
  // generate branch selector dropdown
  let branch_names = Object.keys(branches);
  let content_template = "";
  for (let x = 0; x < branch_names.length; x++) {
    content_template += get_dropdown_branch_link(branch_names[x]);
  }
  document.getElementById(
    "dropdown-items-section"
  ).innerHTML = content_template;

  // initial branch page
  generate("Computer Science");
};
