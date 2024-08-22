package com.grigoriank.backend.repository;

import com.grigoriank.backend.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Long>{
}
