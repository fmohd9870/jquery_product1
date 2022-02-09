var a = [];
$(document).ready(function () {
  $("#add").click(function () {
    var arr = [];
    if (a.length == 0) {
      fun();
    } else {
      for (var j = 0; j < a.length; j++) {
        arr += a[j].id;
      }
      if (arr.includes($("#id").val())) {
        alert("please insert unique value");
      } else {
        fun();
        console.log("function stop");
      }
    }
  });
  $("body").on("click", "edit", function () {
    edit();
  });
  $("#success-btn").click(function () {
    $(".success").css("display", "none");
  });
  $("#error-btn").click(function () {
    $(".error").css("display", "none");
  });
});

function fun() {
  var id = $("#id").val();
  var name = $("#name").val();
  var price = $("#price").val();
  var quantity = $("#quantity").val();
  if (id == "" || name == "" || price == "") {
    alert("please insert all the values");
  } else {
    var b = { id: id, name: name, price: price, quantity: quantity };
    a.push(b);
    $(".success").css("display", "block");
  }

  display();
}

function display() {
  var temp = "";
  for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
    console.log(a.length);
    if (a.length !== 0) {
      temp +=
        "<tr><td>" +
        a[i].id +
        "</td><td>" +
        a[i].name +
        "</td><td>" +
        a[i].price +
        "</td><td>" +
        a[i].quantity +
        "</td><td><input type='button' Value='Edit' onclick='edit(" +
        a[i].id +
        ',"' +
        a[i].name +
        '",' +
        a[i].price +
        "," +
        a[i].quantity +
        ")'><input type='button' Value='Delete' onclick='del(" +
        a[i].id +
        ")'></td></tr>";
    }
    $("#id").val("");
    $("#name").val("");
    $("#price").val("");
    $("#quantity").val("");
    console.log(a);
    $("#table_body").html(temp);
  }
}
function edit(pid, pname, pprice, quantity) {
  $("#id").val(pid);
  $("#name").val(pname);
  $("#price").val(pprice);
  $("#quantity").val(quantity);
  $("#id").prop("disabled", true);
  $("#add").css("display", "none");
  $("#edit").css("display", "block");
}
function update(pid, pname, pprice, quantity) {
  for (var i = 0; i < a.length; i++) {
    if (a[i].id == $("#id").val()) {
      console.log(a[i].name);
      a[i].name = $("#name").val();
      console.log(a[i].name);
      a[i].price = $("#price").val();
      a[i].quantity = $("#quantity").val();
      console.log(a[i].price);
    }
  }
  $("#id").prop("disabled", false);
  $("#add").css("display", "block");
  $("#edit").css("display", "none");
  display();
  console.log("end for");
}
function del(pid) {
  arr = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i].id == pid) {
      if (confirm("Are You Sure, You want to delete?") == true) {
        a.splice(i, 1);
        display();
        $(".error").css("display", "block");
        console.log("element deleted");
        if (a.length == 0) {
          $("#table_body").html("");
        }
      } else {
        display();
      }

      console.log(a.length);
    }
  }
}
