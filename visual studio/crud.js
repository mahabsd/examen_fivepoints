var users = JSON.parse(localStorage.getItem('utilisateurs')) || [];
var add_user = new function () {
  document.getElementById("saveEdit").style.visibility = "hidden";

   // this.users = ['ali', 'hana', 'sami'];
    this.tbody = document.getElementById('users');

  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'user';
  
      if (data) {
        if (data > 1) {
          name = 'users';
        }
        el.innerHTML = data + ' ' + name ;
      } else {
        el.innerHTML = 'No ' + name;
      }
    };
    this.FetchAll = function () {
        var data = '';

        if (users.length > 0) {
            for (i = 0; i < users.length; i++) {
                data += '<tr>';
                data += '<td>' + users[i] + '</td>';
                data += '<td><button onclick="add_user.Edit(' + i + ')" id="edituser">Edit</button></td>';
                data += '<td><button onclick="add_user.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
      this.Count(users.length);
        return this.tbody.innerHTML = data;


    };

    this.add = function () {
       new_user = document.getElementById('new_user');
        // Get the value
        var user =new_user.value;

        if (user) {
            // Add the new value
            users.push(user.trim());
            localStorage.setItem('utilisateurs', JSON.stringify( users))

            // Reset input value
           new_user.value = '';
            // Dislay the new list
            this.FetchAll();
        }

    };

    this.Edit = function (item) {
        var el = document.getElementById('edit-name');
        // Display value in the field
        el.value = users[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
    
        document.getElementById('saveEdit').onsubmit = function() {
          // Get value
          var user = el.value;

          if (user) {
            // Edit value
            users.splice(item, 1, user.trim());
            // Display the new list
            localStorage.setItem('utilisateurs', JSON.stringify( users))

            self.FetchAll();
            // Hide fields
            CloseInput();
          }
        }
        demoVisibility();
        editVisibility();
    };
    this.Delete = function (item) {
        users.splice(item, 1);
        // Display the new list
        localStorage.setItem('utilisateurs', JSON.stringify( users))

        this.FetchAll();
    };


}
add_user.FetchAll();

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}



function demoVisibility() {
  document.getElementById("addvisibility").style.visibility = "hidden";
}
function editVisibility() {
  document.getElementById("saveEdit").style.visibility = "visible";

}
function addvisible(){
  document.getElementById("addvisibility").style.visibility = "visible";
  document.getElementById("saveEdit").style.visibility = "hidden";
}