window.onload;
  
const headerDiv=document.getElementById("header div");
const starter = document.getElementById("starter");
const pro = document.getElementById("pro");
const enterprise = document.getElementById("enterprise");
const starterButton = document.getElementById("starter button");
const proButton=document.getElementById("pro button");
const enterpriseButton = document.getElementById("enterprise button");
const bulletPoints = document.querySelectorAll(".red-bullet-paragraph p::before");
const textProPrise = document.getElementById("proPrise");
const textStarterPrise = document.getElementById("starterPrise");
const mauSelect = document.getElementById("mau-select")
document.getElementById('toggleSwitch').addEventListener('change', function() {
    
  // Get the current state of the switch
  // var isChecked = this.checked;
  localStorage.setItem("plan",this.checked);
});
if(localStorage.getItem("plan")===false) {
  // Switch is OFF
  console.log('Switch is OFF');
  //!starter trail
  document.body.style="box-shadow: 0 0 30px #681414";
  headerDiv.style="background-color: rgb(160, 9, 9);";
  starter.style="box-shadow: 0 0 5px #681414;";
  starterButton.style="box-shadow: 0 0 3px #681414;";
  starterButton.addEventListener('mouseenter', function() {
    starterButton.style="background-color: rgb(160, 9, 9);";
    
  });
  
  starterButton.addEventListener('mouseleave', function() {
    starterButton.style='background-color:rgb(31, 34, 38);';
    
  });
  //!pro trail
  pro.style="box-shadow: 0 0 5px #681414;"
  proButton.style='background-color:rgb(31, 34, 38);';
  proButton.addEventListener('mouseenter', function() {
    proButton.style="background-color: rgb(160, 9, 9);";
    
  });
  
  proButton.addEventListener('mouseleave', function() {
    proButton.style='background-color:rgb(31, 34, 38);';
    
  });
  //!enterprise trail
  enterprise.style="box-shadow: 0 0 5px #681414;"
  enterpriseButton.style='background-color:rgb(31, 34, 38);';
  enterpriseButton.addEventListener('mouseenter', function() {
    enterpriseButton.style="background-color: rgb(160, 9, 9);";
  });
  
  enterpriseButton.addEventListener('mouseleave', function() {
    enterpriseButton.style='background-color:rgb(31, 34, 38);';
    
  });
  //!set pro prise
  mauSelect.addEventListener('change', function() {
    const selectedMauValue = mauSelect.value;
    if (selectedMauValue==="1000"){
      setProPrise("$349")
    }
    else if (selectedMauValue==="2500"){
      setProPrise("$599")
    }
    else if (selectedMauValue==="5000"){
      setProPrise("$749")
    }
    else{
      setProPrise("$999")
    }
  });
  //!set starter prise
  setStarterPrise("$19");
  // //! red bullet pointes
  // bulletPoints.forEach(bullet => {
  //   bullet.style=" color :red ";
  // });
}
// Perform your desired action based on the state
if (localStorage.getItem("plan")) {
  // Switch is ON
  console.log('Switch is ON');
  //!starter trail
  document.body.style="box-shadow: 0 0 30px #040e67;";
  headerDiv.style="background-color: #040e67;";
  starter.style="box-shadow: 0 0 5px #040e67;";
  starterButton.style="box-shadow: 0 0 3px #040e67;";
  starterButton.addEventListener('mouseenter', function() {
    starterButton.style="box-shadow: 0 0 3px #040e67;";
    starterButton.style="background-color: #040e67;";
    
  });
  
  starterButton.addEventListener('mouseleave', function() {
    starterButton.style= "background-color: rgb(31, 34, 38);";
    starterButton.style="box-shadow: 0 0 3px #040e67;";
  });
  //!pro trail
  pro.style="box-shadow: 0 0 5px #040e67;";
  proButton.style="box-shadow: 0 0 3px #040e67;";
  proButton.style="box-shadow: 0 0 3px #040e67;";
  proButton.addEventListener('mouseenter', function() {
    proButton.style="box-shadow: 0 0 3px #040e67;";
    proButton.style="background-color: #040e67;";
  });
  
  proButton.addEventListener('mouseleave', function() {
    proButton.style= "background-color: rgb(31, 34, 38);";
    proButton.style="box-shadow: 0 0 3px #040e67;";
  });
  //!enterprise trail
  enterprise.style="box-shadow: 0 0 5px #040e67;";
  enterpriseButton.style="box-shadow: 0 0 3px #040e67;";
  enterpriseButton.style="box-shadow: 0 0 3px #040e67;";
  enterpriseButton.addEventListener('mouseenter', function() {
    enterpriseButton.style="box-shadow: 0 0 3px #040e67;";
    enterpriseButton.style="background-color: #040e67;";
  });
  
  enterpriseButton.addEventListener('mouseleave', function() {
    enterpriseButton.style= "background-color: rgb(31, 34, 38);";
    enterpriseButton.style="box-shadow: 0 0 3px #040e67;";
  });
  //!set starter prise
  setStarterPrise("$199");
  // //!blue bullet points
  // bulletPoints.forEach(bullet => {
  //   bullet.style=" background-color :blue";
  // });
  
} 

  //!set pro prise
  mauSelect.addEventListener('change', function() {
    const selectedMauValue = mauSelect.value;
    if (selectedMauValue==="1000" ){
      if(document.getElementById('toggleSwitch').checked){
        setProPrise("$1349")
      }
    }
    if (selectedMauValue==="2500"){
      setProPrise("$1599")
    }
    if (selectedMauValue==="5000"){
      setProPrise("$1749")
    }
    if (selectedMauValue==="10000"){
      setProPrise("$1999")
    }
  });
function setStarterPrise (starterPrise){
  textStarterPrise.innerHTML = starterPrise; 
}
function setProPrise (proPrise){
  textProPrise.innerHTML = proPrise;
}
// mauSelect.addEventListener('change', function() {
//   const selectedMauValue = mauSelect.value;
//   setProPrise(`$${mauSelect.value}`)
// });

