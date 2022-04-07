(function($){
    "use strict" // start of use strict


});


$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function(){

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
            },
            duration: 600
        });
    });

    $(".previous").click(function(){

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            previous_fs.css({'opacity': opacity});
            },
            duration: 600
            });
        });

        $('.radio-group .radio').click(function(){
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function(){

        console.log("Data Submitted")
        
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
            },
            duration: 600
        });
        
    });


    // upload control


    const image_input = document.querySelector("#image_input");

    image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
    });

    // $(document).on('change', '.btn-file :file', function() {
	// 	var input = $(this),
	// 		label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	// 	input.trigger('fileselect', [label]);
	// 	});

	// 	$('.btn-file :file').on('fileselect', function(event, label) {
		    
	// 	    var input = $(this).parents('.input-group').find(':text'),
	// 	        log = label;
		    
	// 	    if( input.length ) {
	// 	        input.val(log);
	// 	    } else {
	// 	        if( log ) alert(log);
	// 	    }
	    
	// 	});
	// 	function readURL(input) {
	// 	    if (input.files && input.files[0]) {
	// 	        var reader = new FileReader();
		        
	// 	        reader.onload = function (e) {
	// 	            $('#img-upload').attr('src', e.target.result);
	// 	        }
		        
	// 	        reader.readAsDataURL(input.files[0]);
	// 	    }
	// 	}

	// 	$("#imgInp").change(function(){
	// 	    readURL(this);
	// 	});


    // multiple file upload

    // let files = [], // will be store images
    // button = document.querySelector('.top button'), // uupload button
    // form = document.querySelector('.form-upload'), // form ( drag area )
    // container = document.querySelector('.container'), // container in which image will be insert
    // text = document.querySelector('.inner'), // inner text of form
    // browse = document.querySelector('.select'), // text option fto run input
    // input = document.querySelector('form input'); // file input

    // browse.addEventListener('click', () => input.click());

    // // input change event
    // input.addEventListener('change', () => {
    //     let file = input.files;

    //     for (let i = 0; i < file.length; i++) {
    //         if (files.every(e => e.name !== file[i].name)) files.push(file[i])
    //     }

    //     form.reset();
    //     showImages();
    // })

    // const showImages = () => {
    //     let images = '';
    //     files.forEach((e, i) => {
    //         images += `<div class="image">
    //                 <img src="${URL.createObjectURL(e)}" alt="image">
    //                 <span onclick="delImage(${i})">&times;</span>
    //             </div>`
    //     })

    //     container.innerHTML = images;
    // } 

    // const delImage = index => {
    //     files.splice(index, 1)
    //     showImages()
    // } 

    // // drag and drop 
    // form.addEventListener('dragover', e => {
    //     e.preventDefault()

    //     form.classList.add('dragover')
    //     text.innerHTML = 'Drop images here'
    // })

    // form.addEventListener('dragleave', e => {
    //     e.preventDefault()

    //     form.classList.remove('dragover')
    //     text.innerHTML = 'Drag & drop image here or <span class="select">Browse</span>'
    // })

    // form.addEventListener('drop', e => {
    //     e.preventDefault()

    //     form.classList.remove('dragover')
    //     text.innerHTML = 'Drag & drop image here or <span class="select">Browse</span>'

    //     let file = e.dataTransfer.files;
    //     for (let i = 0; i < file.length; i++) {
    //         if (files.every(e => e.name !== file[i].name)) files.push(file[i])
    //     }

    //     showImages();
    // })

    // button.addEventListener('click', () => {
    //     let form = new FormData();
    //     files.forEach((e, i) => form.append(`file[${i}]`, e))

    //     // now you can send the image to server
        
    // })

    });
