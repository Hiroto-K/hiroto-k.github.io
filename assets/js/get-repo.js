(function(){$(function(){return $.getJSON("https://api.github.com/users/Hiroto-K/repos",{per_page:"100"},function(t,e,i){return"success"===e?($(".repo-count").html(t.length),t.forEach(function(t){if($(".repo-list").append('<a href="'+t.html_url+'" class="list-group-item">'+t.full_name+"</a>"),t.has_pages)return $(".pages-list").append('<a href="https://hiroto-k.github.io/'+t.name+'/" class="list-group-item">'+t.full_name+"</a>")})):(console.log(e),$(".github-main").hide(),$(".github-error").show())})})}).call(this);
//# sourceMappingURL=.map/get-repo.js.map