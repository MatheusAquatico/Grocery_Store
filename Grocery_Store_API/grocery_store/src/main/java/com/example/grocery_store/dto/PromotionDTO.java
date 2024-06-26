package com.example.grocery_store.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
public record PromotionDTO(
    @NotBlank
    @NotNull
    String id,
    @NotBlank String type,
    @Nullable
    @JsonProperty("required_qty") Integer requiredQty,
    @Nullable Integer price,
    @Nullable
    @JsonProperty("free_qty")
    Integer freeQty,
    @Nullable Integer amount
) {
}
