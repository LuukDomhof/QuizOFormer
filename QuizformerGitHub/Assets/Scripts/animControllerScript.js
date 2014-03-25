#pragma strict



var animator : Animator;
function Start () {
        animator = this.GetComponent("Animator");
}

function Update () {

if(Input.GetKeyDown(KeyCode.RightArrow)){

animator.SetBool("Blue", false);
animator.SetBool("Green", true);
}
if(Input.GetKeyDown(KeyCode.LeftArrow)){

animator.SetBool("Green", false);
animator.SetBool("Blue", true);
}



}