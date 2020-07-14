$(".dpnl").append(`<div id="mic"style="text-align: center;font-family: el messiri,FontAwesome!important;color: #0D184E; height: 100%;width:100%;"class="break light tab-pane border"></BR><p>شـات صبايا كول</p>  اذاعه شات صبايا للجوال  </p>$(`<iframe src="https://mixlr.com/sabaya_fm/embed/?color=990000" width="100%" height="300px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe></p><img src="sico/z1ect2493d10.gif"style="width:%;margin-top: 0px;"></BR>ادارة الموقع</BR>  ـ</BR><center></div><center></div>`), $('#d0').append(`<label title="بث اذاعه صبايا"href="#"onclick="$('.pnhead').text($(this).attr('title'));hl($(this),'primary');setTimeout(function(){$('#mic').scrollTop(0);},0);$('.dpnl').show();"data-toggle="tab"data-target="#mic"class="ae fa label label-primary fa-tv"> </label>`);
 $(".fa-gear").text("الاعدادات").css("width","");
 $(`
 <div class="uzr fl corner borderg mm" style="border-radius:5px;margin-bottom:-2px;width:99.5%;padding:0px; background-color:white;">
 <img style="width: 36px; height: 38px; margin-left: 1px; margin-top: 1px; background-image: url(pic/1dl1qds5g10.jpg);" class="fl fitimg hand u-pic    ">
 <div class="uzr fl" style="padding:0px;width:80%">
 <div style="padding:0px;width:100%;" class="fl">
 <img class="fl u-ico" alt="" src="https://s6acl.com/sico/z1d545pgp610.jpg">
 <span style="padding: 1px 8px; margin-top: 2px; display: block; max-width: 82%; border-radius: 3px; color: rgb(199, 103, 48);" class="corner nosel u-topic dots fl hand"> ادارة صبايا كول	  </span>
 </div>
 <br>
 <div style="padding: 0px; width: 100%; color: rgb(60, 0, 255);" class=" u-msg   break  fl">
 <div style="padding: 0px;width: 100%;color: rgb(60, 0, 255);text-align: left;display: block;margin-top: -17px;" class=" u-msg   break  fl"> مرحبآ بك <h1 style="display: inline-block;color: red;">`+ getuser(myid).topic+ `</h1> نقدّر تواجدك معنا، ونتمنى لك يوماً سعيداً إن شاء الله </div>
 </div>
 </div></div>
 `).appendTo('div#d2')
 clearInterval(myVar);
 
 }else{console.log(usmsgw)} }, 2000);
 })
