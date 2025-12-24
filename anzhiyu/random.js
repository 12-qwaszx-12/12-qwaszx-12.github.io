var posts=["wrnlm/这是另一个博文/","wrnlm/这是3/","wrnlm/这是第二个/","wrnlm/这是最近文章/","wrnlm/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };