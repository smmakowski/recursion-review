// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

// use recursive descent parser
var parseJSON = function(json) {
  json = json.replace(' ', '');
  
  //array handler
  if (json.charAt(0) === '[') {
    var contents = json.slice(1, json.length-1);
    var arr = [];
    if (contents.length === 0){
      return [];
    } else {
      // figure it out
    }
  } else if (json.charAt(0) === '{') {
    var content = json.slice(1, json.length-1);
    if (content.length === 0) {
      return {};
    } else {
      return content.split(',').reduce(function(acc, e){
      var tuple = e.split(':');

      acc[tuple[0]] = tuple[1];
    }, {});
    }
  }




  }







 

  //handle arrays

  //handle objects

  //handle functions
   //handle primitive
   // strings are in ""'s

   //not weird primitves
   //true false numbers null undefined




   return results;
};
