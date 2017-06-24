$(document).ready(function() {
  //console.log("Hello");

  var num1 = "";

  $("#negate").html("ON");

  var status = "OFF";

  var flag = 0;

  var ans = 0.0;

  $("#output").html("");
  
  $("#n1").click(function() {
    if (status === "OFF") return;

    if (flag === 1) {
      num1 = "1";
      $("#output").html("1");
      flag = 0;
      return;
    }
    num1 = num1 + "1";
    $("#output").html("" + num1);
  });

  $("#n2").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "2";
      flag = 0;
      $("#output").html("2");
      return;
    }
    num1 = num1 + "2";
    $("#output").html("" + num1);
  });

  $("#n3").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "3";
      flag = 0;
      $("#output").html("3");
      return;
    }
    num1 = num1 + "3";
    $("#output").html("" + num1);
  });

  $("#n4").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "4";
      flag = 0;
      $("#output").html("4");
      return;
    }
    num1 = num1 + "4";
    $("#output").html("" + num1);
  });

  $("#n5").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "5";
      flag = 0;
      $("#output").html("5");
      return;
    }
    num1 = num1 + "5";
    $("#output").html("" + num1);
  });

  $("#n6").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "6";
      flag = 0;
      $("#output").html("6");
      return;
    }
    num1 = num1 + "6";
    $("#output").html("" + num1);
  });
  $("#n7").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "7";
      flag = 0;
      $("#output").html("7");
      return;
    }
    num1 = num1 + "7";
    $("#output").html("" + num1);
  });

  $("#n8").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "8";
      flag = 0;
      $("#output").html("8");
      return;
    }
    num1 = num1 + "8";
    $("#output").html("" + num1);
  });

  $("#n9").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "9";
      flag = 0;
      $("#output").html("9");
      return;
    }
    num1 = num1 + "9";
    $("#output").html("" + num1);
    console.log(num1);
  });

  $("#n0").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "0";
      flag = 0;
      $("#output").html("0");
      return;
    }
    num1 = num1 + "0";
    $("#output").html("" + num1);
  });

  $("#n00").click(function() {
    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "0";
      flag = 0;
      $("#output").html("0");
      return;
    }
    num1 = num1 + "00";
    $("#output").html("" + num1);
  });
  var temp = "";
  $("#dot").click(function() {
    temp = num1;

    if (status === "OFF") return;
    if (flag === 1) {
      num1 = "0";
      flag = 0;
      $("#output").html("0");
      return;
    }

    if (num1 !== "") {
      // if(num1.indexOf(".") === -1 )
      num1 = num1 + ".";
      //  $("#output").html(""+num1);
      //  return;
      num1 = num1.replace(/\.\./i, ".");

      if (num1.search(/\d+\.\d+\w*\./g) >= 0) num1 = temp;
    } else {
      num1 += "0.";
      $("#output").html("" + num1);
      return;
    }

    $("#output").html("" + num1);
  });

  $("#div").click(function() {
    if (status === "OFF") return;

    num1 += "/";
    flag = 0;
    $("#output").html("/");
    // oprnd1 = parseFloat(num1);
  });

  $("#mul").click(function() {
    if (status === "OFF") return;
    flag = 0;

    num1 += "*";
    $("#output").html("*");
    //  oprnd1 = parseFloat(num1);
    //  num1 = "";
    // console.log(num1);
  });

  $("#add").click(function() {
    if (status === "OFF") return;
    flag = 0;

    num1 += "+";
    $("#output").html("+");
    // oprnd1 = parseFloat(num1);
    //  num1 = "";
    // console.log(num1);
  });

  $("#sub").click(function() {
    if (status === "OFF") return;
    flag = 0;
    oprtr = "-";
    num1 += "-";
    $("#output").html("-");
    // oprnd1 = parseFloat(num1);
    //num1 = "";
    // console.log(num1);
  });

  $("#eq").click(function() {
    if (status === "OFF") return;
    if (num1 === "") {
      $("#output").html(ans);
      oprtr = "";
      return;
    }

    ans = eval(num1);
    if (ans % 1 !== 0) {
      ans = ans.toFixed(3);
    }
    $("#output").html(ans);
    num1 = "" + ans;
    flag = 1;
  });

  $("#clearfull").click(function() {
    if (status === "OFF") return;

    ans = 0.0;
    num1 = "";

    flag = 0;

    $("#output").html("0");

    console.log(oprnd1);
  });

  $("#clearinput").click(function() {
    if (status === "OFF") return;

    if (num1 === "") return;

    num1 = num1.substring(0, num1.length - 1);
    $("#output").html("" + num1);

    //  num1 = "0";
    // console.log(num1);
  });

  $("#negate").click(function() {
 
    if (status === "OFF") {
      $("#output").html("0");
      num1 = "";
      $("#negate").html("OFF");
      status = "ON";
    } else {
      $("#output").html("");
      num1 = "";
      $("#negate").html("ON");
      status = "OFF";
    }

   
  });
});