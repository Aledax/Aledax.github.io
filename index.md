---
layout: default
title: Alex's Stuff
---

<p class="section-header">Recent Posts</p>

<div>
    {% for post in site.posts limit: 3 %}
        <div class="container">
            <a href="{{ post.url }}" style="text-decoration: none; color: inherit;">
                <div class="post-container-a">
                    <div class="post-image-container">
                        <img src="assets\images\{{ post.date | date: '%Y-%m-%d' }}\{{ post.image }}" class="post-image"/>
                    </div>
                    <div class="post-container-b">
                        <div class="post-container-c">
                            <div class="post-date">{{ post.date | date: "%B %d, %Y" }}</div>
                            <div class="post-title">| {{ post.title }}</div>
                        </div>
                        <div class="post-container-d">
                            {% for category in post.categories %}
                                <div class="post-category">{{ category }}</div>
                            {% endfor %}
                        </div>
                        <div class="post-description">{{ post.description }}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    {% endfor %}
</div>