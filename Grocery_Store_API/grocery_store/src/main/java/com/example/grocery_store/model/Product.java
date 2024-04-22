package com.example.grocery_store.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonInclude;

@Entity
@Data
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Product {
    
    @Id
    private String id;

    @NotBlank
    @NotNull
    private String name;

    @NotNull
    private int price;

    @Nullable
    private List<Promotion> promotions;
}
