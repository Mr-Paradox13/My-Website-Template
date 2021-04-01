/*
Made By : Mr-Paradox13
License : MIT License
© 2021 - All Right Reserved
*/

// Set Time For HTML

window.setTimeout("waktu()", );
 
	function waktu(){
		var waktu = new Date();
		setTimeout("waktu()",1000);
    let jam = waktu.getHours()
	let menit = waktu.getMinutes()
	let detik = waktu.getSeconds()
	var tahun = waktu.getFullYear()
	var hari = waktu.getDay()
    var bulan = waktu.getMonth()
    var tanggal = waktu.getDate()
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
	if(jam < 10){
	    var ekspresi_waktu = ("Ohayou")
	}else if(jam > 10){
	    var ekspresi_waktu = ("Konnichiwa")
	}else if(jam > 18){
	    var ekspresi_waktu = ("Konbanwa")
	}else if(jam > 21){
	    var ekspresi_waktu = ("Oyasumi")
	}
	document.getElementById('welkom').innerHTML = (ekspresi_waktu+" Senpai !")
}
gelap.addEventListener('click',function(){
    footer.style.color="white"
    body.style.background="black"
    body.style.transition="0.3s"
    terang.style.display="block"
    welkom.style.color="white"
    gelap.style.display="none"
    nanya.style.color="white"
    title_music.style.color="skyblue"
    h3_history2.style.color="yellow"
    h3_history.style.color="yellow"
    h1_entah.style.color="skyblue"
    h1_entah2.style.color="skyblue"
    console.log("Theme Set To Dark : ✓")
    document.getElementsByClassName("list1").style.color="red"
});

terang.addEventListener('click',function(){
    title_music.style.color="black"
    h3_history2.style.color="black"
    h3_history.style.color="black"
    footer.style.color="black"
    body.style.background="white"
    gelap.style.display="block"
    h1_entah.style.color="black"
    h1_entah2.style.color="black"
    body.style.transition="0.3s"
    terang.style.display="none"
    nanya.style.color="black"
    footer.style.color="black"
    console.log("Theme Set To Light : ✓")
});


function title_song(){
    let song = "Linked Horizon - Shinzou wo Sasageyo"
    document.getElementById("title_music").innerHTML = song
}

btn_history.addEventListener('click',function(){
    list_history.style.display="block"
    btn_history.style.display="none"
    btn_history2.style.display="block"
    document.getElementById("h3_history2").innerHTML = "Tampilkan History :"
});

btn_history2.addEventListener('click',function(){
    btn_history.style.display="block"
    list_history.style.display="none"
    btn_history2.style.display="none"
});
zeroTwo.addEventListener('click',function(){
    hero1.style.display="none"
    hero2.style.display="block"
    miku.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    tohka_hero.style.display="none"
    itsuki_hero.style.display="none"
    asia_hero.style.display="none"
    rias_hero.style.display="none"
    kaori_hero.style.display="none"
    chizuru_hero.style.display="none"
    tsukasa_hero.style.display="none"
    toga_hero.style.display="none"
    shiina_hero.style.display="none"
    mitsuha_hero.style.display="none"
    
    console.log("The Hero Page Succes Changed To zeroTwo : ✓")
});

sagiri.addEventListener('click',function(){
    hero1.style.display="block"
    console.log("The Hero Page Succes Changed To Sagiri Izumi : ✓")
    
});

mikus.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="block"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    tohka_hero.style.display="none"
    itsuki_hero.style.display="none"
    rias_hero.style.display="none"
    asia_hero.style.display="none"
    shiina_hero.style.display="none"
    kaori_hero.style.display="none"
    mitsuha_hero.style.display="none"
    toga_hero.style.display="none"
    chizuru_hero.style.display="none"
    tsukasa_hero.style.display="none"
    console.log("The Hero Page Succes Changed To Miku Nakano : ✓")

});

akeno_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    shiina_hero.style.display="none"
    akeno_hero.style.display="block"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    rias_hero.style.display="none"
    kaori_hero.style.display="none"
    itsuki_hero.style.display="none"
    tohka_hero.style.display="none"
    toga_hero.style.display="none"
    mitsuha_hero.style.display="none"
    chizuru_hero.style.display="none"
    tsukasa_hero.style.display="none"
    console.log("The Hero Page Succes Changed To Akeno : ✓")

});
elaina_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    tohka_hero.style.display="none"
    rias_hero.style.display="none"
    asia_hero.style.display="none"
    mitsuha_hero.style.display="none"
    shiina_hero.style.display="none"
    kaori_hero.style.display="none"
    itsuki_hero.style.display="none"
    toga_hero.style.display="none"
    chizuru_hero.style.display="none"
    tsukasa_hero.style.display="none"
    elaina_hero.style.display="block"
    console.log("The Hero Page Succes Changed To Elaina : ✓")
   
});

tohka_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    rias_hero.style.display="none"
    toga_hero.style.display="none"
    itsuki_hero.style.display="none"
    kaori_hero.style.display="none"
    mitsuha_hero.style.display="none"
    tohka_hero.style.display="block"
    tsukasa_hero.style.display="none"
    shiina_hero.style.display="none"
    chizuru_hero.style.display="none"
    console.log("The Hero Page Succes Changed To Tohka : ✓")
    
})

asia_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="block"
    tohka_hero.style.display="none"
    rias_hero.style.display="none"
    itsuki_hero.style.display="none"
    toga_hero.style.display="none"
    chizuru_hero.style.display="none"
    kaori_hero.style.display="none"
    mitsuha_hero.style.display="none"
    shiina_hero.style.display="none"
    tsukasa_hero.style.display="none"
    console.log("The Hero Page Succes Changed To Asia : ✓")
    
})

rias_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    tohka_hero.style.display="none"
    itsuki_hero.style.display="none"
    kaori_hero.style.display="none"
    chizuru_hero.style.display="none"
    toga_hero.style.display="none"
    mitsuha_hero.style.display="none"
    tsukasa_hero.style.display="none"
    shiina_hero.style.display="none"
    rias_hero.style.display="block"
    console.log("The Hero Page Succes Changed To Rias : ✓")
    
})

itsuki_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    tohka_hero.style.display="none"
    toga_hero.style.display="none"
    itsuki_hero.style.display="block"
    rias_hero.style.display="none"
    kaori_hero.style.display="none"
    chizuru_hero.style.display="none"
    tsukasa_hero.style.display="none"
    mitsuha_hero.style.display="none"
    shiina_hero.style.display="none"
    console.log("The Hero Page Succes Changed To Itsuki : ✓")
    
})

kaori_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    toga_hero.style.display="none"
    tohka_hero.style.display="none"
    itsuki_hero.style.display="none"
    rias_hero.style.display="none"
    chizuru_hero.style.display="none"
    tsukasa_hero.style.display="none"
    mitsuha_hero.style.display="none"
    shiina_hero.style.display="none"
    kaori_hero.style.display="block"
    console.log("The Hero Page Succes Changed To Kaori : ✓")
    
})
chizuru_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    toga_hero.style.display="none"
    tohka_hero.style.display="none"
    itsuki_hero.style.display="none"
    rias_hero.style.display="none"
    chizuru_hero.style.display="block"
    kaori_hero.style.display="none"
    shiina_hero.style.display="none"
    tsukasa_hero.style.display="none"
    mitsuha_hero.style.display="none"
    console.log("The Hero Page Succes Changed To Chizuru : ✓")
    
})
toga_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    toga_hero.style.display="block"
    tohka_hero.style.display="none"
    itsuki_hero.style.display="none"
    rias_hero.style.display="none"
    chizuru_hero.style.display="none"
    kaori_hero.style.display="none"
    tsukasa_hero.style.display="none"
    mitsuha_hero.style.display="none"
    shiina_hero.style.display="none"
    console.log("The Hero Page Succes Changed To Toga Himiko : ✓")
    
})
tsukasa_btn.addEventListener('click',function(){
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    toga_hero.style.display="none"
    tohka_hero.style.display="none"
    itsuki_hero.style.display="none"
    rias_hero.style.display="none"
    chizuru_hero.style.display="none"
    kaori_hero.style.display="none"
    shiina_hero.style.display="none"
    mitsuha_hero.style.display="none"
    tsukasa_hero.style.display="block"
    console.log("The Hero Page Succes Changed To Tsukasa Chan : ✓")
   
})
shiina_btn.addEventListener('click',function(){
    shiina_hero.style.display="block"
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    toga_hero.style.display="none"
    tohka_hero.style.display="none"
    itsuki_hero.style.display="none"
    rias_hero.style.display="none"
    chizuru_hero.style.display="none"
    kaori_hero.style.display="none"
    tsukasa_hero.style.display="none"
    mitsuha_hero.style.display="none"
    console.log("The Hero Page Succes Changed To Shiina Chan : ✓")
    
})
mitsuha_btn.addEventListener('click',function(){
    mitsuha_hero.style.display="block"
    hero1.style.display="none"
    miku.style.display="none"
    hero2.style.display="none"
    akeno_hero.style.display="none"
    elaina_hero.style.display="none"
    asia_hero.style.display="none"
    toga_hero.style.display="none"
    tohka_hero.style.display="none"
    itsuki_hero.style.display="none"
    rias_hero.style.display="none"
    chizuru_hero.style.display="none"
    kaori_hero.style.display="none"
    shiina_hero.style.display="none"
    tsukasa_hero.style.display="none"
    console.log("The Hero Page Succes Changed To Mitsuha : ✓")
    
})
logo.addEventListener('click',function(){
    console.log("Alert Berhasil : ✓ ")
    alert("Don't Forget Follow Me On Github : Mr-Paradox13 !! ")
})
// function of footer
function year(){
    var waktu = new Date()
    let tahun = waktu.getFullYear()
    document.getElementById("footer").innerHTML = ("&copy "+tahun+" By : ")
}
year()
/*
End Of File
Thanks To :
 • Allah SWT
 • Sandika Galih
 • Creator Javascript
*/