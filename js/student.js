// var Student = function () {
//
//   function Student(name) {
//     this.name = name;
//
//   }
//   function setId(id) {
//     debugger;
//
//   }
//   return Student;
// }();

var Student = function() {
  var self = this;

  self.getOrSetId = function(id) {
    if (!id) {
      id = Student.counter + 1;
      self.incrementCounter(id);
    }

    return id;
  };

self.incrementCounter = function(id) {
  if (id > Student.counter) {
    Student.counter = id;
  }
};


  self.init = function(properties) {
    self.name = properties.name;
    self.id = self.getOrSetId(properties.id);

  };

  self.appendToList = function() {
    var li = $('#list_item_template').clone();
    li.removeAttr('id')
      .attr('data-id', self.id)
      .addClass('student')
      .prepend(self.name)
      .removeClass('hidden');
    // Append an LI with the student name to the <ol>
    $('#students').append(li);
  };
};

Student.getStudentById = function(id) {
  var student;
  $.each(roster.students, function(index, current_student){
    if (current_student.id.toString() === id.toString()) {
      stsident = current_student;
      return false;
    }
  });
  return student;

};

//Student.counter = 0;

// var s = new Student();
// s.init('Adriana');
