var errorMap=new Map();

window.onload=function(){
	var formSubmit=document.getElementById("contact-us");
	if(window.addEventListener){
		formSubmit.addEventListener('submit',validate);
	}
}

function firstNameValidation(){
	var firstName=document.getElementById('txt_f_name');
	if(firstName.value.length<5 || /[^a-zA-Z ]/.test(firstName.value)){
		firstName.style.borderColor="red";
		errorMap.set("First Name","Length should be greater than 5 and should be non numeric ");
		return false;
	}
	else{
		firstName.style.borderColor="green";
		errorMap.delete("First Name");
		firstName.focus();
		return true;
	}
}

function lastNameValidation(){
	var firstName=document.getElementById('txt_l_name');
	if(firstName.value.length<5 || /[^a-zA-Z]/.test(firstName.value)){
		firstName.style.borderColor="red";
		errorMap.set("Last Name","Length should be greater than 5 and should be non numeric ");
		return false;
	}
	else{
		firstName.style.borderColor="green";
		errorMap.delete("Last Name");
		firstName.focus();
		return true;
	}
}
function emailValidation(){
	var email=document.getElementById('txt_email');
	if(/[a-z][A-Za-z.0-9_]{4,}[@][a-z]+[.][a-z]{2,5}/.test(email.value)){
		email.style.borderColor="green";
		errorMap.delete("Email");
		return true;
	}
	else{
		email.style.borderColor="red";
		errorMap.set("Email","Email is not in valid format ");
		
		return false;
	}
}
function contactNumberValidation(){
	var contactNumber=document.getElementById('txt_c_number');
	if(contactNumber.value.length!=10|| /[^0-9]/.test(contactNumber.value)){
		contactNumber.style.borderColor="red";
		errorMap.set("Contact Number","should be numeric")
		return false;
	}
	else{
		contactNumber.style.borderColor="green";
		errorMap.delete("Contact Number");
		return true;
	}
}
function inputFields(){
	var form=document.getElementById("contact-us");
	var selectFieldValue=document.getElementById("select_state");
	var project=document.getElementById("project");
	var zipCode=document.getElementById("zipcode");

	var website=document.getElementById("website");
	var hosting=document.getElementById("hosting"); 
	if(form.contains(project)){
		form.removeChild(project);
	}
	if(form.contains(zipCode)){
		form.removeChild(zipCode);
	}
	if(form.contains(website)){
		form.removeChild(website);
	}
	if(form.contains(hosting)){
		form.removeChild(hosting);
	}
    if(selectFieldValue.value=="Rajasthan"){
        webSiteDomainNameField();
        projectDescriptionField();
    }
    else if(selectFieldValue.value=="Gujrat"){
        zipCodeField();
        hostingRadioButton();
    }
    else if(selectFieldValue.value=="Punjab"){
        zipCodeField();
        projectDescriptionField();
	}
	else{
		
	}
}
function webSiteDomainNameField(){
	var form=document.getElementById("contact-us");
	var submitButton=document.getElementById("submit-button-div");
	var website = document.createElement('div');
	website.className = "input";
	website.id="website";
	website.innerHTML = "<div class='input-field-label'>Website or domain name</div><div class='input-field'><i class='fa fa-globe-asia icon'></i><input type='text' name='website' placeholder='Website or domain name'></div>";
	form.insertBefore(website,submitButton);
}
function zipCodeField(){
	var form=document.getElementById("contact-us");
	var submitButton=document.getElementById("submit-button-div");
	var zipCode = document.createElement('div');
	zipCode.className = "input";
	zipCode.id="zipcode";
	zipCode.innerHTML = "<div class='input-field-label'>Zip Code</div><div class='input-field'><i class='fa fa-home icon'></i><input type='text' name='zipcode' placeholder='Zipcode'></div>";
	form.insertBefore(zipCode,submitButton);
}
function projectDescriptionField(){
	var form=document.getElementById("contact-us");
	var submitButton=document.getElementById("submit-button-div");
	var project = document.createElement('div');
	project.className = "input";
	project.id="project";
	project.innerHTML = "<div class='input-field-label'>Project Description</div><div class='input-field'><i class='fa fa-pencil-alt icon'></i><textarea rows='3' cols='22' name='project_description' placeholder='Project Description Here' ></textarea></div>";
	form.insertBefore(project,submitButton);
}
function hostingRadioButton(){
	var form=document.getElementById("contact-us");
	var submitButton=document.getElementById("submit-button-div");
	var hosting = document.createElement('div');
	hosting.className = "input";
	hosting.id="hosting";
	hosting.innerHTML = "<div class='input-field-label'>Do you have hosting ?</div><div class='input-field' id='hosting-div'> <input type='radio' name='Y' value='YES' checked id='radio-1'> Yes<br/><input type='radio' name='N' value='NO' id='radio-2'> No<br></div>";
	form.insertBefore(hosting,submitButton);
}
function validate(event){
	var message="";
	firstNameValidation();
	lastNameValidation();
	emailValidation();
	contactNumberValidation();
	for(var entry of errorMap){
		message += entry +"\n";
	}
	if(message.length!=0){
		alert(message);
		event.preventDefault();
	}
	else{
		if(localStorage){
			localStorage.clear();
			for(var i=0;i<document.getElementById("contact-us").elements.length;i++){
				if(document.getElementById("contact-us").elements[i].value.length !== 0){
					localStorage.setItem(document.getElementById("contact-us").elements[i].name,document.getElementById("contact-us").elements[i].value);	
				}
			}
		}
	}
}

