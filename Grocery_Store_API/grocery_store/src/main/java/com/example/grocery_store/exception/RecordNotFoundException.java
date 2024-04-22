package com.example.grocery_store.exception;

public class RecordNotFoundException extends RuntimeException {

    public RecordNotFoundException(String id) {
        super("Record not found with id: " + id);
    }
}
