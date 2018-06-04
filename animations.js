function forward(box, scene, position, jump)
{
  var animationBox = new BABYLON.Animation("myAnimation", "position", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
  var keys = [];

  keys.push({
    frame: 0,
    value: new BABYLON.Vector3(box.position.x, box.position.y, box.position.z)
  });

  keys.push({
    frame: 15,
    value: new BABYLON.Vector3(box.position.x, box.position.y+1, box.position.z-1)
  });

  keys.push({
    frame: 30,
      value: new BABYLON.Vector3(box.position.x, box.position.y+2, box.position.z-2)
  });

  keys.push({
    frame: 45,
    value: new BABYLON.Vector3(box.position.x, box.position.y+1, box.position.z-3)
  });
  keys.push({
    frame: 60,
    value: new BABYLON.Vector3(box.position.x, box.position.y, box.position.z-4)
  });


  animationBox.setKeys(keys);

  box.animations = [];
  box.animations.push(animationBox);

  scene.beginAnimation(box, 0, 60, false, 3, jump)
}

function back(box, scene, position, jump)
{
  var animationBox = new BABYLON.Animation("myAnimation", "position", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
  var keys = [];

  keys.push({
    frame: 0,
    value: new BABYLON.Vector3(box.position.x, box.position.y, box.position.z)
  });

  keys.push({
    frame: 15,
    value: new BABYLON.Vector3(box.position.x, box.position.y+1, box.position.z+1)
  });

  keys.push({
    frame: 30,
      value: new BABYLON.Vector3(box.position.x, box.position.y+2, box.position.z+2)
  });

  keys.push({
    frame: 45,
    value: new BABYLON.Vector3(box.position.x, box.position.y+1, box.position.z+3)
  });
  keys.push({
    frame: 60,
    value: new BABYLON.Vector3(box.position.x, box.position.y, box.position.z+4)
  });


  animationBox.setKeys(keys);

  box.animations = [];
  box.animations.push(animationBox);

  scene.beginAnimation(box, 0, 60, false, 3, jump)
}
