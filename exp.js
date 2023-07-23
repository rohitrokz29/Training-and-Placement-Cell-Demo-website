const studentsData=JSON.parse(localStorage.getItem("studentsData"));

let stud_reg = document.querySelector('#student-registration');
let reg = document.querySelector('#register-stud');
reg.addEventListener('click', async (e) => {
    e.preventDefault();
    let formData = new FormData(stud_reg);
    let data = {};
    [...formData.entries()].forEach(element => {
        data[element[0]] = element[1];
    });
    data["form_type"] = "student";
    studentsData.push(data);
    localStorage.setItem("studentsData",studentsData);
    localStorage.setItem("newStud",data);
    window.location.href="/pages/studentProfile.html";

})
