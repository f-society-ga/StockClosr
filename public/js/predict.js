function setupModals(){
  $("#modal1").modal();
}

setupModals();

$(function(){
      $('#modal1').on('submit', function(e){
          e.preventDefault();
          $.ajax({
              url: 'notifications/subscribe/',
              type: 'POST',
              data: $('#subscribe-email-form').serialize(),
              success: function(data){
                   $('#responsestatus').val(data);
                   $('#subscription-confirm').modal('show');
              }
          });
      });
  });
