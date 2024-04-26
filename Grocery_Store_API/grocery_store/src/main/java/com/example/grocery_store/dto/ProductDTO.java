package com.example.grocery_store.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
public record ProductDTO(
    @NotBlank
    @NotNull
    String id,
    @NotBlank
    @NotNull
    String name,
    @NotNull
    int price,
    @Nullable
    List<PromotionDTO> promotions
) {
}
