var result_div = document.getElementById("result");
var marks_form = document.getElementById("marks");
var form_inputs = document.forms["marks"].getElementsByTagName("input");

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
  cse: {
    theory: [
      { name: "DBS", grade: ["-", -1, -1], credits: 3 },
      { name: "DAA", grade: ["-", -1, -1], credits: 4 },
      { name: "ES", grade: ["-", -1, -1], credits: 4 },
      { name: "FLAT", grade: ["-", -1, -1], credits: 3 },
      { name: "MATH", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      { name: "Algorithms Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "Database Systems Lab", grade: ["-", -1, -1], credits: 2 },
      { name: "Embedded Systems Lab", grade: ["-", -1, -1], credits: 1 },
    ],

    total_credits: 21,
  },

  ece: {
    theory: [
      { name: "EMW", grade: ["-", -1, -1], credits: 4 },
      { name: "LIC", grade: ["-", -1, -1], credits: 4 },
      { name: "VLSID", grade: ["-", -1, -1], credits: 4 },
      { name: "DSP", grade: ["-", -1, -1], credits: 3 },
      { name: "MATH", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      { name: "VLSI Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "ECD Lab", grade: ["-", -1, -1], credits: 2 },
    ],

    total_credits: 21,
  },

  cce: {
    theory: [
      { name: "DAA", grade: ["-", -1, -1], credits: 4 },
      { name: "OS", grade: ["-", -1, -1], credits: 4 },
      { name: "DBS", grade: ["-", -1, -1], credits: 3 },
      { name: "CNP", grade: ["-", -1, -1], credits: 4 },
      { name: "MATH", grade: ["-", -1, -1], credits: 3 },
    ],

    labs: [
      { name: "Algorithms Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "Operating Systems Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "Database Systems Lab", grade: ["-", -1, -1], credits: 1 },
    ],

    total_credits: 21,
  },

  it: {
    theory: [
      { name: "CNP", grade: ["-", -1, -1], credits: 4 },
      { name: "OS", grade: ["-", -1, -1], credits: 4 },
      { name: "DAA", grade: ["-", -1, -1], credits: 4 },
      { name: "COMP", grade: ["-", -1, -1], credits: 3 },
      { name: "MATH", grade: ["-", -1, -1], credits: 3 },
    ],
    labs: [
      { name: "OS Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "COMP Lab", grade: ["-", -1, -1], credits: 1 },
      { name: "DAA Lab", grade: ["-", -1, -1], credits: 1 },
    ],

    total_credits: 21,
  },

  aero: {
    theory: [
      { name: "Aerodynamics", grade: ["-", -1, -1], credits: 4 },
      { name: "Aircraft Propulsion", grade: ["-", -1, -1], credits: 4 },
      { name: "Flight Mechanics", grade: ["-", -1, -1], credits: 3 },
      { name: "Linear Control Theory", grade: ["-", -1, -1], credits: 4 },
      { name: "MATH", grade: ["-", -1, -1], credits: 3 },
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
};

grade = (branch) => {
  // clear result field
  result_div.innerHTML = "";

  var subjects = branches[branch];
  var theory_len = subjects["theory"].length;
  var labs_len = subjects["labs"].length;
  var total_len = theory_len + labs_len;
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

    console.log(total);

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
