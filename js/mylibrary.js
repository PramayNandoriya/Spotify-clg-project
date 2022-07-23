const music = new Audio;
const songs = [
    {
        id:'31',
        songName:` Pal Pal Dil Ke <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/31.jpg",
    },
    {
        id:'32',
        songName:` Raataan Lambiyan <br>
        <div class="subtitle">Shershaah</div>`,
        poster: "img/32.jpg"
    },
    {
        id:"33",
        songName: `Kabhii Tumhhe<br><div class="subtitle"> Shershah</div>`,
        poster: "img/33.jpg",
    },
    {
        id:"34",
        songName: `Marjaawaan <br><div class="subtitle">Bell Bottom</div>`,
        poster: "img/34.jpg",
    },
    {
        id:"35",
        songName: `Maiyya Mainu <br><div class="subtitle">Jersey</div>`,
        poster: "img/35.jpg",
    },
    {
        id:"36",
        songName: `pal <br><div class="subtitle">Jalebi</div>`,
        poster: "img/36.jpg",
    },
    {
        id:"37",
        songName: `kabhi toh paas<br> mere aao <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/37.jpg",
    },
    {
        id:"38",
        songName: `Tumse bhi zyada <br><div class="subtitle">Tadap</div>`,
        poster: "img/38.jpg",
    },
    {
        id:"39",
        songName: `Kaun Tujhe <br><div class="subtitle">M.S. Dhoni: The<br> Untold Story</div>`,
        poster: "img/39.jpg",
    },
    {
        id:"40",
        songName: `Phir Bhi Tumko Chahunga <br><div class="subtitle">Half Girlfriend</div>`,
        poster: "img/40.jpg",
    },
    {
        id:"41",
        songName: `Najaa <br><div class="subtitle">Sooryavanshi</div>`,
        poster: "img/41.jpg",
    },
    	
	{
        id:'71',
        songName:` Lut Gaye X <br>Chhor Denge <br><div class="subtitle"> Sond Cloud</div>`,
        poster: "img/71.jpg",
    },
    {
        id:'72',
        songName:` Bom Diggy X<br> Mi gGnte  <br><div class="subtitle">Tejas Shetty</div>`,
        poster: "img/72.jpg"
    },
    {
        id:"73",
        songName: `Let Me Down X <br>Main Dhoondne <br><div class="subtitle"> Sound Cloud</div>`,
        poster: "img/73.jpg",
    },
	{
        id:"74",
        songName: `Stay X Ranjha <br><div class="subtitle"> Justin & BPraak</div>`,
        poster: "img/74.jpg",
    },
    {
        id:"75",
        songName: `Fadded X <br>Main Dhoondne <br><div class="subtitle">Lo Fi Mixed</div>`,
        poster: "img/75.jpg",
    },
    
    {
        id:"76",
        songName: `Infinity x Kabhi Jo <br>Badal Barse <br><div class="subtitle">Kiran Dhormare</div>`,
        poster: "img/76.jpg",
    },
    {
        id:"77",
        songName: `Lovely X Khuda <br><div class="subtitle">KmSALG</div>`,
        poster: "img/77.jpg",
    },
    {
        id:"78",
        songName: `Arcade X Kabhi Jo<br> Badal Barse <br><div class="subtitle">KmSALG</div>`,
        poster: "img/78.jpg",
    },
    {
        id:"79",
        songName: `Bewafa X Aaja <br>We Mahiya  <br><div class="subtitle">Sound Cloud</div>`,
        poster: "img/79.jpg",
    },
    {
        id:"80",
        songName: `Arcade X Mann Mera <br><div class="subtitle">KmSALG</div>`,
        poster: "img/80.jpg",
    },
    {
        id:"81",
        songName: `Love Nwantiti X <br>Bollywood Mashup <br><div class="subtitle"> Sound.com</div>`,
        poster: "img/81.jpg",
    },
	
]


loadSongsHTML = ()=> {
var html = '<div class="pop_song">';
var count = 0;	
for(var i = 0; i < songs.length; i++) {
	count++;
    let tempSong = songs[i];
    html += '<li class="songItem" id = "' + i + '">';
	html += '<div class="img_play">';
	html += '<img src="img/' + tempSong.id +  '.jpg" alt="alan">';
	html += '<i class="bi playListPlay bi-play-circle-fill" id="' + tempSong.id  + '"></i>';
	html += '</div>';
	html += '<h5>On My Way<br><div class="subtitle">Alan Walker</div></h5></li>';
	if((count%11) == 0) {
	    html += '</div>';
		html += '<div class="pop_song">';
	}   	
}
html += '</div>';
document.getElementById("song-container").innerHTML = html;

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}
var index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
		let tempIndex = e.target.id;
		index = document.getElementById(tempIndex).parentElement.parentElement.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${tempIndex}.mp3`;
        poster_master_play.src =`img/${tempIndex}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == tempIndex;
        })
        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        document.getElementById(index).style.background = "rgb(105, 105, 170, .1)";
    })
})
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;
    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})
music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', ()=>{
	console.log(index);
    index = parseInt(index) - 1;
	let firstIndex = document.getElementsByClassName('songItem')[0]
					.getElementsByTagName("i")[0].id;
	let backIndex = document.getElementsByClassName('songItem')[index]
				.getElementsByTagName("i")[0].id;
	if(index < 0) {
		index = 0;
		backIndex = firstIndex;
	}
	console.log(index);
	console.log(backIndex);
    music.src = `audio/${backIndex}.mp3`;
    poster_master_play.src =`img/${backIndex}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == backIndex;
    })
    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()
    document.getElementById(`${backIndex}`).classList.remove('bi-play-fill');
    document.getElementById(`${backIndex}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105, 105, 170, .1)";
    })
next.addEventListener('click', ()=>{
	console.log(index);
	index = parseInt(index) + 1;
	let firstIndex = document.getElementsByClassName('songItem')[0]
				.getElementsByTagName("i")[0].id;
	let nextIndex;
    if (index >=  document.getElementsByClassName('songItem').length) {
        index = 0;
		nextIndex = firstIndex;
    }
	else {
		nextIndex = document.getElementsByClassName('songItem')[index]
				.getElementsByTagName("i")[0].id;
	}
	console.log(index);
	console.log(nextIndex);
    music.src = `audio/${nextIndex}.mp3`;
    poster_master_play.src =`img/${nextIndex}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == nextIndex;
    })
    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()
    document.getElementById(`${nextIndex}`).classList.remove('bi-play-fill');
    document.getElementById(`${nextIndex}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105, 105, 170, .1)";
    })
}
