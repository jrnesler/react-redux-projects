package com.authorWebsite.AuthorWebsite.repository;

import com.authorWebsite.AuthorWebsite.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("galleryRepository")
public interface GalleryRepository extends JpaRepository<Gallery, Integer> {
}
