// Auto-Generated Code Using Unity3D - Menu Designer Beta
// By DarkStudio
// Please Do Not Remove The Comments!

#pragma strict

function OnGUI() {
if (GUI.Button(Rect(193,278,200,50),"Exit")) {
Application.Quit();
}
if (GUI.Button(Rect(187,178,200,50),"Play")) {
Application.LoadLevel("TestScene");
}
GUI.Box(Rect(98,350,77,67),"Test Input");
GUI.Label (Rect (262,118,75,13),"My Test Menu");
}