var recipes = {}

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({prop:1}, {prop2:2})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return object.key = ({prop:1, prop2:2})
}
