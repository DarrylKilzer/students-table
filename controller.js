function Controller() {
  //what is the first thing I need to do in a controller?

  //what does this function do, does it need to take in anything?
  this.addStudent = function() {
  
  };

  function drawStudents() {
    //how do i get the students?

    //this is the start of our table template
    var template = `
    <h2>Students</h2>

    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    `;
    
    //We need to add an entry to our template for each student
      template += `
      <tr>
        <td>Name</td>
        <td>Email</td>
      </tr>
      `;

      //this is added at the very end
      // of our template to finish our table
    template += "</table>"

  //I have my template built, now what?
  }

  //this wont work just yet
  //drawStudents()
}
