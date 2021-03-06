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
      $.each(self.students, function(index, student_data) {
        //$('#students').append('<li class="list-group-item">' + student_name + '</li>');
        //self.appendToList(student_name);
        var student = new Student();
        student.init(student_data);
        student.appendToList();
      });
    }
    catch(err) {
      return false;
    }
  };

  // this.appendToList = function(student_name) {
  //   // Grab the *template* list item from the page.
  //   var li = $('#list_item_template').clone();
  //   li.removeAttr('id')
  //     .addClass('student')
  //     .prepend(student_name)
  //     .removeClass('hidden');
  //   // Append an LI with the student name to the <ol>
  //   $('#students').append(li); //****could call a onclick listener here.****
  //
  // };

  this.addStudent = function(student_name) {
    var student = new Student();
    student.init({name: student_name});

    self.students.push(student);
    student.appendToList()
    //$('#students').append('<li class="list-group-item">' + student_name + '</li>');
    //self.appendToList(student_name);
    console.log(self.save());

  };

  this.init = function() {
    self.students = [];
    Student.counter = 0;
    self.load();


    $('#new_student_form').on('submit', function (ev) {
      ev.preventDefault();

      var student_name = $(this.student_name).val();

      self.addStudent(student_name);

      $(this.student_name)
        .val('')
        .focus();
    });

    $(document).on('click','button.delete', function(){
      var li = $(this).closest('li');
      // Remove it from the array
      var id = li.attr('data-id');
      .students.remove(id);
      // Remove it from the list
      li.remove();

      // Update localStorage

    });
  };

};

var roster = new Megaroster();
roster.init();
