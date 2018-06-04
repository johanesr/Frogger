function GroundTexture(scene){
  var mat = new BABYLON.StandardMaterial("mat", scene);
  mat.diffuseTexture = new BABYLON.Texture("assets/ground.jpg", scene);
  mat.specularPower = 25
  mat.ambientColor = new BABYLON.Color3(0.23,1.25,0.48);
  mat.alpha = 0.75;

  return mat;
}
