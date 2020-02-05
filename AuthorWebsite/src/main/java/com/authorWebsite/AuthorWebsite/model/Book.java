package com.authorWebsite.AuthorWebsite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "genre")
    private String genre;

    @Column(name = "coverImg")
    private String coverImg;

    @Column(name = "summary", length = 500)
    private String summary;

    @Column(name = "kindleLink")
    private String kindleLink;

    @Column(name = "etsyLink")
    private String etsyLink;

    public int getId() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getGenre() {
        return this.genre;
    }

    public String getCoverImg() {
        return this.coverImg;
    }

    public String getSummary() {
        return this.summary;
    }

    public String getKindleLink() {
        return this.kindleLink;
    }

    public String getEtsyLink() {
        return this.etsyLink;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setCoverImg(String coverImg) {
        this.coverImg = coverImg;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public void setKindleLink(String kindleLink) {
        this.kindleLink = kindleLink;
    }

    public void setEtsyLink(String etsyLink) {
        this.etsyLink = etsyLink;
    }

}