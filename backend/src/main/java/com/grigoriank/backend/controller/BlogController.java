package com.grigoriank.backend.controller;

import com.grigoriank.backend.entity.Blog;
import com.grigoriank.backend.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/blog")
public class BlogController {

    private final BlogService blogService;

    @PostMapping
    public Blog addBlog(@RequestBody Blog blog) {
        return blogService.createBlog(blog);
    }

    @GetMapping
    public List<Blog> getAllBlogs() {
        return blogService.getAllBlogs();
    }

    @GetMapping("/{id}")
    public Blog getBlogById(@PathVariable Long id) {
        return blogService.getBlogById(id);
    }

    @PutMapping("/{id}")
    public Blog editBlog(@PathVariable Long id,
                         @RequestBody Blog blog) {

        return blogService.editBlog(id, blog);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        blogService.deleteById(id);
    }
}
