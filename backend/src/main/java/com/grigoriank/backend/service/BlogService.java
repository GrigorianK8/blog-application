package com.grigoriank.backend.service;

import com.grigoriank.backend.entity.Blog;

import java.util.List;

public interface BlogService {

    Blog createBlog(Blog blog);

    List<Blog> getAllBlogs();

    Blog getBlogById(Long id);

    Blog editBlog(Long id, Blog blog);

    void deleteById(Long id);
}
