var posts=["2024/11/01/拓福轴承商标/","2024/10/31/公司简介/","2024/10/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };