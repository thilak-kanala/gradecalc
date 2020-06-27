var result_div = document.getElementById("result");
var marks_form = document.getElementById("marks");
var form_inputs = document.forms["marks"].getElementsByTagName("input");

get_letter_grade = (total) => {
  if (total >= 90 && total <= 100) {
    return ["A+", 10];
  } else if (total >= 80 && total < 89) {
    return ["A", 9];
  } else if (total >= 70 && total < 79) {
    return ["B", 8];
  } else if (total >= 60 && total < 69) {
    return ["C", 7];
  } else if (total >= 50 && total < 59) {
    return ["D", 6];
  } else if (total >= 40 && total < 49) {
    return ["E", 5];
  } else {
    return ["F", 4];
  }
};

grade = () => {
  // testing
  // for (let x = 0; x < form_inputs.length; x += 1) {
  //     form_inputs[x].value = 0;
  // }

  // clear result field
  result_div.innerHTML = "";

  console.log("1");

  // var subjects = [
  //   { DBS: 42 },
  //   { DAA: 42 },
  //   { ES: 42 },
  //   { FLAT: 42 },
  //   { MATH: 42 },
  //   { "Algorithms Lab": 42 },
  //   { "Database Systems Lab": 42 },
  //   { "Embedded Systems Lab": 42 },
  // ];

  var subject_index = -1;
  var subjects = [
    { name: "DBS", grade: ["-", -1], credits: 3 },
    { name: "DAA", grade: ["-", -1], credits: 4 },
    { name: "ES", grade: ["-", -1], credits: 4 },
    { name: "FLAT", grade: ["-", -1], credits: 3 },
    { name: "MATH", grade: ["-", -1], credits: 3 },
    { name: "Algorithms Lab", grade: ["-", -1], credits: 1 },
    { name: "Database Systems Lab", grade: ["-", -1], credits: 2 },
    { name: "Embedded Systems Lab", grade: ["-", -1], credits: 1 },
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

    let IA = sessional_score + assignment_score; // max value 50
    let ES = (0.5 * IA) + (2.5 * prev_gpa); // max value 50
    let total = IA + ES; // max value 100

    subject_index++;
    subjects[subject_index]["grade"] = get_letter_grade(total);
  }

  // calculate lab grades
  for (let x = 10; x < 13; x += 1) {
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
    GPA : ${ final_grade.toFixed(2) }
  </div>
  <table class="table table-striped table-borderless text-light">
      <thead>
        <tr>
          <th scope="col text-right"><u>Subject</u></th>
          <th scope="col"><u>Grade</u></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">DBMS</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
        </tr>
        <tr>
          <th scope="row">DAA</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
        </tr>
        <tr>
          <th scope="row">ES</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
        </tr>
        <tr>
          <th scope="row">FLAT</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
        </tr>
        <tr>
          <th scope="row">MATH</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
        </tr>
        <tr>
          <th scope="row">Algorithms Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
        </tr>
        <tr>
          <th scope="row">Database Systems Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
        </tr>
        <tr>
          <th scope="row">Embedded Systems Lab</th>
          <td>${subjects[++subject_index]["grade"][0]}</td>
        </tr>
      </tbody>
    </table>`;

  result_div.innerHTML += result_div_template;
};

// document.getElementById('submit').addEventListener("click", theory_grade());
