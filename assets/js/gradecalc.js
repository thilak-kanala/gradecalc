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

var branches = {
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

  "Electronics and Communication": {
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

generate = (branch) => {
  var content = document.getElementById("content");
  var subjects = branches[branch];
  var theory_len = subjects["theory"].length;
  var labs_len = subjects["labs"].length;
  var content_template = "";

  var branch_name = document.getElementById("branch-name");
  branch_name.innerHTML = branch;

  content_template += `
  <div
  class="container shadow-lg p-2 text-light border border-dark rounded-lg"
  >
  <form id="marks">
    <!-- Theory -->
    <div class="mx-5">
      <p class="display-4 mb-0">
        Theory
      </p>
      <p class="lead">
        <em> Enter sessional score (0-30) and assignment score (0-20)</em>
      </p>
    </div>
    <div class="row m-3 justify-content-around">`;

  // theory
  for (let x = 0; x < theory_len; x++) {
    content_template += `
    <div
      class="col-sm-12 col-md-4 col-lg shadow-lg p-2 m-3 border border-secondary rounded form-group"
    >
      <div class="card-body">
        <h5 class="card-title text-center">${subjects["theory"][x]["name"]}</h5>
        <hr class="bg-dark" />
        <label for="${
          subjects["theory"][x]["name"] + "-sessional"
        }">Sessional</label><br />
        <input
          step="any"
          type="number"
          class="form-control bg-dark border border-dark text-white"
          id="${subjects["theory"][x]["name"] + "-sessional"}"
          name="${subjects["theory"][x]["name"] + "-sessional"}"
        />
        <br />
        <label for="${
          subjects["theory"][x]["name"] + "-assignment"
        }">Assignment</label><br />
        <input
          step="any"
          type="number"
          class="form-control bg-dark border border-dark text-white"
          id="${subjects["theory"][x]["name"] + "-assignment"}"
          name="${subjects["theory"][x]["name"] + "-assignment"}"
        />
      </div>
    </div>`;
  }

  content_template += "</div>";

  // labs
  content_template += `<div class="mx-5">
    <h1 class="display-4 mb-0">Lab</h1>
    <p class="lead"><em> Enter lab score (0-100) </em></p>
    </div>
    <div class="row m-3 justify-content-around">`;

  for (let x = 0; x < labs_len; x++) {
    content_template += `
    <div
        class="col-sm-12 col-md-4 col-lg shadow-lg p-2 m-3 border border-secondary rounded form-group"
      >
        <div class="card-body">
          <h5 class="card-title text-center">${subjects["labs"][x]["name"]}</h5>
          <hr class="bg-dark" />
          <label for="${
            subjects["labs"][x]["name"] + "-total"
          }">Total</label><br />
          <input
            step="any"
            type="number"
            class="form-control bg-dark border border-dark text-white"
            id="${subjects["labs"][x]["name"] + "-total"}"
            name="${subjects["labs"][x]["name"] + "-total"}"
          />
        </div>
      </div>`;
  }

  content_template += "</div>";

  content_template += `<div class="form-group m-4">
    <label for="prev_gpa" class="h1">Previous Semester GPA</label>
    <input
      step="any"
      type="number"
      class="form-control bg-dark border border-dark text-white"
      id="prev_gpa"
      name="previous gpa"
    />
    </div>
    
    <div class="mx-auto" style="width: max-content;">
      <button type="button" class="btn btn-dark btn-lg" onclick="grade('${branch}')">
        Get Results
      </button>
    </div>
    </form>
    
    <div
    id="result"
    class="col-sm-12 col-md-6 mx-auto m-5 h5 border border-secondary rounded-lg"
    ></div>
    </div>`;

  content.innerHTML = content_template;
};

grade = (branch) => {
  var result_div = document.getElementById("result");
  var form_inputs = document.forms["marks"].getElementsByTagName("input");

  // clear result field
  result_div.innerHTML = "";

  var subjects = branches[branch];
  var theory_len = subjects["theory"].length;
  var labs_len = subjects["labs"].length;
  // var total_len = theory_len + labs_len;
  var result_div_template = "";

  var prev_gpa = parseFloat(form_inputs[2 * theory_len + labs_len].value);

  // calculate theory grades
  var theory_index = -1;
  for (let x = 0; x < 2 * theory_len; x += 2) {
    sessional_score = parseFloat(form_inputs[x].value);
    assignment_score = parseFloat(form_inputs[x + 1].value);

    let IA = parseFloat(sessional_score + assignment_score); // max value 50
    let ES = parseFloat(0.5 * IA + 2.5 * prev_gpa); // max value 50
    let total = parseFloat(IA + ES); // max value 100

    theory_index++;
    subjects["theory"][theory_index]["grade"] = get_letter_grade(total);
  }

  // calculate lab grades
  var lab_index = -1;
  for (let x = 2 * theory_len; x < 2 * theory_len + labs_len; x += 1) {
    total = parseFloat(form_inputs[x].value);

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

  result_div_template += `<div class="h2 mx-auto my-3 p-2 shadow-lg bg-success rounded-lg" 
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
  for (let x = 0; x < theory_len; x += 1) {
    result_div_template += `
      <tr>
      <th scope="row">${subjects["theory"][x]["name"]}</th>
      <td>${subjects["theory"][x]["grade"][0]}</td>
      <td>${subjects["theory"][x]["grade"][2]}</td>
      </tr>`;
  }

  // lab
  for (let x = 0; x < labs_len; x += 1) {
    result_div_template += `
      <tr>
      <th scope="row">${subjects["labs"][x]["name"]}</th>
      <td>${subjects["labs"][x]["grade"][0]}</td>
      <td>${subjects["labs"][x]["grade"][2]}</td>
      </tr>`;
  }

  // end
  result_div_template += "</tbody></table>";
  result_div.innerHTML += result_div_template;
};
