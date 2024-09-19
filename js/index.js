function validateNavigation(url = null) {
  console.log("validating", url)
  if (url.hash == '#theology') {
    console.log("teologia!")
    document.querySelectorAll('#description > div:not(#theology)').forEach(e => e.style.display = 'none')
    document.querySelector('#theology').innerHTML += `<div id="back">
      <a href="#" i18n="description.back"></a>
    </div>`
  } else {
    document.querySelectorAll('#description > div #back').forEach(e => e.remove())
    document.querySelectorAll('#description > div:not(#theology)').forEach(e => e.style.display = '')
  }
  if (window.setLanguage) {
    window.setLanguage()
  }
}

navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  validateNavigation(url);

  console.log("Interceptado", event);
});

validateNavigation(new URL(window.location.href));