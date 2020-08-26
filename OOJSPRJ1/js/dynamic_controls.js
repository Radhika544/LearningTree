var divTag;
var loopVar=0;
var maxCount=5;
var methodNameArr=['Invoke Method A','Invoke Method B','Invoke Method C','Invoke Method D','Invoke Method E'];

class Button {
constructor(name,index,value){
this._name=name;
this._index=index;
this._value=value;
}
get name(){
return this._name;
}
set name(name){
this._name=name;
}
get index(){
return this._index;
}
set name(index){
this._index=index;
}
get value(){
return this._value;
}
set name(value){
this._value=value;
}
}

function CreateDynamicControls() {
divTag=document.getElementById('mainDiv');
while(loopVar<maxCount){
var index=loopVar+1;
var name="TestBtn"+loopVar;
let btn1=new Button(name,index,methodNameArr[loopVar]);
CreateHTMLButton(btn1,divTag);
loopVar++;
}
}

function CreateHTMLButton(btnObj,divTag){
var btn = document.createElement("input");
btn.setAttribute('type', 'button');
btn.setAttribute('class','btnStyle');
btn.setAttribute('name',btnObj.name);
btn.setAttribute('value', btnObj.value);
btn.style.display = "block";
divTag.appendChild(btn);
btn.addEventListener('click',function() { AddEvent(btnObj.value, btnObj.index);},false);
return btn;
}

function AddEvent (value,index) {
UpdateSpan(value,index);
console.log(value+" is clicked with index "+index);
}

function UpdateSpan(btnName,index) {
var spnArr=this.document.getElementsByTagName('span');
if(spnArr.length==1){
var msg=btnName+" is clicked with index "+index;
spnArr[0].innerHTML=msg;
}
}
