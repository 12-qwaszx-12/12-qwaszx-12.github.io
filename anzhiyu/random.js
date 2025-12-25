var posts=["wrnlm/这个是篇/","wrnlm/这是3/","wrnlm/这是另一个博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };