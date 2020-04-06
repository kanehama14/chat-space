$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="chat-main__message-list__box">
          <div class="chat-main__message-list__box__info">
            <div class="chat-main__message-list__box__info__user">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__box__info__time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-list__box__text">
            <p class="chat-main__message-list__box__text__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="chat-main__message-list__box">
          <div class="chat-main__message-list__box__info">
            <div class="chat-main__message-list__box__info__user">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__box__info__time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-list__box__text">
            <p class="chat-main__message-list__box__text__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html).animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
});
