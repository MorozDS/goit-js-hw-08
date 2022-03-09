import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
   player.on('play', function() {
        console.log('played the video!');
   });
    
player.on('timeupdate', function (data) {
    const jsonDataSeconds = JSON.stringify(data.seconds);
    console.log(jsonDataSeconds)
    localStorage.setItem('videoplayer-current-time', jsonDataSeconds)
    
   })