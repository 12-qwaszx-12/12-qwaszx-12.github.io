var posts=["wrnlm/这是另一个博文/","wrnlm/这是3/","wrnlm/这个是篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };