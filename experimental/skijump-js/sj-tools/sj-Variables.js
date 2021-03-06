
// Default values for Earth
SJ.V = {
  jumperFriction: 0.0065,
  jumperAngularFriction: 0.96,
  jumperJumpForce: 5.1,
  jumperTurnForce: 0.2,
  goodLandingAngle: 40, // in degrees

  texturesNames: {},

  PIXELS_TO_METERS: 0.03,
  POINTS_PER_METER: 3,
};

SJ.loadVariablesFromFile = (fileName, callBack) => {
  loadJSON('skijump-js/sj-locations/' + fileName, (v) => {
    SJ.V.padSize = v.padSize;
    SJ.V.padScale = v.padScale || 1.0;
    SJ.V.textureOffset = v.textureOffset || { x: 0, y: 0 };
    SJ.V.minJumpDistance = v.minJumpDistance;
    SJ.V.maxJumpDistance = v.maxJumpDistance;
    SJ.V.airFriction = v.airFriction;
    SJ.V.padFriction = v.padFriction;
    SJ.V.airDensity = v.airDensity;
    SJ.V.airRotateForce = v.airRotateForce;
    SJ.V.airMinForce = v.airMinForce;
    SJ.V.airMaxForce = v.airMaxForce;
    SJ.V.airDynamics = v.airDynamics;
    SJ.V.gravity = v.gravity;
    SJ.V.texturesNames.pad = v.texturesNames.pad;
    SJ.V.texturesNames.foreground = v.texturesNames.foreground || null;
    SJ.V.texturesNames.middleground = v.texturesNames.middleground || null;
    SJ.V.texturesNames.background = v.texturesNames.background;
    SJ.V.screenLayer = v.screenLayer || [];
    SJ.V.cameraTopPath = v.cameraTopPath;
    SJ.V.cameraBottomPath = v.cameraBottomPath;
    SJ.V.jumpStartPoint = v.jumpStartPoint;
    SJ.V.padPullingPoints = v.padPullingPoints;
    SJ.V.padCollisionPoints = v.padCollisionPoints;
    SJ.V.jumperPosition = v.jumperPosition || { x: 213.0, y: 334.0 };
    SJ.V.pointK = v.pointK;
    SJ.V.jumpEndPoint = v.padPullingPoints[v.padPullingPoints.length-1].x;
    SJ.V.minCameraPosition = v.minCameraPosition;
    SJ.V.cameraScale = v.cameraScale || 1;

    callBack();
  });
}