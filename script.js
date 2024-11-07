document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    let currentAudioQueue = [];
    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();

    async function loadJSON(url) {
        const response = await fetch(url);
        return await response.json();
    }

    function getRandomAudioFromList(list) {
        const randomIndex = Math.floor(Math.random() * list.length);
        return list[randomIndex].url;
    }

    async function loadAudios() {
        const advertisements = await loadJSON('publicidad.json');
        const music = await loadJSON('musica.json');
        const hours = await loadJSON('hora.json');
        const minutes = await loadJSON('minutos.json');
        return {
            advertisements: advertisements.advertisements,
            music: music.music,
            hours: hours.hours,
            minutes: minutes.minutes
        };
    }

    function playNextAudio() {
        if (currentAudioQueue.length > 0) {
            const nextAudio = currentAudioQueue.shift();
            if (nextAudio) {
                audioPlayer.src = nextAudio;
                audioPlayer.play();
            }
        }
    }

    audioPlayer.addEventListener('ended', playNextAudio);

    async function startPlayback() {
        const audios = await loadAudios();

        function addMusicAndAdsToQueue() {
            const now = new Date();
            const hourAudio = audios.hours.find(hour => hour.time === now.getHours().toString().padStart(2, '0'))?.url;
            const minuteAudio = audios.minutes.find(min => min.time === `MIN${now.getMinutes().toString().padStart(2, '0')}`)?.url;

            if (hourAudio && minuteAudio) {
                currentAudioQueue.push(hourAudio);
                currentAudioQueue.push(minuteAudio);
            }
            currentAudioQueue.push(getRandomAudioFromList(audios.advertisements));

            for (let i = 0; i < 3; i++) {
                currentAudioQueue.push(getRandomAudioFromList(audios.music));
            }
        }

        // Inicializar la cola de reproducción con la hora, los minutos, publicidad y música
        addMusicAndAdsToQueue();
        playNextAudio();

        // Mantener la cola de reproducción
        audioPlayer.addEventListener('ended', () => {
            if (currentAudioQueue.length === 0) {
                addMusicAndAdsToQueue();
            }
            playNextAudio();
        });

        setInterval(async () => {
            const nextHour = new Date().getHours();
            const nextMinute = new Date().getMinutes();

            if (nextHour !== currentHour || nextMinute !== currentMinute) {
                currentHour = nextHour;
                currentMinute = nextMinute;
                const hourAudio = audios.hours.find(hour => hour.time === currentHour.toString().padStart(2, '0'))?.url;
                const minuteAudio = audios.minutes.find(min => min.time === `MIN${currentMinute.toString().padStart(2, '0')}`)?.url;

                if (hourAudio && minuteAudio) {
                    currentAudioQueue.unshift(hourAudio, minuteAudio);
                    playNextAudio();
                }
            }
        }, 60000); // Revisar cada minuto si la hora cambió
    }

    startPlayback();
});
