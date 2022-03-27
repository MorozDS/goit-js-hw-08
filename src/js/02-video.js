import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

   player.on('play', function() {
        console.log('played the video!');
   });
    
player.on('timeupdate', throttle(update, 100));


function update(data) {
   localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))

    };

const saveTime = localStorage.getItem('videoplayer-current-time');

function currentTime () {
    if(saveTime !== null) {
        player.setCurrentTime(saveTime);
    }
}
currentTime();



 