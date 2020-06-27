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
    return ["F", 4];
  }
};

grade_cse = () => {
  // clear result field
  result_div.innerHTML = "";

  var subject_index = -1;
  var subjects = [
    { name: "DBS", grade: ["-", -1, -1], credits: 3 },
    { name: "DAA", grade: ["-", -1, -1], credits: 4 },
    { name: "ES", grade: ["-", -1, -1], credits: 4 },
    { name: "FLAT", grade: ["-", -1, -1], credits: 3 },
    { name: "MATH", grade: ["-", -1, -1], credits: 3 },
    { name: "Algorithms Lab", grade: ["-", -1, -1], credits: 1 },
    { name: "Database Systems Lab", grade: ["-", -1, -1], credits: 2 },
    { name: "Embedded Systems Lab", grade: ["-", -1, -1], credits: 1 },
  ];

  /**
   * index | value
   * ------|--------------
   * 0     | dbs sessional
   * 1     | dbs assignment
   * 2     | daa sessional
   * 3     | daa assignment
   * 4     | es sessional
   * 5     | es sessional
   * 6     | flat sessional
   * 7     | flat sessional
   * 8     | math sessional
   * 9     | math sessional
   * 10    | daa lab
   * 11    | dbs lab
   * 12    | es lab
   * 13    | prev_gpa
   */

  let prev_gpa = parseFloat(form_inputs[13].value);

  // calculate theory grades
  for (let x = 0; x <= 9; x += 2) {
    sessional_score = parseFloat(form_inputs[x].value);
    assignment_score = parseFloat(form_inputs[x + 1].value);

    let IA = parseFloat(sessional_score + assignment_score); // max value 50
    let ES = parseFloat(0.5 * IA + 2.5 * prev_gpa); // max value 50
    let total = parseFloat(IA + ES); // max value 100

    subject_index++;
    subjects[subject_index]["grade"] = get_letter_grade(total);
  }

  // calculate lab grades
  for (let x = 10; x <= 12; x += 1) {
    total = parseFloat(form_inputs[x].value);
    subject_index++;
    subjects[subject_index]["grade"] = get_letter_grade(total);
  }

  // update total in page
  let final_grade = 0;
  let total_credits = 21;
  for (let x = 0; x < subjects.length; x += 1) {
    final_grade += parseFloat(subjects[x]["grade"][1]) * subjects[x]["credits"];
  }
  final_grade /= total_credits;

  subject_index = -1;
  result_div_template = `
  <div class="h2 mx-auto my-3 p-2 shadow-lg bg-success rounded-lg" 
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
      <tbody>
        <tr>
          <th scope="row">DBMS</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>
        </tr>
        <tr>
          <th scope="row">DAA</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">ES</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">FLAT</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">MATH</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">Algorithms Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">Database Systems Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">Embedded Systems Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
      </tbody>
    </table>`;

  result_div.innerHTML += result_div_template;
};

grade_ece = () => {
  // clear result field
  result_div.innerHTML = "";

  var subject_index = -1;
  var subjects = [
    { name: "EMW", grade: ["-", -1, -1], credits: 4 },
    { name: "LIC", grade: ["-", -1, -1], credits: 4 },
    { name: "VLSID", grade: ["-", -1, -1], credits: 4 },
    { name: "DSP", grade: ["-", -1, -1], credits: 3 },
    { name: "MATH", grade: ["-", -1, -1], credits: 3 },
    { name: "VLSI Lab", grade: ["-", -1, -1], credits: 1 },
    { name: "ECD Lab", grade: ["-", -1, -1], credits: 2 },
  ];

  if (document.getElementById("2-credits").checked) {
    subjects[6]["credits"] = 2;
  } else {
    subjects[6]["credits"] = 1;
  }

  /**
   * index | value
   * ------|--------------
   * 0     | emw sessional
   * 1     | emw assignment
   * 2     | lic sessional
   * 3     | lic assignment
   * 4     | vlsid sessional
   * 5     | vlsid sessional
   * 6     | dsp sessional
   * 7     | dsp sessional
   * 8     | math sessional
   * 9     | math sessional
   * 10    | vlsi lab
   * 11    | ecd lab
   * 12    | prev_gpa
   */

  let prev_gpa = parseFloat(form_inputs[14].value);

  // calculate theory grades
  for (let x = 0; x <= 9; x += 2) {
    sessional_score = parseFloat(form_inputs[x].value);
    assignment_score = parseFloat(form_inputs[x + 1].value);

    let IA = parseFloat(sessional_score + assignment_score); // max value 50
    let ES = parseFloat(0.5 * IA + 2.5 * prev_gpa); // max value 50
    let total = parseFloat(IA + ES); // max value 100

    subject_index++;
    subjects[subject_index]["grade"] = get_letter_grade(total);
  }

  // calculate lab grades
  for (let x = 10; x <= 11; x += 1) {
    total = parseFloat(form_inputs[x].value);
    subject_index++;
    subjects[subject_index]["grade"] = get_letter_grade(total);
  }

  // update total in page
  let final_grade = 0;
  let total_credits = 21;
  for (let x = 0; x < subjects.length; x += 1) {
    final_grade += parseFloat(subjects[x]["grade"][1]) * subjects[x]["credits"];
  }
  final_grade /= total_credits;

  subject_index = -1;
  result_div_template = `
  <div class="h2 mx-auto my-3 p-2 shadow-lg bg-success rounded-lg" 
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
      <tbody>
        <tr>
          <th scope="row">EMW</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>
        </tr>
        <tr>
          <th scope="row">LIC</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">VLSID</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">DSP</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">MATH</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">VLSI Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">ECD Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
      </tbody>
    </table>`;

  result_div.innerHTML += result_div_template;
};

grade_cce = () => {
  // clear result field
  result_div.innerHTML = "";

  var subject_index = -1;
  var subjects = [
    { name: "DAA", grade: ["-", -1, -1], credits: 4 },
    { name: "OS", grade: ["-", -1, -1], credits: 4 },
    { name: "DBS", grade: ["-", -1, -1], credits: 3 },
    { name: "CNP", grade: ["-", -1, -1], credits: 4 },
    { name: "MATH", grade: ["-", -1, -1], credits: 3 },
    { name: "Algorithms Lab", grade: ["-", -1, -1], credits: 1 },
    { name: "Operating Systems Lab", grade: ["-", -1, -1], credits: 1 },
    { name: "Database Systems Lab", grade: ["-", -1, -1], credits: 1 },
  ];

  /**
   * index | value
   * ------|--------------
   * 0     | daa sessional
   * 1     | daa assignment
   * 2     | os sessional
   * 3     | os assignment
   * 4     | dbs sessional
   * 5     | dbs sessional
   * 6     | cnp sessional
   * 7     | cnp sessional
   * 8     | math sessional
   * 9     | math sessional
   * 10    | algorithms lab
   * 11    | operating systems lab
   * 12    | database systems lab
   * 13    | prev_gpa
   */

  let prev_gpa = parseFloat(form_inputs[13].value);

  // calculate theory grades
  for (let x = 0; x <= 9; x += 2) {
    sessional_score = parseFloat(form_inputs[x].value);
    assignment_score = parseFloat(form_inputs[x + 1].value);

    let IA = parseFloat(sessional_score + assignment_score); // max value 50
    let ES = parseFloat(0.5 * IA + 2.5 * prev_gpa); // max value 50
    let total = parseFloat(IA + ES); // max value 100

    subject_index++;
    subjects[subject_index]["grade"] = get_letter_grade(total);
  }

  // calculate lab grades
  for (let x = 10; x <= 12; x += 1) {
    total = parseFloat(form_inputs[x].value);
    subject_index++;
    subjects[subject_index]["grade"] = get_letter_grade(total);
  }

  // update total in page
  let final_grade = 0;
  let total_credits = 21;
  for (let x = 0; x < subjects.length; x += 1) {
    final_grade += parseFloat(subjects[x]["grade"][1]) * subjects[x]["credits"];
  }
  final_grade /= total_credits;

  subject_index = -1;
  result_div_template = `
  <div class="h2 mx-auto my-3 p-2 shadow-lg bg-success rounded-lg" 
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
      <tbody>
        <tr>
          <th scope="row">DAA</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>
        </tr>
        <tr>
          <th scope="row">OS</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">DBS</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">CNP</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">MATH</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">Algorithms Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">Operating Systems Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
        <tr>
          <th scope="row">Database Systems Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
          <td>${subjects[subject_index]["grade"][2]}</td>

        </tr>
      </tbody>
    </table>`;

  result_div.innerHTML += result_div_template;
};