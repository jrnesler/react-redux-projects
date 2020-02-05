package com.authorWebsite.AuthorWebsite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "social_media")
public class SocialMedia {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "imgLink")
    private String imgLink;

    @Column(name = "link")
    private String link;

    public int getId() {
        return this.id;
    }

    public String getImgLink() {
        return this.imgLink;
    }

    public String getLink() {
        return this.link;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public void setLink(String link) {
        this.link = link;
    }

}
