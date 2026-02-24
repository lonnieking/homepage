---
title: Writing
layout: layouts/base.html
---

<h1>Writing</h1>
<p>My recent blog posts:</p>
<ul class="posts-list">
{%- for post in collections.posts %}
  <li class="post-item">
    <div class="post-title">
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </div>
    <div class="post-date">{{ post.data.date | dateFilter }}</div>
    <div class="post-excerpt">{{ post.data.excerpt }}</div>
  </li>
{%- endfor %}
</ul>
