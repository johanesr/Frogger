function createMat(scene)
{
  var mat = new BABYLON.StandardMaterial("material",scene);

  //scene.ambientColor = new BABYLON.Color3(1, 1, 1);
  //mat.diffuseTexture = new BABYLON.Texture("grass.jpg",scene);
  mat.diffuseColor = new BABYLON.Color3(1,0,1);
  mat.specularColor = new BABYLON.Color3(0, 1, 0);
  mat.specularPower = 25;
  //mat.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
  mat.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.98);
  mat.alpha =1;

  return mat;
}
