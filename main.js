Webcam.set({





    width:360,
    height:310,
    image_format:'png', 
    png_quality:90
});

camera = document.getElementById("camera");



Webcam.attach(  '#camera'  );




function take_snapshot()
{

Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';




});



}
console.log('ml5 version:' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Sb-mJkH6a/',modelLoaded);


function modelLoaded()  {
console.log( 'Model Loaded!' )

}

prediction_1=""
prediction_2=""

function speak(){
var synth = window.speechSynthesis;
speak_data_1 = "The first prediction is" +prediction_1;
data_speak_2 = "The second prediction is" +prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1+data_speak_2);
synth.speak(utterThis);


}

function check(){


    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}



function gotResult(error, results) {

if (error) {
console.error(error);



} else {
console.log(results);
document.getElementById('result_pose_name').innerHTML = results[0].label
document.getElementById('result_pose_name2').innerHTML = results[1].label
prediction_1 = results[0].label;
prediction_2 = results[1].label;
speak();
if(results[0].label=="like")
{
document.getElementById("update_pose").innerHTML = "&#128077;;"

}
if(results[0].label=="op")
{
document.getElementById("update_pose").innerHTML = "&#128076;"

}
if(results[0].label=="2finger")
{
document.getElementById("update_pose").innerHTML = "&#9996;"

}

if(results[0].label=="7")
{
document.getElementById("update_pose").innerHTML = "&#128406;"

}

if(results[1].label=="like")
{
document.getElementById("update_pose2").innerHTML = "&#128077;"

}
if(results[1].label=="op")
{
document.getElementById("update_pose2").innerHTML = "&#128076;"

}
if(results[1].label=="2finger")
{
document.getElementById("update_pose2").innerHTML = "&#9996;"

}
if(results[1].label=="7")
{
document.getElementById("update_pose2").innerHTML = "&#128406;"

}

}





}