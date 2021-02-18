gdjs.Main_32ScreenCode = {};
gdjs.Main_32ScreenCode.GDCloudObjects1= [];
gdjs.Main_32ScreenCode.GDCloudObjects2= [];
gdjs.Main_32ScreenCode.GDPlayerObjects1= [];
gdjs.Main_32ScreenCode.GDPlayerObjects2= [];
gdjs.Main_32ScreenCode.GDGrassPlatObjects1= [];
gdjs.Main_32ScreenCode.GDGrassPlatObjects2= [];
gdjs.Main_32ScreenCode.GDBridgeObjects1= [];
gdjs.Main_32ScreenCode.GDBridgeObjects2= [];
gdjs.Main_32ScreenCode.GDCoinObjects1= [];
gdjs.Main_32ScreenCode.GDCoinObjects2= [];
gdjs.Main_32ScreenCode.GDScoreObjects1= [];
gdjs.Main_32ScreenCode.GDScoreObjects2= [];
gdjs.Main_32ScreenCode.GDSlimeObjects1= [];
gdjs.Main_32ScreenCode.GDSlimeObjects2= [];
gdjs.Main_32ScreenCode.GDLeftObjects1= [];
gdjs.Main_32ScreenCode.GDLeftObjects2= [];
gdjs.Main_32ScreenCode.GDRightObjects1= [];
gdjs.Main_32ScreenCode.GDRightObjects2= [];
gdjs.Main_32ScreenCode.GDCheckpointObjects1= [];
gdjs.Main_32ScreenCode.GDCheckpointObjects2= [];

gdjs.Main_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Main_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32ScreenCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Main_32ScreenCode.GDPlayerObjects1});gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Main_32ScreenCode.GDCoinObjects1});gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Main_32ScreenCode.GDSlimeObjects1});gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Main_32ScreenCode.GDLeftObjects1});gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Main_32ScreenCode.GDSlimeObjects1});gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Main_32ScreenCode.GDRightObjects1});gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Main_32ScreenCode.GDPlayerObjects1});gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Main_32ScreenCode.GDSlimeObjects1});gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Main_32ScreenCode.GDPlayerObjects1});gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Main_32ScreenCode.GDSlimeObjects1});gdjs.Main_32ScreenCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32ScreenCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Main_32ScreenCode.GDPlayerObjects1.length !== 0 ? gdjs.Main_32ScreenCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32ScreenCode.GDPlayerObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Main_32ScreenCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32ScreenCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32ScreenCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Main_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Main_32ScreenCode.GDPlayerObjects1[k] = gdjs.Main_32ScreenCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32ScreenCode.GDPlayerObjects1.length = k;}if ( gdjs.Main_32ScreenCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32ScreenCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Main_32ScreenCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Main_32ScreenCode.condition1IsTrue_0.val = true;
        gdjs.Main_32ScreenCode.GDPlayerObjects1[k] = gdjs.Main_32ScreenCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32ScreenCode.GDPlayerObjects1.length = k;}}
if (gdjs.Main_32ScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32ScreenCode.GDPlayerObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32ScreenCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32ScreenCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Main_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Main_32ScreenCode.GDPlayerObjects1[k] = gdjs.Main_32ScreenCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32ScreenCode.GDPlayerObjects1.length = k;}if (gdjs.Main_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32ScreenCode.GDPlayerObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Main_32ScreenCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32ScreenCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32ScreenCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Main_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Main_32ScreenCode.GDPlayerObjects1[k] = gdjs.Main_32ScreenCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32ScreenCode.GDPlayerObjects1.length = k;}if ( gdjs.Main_32ScreenCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32ScreenCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32ScreenCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Main_32ScreenCode.condition1IsTrue_0.val = true;
        gdjs.Main_32ScreenCode.GDPlayerObjects1[k] = gdjs.Main_32ScreenCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32ScreenCode.GDPlayerObjects1.length = k;}}
if (gdjs.Main_32ScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Main_32ScreenCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32ScreenCode.GDPlayerObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDPlayerObjects1Objects, gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.Main_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Main_32ScreenCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Main_32ScreenCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Main_32ScreenCode.GDSlimeObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32ScreenCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Main_32ScreenCode.GDSlimeObjects1[i].getVariableString(gdjs.Main_32ScreenCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Main_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Main_32ScreenCode.GDSlimeObjects1[k] = gdjs.Main_32ScreenCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Main_32ScreenCode.GDSlimeObjects1.length = k;}if (gdjs.Main_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Main_32ScreenCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Main_32ScreenCode.GDSlimeObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDSlimeObjects1Objects, gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Main_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDSlimeObjects1[i].returnVariable(gdjs.Main_32ScreenCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Main_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDSlimeObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Main_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Main_32ScreenCode.GDRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Main_32ScreenCode.GDSlimeObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDSlimeObjects1Objects, gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.Main_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDSlimeObjects1[i].returnVariable(gdjs.Main_32ScreenCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Main_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDSlimeObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Main_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Main_32ScreenCode.GDSlimeObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32ScreenCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Main_32ScreenCode.GDSlimeObjects1[i].getVariableString(gdjs.Main_32ScreenCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Main_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Main_32ScreenCode.GDSlimeObjects1[k] = gdjs.Main_32ScreenCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Main_32ScreenCode.GDSlimeObjects1.length = k;}if (gdjs.Main_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{


gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Main_32ScreenCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Main_32ScreenCode.GDRightObjects1);
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32ScreenCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDRightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32ScreenCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Main_32ScreenCode.GDSlimeObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Main_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDPlayerObjects1Objects, gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Main_32ScreenCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32ScreenCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32ScreenCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Main_32ScreenCode.condition1IsTrue_0.val = true;
        gdjs.Main_32ScreenCode.GDPlayerObjects1[k] = gdjs.Main_32ScreenCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32ScreenCode.GDPlayerObjects1.length = k;}}
if (gdjs.Main_32ScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32ScreenCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Main_32ScreenCode.GDSlimeObjects1);

gdjs.Main_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Main_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDPlayerObjects1Objects, gdjs.Main_32ScreenCode.mapOfGDgdjs_46Main_9532ScreenCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Main_32ScreenCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32ScreenCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32ScreenCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Main_32ScreenCode.condition1IsTrue_0.val = true;
        gdjs.Main_32ScreenCode.GDPlayerObjects1[k] = gdjs.Main_32ScreenCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32ScreenCode.GDPlayerObjects1.length = k;}}
if (gdjs.Main_32ScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32ScreenCode.GDPlayerObjects1 */
/* Reuse gdjs.Main_32ScreenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Main_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Main_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32ScreenCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};

gdjs.Main_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32ScreenCode.GDCloudObjects1.length = 0;
gdjs.Main_32ScreenCode.GDCloudObjects2.length = 0;
gdjs.Main_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Main_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Main_32ScreenCode.GDGrassPlatObjects1.length = 0;
gdjs.Main_32ScreenCode.GDGrassPlatObjects2.length = 0;
gdjs.Main_32ScreenCode.GDBridgeObjects1.length = 0;
gdjs.Main_32ScreenCode.GDBridgeObjects2.length = 0;
gdjs.Main_32ScreenCode.GDCoinObjects1.length = 0;
gdjs.Main_32ScreenCode.GDCoinObjects2.length = 0;
gdjs.Main_32ScreenCode.GDScoreObjects1.length = 0;
gdjs.Main_32ScreenCode.GDScoreObjects2.length = 0;
gdjs.Main_32ScreenCode.GDSlimeObjects1.length = 0;
gdjs.Main_32ScreenCode.GDSlimeObjects2.length = 0;
gdjs.Main_32ScreenCode.GDLeftObjects1.length = 0;
gdjs.Main_32ScreenCode.GDLeftObjects2.length = 0;
gdjs.Main_32ScreenCode.GDRightObjects1.length = 0;
gdjs.Main_32ScreenCode.GDRightObjects2.length = 0;
gdjs.Main_32ScreenCode.GDCheckpointObjects1.length = 0;
gdjs.Main_32ScreenCode.GDCheckpointObjects2.length = 0;

gdjs.Main_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32ScreenCode'] = gdjs.Main_32ScreenCode;
