package com.example.grocery_store.dto.mapper;

import org.springframework.stereotype.Component;

import com.example.grocery_store.dto.PromotionDTO;
import com.example.grocery_store.model.Promotion;

@Component
public class PromotionMapper {
    public PromotionDTO toDTO(Promotion promotion) {
        return new PromotionDTO(promotion.getId(), promotion.getType(), promotion.getRequiredQty(), promotion.getPrice(), promotion.getFreeQty(), promotion.getAmount()
         );
    }
}