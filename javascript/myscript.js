//function to validate email on contact.html
function validate()
{
	//email value variable
	var email = document.contactForm.email.value;

	// regular expression pattern for valid email address
	var validEmail=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

	// validate if user's name field is blank
	if(document.contactForm.name.value=="")
	{
		alert("Please provide your name");
		document.contactForm.name.focus();
		document.getElementById("name").style.border="solid 1px red";
		return false;	
	}

	else
	{
		document.getElementById("name").style.border="solid 1px black";
	}

	// validate if user's email field is blank

	if(email=="")
	{
		alert("Please provide your email");
		document.contactForm.email.focus();
		document.getElementById("email").style.border="solid 1px red";
		return false;
		
	}

	// validate if user's email has a valid format using a regular expression pattern

	else if(!validEmail.test(email))
	{
		alert("Please enter a valid email");
		document.getElementById("email").style.border="solid 1px red";
		return false;
	}
	
	else
	{
		document.getElementById("email").style.border="solid 1px black";
	}

	// validate if user's phone number field is blank

	if(document.contactForm.phone.value=="")
	{
		alert("Please provide your phone number");
		document.contactForm.phone.focus();
		document.getElementById("phone").style.border="solid 1px red";
		return false;
	}

	else
	{
		document.getElementById("email").style.border="solid 1px black";
	}

	// validate if user's comment field is blank

	if(document.contactForm.comments.value=="")
	{
		alert("Please provide a comment");
		document.contactForm.comments.focus();
		document.getElementById("comments").style.border="solid 1px red";
		return false;	
	}

	else
	{
		document.getElementById("comments").style.border="solid 1px black";
	}

	// return true if no errors
	return true;
}


// functions for our services.html page

// this function displays the div id that is passed into the function by setting its style to block
//This is used in the FAQ section of our services.html
function toggle_faq(id) 
	{
		var faqAnswer = document.getElementById(id);
		if(faqAnswer.style.display == 'none')
			{
			   	faqAnswer.style.display = 'block';
			}
			     
		else
			{
			   	faqAnswer.style.display = 'none';
			}	      
	}

// used to display quote form & calculate a quick quote for the user on our services.html
function calculateQuote() 
	{
		//display form once function is called
		document.getElementById('quote_form').style.display="block";
		var i = 0;
		var total = 0;

		// .getElementsByName("chk") creates an array of all elements with the name value chk
		var checkBoxItem=document.getElementsByName("chk")

		// loop through each checkbox with the name chk
		for(i=0;i<checkBoxItem.length;i++)
			{
				var elem=checkBoxItem[i]

				//if chk is selected, add it's value to the total
				if(elem.checked) 
					{ 
						//use Number function to convert value to a number
						total= total + Number(elem.value);
						//display total cost div in form
						document.getElementById('totalCost').style.display="block";
					}
			}
			//display the result in the totalCostDivId
			var totalCostDivId = document.getElementById('totalCost');
			totalCostDivId.innerHTML = "Total : &euro;" +total ;
	}


// used to hide the form when the user clicks on the close button
function closeQuoteForm()
	{
		document.getElementById('quote_form').style.display="none";
	}

// functions for index.html

//declare variables
var image = document.getElementById("slider");
// create an array for all images that will appear in the slider
var imageArray = ["./img/slidingImage4.jpg", "./img/slidingImage2.jpg", "./img/slidingImage3.jpg", "./img/slidingImage1.jpg"];
var imageIndex = 0;

//create an array for all captions that will appear in the slider
var caption= new Array();
var captionIndex = 0;
var captionElement = document.getElementById("caption");

// create an array for all sub-captions that will appear in the slider
var subCaption= new Array();
var subCaptionIndex = 0;
var subCaptionElement = document.getElementById("subCaption");

// caption array elements
caption[0] = "Data Recovery";
caption[1] = "Desktop Repairs";
caption[2] = "Laptop Repairs";
caption[3] = "NO FIX, NO FEE";

// sub-caption array elements
subCaption[0] = "We can back-up & recover all your files";
subCaption[1] = "We repair all makes & models of Desktop Computers";
subCaption[2] = "We repair all makes & models of Laptops";
subCaption[3] = "No charge for you if we are unable to repair";

// function for slider on home page

function changeImage() 
	{
		// sets the value for the image src value
		image.setAttribute("src", imageArray[imageIndex]);
		imageIndex++;
		// reset array to first image
		if (imageIndex >= imageArray.length) 
		{
			imageIndex = 0;
		}			
	}

function changeCaption() 
	{
		// sets the value for the the caption using inner html
		captionElement.innerHTML= caption[captionIndex];
		captionIndex++;
		// reset to first caption
		if (captionIndex >= caption.length) 
		{
			captionIndex = 0;
		}
	}

function changeSubCaption() 
	{
		subCaptionElement.innerHTML= subCaption[subCaptionIndex];
		subCaptionIndex++;
		if (subCaptionIndex >= subCaption.length) 
		{
			subCaptionIndex = 0;
		}
	}

// function for the next button on slider
function nextImage()
	{
		image.setAttribute("src", imageArray[imageIndex++]);
		captionElement.innerHTML= caption[captionIndex++];
		subCaptionElement.innerHTML= subCaption[subCaptionIndex++];
		if (imageIndex >= imageArray.length) 
		{
			imageIndex = 0;
		}	

		if (captionIndex >= caption.length) 
		{
			captionIndex = 0;
		}

		if (subCaptionIndex >= subCaption.length) 
		{
			subCaptionIndex = 0;
		}
	} 

// function for the back button on slider
function prevImage()
	{
		image.setAttribute("src", imageArray[imageIndex--]);
		captionElement.innerHTML= caption[captionIndex--];
		subCaptionElement.innerHTML= subCaption[subCaptionIndex--];
		if (imageIndex < 0) 
		{
			imageIndex = 3;
		}

		if (captionIndex < 0) 
		{
			captionIndex = 3;
		}

		if (subCaptionIndex < 0) 
		{
			subCaptionIndex = 3;
		}
	} 