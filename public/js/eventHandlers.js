var eventHandler = {};
eventHandler.plusClicked = function() {
$(document).on('click', '.icon-plus', function() {
  console.log('happening');
    var self = this, activatedClass = 'btn-activated';
      if( !classie.has( this, activatedClass ) ) {
        classie.add( this, activatedClass );
        setTimeout( function() {
          classie.remove( self, activatedClass ) 
          var newLink = $("#newlink").val();
          console.log(newLink);
          if (newLink != '' && newLink != "(url)") {
            view.addLink(newLink);
          }
          $("#newlink").focus();
        }, 1000 );
      }
});
}

eventHandler.titleUnfocused = function() {
$(document).on('focusout', "#titleCont", function() {
  if ($("#titleCont").hasClass("editable")) {
    if ($("#titleCont").text() == "") {
      $("#titleCont").addClass("fresh");
      $("#titleCont").text("(title)");
    }
  }
});
};

eventHandler.inputFocused = function() {
$(document).on('focus', "input", function() {
    if ($('input').hasClass("fresh")){
        $('input').val('');
        $('input').removeClass("fresh");
    }
});
}

eventHandler.inputUnfocused = function() {
$(document).on('focusout', "input", function() {
  if ($("input").val() == "") {
    $("input").addClass("fresh");
    $("input").val("(url)");
  }
});
}


eventHandler.titleFocused = function() {
$(document).on('focus', "#titleCont", function() {
  console.log("HI");
    if ($('#titleCont').hasClass("fresh")){
        $('#titleCont').empty();
        $('#titleCont').removeClass("fresh");
    }
});
}

eventHandler.enterPressed = function() {
$('input').keypress(function(event){
    if (event.which == '13') {
        $(".icon-plus").click()
    }
});
}

eventHandler.minusClicked = function() {
$(document).on('click', ".icon-minus", function() {
    var self = this, activatedClass = 'btn-activated';
    if( !classie.has( this, activatedClass ) ) {
      classie.add( this, activatedClass );
      setTimeout( function() { 
        classie.remove( self, activatedClass )
        var id = "#" + $(self).parent().attr('id');
        $(id).remove();
        $(id+"br").remove();
      }, 1000 );
    }
});
}

eventHandler.createClicked = function() {
$(document).on('click', '#create', function() {
  var self = this, activatedClass = 'btn-activated';
      if( !classie.has( this, activatedClass ) ) {
        classie.add( this, activatedClass );
        setTimeout( function() {
          classie.remove( self, activatedClass ) 
          view.resetToOriginal();
          eventHandler.attachEvents();
        }, 1000 );
      }
});
}

eventHandler.exploreClicked = function() {
$(document).on('click', '#explore' ,function() {
   var self = this, activatedClass = 'btn-activated';
      if( !classie.has( this, activatedClass ) ) {
        classie.add( this, activatedClass );
        setTimeout( function() {
          classie.remove( self, activatedClass ) 
          comm.explore();
        }, 1000 );
      }
});
}

eventHandler.passClicked = function() {
$(document).on('click', ".icon-checkmark", function() {
  var as = Array.prototype.slice.call( document.querySelectorAll( 'a' ) );
  var asLength = as.length;
  console.log(asLength);
  if (asLength > 0 && $("#titleCont").text() != ("(title)")) {
    var self = this, activatedClass = 'btn-activated';
    if( !classie.has( this, activatedClass ) ) {
      classie.add( this, activatedClass );
      setTimeout( function() { 
        classie.remove(self, activatedClass);
        var overlay = "<div class='overlay'></div>";
        $('body').append(overlay);
        var links = []
        for (var i=0; i<asLength; i++) {
          links.push(as[i].href);
        }
        var title = $('#titleCont').text();
        comm.passItOn(title, links);
        view.showOptions();
      }, 1000 );
    }
  }
  else if ($("#titleCont").text() == "(title)") {
      alert("please enter title");
  }
  else {
      alert("please enter at least one link");
  }
});
}

eventHandler.helpClicked = function() {
$(document).on('click', "#help", function() {
    console.log("HELLO");
    var overlay = "<div id='helpOverlay' class='overlay'></div>";
    $('body').append(overlay);
    view.showHelp();
});
};

eventHandler.helpOverlayClicked = function() {
$(document).on('click', "#helpOverlay", function() {
    view.hideHelp();
});
};

eventHandler.attachEvents = function() {
  eventHandler.helpClicked();
  eventHandler.helpOverlayClicked();
  eventHandler.plusClicked();
  eventHandler.inputFocused();
  eventHandler.inputUnfocused();
  eventHandler.titleFocused();
  eventHandler.titleUnfocused();
  eventHandler.enterPressed();
  eventHandler.minusClicked();
  eventHandler.createClicked();
  eventHandler.exploreClicked();
  eventHandler.passClicked();
}

eventHandler.attachEvents();




