// var Megatask = {
//   "author": "G",
//   //newStudentForm: document.getElementById('new_student_form'),
//   newStudentForm: $('#new_student_form'),
//   "submitHandler": function(ev) {
//     debugger;
//     alert('Whaaaaat?');
//   },
//   start: function(){
//     this.newStudentForm.submit(this.submitHandler);
//   }
// };
//
// Megatask.start();
//
// var foods = {
//   fruits:  ['apples', 'oranges', 'bananas'],
//   veggies: ['broccoli', 'celery', 'kale'],
//   favorite: 'spaghetti'
// };

// var Megaroster = function Megaroster() {
//   function Megaroster() {
//     debugger;
//     this.students = [];
//
//   }
//   return Megaroster;
// }();
//
// var roster = new Megaroster();

var Megaroster = function() {
  var self = this;

  this.save = function() {
      try {
        return (localStorage.students = JSON.stringify(self.students));
      }
      catch(err) {
        return false;
      }
  };

  this.load = function() {
    try {
      self.students = JSON.parse(localStorage.students);
      $.each(self.students, function(index, student_name) {
        $('#students').append('<li class="list-group-item">' + student_name + '</li>');
      });
    }
    catch(err) {
      return false;
    }
  };

  this.appendToList = function() {

  };

  this.addStudent = function(student_name) {
    self.students.push(student_name);
    $('#students').append('<li class="list-group-item">' + student_name + '</li>');
    console.log(self.save());
  };



  this.init = function(ev) {

    this.students = [];
    self.load();
    $('#new_student_form').on('submit', function(ev) {
      //console.log("Students: " + self.students.length);
      ev.preventDefault();
      var student_name = $(this.student_name).val();

      self.addStudent(student_name);
      // Push the student name onto the students array
      // Use console.log to prove that the array has a new student
      //  self.students.push(student_name);
      //$('#students').empty();
    //   for (i = 0; i < self.students.length; i++){
    //     $('#students').append('<li>' + self.students[i] + '</li>');
    //
    // }
      //  $('#students').append('<li class="list-group-item">' + student_name + '</li>');
      $(this.student_name)
        .val('')
        .focus();
      console.log(self.students);
      
    });

  };


};

var roster = new Megaroster();
roster.init()
