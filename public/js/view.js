var view = {};

view.addLink = function(link) {
    comm.modified = true;
    linkToDisplay = link.substring(0, 35);
    if (link.length > 36) 
        linkToDisplay += "..."

    id = makeid();

    var linkEntry = 
      "<div id='"+id+"' class='contentCont cont'>"+
      "<a href='"+link+"' target='_blank'>"+linkToDisplay+"</a>"+
      "<button class='btn btn-7 btn-7g btn-icon-only icon-minus btn-click btn-cont'></button>" +
      "</div><br id='"+id+"br'>";
    $("#bookmarks").append(linkEntry);
    $('#newlink').val('');
    $('input').addClass('fresh');
    $(window).height = this.scrollHeight ;
};

view.showOptions = function() {
    var optionsDiv = "<div id='options' class='cont passCont'><div class='option'>"+
    "create<button id='create' class='btn btn-7 btn-7g btn-icon-only icon-arrow btn-click btn-cont'></button></div>"+
    "<div class='option'>explore<button id='explore' class='btn btn-7 btn-7g btn-icon-only icon-arrow btn-click btn-cont'></button></div>"+
    "</div>"
    $('body').append(optionsDiv);
    positionLightboxImage();
    $("#options").css('visibility', 'visible');
};

view.resetToOriginal = function() {
    var bodyHtml = 
    "<br>"+
    "<div id='titleCont' class='cont fresh editable' contenteditable='true'>(title)</div>"+
    "<br>"+
    "<div id='bookmarks'>"+
    "</div>"+
    "<div class='contentCont cont'>"+
         "<input type = 'text' class='fresh' value='(url)' id='newlink'>"+
         "<button id='add' class='btn btn-7 btn-7g btn-icon-only icon-plus btn-click btn-cont'></button>"+
    "</div>"+
    "<br>"+
    "<div id='footCont' class='cont'>pass it on<br>"+
      "<button class='btn btn-7 btn-7g btn-icon-only icon-checkmark btn-click'></button>"+
    "</div>"+
    "<br>";
    $('body').html(bodyHtml);
}

view.populateLinks = function(title, links) {
    var linksLength = links.length;
    var bodyHtml =
    "<br><div id='titleCont' class='cont'>"+title+"</div><br>"+
    "<div id='bookmarks'>";
    for (var i=0; i<linksLength; i++) {
        // maybe change thse numbers
        linkToDisplay = links[i].substring(0, 41);
        if (links[i].length > 42) 
        linkToDisplay += "..."

        id = makeid();
        
        bodyHtml +=
        "<div class='contentCont cont'>"+
        "<a href='"+links[i]+"' target='_blank'>"+linkToDisplay+"</a>"+
        "</div><br>";
    }
    bodyHtml +=
    "</div>"+
    "<div class='contentCont cont'>"+
    "<input type = 'text' class='fresh' value='(url)' id='newlink'>"+
    "<button id='add' class='btn btn-7 btn-7g btn-icon-only icon-plus btn-click btn-cont'></button>"+
    "</div>"+
    "<br>"+
    "<div id='footCont' class='cont'>pass it on<br>"+
      "<button class='btn btn-7 btn-7g btn-icon-only icon-checkmark btn-click'></button>"+
    "</div>"+
    "<br>";
    $('body').html(bodyHtml);
    eventHandler.attachEvents();
};

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function positionLightboxImage() {
  var top = ($(window).height() - $('#options').height()) / 2;
  var left = ($(window).width() - $('#options').width()) / 2;
  $('#options')
    .css({
      'top': top + $(document).scrollTop(),
      'left': left
    })
}