package com.example.grocery_store.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.example.grocery_store.dto.ProductDTO;
import com.example.grocery_store.dto.mapper.ProductMapper;
import com.example.grocery_store.exception.RecordNotFoundException;
import com.example.grocery_store.model.Product;

import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpMethod;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.bind.annotation.PathVariable;
import jakarta.validation.constraints.NotNull;

@Validated
@Service
public class ProductService {

    private final ProductMapper productMapper;

    public ProductService(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }

    private String url = "http://localhost:8081/products";
    private RestTemplate restTemplate = new RestTemplate();
    public List<ProductDTO> list() {
    
        ResponseEntity<List<Product>> response = restTemplate.exchange(url, HttpMethod.GET, null, new ParameterizedTypeReference<List<Product>>() {});

        List<Product> products = response.getBody();
        
        return products.stream()
            .map(productMapper :: toDTO)
            .collect(java.util.stream.Collectors.toList());
    }

    public ProductDTO findById(@PathVariable @NotNull String id) {
        try {
            ResponseEntity<Product> response = restTemplate.exchange(url + "/" + id, HttpMethod.GET, null, new ParameterizedTypeReference<Product>() {});
    
            Optional<Product> product = Optional.of(response.getBody());
    
            return product.map(productMapper :: toDTO)
            .orElseThrow(() -> new RecordNotFoundException(id));

        } catch (HttpClientErrorException.NotFound ex) {
            throw new RecordNotFoundException(id);
        }
    }
    
}
