document.addEventListener('DOMContentLoaded', function() {
    const MUSIC_FILE = 'musics/music.mp3';
    const VOLUME = 0.10;
    const audio = new Audio(MUSIC_FILE);

    audio.volume = VOLUME;
    audio.loop = true;

    function playMusic() {
        audio.play().catch(function(error) {
            console.log('خطا در پخش موزیک:', error);
            document.body.addEventListener('click', function playOnClick() {
                audio.play().catch(function(e) {
                    console.log('باز هم خطا:', e);
                });
                document.body.removeEventListener('click', playOnClick);
            }, { once: true });
        });
    }

    playMusic();
});

function copyCardNumber() {
    const cardNumber = '5859831832848906';
    navigator.clipboard.writeText(cardNumber).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> کپی شد!';
        btn.style.background = 'rgba(114, 185, 114, 0.2)';
        btn.style.borderColor = '#72b972';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 2000);
    }).catch(() => {
        alert('لطفاً شماره را دستی کپی کنید: 6037-7997-5555-1234');
    });
}