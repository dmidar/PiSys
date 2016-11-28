// Регулировщик цвета на странице проекта Рериха

$(document).ready(function() {
  $('#colorIndicator').on('input', function() {
    $('#mask').css('opacity', $(this).val());
});
  });
