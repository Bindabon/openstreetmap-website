//= require src/jquery.uls.data
//= require src/jquery.uls.data.utils
//= require src/jquery.uls.lcd
//= require src/jquery.uls.languagefilter
//= require src/jquery.uls.core

$(document).ready( function() {
  function updateLanguage(language) {
    $.cookie("_osm_locale", language);

    document.location.reload();
  }

  var languages = $.uls.data.getAutonyms();

  for (var code in languages) {
    if (I18n.translations[code] === undefined) {
      delete languages[code];
    }
  }

  $(".uls-trigger").uls({
    onSelect: updateLanguage,
    languages: languages
  });

  var application_data = $("head").data();

  $(".uls-trigger").text(application_data.locale);
});
