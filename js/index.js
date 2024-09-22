function validateNavigation(url = null) {
  showItem(url.hash.replace('#', '') || 'tech');
  
  if (window.setLanguage) {
    window.setLanguage()
  }
}

function showItem(item = 'tech') {
  let id = `#${item}`;
  document.querySelectorAll('#description > div #back').forEach(e => e.remove())
  if (item != 'general') {
    document.querySelectorAll(`#description > div:not(${id})`).forEach(e => e.style.display = 'none')
    document.querySelectorAll(`#description > ${id}`).forEach(e => e.style.display = '')
    document.querySelector(id).innerHTML += `<div id="back">
      <a href="#general" i18n="description.back"></a>
    </div>`
  } else {
    document.querySelectorAll(`#description > div:not(${id})`).forEach(e => e.style.display = '')
  }
  window.scrollTo(0, 0);
}

navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  validateNavigation(url);
});

validateNavigation(new URL(window.location.href));