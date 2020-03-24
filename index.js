var recipies = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign( {}, object, { [key]: value });
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.key = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object);
  delete newObject.key;
  return newObject;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}

//Objects
//    updateObjectWithKeyAndValue(object, key, value)
  //    1) returns an object with the orignal key value pairs and the new key value pair
  //    2) does not modify the original object, but rather returns a clone with the new data
  //    3) returns an object with an updated key value pair
  //  destructivelyUpdateObjectWithKeyAndValue(object, key, value)
  //    4) updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
    //deleteFromObjectByKey(object, key)
  //    5) deletes `key` from a clone of object and returns the new object (it isnon-destructive)
  //    6) does not modify the original object (it is non-destructive)
  //  destructivelyDeleteFromObjectByKey(object, key)
  //    7) returns object without the delete key/value pair
  //    8) modifies the original object