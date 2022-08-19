




function ch_ztp_add(){
	let elem=document.querySelector(".taipei_y");
    elem.style.zIndex="10";
    elem.style.transition="0.3s";
    // let elem2=document.querySelector(".tai_d");
    // elem2.style.opacity="0.1";
    // elem2.style.transition="0.3s";

};
function ch_ztp_sub(){
	let elem=document.querySelector(".taipei_y");
    elem.style.zIndex="0";
    elem.style.transition="0.3s";
    // let elem2=document.querySelector(".tai_d");
    // elem2.style.opacity="0";
    // elem2.style.transition="0.3s";

};
function ch_zkee_add(){
	let elem=document.querySelector(".keelung_y");
    elem.style.zIndex="10";
    elem.style.transition="0.3s";
    // let elem2=document.querySelector(".kee_d");
    // elem2.style.opacity="0.1";
    // elem2.style.transition="0.3s"
    // let elem2=document.querySelector(".kee_d");
    // elem2.style.opacity="0.5";
    // elem2.style.transition="0.3s";
};
function ch_zkee_sub(){
	let elem=document.querySelector(".keelung_y");
    elem.style.zIndex="0";
    elem.style.transition="0.3s";
    // let elem2=document.querySelector(".kee_d");
    // elem2.style.opacity="0";
    // elem2.style.transition="0.3s";
};
function ch_zyi_add(){
	let elem=document.querySelector(".yilan_y");
    elem.style.zIndex="10";
    elem.style.transition="0.3s";
};
function ch_zyi_sub(){
	let elem=document.querySelector(".yilan_y");
    elem.style.zIndex="0";
    elem.style.transition="0.3s";
};
function ch_ztao_add(){
	let elem=document.querySelector(".taoyuan_y");
    elem.style.zIndex="10";
    elem.style.transition="0.3s";
};
function ch_ztao_sub(){
	let elem=document.querySelector(".taoyuan_y");
    elem.style.zIndex="0";
    elem.style.transition="0.3s";
};
function ch_zhsin_add(){
	let elem=document.querySelector(".hsinchu_y");
    elem.style.zIndex="10";
    elem.style.transition="0.3s";
};
function ch_zhsin_sub(){
	let elem=document.querySelector(".hsinchu_y");
    elem.style.zIndex="0";
    elem.style.transition="0.3s";
};

function clickTab(elem){
	elem.classList.add("active");
	for (const tab of document.getElementsByClassName("tab")){
		if (tab.id !== elem.id){
			tab.classList.remove("active")
		};
	};
};

function clickTab_2(elem){
	elem.classList.add("active2");
	// debugger
	for (const tab of document.getElementsByClassName("tab_2")){
		if (tab.getAttribute('name') !== elem.getAttribute('name')){
			tab.classList.remove("active2")
		};
	};
};

function clickTab_3(elem){
	elem.classList.add("active3");
	// debugger
	for (const tab of document.getElementsByClassName("tab_3")){
		if (tab.getAttribute('name') !== elem.getAttribute('name')){
			tab.classList.remove("active3")
		};
	};
};


$(".search_icon").on("click",function(){
	// debugger
	$(this).parent().find(".js-input").
		addClass("is-active");
});

$(".search_icon").on("click",function(){
	// debugger
	$(this).parent().find(".plus_icon").
		addClass("is-active");
});

$(".search_icon").on("click",function(){
	// debugger
	$(this).parent().find(".acc_icon").
		addClass("is-active");
});

$("body").click(function(e){  
    var container = $(".js-input");
    var btn = $(".search_icon");
    // 判斷點擊的地方不是DIV或按鈕
    if(!container.is(e.target) &&
       !container.has(e.target).length &&
       !btn.is(e.target) &&
       !btn.has(e.target).length
      ){
        $(".search_icon").parent().find(".js-input").
		removeClass("is-active");
		$(".search_icon").parent().find(".plus_icon").
		removeClass("is-active");
		$(".search_icon").parent().find(".acc_icon").
		removeClass("is-active");
    }  
});


function myFunction() {
        window.location.href="foodmap_page_north1.html";
    }

let district = document.querySelector('#district');
let city = document.querySelector('#city');
let options2 = city.querySelectorAll('option');

function giveSelection(selValue) {
  city.innerHTML = '';
  for(let i = 0; i < options2.length; i++) {
    if(options2[i].dataset.option === selValue) {
      city.appendChild(options2[i]);
    }
  }
}
giveSelection(district.value);



let workornot = document.querySelector('#workornot');
// debugger
let times_up = document.querySelector('#times_up');
let options3 = times_up.querySelectorAll('option');
let times_down = document.querySelector('#times_down');
let options4 = times_down.querySelectorAll('option');


function givetimeSelection(selValue) {
// debugger
  times_up.innerHTML = '';
  for(let i = 0; i < options3.length; i++) {
    if(options3[i].dataset.option === selValue) {
      times_up.appendChild(options3[i]);
    }
  }
  times_down.innerHTML = '';
  for(let i = 0; i < options4.length; i++) {
    if(options4[i].dataset.option === selValue) {
      times_down.appendChild(options4[i]);
    }
  }
}
givetimeSelection(workornot.value);


// --------------------------------
let workornot_1 = document.querySelector('#workornot_1');
let times_up_1 = document.querySelector('#times_up_1');
let options5 = times_up_1.querySelectorAll('option');
let times_down_1 = document.querySelector('#times_down_1');
let options6 = times_down_1.querySelectorAll('option');

function givetimeSelection_1(selValue) {
// debugger
  times_up_1.innerHTML = '';
  for(let i = 0; i < options5.length; i++) {
    if(options5[i].dataset.option === selValue) {
      times_up_1.appendChild(options5[i]);
    }
  }
  times_down_1.innerHTML = '';
  for(let i = 0; i < options6.length; i++) {
    if(options6[i].dataset.option === selValue) {
      times_down_1.appendChild(options6[i]);
    }
  }
}
givetimeSelection_1(workornot.value);


// --------------------------------
let workornot_2 = document.querySelector('#workornot_2');
let times_up_2 = document.querySelector('#times_up_2');
let options7 = times_up_2.querySelectorAll('option');
let times_down_2 = document.querySelector('#times_down_2');
let options8 = times_down_2.querySelectorAll('option');

function givetimeSelection_2(selValue) {
// debugger
  times_up_2.innerHTML = '';
  for(let i = 0; i < options7.length; i++) {
    if(options7[i].dataset.option === selValue) {
      times_up_2.appendChild(options7[i]);
    }
  }
  times_down_2.innerHTML = '';
  for(let i = 0; i < options8.length; i++) {
    if(options8[i].dataset.option === selValue) {
      times_down_2.appendChild(options8[i]);
    }
  }
}
givetimeSelection_2(workornot.value);

// --------------------------------
let workornot_2_1 = document.querySelector('#workornot_2_1');
let times_up_2_1 = document.querySelector('#times_up_2_1');
let options9 = times_up_2_1.querySelectorAll('option');
let times_down_2_1 = document.querySelector('#times_down_2_1');
let options10 = times_down_2_1.querySelectorAll('option');

function givetimeSelection_2_1(selValue) {
// debugger
  times_up_2_1.innerHTML = '';
  for(let i = 0; i < options9.length; i++) {
    if(options9[i].dataset.option === selValue) {
      times_up_2_1.appendChild(options9[i]);
    }
  }
  times_down_2_1.innerHTML = '';
  for(let i = 0; i < options10.length; i++) {
    if(options10[i].dataset.option === selValue) {
      times_down_2_1.appendChild(options10[i]);
    }
  }
}
givetimeSelection_2_1(workornot.value);

// --------------------------------
let workornot_3 = document.querySelector('#workornot_3');
let times_up_3 = document.querySelector('#times_up_3');
let options11 = times_up_3.querySelectorAll('option');
let times_down_3 = document.querySelector('#times_down_3');
let options12 = times_down_3.querySelectorAll('option');

function givetimeSelection_3(selValue) {
// debugger
  times_up_3.innerHTML = '';
  for(let i = 0; i < options11.length; i++) {
    if(options11[i].dataset.option === selValue) {
      times_up_3.appendChild(options11[i]);
    }
  }
  times_down_3.innerHTML = '';
  for(let i = 0; i < options12.length; i++) {
    if(options12[i].dataset.option === selValue) {
      times_down_3.appendChild(options12[i]);
    }
  }
}
givetimeSelection_3(workornot.value);

// --------------------------------
let workornot_3_1 = document.querySelector('#workornot_3_1');
let times_up_3_1 = document.querySelector('#times_up_3_1');
let options13 = times_up_3_1.querySelectorAll('option');
let times_down_3_1 = document.querySelector('#times_down_3_1');
let options14 = times_down_3_1.querySelectorAll('option');

function givetimeSelection_3_1(selValue) {
// debugger
  times_up_3_1.innerHTML = '';
  for(let i = 0; i < options13.length; i++) {
    if(options13[i].dataset.option === selValue) {
      times_up_3_1.appendChild(options13[i]);
    }
  }
  times_down_3_1.innerHTML = '';
  for(let i = 0; i < options14.length; i++) {
    if(options14[i].dataset.option === selValue) {
      times_down_3_1.appendChild(options14[i]);
    }
  }
}
givetimeSelection_3_1(workornot.value);

// --------------------------------
let workornot_4 = document.querySelector('#workornot_4');
let times_up_4 = document.querySelector('#times_up_4');
let options15 = times_up_4.querySelectorAll('option');
let times_down_4 = document.querySelector('#times_down_4');
let options16 = times_down_4.querySelectorAll('option');

function givetimeSelection_4(selValue) {
// debugger
  times_up_4.innerHTML = '';
  for(let i = 0; i < options15.length; i++) {
    if(options15[i].dataset.option === selValue) {
      times_up_4.appendChild(options15[i]);
    }
  }
  times_down_4.innerHTML = '';
  for(let i = 0; i < options16.length; i++) {
    if(options16[i].dataset.option === selValue) {
      times_down_4.appendChild(options16[i]);
    }
  }
}
givetimeSelection_4(workornot.value);

// --------------------------------
let workornot_4_1 = document.querySelector('#workornot_4_1');
let times_up_4_1 = document.querySelector('#times_up_4_1');
let options17 = times_up_4_1.querySelectorAll('option');
let times_down_4_1 = document.querySelector('#times_down_4_1');
let options18 = times_down_4_1.querySelectorAll('option');

function givetimeSelection_4_1(selValue) {
// debugger
  times_up_4_1.innerHTML = '';
  for(let i = 0; i < options17.length; i++) {
    if(options17[i].dataset.option === selValue) {
      times_up_4_1.appendChild(options17[i]);
    }
  }
  times_down_4_1.innerHTML = '';
  for(let i = 0; i < options18.length; i++) {
    if(options18[i].dataset.option === selValue) {
      times_down_4_1.appendChild(options18[i]);
    }
  }
}
givetimeSelection_4_1(workornot.value);

// --------------------------------
let workornot_5 = document.querySelector('#workornot_5');
let times_up_5 = document.querySelector('#times_up_5');
let options19 = times_up_5.querySelectorAll('option');
let times_down_5 = document.querySelector('#times_down_5');
let options20 = times_down_5.querySelectorAll('option');

function givetimeSelection_5(selValue) {
// debugger
  times_up_5.innerHTML = '';
  for(let i = 0; i < options19.length; i++) {
    if(options19[i].dataset.option === selValue) {
      times_up_5.appendChild(options19[i]);
    }
  }
  times_down_5.innerHTML = '';
  for(let i = 0; i < options20.length; i++) {
    if(options20[i].dataset.option === selValue) {
      times_down_5.appendChild(options20[i]);
    }
  }
}
givetimeSelection_5(workornot.value);

// --------------------------------
let workornot_5_1 = document.querySelector('#workornot_5_1');
let times_up_5_1 = document.querySelector('#times_up_5_1');
let options21 = times_up_5_1.querySelectorAll('option');
let times_down_5_1 = document.querySelector('#times_down_5_1');
let options22 = times_down_5_1.querySelectorAll('option');

function givetimeSelection_5_1(selValue) {
// debugger
  times_up_5_1.innerHTML = '';
  for(let i = 0; i < options21.length; i++) {
    if(options21[i].dataset.option === selValue) {
      times_up_5_1.appendChild(options21[i]);
    }
  }
  times_down_5_1.innerHTML = '';
  for(let i = 0; i < options22.length; i++) {
    if(options22[i].dataset.option === selValue) {
      times_down_5_1.appendChild(options22[i]);
    }
  }
}
givetimeSelection_5_1(workornot.value);

// --------------------------------
let workornot_6 = document.querySelector('#workornot_6');
let times_up_6 = document.querySelector('#times_up_6');
let options23 = times_up_6.querySelectorAll('option');
let times_down_6 = document.querySelector('#times_down_6');
let options24 = times_down_6.querySelectorAll('option');

function givetimeSelection_6(selValue) {
// debugger
  times_up_6.innerHTML = '';
  for(let i = 0; i < options23.length; i++) {
    if(options23[i].dataset.option === selValue) {
      times_up_6.appendChild(options23[i]);
    }
  }
  times_down_6.innerHTML = '';
  for(let i = 0; i < options24.length; i++) {
    if(options24[i].dataset.option === selValue) {
      times_down_6.appendChild(options24[i]);
    }
  }
}
givetimeSelection_6(workornot.value);

// --------------------------------
let workornot_6_1 = document.querySelector('#workornot_6_1');
let times_up_6_1 = document.querySelector('#times_up_6_1');
let options25 = times_up_6_1.querySelectorAll('option');
let times_down_6_1 = document.querySelector('#times_down_6_1');
let options26 = times_down_6_1.querySelectorAll('option');

function givetimeSelection_6_1(selValue) {
// debugger
  times_up_6_1.innerHTML = '';
  for(let i = 0; i < options25.length; i++) {
    if(options25[i].dataset.option === selValue) {
      times_up_6_1.appendChild(options25[i]);
    }
  }
  times_down_6_1.innerHTML = '';
  for(let i = 0; i < options26.length; i++) {
    if(options26[i].dataset.option === selValue) {
      times_down_6_1.appendChild(options26[i]);
    }
  }
}
givetimeSelection_6_1(workornot.value);

// --------------------------------
let workornot_7 = document.querySelector('#workornot_7');
let times_up_7 = document.querySelector('#times_up_7');
let options27 = times_up_7.querySelectorAll('option');
let times_down_7 = document.querySelector('#times_down_7');
let options28 = times_down_7.querySelectorAll('option');

function givetimeSelection_7(selValue) {
// debugger
  times_up_7.innerHTML = '';
  for(let i = 0; i < options27.length; i++) {
    if(options27[i].dataset.option === selValue) {
      times_up_7.appendChild(options27[i]);
    }
  }
  times_down_7.innerHTML = '';
  for(let i = 0; i < options28.length; i++) {
    if(options28[i].dataset.option === selValue) {
      times_down_7.appendChild(options28[i]);
    }
  }
}
givetimeSelection_7(workornot.value);

// --------------------------------
let workornot_7_1 = document.querySelector('#workornot_7_1');
let times_up_7_1 = document.querySelector('#times_up_7_1');
let options29 = times_up_7_1.querySelectorAll('option');
let times_down_7_1 = document.querySelector('#times_down_7_1');
let options30 = times_down_7_1.querySelectorAll('option');

function givetimeSelection_7_1(selValue) {
// debugger
  times_up_7_1.innerHTML = '';
  for(let i = 0; i < options29.length; i++) {
    if(options29[i].dataset.option === selValue) {
      times_up_7_1.appendChild(options29[i]);
    }
  }
  times_down_7_1.innerHTML = '';
  for(let i = 0; i < options30.length; i++) {
    if(options30[i].dataset.option === selValue) {
      times_down_7_1.appendChild(options30[i]);
    }
  }
}
givetimeSelection_7_1(workornot.value);




//------------------------
/*
var input = document.getElementById('image_uploads');
var preview = document.querySelector('.preview_img');

input.style.opacity = 0;
input.addEventListener('change', updateImageDisplay);function updateImageDisplay() {
	while(preview.firstChild) {
		preview.removeChild(preview.firstChild);
	}

	if(input.files.length === 0) {
		var para = document.createElement('p');
		para.textContent = '未選擇任何檔案';
    para.style="line-height: 300px;";
		preview.appendChild(para);
	} 
	else {
		var para = document.createElement('p');
		var image = document.createElement('img');
		image.src = window.URL.createObjectURL(input.files[0]);
		preview.appendChild(image);
		preview.appendChild(para);
	}
}
*/

// -------------------------
$(function() {
  var imagesPreview = function(input, img) {

    if (input.files) {
      var filesAmount = input.files.length;

      for (i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = function(event) {
          $(img).attr('src', event.target.result)
        }

        reader.readAsDataURL(input.files[i]);
      }
    }

  };

  $('#image_uploads1').on('change', function() {
    imagesPreview(this, 'img.image1');
  });
});
//---------------
$(function() {
  var imagesPreview = function(input, img) {

    if (input.files) {
      var filesAmount = input.files.length;

      for (i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = function(event) {
          $(img).attr('src', event.target.result)
        }

        reader.readAsDataURL(input.files[i]);
      }
    }

  };

  $('#image_uploads2').on('change', function() {
    imagesPreview(this, 'img.image2');
  });
});
//---------------
$(function() {
  var imagesPreview = function(input, img) {

    if (input.files) {
      var filesAmount = input.files.length;

      for (i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = function(event) {
          $(img).attr('src', event.target.result)
        }

        reader.readAsDataURL(input.files[i]);
      }
    }

  };

  $('#image_uploads3').on('change', function() {
    imagesPreview(this, 'img.image3');
  });
});



