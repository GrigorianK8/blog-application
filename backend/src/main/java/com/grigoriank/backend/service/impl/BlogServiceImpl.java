package com.grigoriank.backend.service.impl;

import com.grigoriank.backend.entity.Blog;
import com.grigoriank.backend.repository.BlogRepository;
import com.grigoriank.backend.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;

    public Blog createBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    public Blog getBlogById(Long id) {
        return blogRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog is not found with id:" + id));
    }

    public Blog editBlog(Long id, Blog blog) {
        blog.setId(id);
        return blogRepository.save(blog);
    }

    public void deleteById(Long id) {
        blogRepository.deleteById(id);
    }
}
