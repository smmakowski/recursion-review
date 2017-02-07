// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var results = [];

  function checkNode(node) {

    if (node.classList !== undefined && node.classList.contains(className)) {
      results.push(node)
    }

    if (node.hasChildNodes()) {
      for (var i = 0; i < node.childNodes.length; i++){
        checkNode(node.childNodes[i]);
      }
    }

  }

  checkNode(document.body)

  return results;
};
