package com.authorWebsite.AuthorWebsite.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "gallery")
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "JEWELRY_ID", nullable = false)
    private Jewelry jewelry;

    @OneToMany(mappedBy = "gallery", cascade = CascadeType.ALL)
    private List<Resource> resource = new ArrayList<>();

    @Column(name = "description")
    private String descritpion;

    public Jewelry getJewelry() {
        return this.jewelry;
    }

    public void setJewelry(Jewelry jewelry) {
        this.jewelry = jewelry;
    }

    public List<Resource> getResource() {
        return this.resource;
    }

    public void setResource(List<Resource> resource) {
        this.resource = resource;
    }

    public void addResource(Resource resource) {
        this.resource.add(resource);
        resource.setGallery(this);
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescritpion() {
        return this.descritpion;
    }

    public void setDescritpion(String descritpion) {
        this.descritpion = descritpion;
    }
}