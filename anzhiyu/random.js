var posts=["undefined/这是另一个博文/","undefined/这是3/","undefined/这是第二个/","undefined/这是最近文章/","undefined/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };