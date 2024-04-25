package com.example.grocery_store.dto.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.example.grocery_store.dto.ProductDTO;
import com.example.grocery_store.dto.PromotionDTO;
import com.example.grocery_store.model.Product;

@Component
public class ProductMapper {
    public ProductDTO toDTO(Product product) {
        List<PromotionDTO> promotionDTOs = null;
        if (product.getPromotions() != null) {
            promotionDTOs = product.getPromotions().stream()
                .map(promotion -> new PromotionMapper().toDTO(promotion))
                .collect(Collectors.toList());
        }
        return new ProductDTO(product.getId(), product.getName(), product.getPrice(), promotionDTOs);
    }
}

