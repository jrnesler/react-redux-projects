package com.authorWebsite.AuthorWebsite.repository;

import com.authorWebsite.AuthorWebsite.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("blogRepository")
public interface BlogRepository extends JpaRepository<Blog, Integer> {
}
