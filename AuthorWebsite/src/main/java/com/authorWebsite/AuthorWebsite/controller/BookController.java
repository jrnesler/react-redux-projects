package com.authorWebsite.AuthorWebsite.controller;

import com.authorWebsite.AuthorWebsite.model.Book;
import com.authorWebsite.AuthorWebsite.repository.BookRepository;
import com.authorWebsite.AuthorWebsite.service.BookService;

import java.lang.StackWalker.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @CrossOrigin(origins = "http://localhost:3306")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping(path = "/books")
    public List<Book> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return books;

    }

    @GetMapping(path = "/books/{id}")
    public ResponseEntity<Book> getBook(@PathVariable("id") int id) {

        Optional<Book> bookData = bookService.getBookById(id);
        if (bookData.isPresent()) {
            return new ResponseEntity<>(bookData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping(path = "/books/create")
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        // possibly shoudl go to a service
        Book createdBook = bookService.createBook(book);
        if (createdBook != null) {
            return new ResponseEntity<>(createdBook, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PatchMapping(path = "/books/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") int id, @RequestBody Book book) {
        Book bookData = bookService.updateBook(id, book);
        if (bookData != null) {
            return new ResponseEntity<>(bookData, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}