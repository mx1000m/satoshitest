gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode = {};
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.localVariables = [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDPlayer_9595MaleObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDPlayer_9595MaleObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCollisionObjectObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCollisionObjectObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDShapePainter_9595DOORSObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDShapePainter_9595DOORSObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWhiteTextFrame_95951Objects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWhiteTextFrame_95951Objects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSoundButtonObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSoundButtonObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDLineLightJoystickObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDLineLightJoystickObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDAButtonObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDAButtonObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDBButtonObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDBButtonObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWHITE_9595BACKGROUND_95951Objects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWHITE_9595BACKGROUND_95951Objects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDTEXT_9595FRAMEObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDTEXT_9595FRAMEObjects2= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1= [];
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects2= [];


gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.asyncCallback22295068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "SENT_LAYER");
}gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.localVariables.length = 0;
}
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.asyncCallback22295068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SendButton"), gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1.length;i<l;++i) {
    if ( gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1[k] = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1[i];
        ++k;
    }
}
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22286300);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("inputtext1"), gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1);
gdjs.copyArray(runtimeScene.getObjects("inputtext2"), gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CustomToken").setNumber(8453);
}{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Name").setString((( gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1.length === 0 ) ? "" :gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Wallet").setString((( gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1.length === 0 ) ? "" :gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.firebaseTools.firestore.addDocument("WalletCollection", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Character_Jump"), gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("FINAL_TEXT"), gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("SendButton"), gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("inputtext1"), gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1);
gdjs.copyArray(runtimeScene.getObjects("inputtext2"), gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1);
{for(var i = 0, len = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects1.length ;i < len;++i) {
    gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1.length ;i < len;++i) {
    gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1.length ;i < len;++i) {
    gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1.length ;i < len;++i) {
    gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects1.length ;i < len;++i) {
    gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects1[i].getWidth()) / 2));
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "SENT_LAYER");
}{gdjs.evtTools.sound.playSound(runtimeScene, "SOUND/Z_END SCENE/Shufflin.mp3", true, 40, 1);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SENT"), gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1);
{for(var i = 0, len = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1.length ;i < len;++i) {
    gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1.length ;i < len;++i) {
    gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1[i].setY((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2) - ((gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1[i].getHeight()) / 2));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDPlayer_9595MaleObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDPlayer_9595MaleObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCollisionObjectObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCollisionObjectObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDShapePainter_9595DOORSObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDShapePainter_9595DOORSObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWhiteTextFrame_95951Objects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWhiteTextFrame_95951Objects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSoundButtonObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSoundButtonObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDLineLightJoystickObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDLineLightJoystickObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDAButtonObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDAButtonObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDBButtonObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDBButtonObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWHITE_9595BACKGROUND_95951Objects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWHITE_9595BACKGROUND_95951Objects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDTEXT_9595FRAMEObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDTEXT_9595FRAMEObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects2.length = 0;

gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.eventsList1(runtimeScene);
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext1Objects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDinputtext2Objects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDFINAL_9595TEXTObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSENTObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCharacter_9595JumpObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDPlayer_9595MaleObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDPlayer_9595MaleObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCollisionObjectObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDCollisionObjectObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDShapePainter_9595DOORSObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDShapePainter_9595DOORSObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWhiteTextFrame_95951Objects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWhiteTextFrame_95951Objects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSoundButtonObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSoundButtonObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDLineLightJoystickObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDLineLightJoystickObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDAButtonObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDAButtonObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDBButtonObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDBButtonObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWHITE_9595BACKGROUND_95951Objects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDWHITE_9595BACKGROUND_95951Objects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDTEXT_9595FRAMEObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDTEXT_9595FRAMEObjects2.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects1.length = 0;
gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode.GDSendButtonObjects2.length = 0;


return;

}

gdjs['SCENE_32FINAL_32_45_32Submit_32WalletCode'] = gdjs.SCENE_32FINAL_32_45_32Submit_32WalletCode;
