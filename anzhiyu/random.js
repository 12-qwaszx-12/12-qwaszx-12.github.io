var posts=["wrnlm/坎篇/","wrnlm/第一篇/","wrnlm/第二篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };