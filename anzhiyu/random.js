var posts=["2025/12/24/这是另一个博文/","2025/12/24/这是第二个/","2025/12/24/这是最近文章/","2025/12/24/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };