#pragma strict

var RedKeyDisabled : Texture;
var RedKeyEnabled : Texture;
var RedKey : Texture;
var GreenKeyDisabled : Texture;
var GreenKeyEnabled : Texture;
var GreenKey : Texture;
var BlueKeyDisabled : Texture;
var BlueKeyEnabled : Texture;
var BlueKey : Texture;
var YellowKeyDisabled : Texture;
var YellowKeyEnabled : Texture;
var YellowKey : Texture;
var TestX : int;
var TestY : int;

function Start () {

}

function Update () {

if(PlayerPrefs.GetInt("RedKeys") < 1){
RedKey = RedKeyDisabled;
}
if(PlayerPrefs.GetInt("RedKeys") == 1){
RedKey = RedKeyEnabled;
}
if(PlayerPrefs.GetInt("GreenKeys") < 1){
GreenKey = GreenKeyDisabled;
}
if(PlayerPrefs.GetInt("GreenKeys") == 1){
GreenKey = GreenKeyEnabled;
}
if(PlayerPrefs.GetInt("BlueKeys") < 1){
BlueKey = BlueKeyDisabled;
}
if(PlayerPrefs.GetInt("BlueKeys") == 1){
BlueKey = BlueKeyEnabled;
}
if(PlayerPrefs.GetInt("YellowKeys") < 1){
YellowKey = YellowKeyDisabled;
}
if(PlayerPrefs.GetInt("YellowKeys") == 1){
YellowKey = YellowKeyEnabled;
}
}

function OnGUI () {
	// Make a background box
	GUI.Box (Rect (0,0,70,70), RedKey);
	GUI.Box (Rect (0,70, 70, 70), GreenKey);
	GUI.Box (Rect (0,140, 70, 70), BlueKey);
	GUI.Box (Rect( 0,210, 70, 70), YellowKey);
}