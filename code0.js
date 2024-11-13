gdjs.SCENE_320_32_45_32RULESCode = {};
gdjs.SCENE_320_32_45_32RULESCode.localVariables = [];
gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDPlayer_9595MaleObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDPlayer_9595MaleObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDCollisionObjectObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDCollisionObjectObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDShapePainter_9595DOORSObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDShapePainter_9595DOORSObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDWhiteTextFrame_95951Objects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDWhiteTextFrame_95951Objects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDSoundButtonObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDSoundButtonObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDLineLightJoystickObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDLineLightJoystickObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDAButtonObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDAButtonObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDBButtonObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDBButtonObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDWHITE_9595BACKGROUND_95951Objects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDWHITE_9595BACKGROUND_95951Objects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDTEXT_9595FRAMEObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDTEXT_9595FRAMEObjects2= [];
gdjs.SCENE_320_32_45_32RULESCode.GDSendButtonObjects1= [];
gdjs.SCENE_320_32_45_32RULESCode.GDSendButtonObjects2= [];


gdjs.SCENE_320_32_45_32RULESCode.asyncCallback7911308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SCENE_320_32_45_32RULESCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SCENE 1 - MAIN", false);
}gdjs.SCENE_320_32_45_32RULESCode.localVariables.length = 0;
}
gdjs.SCENE_320_32_45_32RULESCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SCENE_320_32_45_32RULESCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.SCENE_320_32_45_32RULESCode.asyncCallback7911308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SCENE_320_32_45_32RULESCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1[k] = gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21072540);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShapePainter_DOORS"), gdjs.SCENE_320_32_45_32RULESCode.GDShapePainter_9595DOORSObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", false, 15, 1);
}{for(var i = 0, len = gdjs.SCENE_320_32_45_32RULESCode.GDShapePainter_9595DOORSObjects1.length ;i < len;++i) {
    gdjs.SCENE_320_32_45_32RULESCode.GDShapePainter_9595DOORSObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("", 0.5, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.SCENE_320_32_45_32RULESCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("rules"), gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1);
{for(var i = 0, len = gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1[i].setY((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2) - ((gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1[i].getHeight()) / 2 - 230));
}
}{for(var i = 0, len = gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1.length ;i < len;++i) {
    gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1.length ;i < len;++i) {
    gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1[i].setY((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2) - ((gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1[i].getHeight()) / 2));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 720, 1280, true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SCENE_320_32_45_32RULESCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDPlayer_9595MaleObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDPlayer_9595MaleObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDCollisionObjectObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDCollisionObjectObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDShapePainter_9595DOORSObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDShapePainter_9595DOORSObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDWhiteTextFrame_95951Objects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDWhiteTextFrame_95951Objects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDSoundButtonObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDSoundButtonObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDLineLightJoystickObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDLineLightJoystickObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDAButtonObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDAButtonObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDBButtonObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDBButtonObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDWHITE_9595BACKGROUND_95951Objects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDWHITE_9595BACKGROUND_95951Objects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDTEXT_9595FRAMEObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDTEXT_9595FRAMEObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDSendButtonObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDSendButtonObjects2.length = 0;

gdjs.SCENE_320_32_45_32RULESCode.eventsList1(runtimeScene);
gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDrulesObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDStartObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDPlayer_9595MaleObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDPlayer_9595MaleObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDCollisionObjectObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDCollisionObjectObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDShapePainter_9595DOORSObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDShapePainter_9595DOORSObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDWhiteTextFrame_95951Objects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDWhiteTextFrame_95951Objects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDSoundButtonObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDSoundButtonObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDLineLightJoystickObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDLineLightJoystickObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDAButtonObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDAButtonObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDBButtonObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDBButtonObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDWHITE_9595BACKGROUND_95951Objects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDWHITE_9595BACKGROUND_95951Objects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDTEXT_9595FRAMEObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDTEXT_9595FRAMEObjects2.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDSendButtonObjects1.length = 0;
gdjs.SCENE_320_32_45_32RULESCode.GDSendButtonObjects2.length = 0;


return;

}

gdjs['SCENE_320_32_45_32RULESCode'] = gdjs.SCENE_320_32_45_32RULESCode;
