package com.authorWebsite.AuthorWebsite.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.authorWebsite.AuthorWebsite.model.Book;
import com.authorWebsite.AuthorWebsite.repository.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        List<Book> books = new ArrayList<>();
        bookRepository.findAll().forEach(books::add);
        return books;
    }

    public Optional<Book> getBookById(int id) {
        return bookRepository.findById(id);
    }

    public Book createBook(Book book) {
        Book newBook = new Book();

        // extract fields
        newBook.setGenre(book.getGenre());
        newBook.setCoverImg(book.getCoverImg());
        newBook.setEtsyLink(book.getEtsyLink());
        newBook.setKindleLink(book.getKindleLink());
        newBook.setSummary(book.getSummary());
        newBook.setTitle(book.getTitle());

        return bookRepository.save(book);
    }

    public Book updateBook(int id, Book book) {
        Optional<Book> bookData = bookRepository.findById(id);
        if (bookData.isPresent()) {
            Book currentBook = bookData.get();
            // check for fields and update as required
            if (book.getCoverImg() != null && !book.getCoverImg().isEmpty()) {
                currentBook.setCoverImg(book.getCoverImg());
            }
            if (book.getEtsyLink() != null && !book.getEtsyLink().isEmpty()) {
                currentBook.setEtsyLink(book.getEtsyLink());
            }
            if (book.getKindleLink() != null && !book.getKindleLink().isEmpty()) {
                currentBook.setKindleLink(book.getKindleLink());
            }
            if (book.getGenre() != null && !book.getGenre().isEmpty()) {
                currentBook.setGenre(book.getGenre());
            }
            if (book.getSummary() != null && !book.getSummary().isEmpty()) {
                currentBook.setSummary(book.getSummary());
            }
            if (book.getTitle() != null && !book.getTitle().isEmpty()) {
                currentBook.setTitle(book.getTitle());
            }
            return bookRepository.save(currentBook);
        } else {
            return null;
        }
    }

}