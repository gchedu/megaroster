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

  self.init = function(name) {
    self.name = name;
  };

  self.appendToList = function() { 
    var li = $('#list_item_template').clone();
    li.removeAttr('id')
      .addClass('student')
      .prepend(self.name)
      .removeClass('hidden');
    // Append an LI with the student name to the <ol>
    $('#students').append(li);
  }

};

var s = new Student();
s.init('Adriana');
