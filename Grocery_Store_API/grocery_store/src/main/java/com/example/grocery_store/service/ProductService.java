package com.example.grocery_store.service;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.example.grocery_store.model.Product;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpMethod;
import org.springframework.core.ParameterizedTypeReference;
import java.util.Optional;
import org.springframework.web.bind.annotation.PathVariable;
import jakarta.validation.constraints.NotNull;

@Validated
@Service
public class ProductService {
    private String url = "http://localhost:8081/products";
    public List<Product> list() {
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<List<Product>> response = restTemplate.exchange(url, HttpMethod.GET, null, new ParameterizedTypeReference<List<Product>>() {});

        List<Product> products = response.getBody();
        
        return products;
    }

    public Optional<Product> findById(@PathVariable @NotNull String id) {
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<Product> response = restTemplate.exchange(url + "/" + id, HttpMethod.GET, null, new ParameterizedTypeReference<Product>() {});

        Product product = response.getBody();

        return Optional.ofNullable(product);
    }
}
