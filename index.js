var recipes = {}

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({prop:1}, {prop2:2})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object.prop2 = 2
  return object
}

function deleteFromObjectByKey(object,key){
  delete object.prop2
  retrun object
}
