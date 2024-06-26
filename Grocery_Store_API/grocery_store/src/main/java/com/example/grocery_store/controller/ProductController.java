package com.example.grocery_store.controller;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.grocery_store.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.grocery_store.dto.ProductDTO;
import org.springframework.web.bind.annotation.PathVariable;
import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<ProductDTO> getProducts() {
        return productService.list();
    }

    @GetMapping("/{id}")
    public ProductDTO findById(@PathVariable @NotNull String id) {
        return productService.findById(id);
    }
}
