var posts=["2025/12/24/hello-world/","2025/12/24/这是最近文章/","2025/12/24/这是最近/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };