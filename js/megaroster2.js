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
        //$('#students').append('<li class="list-group-item">' + student_name + '</li>');
        self.appendToList(student_name);
      });
    }
    catch(err) {
      return false;
    }
  };

  this.appendToList = function(student_name) {
    // Grab the *template* list item from the page.
    var li = $('#list_item_template').clone();
    li.removeAttr('id')
      .addClass('student')
      .prepend(student_name)
      .removeClass('hidden');
    // Append an LI with the student name to the <ol>
    $('#students').append(li); //****could call a onclick listener here.****

  };

  this.addStudent = function(student_name) {
    self.students.push(student_name);
    //$('#students').append('<li class="list-group-item">' + student_name + '</li>');
    self.appendToList(student_name);
    console.log(self.save());

  };

  this.init = function() {
    self.students = [];
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
      // Remove it from the array

      // Remove it from the list
      $(this).closest('li').remove();

      // Update localStorage

    });
  };

};

var roster = new Megaroster();
roster.init();
