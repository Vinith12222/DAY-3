function(arr) {
    var titleCasedArray = arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  
    console.log(titleCasedArray)