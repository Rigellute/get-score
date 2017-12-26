(async function getScore() {
  const attr = document.getElementById('sm_dl_wait').getAttribute('data-id');

  if (attr && confirm('Score detected, open now?')) {
    try {
      window.open(attr, '_self');
    } catch (e) {
      console.error('Error downloading script', e);
    }
  }
})();

