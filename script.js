function calculateResult() {
    const name = document.getElementById('name').value;
    const english = parseFloat(document.getElementById('english').value) || 0;
    const urdu = parseFloat(document.getElementById('urdu').value) || 0;
    const mathBio = parseFloat(document.getElementById('math-bio').value) || 0;
    const chemistry = parseFloat(document.getElementById('chemistry').value) || 0;
    const physics = parseFloat(document.getElementById('physics').value) || 0;
    const islPst = parseFloat(document.getElementById('isl-pst').value) || 0;
    const totalMarks = parseFloat(document.getElementById('total').value);
  
    if (!name || !totalMarks) {
      alert('Please enter your name and total marks.');
      return;
    }
  
    const subjects = {
      English: english,
      Urdu: urdu,
      'Math/Bio': mathBio,
      Chemistry: chemistry,
      Physics: physics,
      'Isl/PST': islPst
    };
  
    let obtainedMarks = english + urdu + mathBio + chemistry + physics + islPst;
    let percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);
    let grade;
  
    if (percentage >= 85) grade = 'A+';
    else if (percentage >= 75) grade = 'A';
    else if (percentage >= 65) grade = 'B';
    else if (percentage >= 50) grade = 'C';
    else if (percentage >= 49) grade = 'D';
    else grade = 'F';
  
    document.getElementById('student-name').innerText = name;
    document.getElementById('total-obtained').innerText = obtainedMarks;
    document.getElementById('percentage').innerText = percentage;
    document.getElementById('grade').innerText = grade;
  
    const marksList = document.getElementById('marks-list');
    marksList.innerHTML = '';
    for (const subject in subjects) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${subject}:</strong> ${subjects[subject]}`;
      marksList.appendChild(li);
    }
  
    document.getElementById('report-card').classList.remove('hidden');
  }
  